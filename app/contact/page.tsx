"use client";

import { useState, useRef } from "react";
import { sendContactEmail } from "@/app/actions/sendEmail";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setFormStatus({ type: null, message: "" });

    const formData = new FormData(event.currentTarget);
    const result = await sendContactEmail(formData);

    setIsPending(false);

    if (result?.error) {
      setFormStatus({ type: "error", message: result.error });
    } else if (result?.success) {
      setFormStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We will get back to you shortly.",
      });
      // Clear out form inputs on success
      formRef.current?.reset();
    }
  }

  return (
    <div className="bg-surface-canvas min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header Header Row */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-foundation-crimson uppercase bg-foundation-crimson/5 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foundation-maroon mt-6 mb-4">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-base text-text-body/90 leading-relaxed font-normal">
            Have questions about our programs, structural sponsorships, or want to partner with us? Reach out and let’s build multi-generational change together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Side Info Panel Column (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white border border-surface-card rounded-2xl shadow-xs">
              <h3 className="font-serif text-xl font-bold text-foundation-maroon mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foundation-crimson mb-1">Our Location Areas</h4>
                  <p className="text-sm sm:text-base text-text-body font-normal leading-relaxed">
                    Bungoma, Kisumu, and Nairobi Counties <br /> Kenya, East Africa
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-canvas">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foundation-crimson mb-1">Email Inquiries</h4>
                  <a 
                    href="mailto:maayimarymbuyafoundation@gmail.com"
                    className="text-sm sm:text-base text-foundation-maroon font-semibold hover:text-foundation-crimson transition-colors"
                  >
                    maayimarymbuyafoundation@gmail.com
                  </a>
                </div>

                <div className="pt-4 border-t border-surface-canvas">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foundation-crimson mb-1">Response Time</h4>
                  <p className="text-sm text-text-body font-normal">
                    Our team typically responds to all official email submissions within 24–48 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Interactive Contact Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-surface-card rounded-2xl p-8 sm:p-10 shadow-xs">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-bold uppercase text-foundation-maroon mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full text-sm bg-surface-canvas border border-surface-card rounded-lg px-4 py-3 text-text-body placeholder:text-text-body/40 focus:outline-none focus:border-foundation-tan transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-bold uppercase text-foundation-maroon mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full text-sm bg-surface-canvas border border-surface-card rounded-lg px-4 py-3 text-text-body placeholder:text-text-body/40 focus:outline-none focus:border-foundation-tan transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-xs font-bold uppercase text-foundation-maroon mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we cooperate?"
                  className="w-full text-sm bg-surface-canvas border border-surface-card rounded-lg px-4 py-3 text-text-body placeholder:text-text-body/40 focus:outline-none focus:border-foundation-tan transition-colors"
                  />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold uppercase text-foundation-maroon mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message details here..."
                  className="w-full text-sm bg-surface-canvas border border-surface-card rounded-lg px-4 py-3 text-text-body placeholder:text-text-body/40 focus:outline-none focus:border-foundation-tan resize-none transition-colors"
                />
              </div>

              {/* Form Status Banner Output */}
              {formStatus.type && (
                <div
                  className={`p-4 text-sm font-medium rounded-xl border ${
                    formStatus.type === "success"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : "bg-rose-50 border-rose-200 text-rose-800"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-foundation-crimson text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-xs hover:bg-foundation-maroon disabled:bg-foundation-crimson/50 disabled:cursor-not-allowed transition-all"
              >
                {isPending ? "Sending Message..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}