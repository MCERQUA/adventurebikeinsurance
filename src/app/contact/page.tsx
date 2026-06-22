"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    "bot-field": "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return;
    setSubmitting(true);
    setError("");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at 844-967-5247 or try again.");
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(194,65,12,0.08)] border border-[rgba(194,65,12,0.3)] mb-6">
              <MessageSquare className="w-4 h-4 text-[#c2410c]" />
              <span className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
                Contact
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1c1917] mb-4">
              Talk to an adventure insurance specialist
            </h1>
            <p className="text-lg text-stone-600 max-w-xl mx-auto">
              Questions about coverage, a current policy, or a claim? We&apos;re
              riders too. Reach out and a real specialist will get back to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5 text-[#c2410c]" />, label: "Phone", value: "844-967-5247", href: "tel:+18449675247" },
                { icon: <Mail className="w-5 h-5 text-[#c2410c]" />, label: "Email", value: "josh@contractorschoiceagency.com", href: "mailto:josh@contractorschoiceagency.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex gap-3 p-5 rounded-2xl bg-white border border-[rgba(194,65,12,0.12)] hover:border-[#c2410c] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(194,65,12,0.08)] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">{item.label}</p>
                    <p className="font-bold text-[#1c1917] text-sm break-words">{item.value}</p>
                  </div>
                </a>
              ))}
              <div className="flex gap-3 p-5 rounded-2xl bg-white border border-[rgba(194,65,12,0.12)]">
                <div className="w-10 h-10 rounded-xl bg-[rgba(194,65,12,0.08)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c2410c]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">Office</p>
                  <p className="font-bold text-[#1c1917] text-sm">
                    12220 E Riggs Rd<br />Chandler, AZ 85249
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-5 rounded-2xl bg-white border border-[rgba(194,65,12,0.12)]">
                <div className="w-10 h-10 rounded-xl bg-[rgba(194,65,12,0.08)] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#c2410c]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">Hours</p>
                  <p className="font-bold text-[#1c1917] text-sm">Mon–Fri 8am–5pm AZ (MST)</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="p-10 rounded-3xl text-center bg-white border border-[rgba(194,65,12,0.15)]">
                  <div className="w-16 h-16 rounded-full bg-[#c2410c]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#c2410c]" />
                  </div>
                  <h2 className="text-2xl font-black text-[#1c1917] mb-3">Message sent</h2>
                  <p className="text-stone-600">
                    Thanks for reaching out. A specialist will get back to you
                    shortly. Need an answer now? Call{" "}
                    <a href="tel:+18449675247" className="text-[#c2410c] font-semibold">844-967-5247</a>.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="rounded-3xl p-8 md:p-10 space-y-6 bg-white border border-[rgba(194,65,12,0.15)]"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out:{" "}
                      <input name="bot-field" value={formData["bot-field"]} onChange={handleChange} />
                    </label>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Alex Rivera" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(480) 555-0100" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="alex@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="subject" className={labelClass}>Subject</label>
                      <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Coverage question" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Message *</label>
                    <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="How can we help?" className={`${inputClass} resize-none`} />
                  </div>

                  {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c2410c] to-[#f97316] text-white font-bold rounded-xl shadow-lg shadow-[#c2410c]/30 hover:shadow-[#c2410c]/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Send Message"}
                    {!submitting && <ArrowRight className="w-5 h-5" />}
                  </button>
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
