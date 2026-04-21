"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Zap, Shield, BarChart2, Clock, Users, TrendingUp } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import LiveDashboard from "@/components/LiveDashboard";

const clients = [
  "Elevate Spa", "Oberoi Law Firm", "Century 21", "LogisticsPro",
  "Tata Motors", "Bright Smile Dental", "Sterling Partners", "Done Mortgage",
];

const services = [
  { icon: Zap, title: "Supercharge Your ERP Without Replacing It", desc: "Embed AI directly into SAP, Salesforce, and Oracle — unlocking automation and 40%+ efficiency gains without a costly migration." },
  { icon: TrendingUp, title: "Custom Software Built Around How You Work", desc: "Generic tools leave money on the table. We design bespoke applications that map exactly to your workflows — delivered on schedule, engineered to scale." },
  { icon: Shield, title: "Fast, Secure Web Applications", desc: "From enterprise portals to customer-facing platforms, we build high-performance web apps that hold up under load and drive conversions." },
  { icon: Users, title: "Put Your Business in Every Customer's Pocket", desc: "Native iOS and Android apps that perform flawlessly, convert consistently, and connect to your back-end systems from day one." },
  { icon: BarChart2, title: "Ship Confidently — We Break It Before Users Do", desc: "Rigorous automated and manual testing across performance, security, and UX means you release software that works every time, at any scale." },
  { icon: Clock, title: "Always On, Always Optimised", desc: "Proactive monitoring, regular patches, security updates, and on-call support keep your systems at peak performance 24/7." },
];

const capabilities = [
  { title: "Kill Repetitive Work With Smart Workflows", desc: "AI-powered automation handles rule-based tasks — including the edge cases — without human intervention." },
  { title: "Go Live in Days, Not Quarters", desc: "Our rapid deployment gets automation running in days, with measurable savings from week one." },
  { title: "Turn Data Into Decisions, Automatically", desc: "Real-time AI analytics surface optimisation opportunities and flag anomalies before they become problems." },
  { title: "Scale Without Adding Headcount", desc: "Cloud-native infrastructure that handles 10x volume growth without rewrites, extra servers, or new hires." },
  { title: "Bank-Level Security, Zero Compromises", desc: "SOC 2 Type II certified, GDPR and HIPAA compliant. Speed and safety with zero trade-offs." },
  { title: "Works With Every Tool You Already Use", desc: "Native integrations with 300+ platforms — CRM, ERP, email, telephony, and more. No rip-and-replace required." },
];

const caseStudies = [
  { abbr: "ES", name: "Elevate Spa", quote: "Reception fully automated — staff now focus on guests, not phones.", img: "/assets/Panoramic-SpaDay-dg1nqnrG.png", stats: [{ val: "80%", label: "Admin Time Saved" }, { val: "95%", label: "Calls Answered" }, { val: "24/7", label: "Availability" }, { val: "$180K", label: "Annual Savings" }] },
  { abbr: "OL", name: "Oberoi Law Firm", quote: "Client intake automated — lawyers spend more time in court, less on admin.", img: "/assets/LawFirms-Cfw3No_8.jpg", stats: [{ val: "78%", label: "Admin Time Saved" }, { val: "92%", label: "Calls Answered" }, { val: "24/7", label: "Availability" }, { val: "$240K", label: "Annual Savings" }] },
  { abbr: "C21", name: "Century 21", quote: "Property research automated at scale — analysts focus on closing deals.", img: "/assets/Real_Estate-daXMW61t.jpg", stats: [{ val: "90%", label: "Data Extraction" }, { val: "85%", label: "Time Saved" }, { val: "50K+", label: "Properties" }, { val: "$2.8M", label: "Annual Savings" }] },
  { abbr: "LP", name: "LogisticsPro", quote: "End-to-end logistics automation — manual processing virtually eliminated.", img: "/assets/Case_study_background_4_6d1a48d7-DbLnm7dm.png", stats: [{ val: "95%", label: "Automation Rate" }, { val: "70%", label: "Time Saved" }, { val: "1K+", label: "Routes" }, { val: "$5M", label: "Annual Savings" }] },
];

