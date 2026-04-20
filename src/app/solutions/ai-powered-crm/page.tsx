"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function AiPoweredCrm() {
  return (
    <div className="bg-black pt-20">
      <section className="py-24 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-label">AI Solutions</p>
          <h1 className="section-title mb-6">AI Powered CRM —<br /><span className="text-[#c5a059]">Your Pipeline on Autopilot</span></h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            A CRM that works for you — not the other way around. Our AI-powered customer relationship platform captures every interaction, scores every lead, and automates every follow-up so your team can focus entirely on closing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="gold-btn text-base">Book a Free Demo <ArrowRight className="w-4 h-4" /></Link>
            <Link href="#features" className="ghost-btn text-base">See Features</Link>
          </div>
        </div>
      </section>

      {/* Top Stats */}
      <section className="py-10 bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "70%", label: "Less CRM Admin Time" },
            { val: "3x", label: "Faster Lead Response" },
            { val: "45%", label: "Higher Close Rate" },
            { val: "24/7", label: "Automated Follow-Ups" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-[#c5a059]">{s.val}</div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Everything a CRM Should Do —<br />Done Automatically</h2>
            <p className="text-gray-400">Stop managing your CRM. Let AI manage it for you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Unified Customer Profiles", desc: "Every interaction — calls, emails, chats — automatically logged and linked to a single customer record. No manual data entry." },
              { title: "AI Conversation Summaries", desc: "Every call and chat is transcribed and summarised by AI. Your team walks into every follow-up fully briefed." },
              { title: "Smart Follow-Up Reminders", desc: "AI detects when a deal is going cold and triggers automatic follow-up sequences — email, SMS, or call — before you lose the opportunity." },
              { title: "Lead Scoring & Prioritisation", desc: "AI ranks every lead by likelihood to convert based on behaviour, engagement, and conversation signals. Focus on what closes." },
              { title: "Automated Pipeline Updates", desc: "Pipeline stages update automatically as AI agents complete tasks — no more reps manually dragging cards across a board." },
              { title: "Revenue Forecasting", desc: "Predictive analytics give you a clear view of expected revenue, deal velocity, and conversion rates — updated in real time." },
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

      {/* Why it works */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title mb-6">Your Team Sells.<br />AI Handles Everything Else.</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Traditional CRMs demand time from your reps — logging calls, updating statuses, scheduling reminders. Our AI CRM flips that model. It listens, records, scores, and acts automatically so your team spends 100% of their time on conversations that close.
              </p>
              <ul className="space-y-3">
                {[
                  "Eliminate manual data entry — AI captures everything automatically",
                  "Never let a hot lead go cold with intelligent follow-up automation",
                  "Get a 360° view of every customer across every channel",
                  "Forecast revenue with confidence using AI-powered predictions",
                  "Reduce CRM admin time by up to 70%",
                  "Integrate with your existing tools — phone, email, calendar, and more",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-[#c5a059] mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              {[
                { title: "Instant Setup", desc: "Connect your existing phone system, email, and calendar. AI starts learning your pipeline within hours — not weeks." },
                { title: "Gets Smarter Over Time", desc: "The more deals you run through it, the better its scoring and forecasting becomes. It adapts to your industry, your language, and your sales cycle." },
                { title: "Works With What You Have", desc: "Integrates with Salesforce, HubSpot, Zoho, Google Workspace, Microsoft 365, and 50+ other tools your team already uses." },
              ].map((f, i) => (
                <div key={i} className="card-dark">
                  <h3 className="text-[#c5a059] font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080808] border-t border-white/5 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Ready to Replace Your Manual CRM Workflow?</h2>
        <p className="text-gray-400 mb-8">See how Veridianaitech AI Solutions Inc. can automate your pipeline in 90 days or less.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="gold-btn">Book a Free Demo</Link>
          <Link href="/solutions/sales" className="ghost-btn">See Use Cases</Link>
        </div>
      </section>
    </div>
  );
}
