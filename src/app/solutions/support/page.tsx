"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function SupportAutomation() {
  return (
    <div className="bg-[var(--navy)] pt-20">
      <section className="py-24 bg-[var(--navy-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <p className="eyebrow">Support Automation</p>
          <h1 className="h-section mb-6">24/7 Intelligent<br /><span className="text-[var(--teal)]">Customer Support</span></h1>
          <p className="text-[var(--text-muted)] text-lg mb-10 leading-relaxed">
            Deploy AI-powered voice and chat agents that provide instant, accurate customer support around the clock, reducing costs while improving satisfaction.
          </p>
          <Link href="/contact" className="btn-primary text-base">Get Started <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow">Support Features</p>
            <h2 className="h-section mb-4">Everything you need to deliver<br />exceptional customer support at scale</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "AI Voice & Chat Agents", desc: "Natural language voice and chat assistants that handle customer inquiries with human-like understanding." },
              { title: "24/7 Availability", desc: "Never miss a customer inquiry with round-the-clock automated support coverage." },
              { title: "Smart Routing", desc: "Intelligently escalate complex issues to human agents when needed." },
              { title: "Multi-Channel Support", desc: "Consistent support across phone, chat, email, and social media." },
            ].map((f, i) => (
              <div key={i} className="glass-card group">
                <div className="w-8 h-0.5 bg-[var(--teal)] mb-4 group-hover:w-12 transition-all" />
                <h3 className="text-[var(--text)] font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--navy-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="h-section mb-6">Revolutionize Customer Support</h2>
              <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                Our AI support automation enables businesses to provide instant, high-quality customer service at any scale, dramatically reducing response times and costs.
              </p>
              <ul className="space-y-3">
                {[
                  "Answer 95% of customer inquiries instantly",
                  "Reduce support costs by 70%",
                  "Handle unlimited concurrent conversations",
                  "Improve customer satisfaction scores by 50%",
                  "Free human agents for complex issues",
                  "Maintain consistent support quality 24/7",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] text-sm">
                    <Check className="w-4 h-4 text-[var(--teal)] mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              {[
                { val: "95%", label: "Inquiries Resolved Automatically" },
                { val: "70%", label: "Cost Reduction" },
                { val: "<30s", label: "Average Response Time" },
              ].map((s, i) => (
                <div key={i} className="glass-card text-center py-8">
                  <div className="text-5xl font-black text-[var(--teal)] mb-2">{s.val}</div>
                  <div className="text-[var(--text-muted)] font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--navy)] border-t border-[rgba(100,150,255,0.05)] text-center">
        <h2 className="text-3xl font-black text-[var(--text)] mb-4">Ready to Transform Customer Support?</h2>
        <p className="text-[var(--text-muted)] mb-8">Join businesses providing world-class support with AI automation.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">Schedule a Demo</Link>
          <Link href="/about" className="btn-outline">View Case Studies</Link>
        </div>
      </section>
    </div>
  );
}
