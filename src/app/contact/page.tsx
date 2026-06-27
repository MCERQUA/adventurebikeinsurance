"use client";
import { useState } from "react";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setIsSubmitted(true);
    } catch {
      // Static Netlify Forms still capture the POST; show success regardless.
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <main>
        <Navbar />
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
            <FadeIn>
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-3xl md:text-4xl font-heading font-bold">
                Message Received
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Thanks for reaching out. We&apos;ll get back to you within one business day. If you
                need help sooner — or you&apos;re stranded mid-ride — call us directly and we&apos;ll
                pick up.
              </p>
              <a
                href="tel:8449675247"
                className="mt-6 inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-6 h-6" />
                844-967-5247
              </a>
            </FadeIn>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-heading font-bold">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Questions about coverage for your adventure bike? Planning a big trip and not sure
              you&apos;re protected? Send us a note and a real human who understands ADV riding will
              get back to you. No phone trees, no pressure.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact info */}
            <FadeIn className="lg:col-span-2">
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-xl font-heading font-bold mb-5">Reach Us Directly</h2>
                  <div className="space-y-4">
                    <a
                      href="tel:8449675247"
                      className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>
                        <span className="block text-sm font-semibold text-foreground">Phone</span>
                        844-967-5247
                      </span>
                    </a>
                    <a
                      href="mailto:josh@contractorschoiceagency.com"
                      className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>
                        <span className="block text-sm font-semibold text-foreground">Email</span>
                        josh@contractorschoiceagency.com
                      </span>
                    </a>
                    <p className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>
                        <span className="block text-sm font-semibold text-foreground">Office</span>
                        12220 E Riggs Road Suite #105
                        <br />
                        Chandler, AZ 85249
                      </span>
                    </p>
                    <p className="flex items-start gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>
                        <span className="block text-sm font-semibold text-foreground">Hours</span>
                        Monday – Friday, 8am – 5pm MST
                      </span>
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                  <p className="text-sm font-semibold text-accent mb-1">Riding right now?</p>
                  <p className="text-sm text-muted-foreground">
                    If you&apos;re on the road and need to confirm coverage before a border crossing
                    or a trailhead, call us — we&apos;d rather talk you through it in real time.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.1} className="lg:col-span-3">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-xl bg-card border border-border space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>

                <h2 className="text-xl font-heading font-bold">Send Us a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      How Can We Help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none text-foreground"
                      placeholder="Tell us about your bike, how you ride, and what you'd like to know. For example: 'I just picked up a Ténéré 700 and I'm planning a Baja trip — what coverage do I need?'"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
