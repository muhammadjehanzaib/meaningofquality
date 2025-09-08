"use client";

import Container from "@/components/ui/Container";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative py-16 sm:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <Container className="max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us through any of the
            channels below — we’d love to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {/* Head Office */}
          <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Head Office</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  123 Industrial Park, City, Country
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Email</h2>
                <a
                  href="mailto:sales@example.com"
                  className="mt-1 block text-sm text-primary hover:underline"
                >
                  sales@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Phone</h2>
                <a
                  href="tel:+00123456789"
                  className="mt-1 block text-sm text-primary hover:underline"
                >
                  +966 590019826
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">WhatsApp</h2>
                <a
                  href="https://wa.me/966590019826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-green-600 hover:underline"
                >
                  +966 590019826
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="mailto:sales@example.com"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md hover:bg-primary/90 transition"
          >
            Send Us a Message
          </a>
        </div>
      </Container>
    </div>
  );
}
