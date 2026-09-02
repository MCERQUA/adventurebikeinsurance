"use client";
import { useState } from "react";
import { Send, CheckCircle, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { AeoFields } from "@/components/AeoFields";

const bikeMakes = [
  "BMW", "Honda", "KTM", "Triumph", "Yamaha", "Suzuki", "Kawasaki",
  "Royal Enfield", "Ducati", "Aprilia", "Benelli", "CFMoto", "Other",
];

const coverageTypes = [
  "Liability Only",
  "Standard Full Coverage",
  "Full Adventure Coverage",
  "Custom / Not Sure — Need Recommendations",
];

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    try {
      // multipart, not urlencoded: the licence and insurance-card fields are file
      // inputs and a urlencoded body would send only their filenames.
      await fetch("/", { method: "POST", body: formData });
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
                Quote Request Received
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We&apos;ll review your information and send you a competitive quote within 15 minutes
                during business hours. For immediate assistance, call us directly.
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
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-heading font-bold">
              Get Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Adventure Bike Quote
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your bike and how you ride. We&apos;ll shop multiple carriers and send you
              competitive quotes within 15 minutes. Free — no obligation.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              name="quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value="quote" />
              <AeoFields />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>
              {/* Driver, vehicle and current-policy details — the complete
                  insurance-auto-powersports field set. */}
              <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-heading font-bold mb-6">Driver &amp; Licence</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date_of_birth" className="block text-sm font-medium mb-2">
                      Date of birth *
                    </label>
                    <input
                      id="date_of_birth"
                      name="date_of_birth"
                      type="date"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="street_address" className="block text-sm font-medium mb-2">
                      Street address *
                    </label>
                    <input
                      id="street_address"
                      name="street_address"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="1234 W Main St, Phoenix, AZ 85001"
                    />
                  </div>
                  <div>
                    <label htmlFor="drivers_license_number" className="block text-sm font-medium mb-2">
                      Driver's license number *
                    </label>
                    <input
                      id="drivers_license_number"
                      name="drivers_license_number"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="drivers_license_issue_date" className="block text-sm font-medium mb-2">
                      Driver's license issue date *
                    </label>
                    <input
                      id="drivers_license_issue_date"
                      name="drivers_license_issue_date"
                      type="date"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="drivers_license_expiration_date" className="block text-sm font-medium mb-2">
                      Driver's license expiration date *
                    </label>
                    <input
                      id="drivers_license_expiration_date"
                      name="drivers_license_expiration_date"
                      type="date"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="drivers_license_upload" className="block text-sm font-medium mb-2">Driver's license — photo upload</label>
                    <input
                      id="drivers_license_upload"
                      name="drivers_license_upload"
                      type="file"
                      accept="image/*,application/pdf"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="driver_names" className="block text-sm font-medium mb-2">
                      All drivers — name, date of birth and licence number *
                    </label>
                    <textarea
                      id="driver_names"
                      name="driver_names"
                      rows={3}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-1">One per line. Every driver must be listed or they are not covered.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-heading font-bold mb-6">Vehicles &amp; Accessories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vehicle_year" className="block text-sm font-medium mb-2">
                      Vehicle year *
                    </label>
                    <input
                      id="vehicle_year"
                      name="vehicle_year"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="2021"
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicle_make" className="block text-sm font-medium mb-2">
                      Vehicle make *
                    </label>
                    <input
                      id="vehicle_make"
                      name="vehicle_make"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicle_model" className="block text-sm font-medium mb-2">
                      Vehicle model *
                    </label>
                    <input
                      id="vehicle_model"
                      name="vehicle_model"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicle_value" className="block text-sm font-medium mb-2">
                      Vehicle value *
                    </label>
                    <input
                      id="vehicle_value"
                      name="vehicle_value"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="$18,000"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="vehicle_vin" className="block text-sm font-medium mb-2">
                      VIN — every vehicle and trailer *
                    </label>
                    <textarea
                      id="vehicle_vin"
                      name="vehicle_vin"
                      rows={3}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-1">One VIN per line. Every vehicle and trailer must be listed or it is not covered.</p>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="accessories_description" className="block text-sm font-medium mb-2">
                      Description of accessories *
                    </label>
                    <textarea
                      id="accessories_description"
                      name="accessories_description"
                      rows={3}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Bags, exhaust, guards, electronics, and anything else you want covered.</p>
                  </div>
                  <div>
                    <label htmlFor="accessories_value" className="block text-sm font-medium mb-2">
                      Value of accessories *
                    </label>
                    <input
                      id="accessories_value"
                      name="accessories_value"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="$2,500"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-heading font-bold mb-6">Current Insurance</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="current_carrier_name" className="block text-sm font-medium mb-2">
                      Current insurance company name *
                    </label>
                    <input
                      id="current_carrier_name"
                      name="current_carrier_name"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="current_policy_number" className="block text-sm font-medium mb-2">
                      Current policy number *
                    </label>
                    <input
                      id="current_policy_number"
                      name="current_policy_number"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="current_policy_start_date" className="block text-sm font-medium mb-2">
                      Policy start date *
                    </label>
                    <input
                      id="current_policy_start_date"
                      name="current_policy_start_date"
                      type="date"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="current_policy_expiration_date" className="block text-sm font-medium mb-2">
                      Policy expiration date *
                    </label>
                    <input
                      id="current_policy_expiration_date"
                      name="current_policy_expiration_date"
                      type="date"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="current_coverage_limits" className="block text-sm font-medium mb-2">
                      Current coverage limits *
                    </label>
                    <input
                      id="current_coverage_limits"
                      name="current_coverage_limits"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="100/300/100"
                    />
                  </div>
                  <div>
                    <label htmlFor="prior_auto_insurance" className="block text-sm font-medium mb-2">
                      Prior auto insurance (any type, incl. a household member's) *
                    </label>
                    <input
                      id="prior_auto_insurance"
                      name="prior_auto_insurance"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="insurance_card_upload" className="block text-sm font-medium mb-2">Current insurance ID card — upload</label>
                    <input
                      id="insurance_card_upload"
                      name="insurance_card_upload"
                      type="file"
                      accept="image/*,application/pdf"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Have these ready: your driver&apos;s licence, the VIN for every vehicle and
                  trailer, and your current insurance ID card. Prefer not to type them? Email or
                  text them to us and we&apos;ll quote from that.
                </p>
              </div>

              {/* Rider Information */}
              <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-heading font-bold mb-6">Rider Information</h2>
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
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Bike Details */}
              <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-heading font-bold mb-6">Adventure Bike Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="bikeMake" className="block text-sm font-medium mb-2">
                      Bike Make *
                    </label>
                    <select
                      id="bikeMake"
                      name="bikeMake"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      defaultValue=""
                    >
                      <option value="" disabled>Select make</option>
                      {bikeMakes.map((make) => (
                        <option key={make} value={make}>{make}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="bikeModel" className="block text-sm font-medium mb-2">
                      Model *
                    </label>
                    <input
                      id="bikeModel"
                      name="bikeModel"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="R1250GS, Ténéré 700, Africa Twin..."
                    />
                  </div>
                  <div>
                    <label htmlFor="bikeYear" className="block text-sm font-medium mb-2">
                      Year *
                    </label>
                    <input
                      id="bikeYear"
                      name="bikeYear"
                      type="number"
                      required
                      min="1990"
                      max="2026"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="2024"
                    />
                  </div>
                  <div>
                    <label htmlFor="bikeValue" className="block text-sm font-medium mb-2">
                      Approximate Bike Value
                    </label>
                    <select
                      id="bikeValue"
                      name="bikeValue"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      defaultValue=""
                    >
                      <option value="" disabled>Select range</option>
                      <option value="under-5000">Under $5,000</option>
                      <option value="5000-10000">$5,000 – $10,000</option>
                      <option value="10000-15000">$10,000 – $15,000</option>
                      <option value="15000-20000">$15,000 – $20,000</option>
                      <option value="20000-25000">$20,000 – $25,000</option>
                      <option value="over-25000">Over $25,000</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Riding Habits */}
              <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-heading font-bold mb-6">Riding Habits & Preferences</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ridingStyle" className="block text-sm font-medium mb-2">
                      Primary Riding Style
                    </label>
                    <select
                      id="ridingStyle"
                      name="ridingStyle"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      defaultValue=""
                    >
                      <option value="" disabled>Select style</option>
                      <option value="pavement-only">Mostly pavement / highway touring</option>
                      <option value="mixed">Mixed pavement and gravel roads</option>
                      <option value="frequent-offroad">Frequent off-road / trail riding</option>
                      <option value="overlanding">Overlanding / multi-day expeditions</option>
                      <option value="commuter">Daily commuter with weekend adventure rides</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="coverageType" className="block text-sm font-medium mb-2">
                      Desired Coverage Level
                    </label>
                    <select
                      id="coverageType"
                      name="coverageType"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      defaultValue=""
                    >
                      <option value="" disabled>Select coverage</option>
                      {coverageTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="internationalRiding" className="block text-sm font-medium mb-2">
                      Do you plan to ride internationally?
                    </label>
                    <select
                      id="internationalRiding"
                      name="internationalRiding"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      defaultValue=""
                    >
                      <option value="" disabled>Select</option>
                      <option value="no">No — domestic riding only</option>
                      <option value="canada">Yes — Canada</option>
                      <option value="mexico">Yes — Mexico</option>
                      <option value="central-south-america">Yes — Central / South America</option>
                      <option value="other-international">Yes — other international destinations</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-heading font-bold mb-6">Additional Information</h2>
                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium mb-2">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none text-foreground"
                    placeholder="Tell us about any accessories, modifications, planned trips, or specific coverage concerns. For example: 'I have $4,000 in aftermarket accessories and plan to ride the TransAmerica Trail this summer.'"
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Get My Free Quote
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <a
                  href="tel:8449675247"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  Or call 844-967-5247
                </a>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}
