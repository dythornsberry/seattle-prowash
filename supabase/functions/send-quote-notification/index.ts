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

    // Send to Make webhook (handles emails + CRM integration)
    const makeWebhookUrl = 'https://hook.us2.make.com/nptqd8sgste19t4047sqrbp62ccfmg6b';

    console.log('Sending quote data to Make webhook...');
    const makeResponse = await fetch(makeWebhookUrl, {
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

    if (!makeResponse.ok) {
      throw new Error(`Make webhook failed: ${makeResponse.status}`);
    }

    console.log('Successfully sent to Make webhook');

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