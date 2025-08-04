import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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
    const { name, phone, email, zipCode, service, message }: QuoteRequest = await req.json();

    // Send to Zapier webhook (handles emails + CRM integration)
    const zapierWebhookUrl = Deno.env.get('ZAPIER_WEBHOOK_URL');
    if (!zapierWebhookUrl) {
      throw new Error('ZAPIER_WEBHOOK_URL not configured');
    }

    console.log('Sending quote data to Zapier webhook...');
    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        zipCode,
        service,
        message,
        timestamp: new Date().toISOString(),
        source: 'Website Quote Form',
        business_email: 'dythornsberry@gmail.com', // For business notifications
        customer_email: email // For customer confirmations
      })
    });

    if (!zapierResponse.ok) {
      throw new Error(`Zapier webhook failed: ${zapierResponse.status}`);
    }

    console.log('Successfully sent to Zapier webhook');

    return new Response(JSON.stringify({ success: true }), {
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