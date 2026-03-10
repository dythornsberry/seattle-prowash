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

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const NOTIFICATION_EMAIL = "dythornsberry@gmail.com";

// --- Input validation & sanitization helpers ---

function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

interface ValidationResult {
  valid: boolean;
  error?: string;
  data?: ValidatedFormData;
}

interface ValidatedFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  details: string;
  services: string;
  source: string;
  business_name: string;
}

function validatePayload(payload: Record<string, unknown>): ValidationResult {
  // Honeypot check — if 'company' field has content, it's a bot
  if (payload.company && String(payload.company).length > 0) {
    return { valid: false, error: "Invalid submission" };
  }

  const name = String(payload.name || "").trim();
  const phone = String(payload.phone || "").trim();
  const email = String(payload.email || "").trim();
  const address = String(payload.address || "").trim();
  const details = String(payload.details || "").trim();
  const services = String(payload.services || "").trim();
  const source = String(payload.source || "Website Quote Form").trim();
  const business_name = String(payload.business_name || "Seattle ProWash").trim();

  // Required field checks
  if (!name || name.length === 0) return { valid: false, error: "Name is required" };
  if (name.length > 100) return { valid: false, error: "Name too long (max 100 chars)" };

  if (!phone || phone.length === 0) return { valid: false, error: "Phone is required" };
  if (phone.length > 30) return { valid: false, error: "Phone too long (max 30 chars)" };
  // Validate phone has 10 digits
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return { valid: false, error: "Invalid phone number" };
  }

  if (email.length > 255) return { valid: false, error: "Email too long (max 255 chars)" };
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: "Invalid email format" };
  }

  if (!address || address.length === 0) return { valid: false, error: "Address is required" };
  if (address.length > 300) return { valid: false, error: "Address too long (max 300 chars)" };

  if (details.length > 2000) return { valid: false, error: "Details too long (max 2000 chars)" };
  if (services.length > 500) return { valid: false, error: "Services too long (max 500 chars)" };
  if (source.length > 100) return { valid: false, error: "Source too long" };
  if (business_name.length > 100) return { valid: false, error: "Business name too long" };

  return {
    valid: true,
    data: { name, phone, email, address, details, services, source, business_name },
  };
}

// --- Core functions ---

async function forwardToZapier(payload: Record<string, unknown>) {
  const url = Deno.env.get("ZAPIER_WEBHOOK_URL");
  if (!url) {
    console.log("No ZAPIER_WEBHOOK_URL configured, skipping Zapier");
    return { ok: true, status: 200, skipped: true };
  }

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

async function sendEmailNotification(data: ValidatedFormData, timestamp: string) {
  try {
    // Sanitize all user input before inserting into HTML
    const safeName = sanitizeHtml(data.name);
    const safePhone = sanitizeHtml(data.phone);
    const safeAddress = sanitizeHtml(data.address);
    const safeEmail = sanitizeHtml(data.email);
    const safeServices = sanitizeHtml(data.services);
    const safeDetails = sanitizeHtml(data.details);
    const safeSource = sanitizeHtml(data.source);
    const phoneDigits = data.phone.replace(/\D/g, "");

    const emailResponse = await resend.emails.send({
      from: "Seattle ProWash <onboarding@resend.dev>",
      to: [NOTIFICATION_EMAIL],
      subject: `🏠 New Quote Request from ${safeName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1a365d; margin-bottom: 20px;">📋 New Quote Request</h1>
          
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h2 style="color: #2d3748; margin: 0 0 15px 0; font-size: 18px;">Customer Details</h2>
            
            <p style="margin: 8px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phoneDigits}">${safePhone}</a></p>
            <p style="margin: 8px 0;"><strong>Address:</strong> ${safeAddress}</p>
            ${safeEmail ? `<p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>` : ''}
            ${safeServices ? `<p style="margin: 8px 0;"><strong>Services:</strong> ${safeServices}</p>` : ''}
            ${safeDetails ? `<p style="margin: 8px 0;"><strong>Details:</strong> ${safeDetails}</p>` : ''}
          </div>
          
          <div style="background: #fffbeb; border: 1px solid #fbbf24; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
            <p style="margin: 0; color: #92400e;">
              <strong>⏰ Quick tip:</strong> Respond within 1 hour for best conversion!
            </p>
          </div>
          
          <p style="margin: 8px 0; color: #718096;"><strong>Submitted:</strong> ${sanitizeHtml(timestamp)}</p>
          <p style="margin: 8px 0; color: #718096;"><strong>Source:</strong> ${safeSource}</p>
          
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
    return { sent: false, error: (error as Error).message };
  }
}

// --- Main handler ---

Deno.serve(async (req: Request) => {
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
    let payload: Record<string, unknown>;

    if (contentType.includes("application/json")) {
      payload = await req.json();
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      payload = Object.fromEntries(formData.entries()) as Record<string, unknown>;
    } else {
      const text = await req.text();
      try {
        payload = JSON.parse(text);
      } catch {
        return new Response(JSON.stringify({ ok: false, error: "Invalid request format" }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }
    }

    // --- Server-side validation ---
    const validation = validatePayload(payload);
    if (!validation.valid || !validation.data) {
      console.log("Validation failed:", validation.error);
      return new Response(JSON.stringify({ ok: false, error: validation.error }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const data = validation.data;
    const timestamp = new Date().toISOString();

    console.log("Received valid quote submission:", data.name, data.phone);

    // Build enriched body for Zapier
    const body = {
      ...data,
      services_requested: data.services,
      timestamp,
      user_agent: req.headers.get("user-agent") || undefined,
      referer: req.headers.get("referer") || undefined,
    };

    // Skip health check test submissions for email notifications
    const isHealthCheck = data.name === "HEALTH_CHECK_TEST";

    // Save lead to database FIRST (backup before Zapier)
    let leadId: string | null = null;
    try {
      const { data: leadData, error: leadError } = await supabaseAdmin
        .from("leads")
        .insert({
          name: data.name,
          email: data.email || null,
          phone: data.phone || null,
          address: data.address || null,
          services: data.services || null,
          source: data.source,
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
      isHealthCheck ? Promise.resolve({ sent: false, skipped: true }) : sendEmailNotification(data, timestamp),
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
            email_sent: (emailResult as { sent: boolean }).sent === true,
          })
          .eq("id", leadId);
      } catch (updateErr) {
        console.error("Failed to update lead status:", updateErr);
      }
    }

    return new Response(JSON.stringify({ 
      ok: true, 
      status: zapierResult.status,
      emailSent: (emailResult as { sent: boolean }).sent,
      leadSaved: !!leadId,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("submit-quote error", error);
    return new Response(JSON.stringify({ ok: false, error: "Unable to submit form. Please try again." }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
