"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import LiveDashboard from "@/components/LiveDashboard";

const clients = [
  { abbr: "ES", name: "Elevate Spa" },
  { abbr: "OL", name: "Oberoi Law Firm" },
  { abbr: "C21", name: "Century 21" },
  { abbr: "LP", name: "LogisticsPro" },
  { abbr: "TM", name: "Tata Motors" },
  { abbr: "BSD", name: "Bright Smile Dental" },
  { abbr: "SP", name: "Sterling Partners" },
  { abbr: "DM", name: "Done Mortgage" },
];

const whatWeBuild = [
  {
    title: "Supercharge Your ERP Before You Replace It",
    desc: "We embed AI directly into SAP, Salesforce, and Oracle — unlocking automation, predictive analytics, and 40%+ efficiency gains without a costly platform migration.",
  },
  {
    title: "Software Built Around How You Actually Work",
    desc: "Generic tools leave money on the table. We design bespoke applications that map exactly to your workflows — delivered on schedule, engineered to scale.",
  },
  {
    title: "Fast, Secure Web Applications Your Customers Trust",
    desc: "From enterprise portals to customer-facing platforms, we build high-performance web apps that hold up under load, rank in search, and drive conversions.",
  },
  {
    title: "Put Your Business in Every Customer's Pocket",
    desc: "Native iOS and Android apps that perform flawlessly, convert consistently, and connect to your back-end systems from day one — no workarounds needed.",
  },
  {
    title: "Ship Confidently — We Break It Before Your Users Do",
    desc: "Rigorous automated and manual testing across performance, security, and UX means you release software that works the first time, every time, at any scale.",
  },
  {
    title: "Always On, Always Optimised — We've Got the Watch",
    desc: "Proactive monitoring, regular patches, security updates, and on-call support keep your systems at peak performance so you can focus on running your business.",
  },
];

const capabilities = [
  {
    title: "Kill Repetitive Work With Smart Workflows",
    desc: "AI-powered automation handles rule-based tasks — including the edge cases — without human intervention. Your team stops doing admin and starts creating value.",
  },
  {
    title: "Go Live in Days, Not Quarters",
    desc: "Stop waiting months for results. Our rapid deployment gets automation running in your environment within days, with measurable savings from week one.",
  },
  {
    title: "Turn Data Into Decisions, Automatically",
    desc: "Real-time AI analytics surface optimisation opportunities, flag anomalies before they become problems, and measure ROI so you never fly blind.",
  },
  {
    title: "Scale Without Adding Headcount",
    desc: "Cloud-native infrastructure that handles 10x volume growth without rewrites, extra servers, or new hires. Pay for what you use, grow as fast as you want.",
  },
  {
    title: "Bank-Level Security, Zero Compromises",
    desc: "SOC 2 Type II certified, GDPR and HIPAA compliant. Your data is protected end-to-end while your automation runs free — no trade-offs between speed and safety.",
  },
  {
    title: "Works With Every Tool You Already Use",
    desc: "Native integrations with 300+ platforms — CRM, ERP, email, telephony, and more. AI automation drops into your existing stack. No rip-and-replace required.",
  },
];

const caseStudies = [
  {
    abbr: "ES",
    name: "Elevate Spa",
    quote: "Reception fully automated — staff now focus on guests, not phones.",
    img: "/assets/Panoramic-SpaDay-dg1nqnrG.png",
    stats: [
      { val: "80%", label: "Admin Time Saved" },
      { val: "95%", label: "Calls Answered" },
      { val: "24/7", label: "Availability" },
      { val: "$180K", label: "Annual Savings" },
    ],
  },
  {
    abbr: "OL",
    name: "Oberoi Law Firm",
    quote: "Client intake automated — lawyers spend more time in court, less on admin.",
    img: "/assets/LawFirms-Cfw3No_8.jpg",
    stats: [
      { val: "78%", label: "Admin Time Saved" },
      { val: "92%", label: "Calls Answered" },
      { val: "24/7", label: "Availability" },
      { val: "$240K", label: "Annual Savings" },
    ],
  },
  {
    abbr: "C21",
    name: "Century 21",
    quote: "Property research automated at scale — analysts focus on closing deals.",
    img: "/assets/Real_Estate-daXMW61t.jpg",
    stats: [
      { val: "90%", label: "Data Extraction Automated" },
      { val: "85%", label: "Analysis Time Saved" },
      { val: "50K+", label: "Properties Analysed" },
      { val: "$2.8M", label: "Annual Savings" },
    ],
  },
  {
    abbr: "LP",
    name: "LogisticsPro",
    quote: "End-to-end logistics automation — manual processing virtually eliminated.",
    img: "/assets/Case_study_background_4_6d1a48d7-DbLnm7dm.png",
    stats: [
      { val: "95%", label: "Automation Rate" },
      { val: "70%", label: "Time Savings" },
      { val: "1K+", label: "Routes Optimised" },
      { val: "$5M", label: "Annual Savings" },
    ],
  },
];

const whyUs = [
  "70% average reduction in manual task time",
  "60% lower operational overhead",
  "95% automation success rate across deployments",
  "Positive ROI within 90 days — guaranteed",
];

const handson = [
  "Dedicated success manager from day one",
  "Free white-glove implementation assistance",
  "Personalised onboarding and staff training",
  "Proactive optimisation — we don't wait to be asked",
];

const speed = [
  "Live in days, not months — no long IT projects",
  "AI trained on your business, not a generic template",
  "Iterative improvements based on real call data",
  "Scales instantly as your business grows",
];

