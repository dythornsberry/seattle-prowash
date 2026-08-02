// Host canonicalization: apex -> www.
// _redirects can't match hostnames (sources must be relative paths), so this
// tiny middleware handles it. Canonicals, sitemap, and schema all use www.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'seattleprowash.com') {
    url.hostname = 'www.seattleprowash.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
