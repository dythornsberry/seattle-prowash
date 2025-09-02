import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  zipCode?: string;
  service: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: QuoteRequest = await req.json();
    const makeWebhookUrl = 'https://hook.us2.make.com/4ki9qoftawnzq1cs10ks2cckepq7tqp1';

    const backgroundTask = async () => {
      try {
        console.log('Sending quote data to Make webhook...');
        const makeResponse = await fetch(makeWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            zipCode: payload.zipCode,
            service: payload.service,
            message: payload.message,
            timestamp: new Date().toISOString(),
            source: 'Website Quote Form',
            business_email: 'dythornsberry@gmail.com', // For business notifications
            customer_email: payload.email // For customer confirmations
          })
        });

        if (!makeResponse.ok) {
          console.error('Make webhook failed:', makeResponse.status);
          return;
        }

        console.log('Successfully sent to Make webhook');
      } catch (err) {
        console.error('Background task error:', err);
      }
    };

    // Fire-and-forget to maximize speed-to-lead
    try {
      // Prefer the Edge Runtime helper if available
      // @ts-ignore
      const runtime = (globalThis as any).EdgeRuntime;
      if (runtime && typeof runtime.waitUntil === 'function') {
        // @ts-ignore
        runtime.waitUntil(backgroundTask());
      } else {
        // Fallback – still non-blocking
        setTimeout(() => {
          backgroundTask();
        }, 0);
      }
    } catch (_) {
      setTimeout(() => {
        backgroundTask();
      }, 0);
    }

    return new Response(JSON.stringify({ success: true, queued: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);