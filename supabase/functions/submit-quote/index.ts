// submit-quote edge function: proxies quote submissions to Zapier with retries and CORS
// Uses secret ZAPIER_WEBHOOK_URL configured in Lovable Cloud

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

async function forwardToZapier(payload: Record<string, unknown>) {
  const url = Deno.env.get("ZAPIER_WEBHOOK_URL");
  if (!url) {
    throw new Error("Missing ZAPIER_WEBHOOK_URL secret");
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
      if (res.ok) return { ok: true, status: res.status };
      lastErr = new Error(`Zapier responded ${res.status}`);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr ?? new Error("Unknown error forwarding to Zapier");
}

Deno.serve(async (req: Request) => {
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
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      payload = Object.fromEntries(formData.entries());
    } else {
      // Try to parse as FormData for no-cors form submissions
      try {
        const formData = await req.formData();
        payload = Object.fromEntries(formData.entries());
      } catch {
        payload = { raw: await req.text() };
      }
    }

    // Basic normalization and enrichment
    const body = {
      name: String(payload.name || ""),
      phone: String(payload.phone || ""),
      email: String(payload.email || ""),
      address: String(payload.address || ""),
      details: String(payload.details || ""),
      timestamp: new Date().toISOString(),
      source: String(payload.source || "Website Quote Form"),
      business_name: String(payload.business_name || "Seattle ProWash"),
      user_agent: req.headers.get("user-agent") || undefined,
      referer: req.headers.get("referer") || undefined,
    };

    const result = await forwardToZapier(body);

    return new Response(JSON.stringify({ ok: true, status: result.status }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("submit-quote error", error);
    return new Response(JSON.stringify({ ok: false, error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
