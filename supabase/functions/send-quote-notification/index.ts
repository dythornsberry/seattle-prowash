import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    // Send notification to business owner
    console.log('Attempting to send owner notification to seattleprowash@gmail.com');
    const ownerEmailResponse = await resend.emails.send({
      from: "Seattle ProWash <onboarding@resend.dev>",
      to: ["seattleprowash@gmail.com"],
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${zipCode ? `<p><strong>Zip Code:</strong> ${zipCode}</p>` : ''}
        <p><strong>Service:</strong> ${service}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log('Owner email response:', ownerEmailResponse);
    
    if (ownerEmailResponse.error) {
      console.error('Owner email failed:', ownerEmailResponse.error);
      throw new Error(`Owner email failed: ${JSON.stringify(ownerEmailResponse.error)}`);
    }

    // Send confirmation to customer
    console.log('Attempting to send customer confirmation to:', email);
    const customerEmailResponse = await resend.emails.send({
      from: "Seattle ProWash <onboarding@resend.dev>",
      to: [email],
      subject: "Your Quote Request - Seattle ProWash",
      html: `
        <h2>Thank you for your quote request, ${name}!</h2>
        <p>We've received your request for <strong>${service}</strong>. Our team will review the details and get back to you as soon as possible.</p>
        
        <h3>Your Request Details:</h3>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          ${zipCode ? `<li><strong>Zip Code:</strong> ${zipCode}</li>` : ''}
          ${message ? `<li><strong>Your Message:</strong> ${message}</li>` : ''}
        </ul>
        
        <p>In the meantime, feel free to call or text us at <strong>206-752-6690</strong> if you have any questions.</p>
        
        <p>Best regards,<br>
        Seattle ProWash Team<br>
        📞 206-752-6690<br>
        📧 seattleprowash@gmail.com</p>
      `,
    });

    console.log('Customer email response:', customerEmailResponse);
    
    if (customerEmailResponse.error) {
      console.error('Customer email failed:', customerEmailResponse.error);
      // Don't throw error for customer email failure, but log it
    }

    console.log("Emails sent successfully:", { ownerEmailResponse, customerEmailResponse });

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