export default function Home() {
  return (
    <div className="bg-black">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <p className="section-label mb-4">AI-Powered Business Automation</p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-6">
                Scale Your Business<br />
                Faster With AI —<br />
                <span className="text-[#c5a059]">Without the Growing Pains.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Veridianaitech AI Solutions Inc. deploys intelligent voice agents, process automation,
                and enterprise AI that answer calls, qualify leads, process documents, and run 24/7 —
                so your team focuses on what only humans can do.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-10 mb-10">
                {[
                  { val: "70%", label: "Avg. time saved" },
                  { val: "24/7", label: "Always-on coverage" },
                  { val: "90 days", label: "Typical ROI timeline" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-4xl font-black text-white">{s.val}</div>
                    <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="gold-btn text-base px-8 py-4">
                Book a Free Demo
              </Link>
            </div>

            {/* Right — AI Brain Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-[480px] h-[480px] max-w-full">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-[#c5a059]/5 blur-3xl scale-110" />
                <div className="absolute inset-4 rounded-full border border-[#c5a059]/10 animate-pulse" />
                <Image
                  src="/assets/ai_brain.png"
                  alt="Veridianaitech AI Intelligence"
                  width={480}
                  height={480}
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_60px_rgba(100,80,255,0.5)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="py-10 border-y border-white/5 overflow-hidden bg-[#0a0a0a]">
        <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">
          Trusted by businesses across North America.
        </p>
        <div className="relative flex overflow-hidden">
          <div className="marquee">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="flex items-center gap-3 flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[10px] font-bold text-[#c5a059]">
                  {c.abbr}
                </div>
                <span className="text-gray-400 font-medium text-sm">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">What We Build</p>
            <h2 className="section-title mb-4">Six Ways We Put AI to Work<br />for Your Business</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every engagement is designed to reduce overhead, accelerate revenue, and deliver measurable ROI — not just a line of code.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeBuild.map((item, i) => (
              <div key={i} className="card-dark group">
                <div className="w-8 h-0.5 bg-[#c5a059] mb-5 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM CAPABILITIES ── */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Platform Capabilities</p>
            <h2 className="section-title mb-4">Six Capabilities That Cut Costs<br />and Drive Growth</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Precision automation that replaces manual work, surfaces better decisions, and scales as fast as your ambitions.
            </p>
          </div>

          {/* Live Animated Dashboard */}
          <div className="mb-14">
            <LiveDashboard />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, i) => (
              <div key={i} className="card-dark group">
                <div className="w-8 h-0.5 bg-[#c5a059] mb-5 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT RESULTS ── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Client Results</p>
            <h2 className="section-title mb-4">Real Businesses, Measurable Savings</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every number below comes from a live Veridianaitech AI Solutions Inc. deployment — not a projection, not an estimate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d]">
                <div className="h-52 relative overflow-hidden">
                  <Image src={cs.img} alt={cs.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-xs font-black text-[#c5a059]">
                      {cs.abbr}
                    </div>
                    <span className="font-bold text-white text-lg">{cs.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 italic mb-6 text-sm leading-relaxed">"{cs.quote}"</p>
                  <div className="grid grid-cols-4 gap-3">
                    {cs.stats.map((st, j) => (
                      <div key={j} className="text-center">
                        <div className="text-xl font-black text-[#c5a059]">{st.val}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{st.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — TABBED ── */}
      <HowItWorks />

      {/* ── WHY US ── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Why Veridianaitech</p>
            <h2 className="section-title mb-4">The AI Partner That Proves ROI,<br />Not Just Potential</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every metric below comes from live Veridianaitech AI Solutions Inc. client deployments — not marketing projections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card-dark">
              <h3 className="text-[#c5a059] font-bold text-sm uppercase tracking-widest mb-5">Numbers Business Owners Care About</h3>
              <ul className="space-y-3">
                {whyUs.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-[#c5a059] mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-dark">
              <h3 className="text-[#c5a059] font-bold text-sm uppercase tracking-widest mb-5">Hands-On Support, Not a Help Ticket Queue</h3>
              <ul className="space-y-3">
                {handson.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-[#c5a059] mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-dark">
              <h3 className="text-[#c5a059] font-bold text-sm uppercase tracking-widest mb-5">Built for Speed — From Sign-Off to Go-Live</h3>
              <ul className="space-y-3">
                {speed.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-[#c5a059] mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Big stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-white/5">
            {[
              { val: "500+", label: "Businesses Automated" },
              { val: "10M+", label: "Tasks Automated Monthly" },
              { val: "70%", label: "Average Time Saved" },
              { val: "$100M+", label: "Total Client Savings" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{s.val}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER / CTA ── */}
      <section className="py-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="section-label">Free AI Playbook</p>
          <h2 className="section-title mb-4">Get the AI Playbook Your<br />Competitors Don't Have</h2>
          <p className="text-gray-400 mb-8">
            Monthly briefings: real client automation wins, ROI case breakdowns, and the exact AI tools Veridianaitech AI Solutions Inc. is deploying right now. No fluff, no spam.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your business email address"
              className="flex-1 px-5 py-3.5 bg-[#111] border border-white/10 rounded-full text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c5a059]/50"
            />
            <button type="submit" className="gold-btn whitespace-nowrap">Send Me the Playbook</button>
          </form>
          <p className="text-gray-600 text-xs">No spam. Unsubscribe in one click, any time.</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-black border-t border-white/5 text-center">
        <p className="section-label mb-4">READY TO AUTOMATE?</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">See AI Agents Running Live in Your Industry</h2>
        <Link href="/contact" className="gold-btn text-base mt-4">Book a Free Demo</Link>
      </section>
    </div>
  );
}
