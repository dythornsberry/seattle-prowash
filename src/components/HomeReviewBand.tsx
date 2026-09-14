import { Star, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const HomeReviewBand = () => (
  <section id="reviews" className="border-b bg-white" aria-label="Customer reviews and credentials">
    <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-7 md:grid-cols-[240px_1fr] md:gap-12 md:py-9">
      <Link to="/reviews" className="text-foreground hover:no-underline">
        <div className="flex items-center gap-2"><strong className="text-xl">5.0</strong><span className="flex gap-0.5" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-4 w-4 fill-current text-[#bc4b00]" aria-hidden="true" />)}</span></div>
        <p className="mt-1 text-sm text-muted-foreground">233 Google reviews</p>
        <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4" aria-hidden="true" />Licensed, bonded &amp; insured</p>
      </Link>
      <figure className="border-t pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
        <blockquote className="text-base leading-relaxed text-foreground">&ldquo;They gave us a good quote. Delivered great service and the best part was they left the yard clean! This is our third time!&rdquo;</blockquote>
        <figcaption className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground"><span>Nancy, roof &amp; gutter cleaning</span><Link to="/reviews" className="inline-flex items-center gap-1 font-semibold text-brand-navy">More reviews <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link></figcaption>
      </figure>
    </div>
  </section>
);

export default HomeReviewBand;
