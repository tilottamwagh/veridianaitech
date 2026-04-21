"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Layers, Zap, BarChart2 } from "lucide-react";

const tabs = [
  {
    id: "integration",
    label: "Easy Integration",
    icon: Layers,
    heading: "Plug Into Your Existing Stack — No Rip-and-Replace",
    body: "Veridianaitech AI connects seamlessly with 300+ business tools including your CRM, ERP, telephony, email, and messaging platforms. AI automation works with what you already have — not against it.",
    points: [
      "Pre-built connectors for 300+ popular tools",
      "Custom workflow creation with no-code builder",
      "Real-time bi-directional data synchronisation",
      "Dedicated integration support from day one",
    ],
    image: "/assets/integration_dashboard.png",
    imgAlt: "Easy Integration Dashboard",
  },
  {
    id: "automation",
    label: "Smart Automation",
    icon: Zap,
    heading: "AI That Works While You Sleep — and While You're on Holiday",
    body: "Our intelligent automation platform learns from your processes, handles edge cases, and continuously improves — automatically. Every task it completes is one less thing on your team's plate.",
    points: [
      "Self-learning AI that improves with every interaction",
      "Automatic process optimisation — no manual tuning",
      "True 24/7 operation with zero fatigue or sick days",
      "Intelligent task prioritisation and escalation",
    ],
    image: "/assets/analytics_dashboard.png",
    imgAlt: "Smart Automation Analytics",
  },
  {
    id: "insights",
    label: "Real-Time Insights",
    icon: BarChart2,
    heading: "See Exactly What Your AI Is Doing — and What It's Worth",
    body: "Every call answered, lead qualified, and task completed is tracked in a live dashboard built for business owners. Know your ROI at a glance — no data analyst required.",
    points: [
      "Live performance dashboard updated in real time",
      "Call recordings, transcripts, and outcome tracking",
      "ROI and cost-savings reports you can show stakeholders",
      "Weekly summary digests delivered to your inbox",
    ],
    image: "/assets/realtime_dashboard.png",
    imgAlt: "Real-Time Insights Dashboard",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-28 ambient-section" style={{ background: 'var(--navy-2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="eyebrow justify-center">How It Works</div>
          <h2 className="h-section mb-4">Powerful Automation,<br />Surprisingly Simple to Deploy</h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Built for business owners who want results — not a new software project to manage.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 rounded-full p-1.5" style={{ background: 'rgba(11,22,48,0.8)', border: '1px solid rgba(100,150,255,0.12)' }}>
            {tabs.map((t, i) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200`}
                  style={active === i ? { background: 'linear-gradient(135deg, var(--teal), var(--blue))', color: '#fff' } : { color: 'var(--text-muted)' }}
                >
                  <Icon className="w-4 h-4" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div key={tab.id}>
            <h3 className="text-2xl md:text-3xl font-black mb-5 leading-snug" style={{ color: 'var(--text)' }}>
              {tab.heading}
            </h3>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{tab.body}</p>
            <ul className="space-y-3 mb-8">
              {tab.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--teal)' }} />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary">
              <span>See a Live Demo →</span>
            </Link>
          </div>

          {/* Right — Dashboard Screenshot */}
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] shadow-2xl shadow-black/60">
            <Image
              src={tab.image}
              alt={tab.imgAlt}
              width={700}
              height={460}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
