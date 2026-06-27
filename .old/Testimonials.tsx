"use client";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  rating?: number;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Rider Reviews
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Trusted by Adventure{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Riders Nationwide
            </span>
          </h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="p-8 rounded-xl bg-card border border-border h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating ?? 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
