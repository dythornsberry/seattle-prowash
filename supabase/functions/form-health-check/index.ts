// Form health check edge function
// Tests the submit-quote function and sends email alert if it fails
// Designed to be called on a schedule (e.g., every 2 days via cron)

import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
};

interface HealthCheckResult {
  success: boolean;
  message: string;
  timestamp: string;
  responseTime?: number;
}

async function testFormSubmission(): Promise<HealthCheckResult> {
  const startTime = Date.now();
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
  
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      success: false,
      message: "Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables",
      timestamp: new Date().toISOString(),
    };
  }

  const testPayload = {
    name: "Dylan Thornsberry [WEEKLY TEST]",
    email: "dythornsberry@gmail.com",
    address: "6516 NE 192nd Place, Kenmore, WA 98028",
    phone: "(206) 752-6690",
    services: "Weekly Form Test - Please Ignore",
    timestamp: new Date().toISOString(),
    source: "Weekly Health Check",
    business_name: "Seattle ProWash",
  };

  try {
    const response = await fetch(`${supabaseUrl}/functions/v1/submit-quote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify(testPayload),
    });

    const responseTime = Date.now() - startTime;
    const data = await response.json();

    if (response.ok && data.ok) {
      return {
        success: true,
        message: `Form submission successful (${response.status})`,
        timestamp: new Date().toISOString(),
        responseTime,
      };
    } else {
      return {
        success: false,
        message: `Form submission failed: ${data.error || response.statusText}`,
        timestamp: new Date().toISOString(),
        responseTime,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Network error: ${error.message}`,
      timestamp: new Date().toISOString(),
      responseTime: Date.now() - startTime,
    };
  }
}

async function sendAlertEmail(result: HealthCheckResult, alertEmail: string) {
  try {
    const emailResponse = await resend.emails.send({
      from: "Seattle ProWash Alert <onboarding@resend.dev>",
      to: [alertEmail],
      subject: "⚠️ URGENT: Seattle ProWash Form is BROKEN",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #dc2626; margin-bottom: 20px;">🚨 Form Health Check FAILED</h1>
          
          <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Error:</strong> ${result.message}</p>
            <p style="margin: 0 0 10px 0;"><strong>Time:</strong> ${result.timestamp}</p>
            ${result.responseTime ? `<p style="margin: 0;"><strong>Response Time:</strong> ${result.responseTime}ms</p>` : ''}
          </div>
          
          <h2 style="color: #1e40af; margin-bottom: 15px;">What to do:</h2>
          <ol style="line-height: 1.8;">
            <li>Check if the Zapier webhook URL is still valid</li>
            <li>Verify the edge function is deployed correctly</li>
            <li>Test the form manually on the website</li>
            <li>Check the Supabase edge function logs for errors</li>
          </ol>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This is an automated health check from Seattle ProWash website monitoring.
          </p>
        </div>
      `,
    });

    console.log("Alert email sent:", emailResponse);
    return { sent: true, response: emailResponse };
  } catch (error) {
    console.error("Failed to send alert email:", error);
    return { sent: false, error: error.message };
  }
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  console.log("Starting form health check...");

  try {
    // Hardcoded alert email — never accept from request body to prevent abuse
    const alertEmail = "dythornsberry@gmail.com";

    // Run the health check
    const result = await testFormSubmission();
    console.log("Health check result:", result);

    // If failed, send alert email
    let emailResult = null;
    if (!result.success) {
      console.log("Form check FAILED - sending alert email to:", alertEmail);
      emailResult = await sendAlertEmail(result, alertEmail);
    } else {
      console.log("Form check PASSED - no alert needed");
    }

    return new Response(
      JSON.stringify({
        healthCheck: result,
        alertSent: emailResult?.sent || false,
        alertEmail: !result.success ? alertEmail : null,
      }),
      {
        status: result.success ? 200 : 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Health check error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
