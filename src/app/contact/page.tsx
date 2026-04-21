"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  company: z.string().min(2, "Company required"),
  message: z.string().min(10, "Message too short"),
});
type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
      throw new Error("Submission failed"); // Re-throw so isSubmitSuccessful stays false
    }
  };

  return (
    <div className="bg-[var(--navy)] pt-20">
      <section className="py-16 bg-[var(--navy-2)] text-center">
        <p className="eyebrow">Contact Us</p>
        <h1 className="h-section mb-4">Book a Free Demo</h1>
        <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
          Ready to transform your business with AI? Talk to our team and see Veridianaitech AI Solutions Inc. in action.
        </p>
      </section>

      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Info Panel */}
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-[var(--text)] font-bold text-xl mb-6">Contact Information</h3>
              {[
                { icon: MapPin, label: "Headquarters", val: "Kalyani Nagar, Pune, Maharashtra, India" },
                { icon: Phone, label: "Phone", val: "+91 9168693209 / +91 8830599371" },
                { icon: Mail, label: "Email", val: "support@veridianaitech.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[var(--teal)]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[var(--teal)]" />
                  </div>
                  <div>
                    <p className="text-[var(--text)] font-medium text-sm mb-1">{item.label}</p>
                    <p className="text-[var(--text-muted)] text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="glass-card">
              <h3 className="text-[var(--teal)] font-bold text-sm uppercase tracking-widest mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  "30-minute live demo of AI agents in your industry",
                  "Custom automation roadmap for your business",
                  "ROI estimate based on your current workflows",
                  "No commitment — just real insights",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-[var(--text-muted)] text-sm">
                    <Check className="w-4 h-4 text-[var(--teal)] mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Panel */}
          <div className="glass-card">
            {isSubmitSuccessful ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-5">
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Check className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-black text-[var(--text)]">Details Submitted Successfully!</h3>
                <p className="text-[var(--text-muted)] max-w-xs">
                  Thank you for reaching out. We will review your details and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h3 className="text-[var(--text)] font-bold text-xl mb-6">Send Us a Message</h3>

                {[
                  { name: "name" as const, label: "Full Name", type: "text", placeholder: "John Smith" },
                  { name: "email" as const, label: "Work Email", type: "email", placeholder: "john@company.com" },
                  { name: "company" as const, label: "Company Name", type: "text", placeholder: "Acme Corp" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">{field.label}</label>
                    <input
                      {...register(field.name)}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-[var(--navy)] border border-[rgba(100,150,255,0.1)] rounded-xl px-4 py-3 text-[var(--text)] text-sm focus:outline-none focus:border-[var(--teal)]/50 placeholder-gray-600 transition-colors"
                    />
                    {errors[field.name] && (
                      <p className="text-red-400 text-xs mt-1">{errors[field.name]?.message}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">How can we help?</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your business and what you'd like to automate..."
                    className="w-full bg-[var(--navy)] border border-[rgba(100,150,255,0.1)] rounded-xl px-4 py-3 text-[var(--text)] text-sm focus:outline-none focus:border-[var(--teal)]/50 placeholder-gray-600 resize-none transition-colors"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    "Book a Free Demo"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
