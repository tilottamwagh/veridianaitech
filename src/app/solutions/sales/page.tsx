"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function SalesAgent() {
  return (
    <div className="bg-black pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label">AI Sales Agent</p>
            <h1 className="section-title mb-6">
              Selesa — AI Voice Agent<br />
              <span className="text-[#c5a059]">for Sales & Lead Qualification</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Automate lead qualification, sales calls, and follow-ups with intelligent AI that converts prospects into customers 24/7.
            </p>
            <Link href="/contact" className="gold-btn text-base">Get Started <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Salesa Features</p>
            <h2 className="section-title mb-4">Everything you need to automate<br />and optimize your sales process</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "AI Sales Calls", desc: "Automated outbound and inbound sales calls that qualify leads and book meetings 24/7." },
              { title: "Lead Qualification", desc: "Intelligent conversation flows that identify high-intent prospects automatically." },
              { title: "CRM Integration", desc: "Seamless sync with Salesforce, HubSpot, and other CRM platforms." },
              { title: "Conversion Optimization", desc: "AI-powered insights to improve sales performance and close rates." },
            ].map((f, i) => (
              <div key={i} className="card-dark group">
                <div className="w-8 h-0.5 bg-[#c5a059] mb-4 group-hover:w-12 transition-all" />
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transform section */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title mb-6">Transform Your Sales Process</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our AI sales automation helps businesses close more deals faster by automating repetitive tasks and focusing your team on high-value activities.
              </p>
              <ul className="space-y-3">
                {[
                  "Increase lead response time from hours to seconds",
                  "Qualify leads 24/7 without human intervention",
                  "Scale sales operations without adding headcount",
                  "Capture leads during after-hours and weekends",
                  "Reduce cost per qualified lead by 60%",
                  "Improve conversion rates with personalized AI conversations",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-[#c5a059] mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { val: "3x", label: "More Qualified Leads" },
                { val: "60%", label: "Lower Cost Per Lead" },
                { val: "24/7", label: "Lead Response Time" },
              ].map((s, i) => (
                <div key={i} className="card-dark text-center py-10">
                  <div className="text-5xl font-black text-[#c5a059] mb-2">{s.val}</div>
                  <div className="text-gray-400 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black border-t border-white/5 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Ready to Scale Your Sales?</h2>
        <p className="text-gray-400 mb-8">Join businesses automating their sales process with AI and closing more deals.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="gold-btn">Schedule a Demo</Link>
          <Link href="/about" className="ghost-btn">View Case Studies</Link>
        </div>
      </section>
    </div>
  );
}
