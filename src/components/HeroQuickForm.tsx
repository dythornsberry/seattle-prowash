import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/navigation";

const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
};

const isValidPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 10) return false;
  if (/^(\d)\1{9}$/.test(digits)) return false;
  if (digits.slice(3, 6) === "555") return false;
  if (digits[0] === "0" || digits[0] === "1") return false;
  return true;
};

const HeroQuickForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit phone");
      return;
    }

    // Track analytics
    if (window.gtag) {
      window.gtag("event", "hero_quickform_submit", {
        location: "hero_inline_form",
      });
    }

    // Hand off to the full form
    sessionStorage.setItem(
      "prowash_lead_step1",
      JSON.stringify({ name: name.trim(), phone })
    );
    window.dispatchEvent(new CustomEvent("prowash:prefill-step1"));

    // Scroll to the full form
    scrollToSection("contact", { preferForm: true });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-5 animate-fade-in"
    >
      <p className="text-brand-navy text-sm md:text-base font-semibold text-center mb-3">
        Get your free quote
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          inputMode="text"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-brand-navy/15 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 text-brand-navy placeholder:text-brand-navy/40 text-base"
          aria-label="Your name"
        />
        <input
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
          className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-brand-navy/15 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 text-brand-navy placeholder:text-brand-navy/40 text-base"
          aria-label="Phone number"
          maxLength={14}
        />
        <Button
          type="submit"
          variant="cta-orange"
          className="sm:w-auto whitespace-nowrap font-semibold text-base px-5 py-3"
        >
          Next <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      {error && (
        <p className="text-red-600 text-sm mt-2 text-center" role="alert">
          {error}
        </p>
      )}
      <p className="text-xs text-brand-navy/60 text-center mt-2">
        No spam. We'll be in touch shortly.
      </p>
    </form>
  );
};

export default HeroQuickForm;
