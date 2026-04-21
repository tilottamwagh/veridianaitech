"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[var(--navy)] pt-20">
      {/* Hero */}
      <section className="py-24 bg-[var(--navy-2)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="eyebrow">About Us</p>
          <h1 className="h-section mb-6">
            We are on a Mission to<br />
            <span className="text-[var(--teal)]">Democratize Business Automation</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            Every business, regardless of size, deserves access to powerful AI automation. We are making it simple, affordable, and accessible for everyone to save time and reduce costs.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <p className="eyebrow mb-3">Our Mission</p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                To empower businesses worldwide with intelligent automation that saves time, reduces costs, and frees people to focus on work that truly matters. We believe automation should be simple, accessible, and deliver measurable results for everyone.
              </p>
            </div>
            <div className="glass-card">
              <p className="eyebrow mb-3">Our Vision</p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                A world where every business, from solo entrepreneurs to large enterprises, can harness the power of AI automation without complexity or massive budgets. We are building the future where technology amplifies human potential, not replaces it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[var(--navy-2)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="eyebrow">Our Story</p>
            <h2 className="h-section">From frustration to innovation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <div className="w-8 h-0.5 bg-[var(--teal)] mb-5" />
              <h3 className="text-[var(--text)] font-bold text-xl mb-4">The Problem We Saw</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                We watched countless businesses struggle with the same repetitive tasks day after day. Teams buried in manual data entry, invoice processing, customer communications, and administrative work that drained their time and energy. Meanwhile, powerful automation tools existed — but they were complex, expensive, and built only for large enterprises with dedicated IT teams.
              </p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mt-4">
                Small businesses could not afford six-figure automation projects. Mid-sized companies lacked technical expertise. Everyone was stuck doing manual work that machines could handle better.
              </p>
            </div>
            <div className="glass-card">
              <div className="w-8 h-0.5 bg-[var(--teal)] mb-5" />
              <h3 className="text-[var(--text)] font-bold text-xl mb-4">Our Solution</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                We set out to change this. We are building an AI automation platform that is powerful enough for enterprises yet simple enough for small teams. No coding required. No massive implementation projects. Just intelligent automation that works.
              </p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mt-4">
                We have already helped our first clients see real results — saving time, reducing costs, and automating tasks that used to consume their days. Each success proves our vision: automation should be accessible, affordable, and deliver measurable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow">Our Values</p>
            <h2 className="h-section">These principles guide everything we do</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Customer Success First", desc: "We measure our success by the time and money we save for our clients. Every automation we build is designed to deliver measurable ROI." },
              { title: "Innovation & Simplicity", desc: "We make cutting-edge AI technology accessible to businesses of all sizes. Powerful automation should not require a PhD to implement." },
              { title: "Human-Centered Automation", desc: "Automation should free people to do meaningful work, not replace them. We help teams focus on creativity, strategy, and human connection." },
              { title: "Accessibility for All", desc: "Whether you are a startup or enterprise, you deserve world-class automation. We are democratizing AI to level the playing field." },
            ].map((v, i) => (
              <div key={i} className="glass-card group">
                <div className="w-8 h-0.5 bg-[var(--teal)] mb-4 group-hover:w-12 transition-all" />
                <h3 className="text-[var(--text)] font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[var(--navy-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow">Our Team</p>
            <h2 className="h-section">Passionate experts dedicated<br />to your automation success</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Founders", desc: "Passionate entrepreneurs and technologists combining expertise in AI, automation, and business to solve real problems." },
              { title: "Development", desc: "Small but mighty team of engineers building intelligent automation solutions that deliver real business value." },
              { title: "Client Support", desc: "Hands-on support ensuring every client achieves their automation goals and sees measurable results." },
            ].map((t, i) => (
              <div key={i} className="glass-card text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--teal)]/10 border border-[var(--teal)]/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-[var(--teal)] font-black text-lg">{t.title[0]}</span>
                </div>
                <h3 className="text-[var(--text)] font-bold text-lg mb-2">{t.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/careers" className="btn-outline">View Open Positions <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Early Impact Stats */}
      <section className="py-20 bg-[var(--navy)] border-t border-[rgba(100,150,255,0.05)]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="eyebrow text-center mb-10">Early Impact</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-14">
            {[
              { val: "4+", label: "Active Clients" },
              { val: "70%+", label: "Avg Time Saved" },
              { val: "100%", label: "Client Satisfaction" },
              { val: "2024", label: "Year Founded" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-[var(--teal)] mb-2">{s.val}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-black text-[var(--text)] mb-4">Ready to Start Your Automation Journey?</h2>
            <p className="text-[var(--text-muted)] mb-8">Join forward-thinking businesses that are already saving time and money with AI automation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Schedule a Free Consultation</Link>
              <Link href="/" className="btn-outline">View Case Studies</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
