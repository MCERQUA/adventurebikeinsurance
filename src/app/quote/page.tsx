"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { CheckCircle, Compass, ArrowRight, Phone } from "lucide-react";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const RIDING_TYPES = [
  "Mostly street / pavement",
  "Dual-sport (street + trail)",
  "Off-road / dirt only",
  "Adventure touring (long-distance)",
  "Cross-border / international touring",
  "Not sure yet",
];

const ACCESSORY_RANGES = [
  "Mostly stock",
  "Under $2,000 in accessories",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $20,000",
  "$20,000+",
];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    bike: "",
    ridingType: "",
    accessories: "",
    message: "",
    "bot-field": "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return; // honeypot tripped
    setSubmitting(true);
    setError("");
    try {
      // Submit through Netlify's native form pipeline (NOT a direct webhook call).
      // Netlify captures the submission and routes it server-side per netlify.toml.
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "quote", ...formData }),
      });
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please call us at 844-967-5247 or try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[rgba(194,65,12,0.2)] bg-white text-[#1c1917] placeholder-stone-400 focus:outline-none focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/20 transition-all text-sm";
  const labelClass = "block text-sm font-semibold text-[#1c1917] mb-1.5";

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <section className="relative pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(194,65,12,0.08)] border border-[rgba(194,65,12,0.3)] mb-6">
              <Compass className="w-4 h-4 text-[#c2410c]" />
              <span className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
                Free Quote
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1c1917] mb-4">
              Get your <span className="gradient-text">free coverage quote</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-xl mx-auto">
              Tell us about your bike and how you ride. We&apos;ll come back
              within one business day with coverage built for the road and the
              trail — no obligation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Trust sidebar */}
            <div className="space-y-4">
              {[
                { title: "On + off-road", desc: "Coverage that doesn't disappear when the pavement ends." },
                { title: "Farkles to $30K", desc: "High-limit, non-depreciating accessory and gear coverage." },
                { title: "All 50 states", desc: "Independent agency licensed nationwide." },
                { title: "No obligation", desc: "Get a quote, compare, decide. No pressure." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 rounded-2xl bg-white border border-[rgba(194,65,12,0.12)]"
                >
                  <CheckCircle className="w-5 h-5 text-[#c2410c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1c1917] text-sm">{item.title}</p>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-2xl bg-[rgba(194,65,12,0.05)] border border-[rgba(194,65,12,0.15)] text-center">
                <p className="text-xs font-bold text-[#c2410c] uppercase tracking-wider mb-2">
                  Prefer to call?
                </p>
                <a
                  href="tel:+18449675247"
                  className="flex items-center justify-center gap-2 text-[#1c1917] font-black text-lg hover:text-[#c2410c] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  844-967-5247
                </a>
                <p className="text-xs text-stone-500 mt-1">Mon–Fri 8am–5pm AZ (MST)</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="p-10 rounded-3xl text-center bg-white border border-[rgba(194,65,12,0.15)]">
                  <div className="w-16 h-16 rounded-full bg-[#c2410c]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#c2410c]" />
                  </div>
                  <h2 className="text-2xl font-black text-[#1c1917] mb-3">
                    Quote request received
                  </h2>
                  <p className="text-stone-600 mb-2">
                    Thanks! We&apos;ll review your bike and riding details and
                    reach out within one business day with a personalized quote.
                  </p>
                  <p className="text-sm text-stone-500">
                    Questions now? Call{" "}
                    <a href="tel:+18449675247" className="text-[#c2410c] font-semibold">
                      844-967-5247
                    </a>
                  </p>
                </div>
              ) : (
                <form
                  name="quote"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="rounded-3xl p-8 md:p-10 space-y-6 bg-white border border-[rgba(194,65,12,0.15)]"
                >
                  <input type="hidden" name="form-name" value="quote" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out:{" "}
                      <input
                        name="bot-field"
                        value={formData["bot-field"]}
                        onChange={handleChange}
                      />
                    </label>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Alex Rivera" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="(480) 555-0100" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="alex@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="state" className={labelClass}>State *</label>
                      <select id="state" name="state" required value={formData.state} onChange={handleChange} className={inputClass}>
                        <option value="">Select a state…</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bike" className={labelClass}>Bike(s) — year, make & model *</label>
                    <input id="bike" name="bike" type="text" required value={formData.bike} onChange={handleChange} placeholder="2023 KTM 890 Adventure R, 2019 KLR 650" className={inputClass} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ridingType" className={labelClass}>How do you ride? *</label>
                      <select id="ridingType" name="ridingType" required value={formData.ridingType} onChange={handleChange} className={inputClass}>
                        <option value="">Select…</option>
                        {RIDING_TYPES.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="accessories" className={labelClass}>Accessories & gear value</label>
                      <select id="accessories" name="accessories" value={formData.accessories} onChange={handleChange} className={inputClass}>
                        <option value="">Select…</option>
                        {ACCESSORY_RANGES.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Anything else?{" "}
                      <span className="text-stone-400 font-normal">(optional)</span>
                    </label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Current insurer, riding experience, where you ride, planned trips, or any specific coverage questions…" className={`${inputClass} resize-none`} />
                  </div>

                  {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c2410c] to-[#f97316] text-white font-bold rounded-xl shadow-lg shadow-[#c2410c]/30 hover:shadow-[#c2410c]/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Request My Free Quote"}
                    {!submitting && <ArrowRight className="w-5 h-5" />}
                  </button>

                  <p className="text-xs text-center text-stone-400">
                    No spam, no obligation. We&apos;ll contact you to discuss your
                    specific coverage needs. See our{" "}
                    <Link href="/privacy" className="underline hover:text-[#c2410c]">
                      privacy policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