export default function Home() {
  return (
    <div style={{ background: "var(--navy)" }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px] hero-grid">
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full glow-pulse"
            style={{ background: "radial-gradient(circle, rgba(0,198,167,0.07) 0%, transparent 65%)" }} />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full glow-pulse"
            style={{ background: "radial-gradient(circle, rgba(59,127,255,0.07) 0%, transparent 65%)", animationDelay: "2s" }} />
          <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(124,92,252,0.05) 0%, transparent 65%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="pill mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)] animate-pulse" />
                AI-Powered Business Automation
              </div>
              <h1 className="text-5xl lg:text-[62px] font-extrabold leading-[1.02] tracking-tight mb-6"
                style={{ color: "var(--text)" }}>
                Scale Faster<br />With AI —<br />
                <span className="gradient-text">Without the Pain.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "var(--text-muted)" }}>
                Veridianaitech AI Solutions Inc. deploys intelligent voice agents, process automation, and enterprise AI that runs 24/7 — so your team focuses on what only humans can do.
              </p>

              <div className="flex gap-10 mb-10">
                {[{ val: "70%", label: "Avg. time saved" }, { val: "24/7", label: "Always-on" }, { val: "90 days", label: "Typical ROI" }].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-black" style={{ color: "var(--text)" }}>{s.val}</div>
                    <div className="text-xs mt-1 font-medium" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary"><span>Book a Free Demo</span></Link>
                <Link href="/solutions" className="btn-outline">View Solutions</Link>
              </div>
            </div>

            {/* Right — AI Brain */}
            <div className="flex items-center justify-center">
              <div className="relative w-[440px] h-[440px] max-w-full">
                <div className="absolute inset-0 rounded-full glow-pulse"
                  style={{ background: "radial-gradient(circle, rgba(0,198,167,0.08) 0%, transparent 65%)" }} />
                <div className="absolute inset-8 rounded-full" style={{ border: "1px solid rgba(0,198,167,0.12)" }} />
                <Image
                  src="/assets/ai_brain.png"
                  alt="Veridianaitech AI"
                  width={440} height={440}
                  className="relative z-10 w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 0 80px rgba(0,198,167,0.25)) drop-shadow(0 0 40px rgba(59,127,255,0.2))" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <div className="divider" />
      <section className="py-10 overflow-hidden" style={{ background: "var(--navy-2)" }}>
        <p className="text-center text-[10px] font-bold tracking-[0.22em] uppercase mb-8"
          style={{ color: "var(--text-muted)" }}>
          Trusted by businesses across industries
        </p>
        <div className="relative flex overflow-hidden">
          <div className="marquee-track">
            {[...clients, ...clients, ...clients].map((c, i) => (
              <div key={i} className="flex items-center gap-3 flex-shrink-0 px-2">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--teal)", opacity: 0.5 }} />
                <span className="font-semibold text-sm whitespace-nowrap" style={{ color: "var(--text-muted)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="divider" />

      {/* ── WHAT WE BUILD ── */}
      <section className="py-28 ambient-section dot-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="eyebrow justify-center">What We Build</div>
            <h2 className="h-section mb-4">Six Ways We Put AI<br />to Work for Your Business</h2>
            <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Every engagement is designed to reduce overhead, accelerate revenue, and deliver measurable ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="glass-card group">
                  <div className="icon-box">
                    <Icon className="w-5 h-5" style={{ color: "var(--teal)" }} />
                  </div>
                  <div className="accent-line" />
                  <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: "var(--text)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PLATFORM CAPABILITIES ── */}
      <section className="py-28" style={{ background: "var(--navy-2)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="eyebrow justify-center">Platform Capabilities</div>
            <h2 className="h-section mb-4">Capabilities That Cut Costs<br />and Drive Growth</h2>
            <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Precision automation that replaces manual work and scales as fast as your ambitions.
            </p>
          </div>
          <div className="mb-16"><LiveDashboard /></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((item, i) => (
              <div key={i} className="glass-card group">
                <div className="accent-line" />
                <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: "var(--text)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />
      <HowItWorks />
      <div className="divider" />

      {/* ── CLIENT RESULTS ── */}
      <section className="py-28 ambient-section" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="eyebrow justify-center">Client Results</div>
            <h2 className="h-section mb-4">Real Businesses,<br />Measurable Savings</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="rounded-2xl overflow-hidden group transition-all duration-300 glow-border hover:border-[rgba(0,198,167,0.3)]"
                style={{ background: "var(--navy-2)" }}>
                <div className="h-48 relative overflow-hidden">
                  <Image src={cs.img} alt={cs.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--navy-2), transparent)" }} />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-black"
                      style={{ background: "rgba(0,198,167,0.15)", border: "1px solid rgba(0,198,167,0.35)", color: "var(--teal)" }}>
                      {cs.abbr}
                    </div>
                    <span className="font-bold" style={{ color: "var(--text)" }}>{cs.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="italic mb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>&ldquo;{cs.quote}&rdquo;</p>
                  <div className="grid grid-cols-4 gap-3 pt-4" style={{ borderTop: "1px solid rgba(100,150,255,0.08)" }}>
                    {cs.stats.map((st, j) => (
                      <div key={j} className="text-center">
                        <div className="text-lg font-black gradient-text">{st.val}</div>
                        <div className="text-[10px] mt-1 leading-tight" style={{ color: "var(--text-muted)" }}>{st.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── BIG STATS ── */}
      <section className="py-20" style={{ background: "var(--navy-2)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "500+", label: "Businesses Automated" },
              { val: "10M+", label: "Tasks Automated Monthly" },
              { val: "70%", label: "Average Time Saved" },
              { val: "$100M+", label: "Total Client Savings" },
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="stat-num">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── WHY US ── */}
      <section className="py-28 ambient-section dot-bg" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="eyebrow justify-center">Why Veridianaitech</div>
            <h2 className="h-section mb-4">The AI Partner That Proves ROI,<br />Not Just Potential</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Numbers Business Owners Care About", pts: ["70% average reduction in manual task time", "60% lower operational overhead", "95% automation success rate across deployments", "Positive ROI within 90 days — guaranteed"] },
              { title: "Hands-On Support, Not a Help Ticket Queue", pts: ["Dedicated success manager from day one", "Free white-glove implementation assistance", "Personalised onboarding and staff training", "Proactive optimisation — we don't wait to be asked"] },
              { title: "Built for Speed — From Sign-Off to Go-Live", pts: ["Live in days, not months — no long IT projects", "AI trained on your business, not a generic template", "Iterative improvements based on real data", "Scales instantly as your business grows"] },
            ].map((col, i) => (
              <div key={i} className="glass-card">
                <div className="accent-line" />
                <h3 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: "var(--teal)" }}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.pts.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--teal)" }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── NEWSLETTER ── */}
      <section className="py-24" style={{ background: "var(--navy-2)" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="eyebrow justify-center">Free AI Playbook</div>
          <h2 className="h-section mb-4">Get the AI Playbook Your<br />Competitors Don&apos;t Have</h2>
          <p className="mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Monthly briefings: real client automation wins, ROI case breakdowns, and the exact AI tools we&apos;re deploying right now. No fluff, no spam.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your business email address"
              className="flex-1 px-5 py-3.5 rounded-full text-sm focus:outline-none transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(100,150,255,0.12)", color: "var(--text)" }}
            />
            <button type="submit" className="btn-primary whitespace-nowrap"><span>Get the Playbook</span></button>
          </form>
          <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>No spam. Unsubscribe any time.</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 hero-grid" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="eyebrow justify-center">Ready to Automate?</div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: "var(--text)" }}>
            See AI Agents Running Live<br />in Your Industry
          </h2>
          <p className="mb-10 text-lg" style={{ color: "var(--text-muted)" }}>
            30-minute demo. Custom automation roadmap. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4" style={{ position: "relative" }} />
            </Link>
            <Link href="/solutions" className="btn-outline text-base px-10 py-4">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
