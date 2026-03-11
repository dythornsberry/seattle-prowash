// submit-quote edge function: proxies quote submissions to Zapier + sends email notification
// Also saves every lead to the database as a backup
// Uses secrets: ZAPIER_WEBHOOK_URL, RESEND_API_KEY

import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

// Allow requests from the live site and Lovable preview
const ALLOWED_ORIGINS = [
  "https://www.seattleprowash.com",
  "https://seattleprowash.com",
  "https://seattle-prowash.lovable.app",
];

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

const NOTIFICATION_EMAIL = "dythornsberry@gmail.com";

async function forwardToZapier(payload: Record<string, unknown>) {
  const url = Deno.env.get("ZAPIER_WEBHOOK_URL");
  if (!url) {
    console.log("No ZAPIER_WEBHOOK_URL configured, skipping Zapier");
    return { ok: true, status: 200, skipped: true };
  }

  // 3 retries with backoff: 0ms, 500ms, 1500ms
  const attempts = [0, 500, 1500];
  let lastErr: unknown = null;
  for (let i = 0; i < attempts.length; i++) {
    try {
      if (attempts[i] > 0) await new Promise((r) => setTimeout(r, attempts[i]));
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      // Zapier returns 200/2xx on success
      if (res.ok) {
        console.log("Successfully forwarded to Zapier:", res.status);
        return { ok: true, status: res.status };
      }
      lastErr = new Error(`Zapier responded ${res.status}`);
    } catch (e) {
      lastErr = e;
    }
  }
  console.error("Failed to forward to Zapier after retries:", lastErr);
  throw lastErr ?? new Error("Unknown error forwarding to Zapier");
}

async function sendEmailNotification(body: Record<string, string>) {
  try {
    const emailResponse = await resend.emails.send({
      from: "Seattle ProWash <onboarding@resend.dev>",
      to: [NOTIFICATION_EMAIL],
      subject: `🏠 New Quote Request from ${body.name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1a365d; margin-bottom: 20px;">📋 New Quote Request</h1>
          
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h2 style="color: #2d3748; margin: 0 0 15px 0; font-size: 18px;">Customer Details</h2>
            
            <p style="margin: 8px 0;"><strong>Name:</strong> ${body.name}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${body.phone.replace(/\D/g, '')}">${body.phone}</a></p>
            <p style="margin: 8px 0;"><strong>Address:</strong> ${body.address}</p>
            ${body.email ? `<p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>` : ''}
            ${body.services_requested ? `<p style="margin: 8px 0;"><strong>Services:</strong> ${body.services_requested}</p>` : ''}
            ${body.details ? `<p style="margin: 8px 0;"><strong>Details:</strong> ${body.details}</p>` : ''}
          </div>
          
          <div style="background: #fffbeb; border: 1px solid #fbbf24; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
            <p style="margin: 0; color: #92400e;">
              <strong>⏰ Quick tip:</strong> Respond within 1 hour for best conversion!
            </p>
          </div>
          
          <p style="margin: 8px 0; color: #718096;"><strong>Submitted:</strong> ${body.timestamp}</p>
          <p style="margin: 8px 0; color: #718096;"><strong>Source:</strong> ${body.source}</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          
          <p style="color: #a0aec0; font-size: 12px; text-align: center;">
            Seattle ProWash Lead Notification System
          </p>
        </div>
      `,
    });

    console.log("Email notification sent successfully:", emailResponse);
    return { sent: true, response: emailResponse };
  } catch (error) {
    console.error("Failed to send email notification:", error);
    return { sent: false, error: "Email delivery failed" };
  }
}

Deno.serve(async (req: Request) => {
  const corsHeaders = getCorsHeaders(req);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const contentType = req.headers.get("content-type") || "";
    let payload: any;

    if (contentType.includes("application/json")) {
      payload = await req.json();
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      payload = Object.fromEntries(formData.entries());
    } else {
      // For other content types, try to parse as text/JSON
      const text = await req.text();
      try {
        payload = JSON.parse(text);
      } catch {
        payload = { raw: text };
      }
    }

    console.log("Received quote submission:", payload.name, payload.phone);

    // --- Rate limiting: max 3 submissions per phone number per 15 minutes ---
    const submittedPhone = String(payload.phone || "").replace(/\D/g, "");
    if (submittedPhone.length >= 7) {
      const fifteenMinAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();
      const { count, error: rlError } = await supabaseAdmin
        .from("leads")
        .select("id", { count: "exact", head: true })
        .gte("created_at", fifteenMinAgo)
        .eq("phone", String(payload.phone || ""));

      if (!rlError && (count ?? 0) >= 3) {
        console.warn("Rate limit exceeded for phone:", submittedPhone.slice(-4));
        return new Response(JSON.stringify({ ok: false, error: "Too many requests. Please try again later or call 206-752-6690." }), {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }
    }

    // Basic normalization and enrichment
    const body = {
      name: String(payload.name || ""),
      phone: String(payload.phone || ""),
      email: String(payload.email || ""),
      address: String(payload.address || ""),
      details: String(payload.details || ""),
      services_requested: String(payload.services || ""),
      timestamp: new Date().toISOString(),
      source: String(payload.source || "Website Quote Form"),
      business_name: String(payload.business_name || "Seattle ProWash"),
      user_agent: req.headers.get("user-agent") || undefined,
      referer: req.headers.get("referer") || undefined,
    };

    // Skip health check test submissions for email notifications
    const isHealthCheck = body.name === "HEALTH_CHECK_TEST";

    // Save lead to database FIRST (backup before Zapier)
    let leadId: string | null = null;
    try {
      const { data: leadData, error: leadError } = await supabaseAdmin
        .from("leads")
        .insert({
          name: body.name,
          email: body.email || null,
          phone: body.phone || null,
          address: body.address || null,
          services: body.services_requested || null,
          source: body.source,
        })
        .select("id")
        .single();

      if (leadError) {
        console.error("Failed to save lead to database:", leadError);
      } else {
        leadId = leadData.id;
        console.log("Lead saved to database:", leadId);
      }
    } catch (dbError) {
      console.error("Database error saving lead:", dbError);
    }

    // Run Zapier and Email in parallel for speed
    const [zapierResult, emailResult] = await Promise.all([
      forwardToZapier(body),
      isHealthCheck ? Promise.resolve({ sent: false, skipped: true }) : sendEmailNotification(body),
    ]);

    console.log("Zapier result:", zapierResult);
    console.log("Email result:", emailResult);

    // Update lead record with delivery status
    if (leadId) {
      try {
        await supabaseAdmin
          .from("leads")
          .update({
            zapier_sent: zapierResult.ok === true,
            email_sent: emailResult.sent === true,
          })
          .eq("id", leadId);
      } catch (updateErr) {
        console.error("Failed to update lead status:", updateErr);
      }
    }

    return new Response(JSON.stringify({ 
      ok: true, 
      status: zapierResult.status,
      emailSent: emailResult.sent,
      leadSaved: !!leadId,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("submit-quote error", error);
    return new Response(JSON.stringify({ ok: false, error: "An unexpected error occurred. Please try again or call 206-752-6690." }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
