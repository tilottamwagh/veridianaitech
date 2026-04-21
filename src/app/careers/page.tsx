"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const roles = [
  {
    title: "Senior Full Stack Developer",
    dept: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    desc: "Join our engineering team to build cutting-edge AI-powered solutions. Work with modern technologies including React, Node.js, Python, and AI/ML frameworks.",
    reqs: [
      "5+ years of experience in full-stack development",
      "Strong proficiency in React, TypeScript, and Node.js",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of AI/ML integration is a plus",
    ],
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    desc: "Create beautiful, intuitive user experiences for our AI-powered products. Collaborate with product and engineering teams to design innovative solutions.",
    reqs: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Adobe XD, or similar tools",
      "Strong portfolio showcasing web and mobile designs",
      "Experience with design systems and component libraries",
    ],
  },
  {
    title: "Digital Marketing Manager",
    dept: "Marketing",
    location: "Remote / Hybrid",
    type: "Full-time",
    desc: "Drive our digital marketing strategy to increase brand awareness and customer acquisition. Lead campaigns across SEO, content, and social media.",
    reqs: [
      "4+ years of digital marketing experience",
      "Proven track record in B2B SaaS marketing",
      "Strong knowledge of SEO, content marketing, and analytics",
      "Experience with marketing automation tools",
    ],
  },
  {
    title: "AI/ML Engineer",
    dept: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    desc: "Build and deploy state-of-the-art AI models that power our intelligent automation platform. Work on NLP, computer vision, and predictive analytics projects.",
    reqs: [
      "3+ years of experience in AI/ML development",
      "Strong knowledge of Python, TensorFlow, PyTorch",
      "Experience with LLMs and prompt engineering",
      "Background in deploying ML models to production",
    ],
  },
  {
    title: "SAP BTP Analyst",
    dept: "Technology",
    location: "Remote / Hybrid",
    type: "Full-time",
    desc: "Lead SAP Business Technology Platform initiatives to integrate and extend enterprise applications. Work with stakeholders to optimize business processes.",
    reqs: [
      "3+ years of experience with SAP BTP and SAP cloud solutions",
      "Strong knowledge of SAP Integration Suite, SAP Build, and SAP HANA Cloud",
      "Experience with business process optimization and requirements analysis",
      "Familiarity with SAP Fiori, SAPUI5, and extension development",
    ],
  },
];

export default function Careers() {
  return (
    <div className="bg-[var(--navy)] pt-20">
      {/* Hero */}
      <section className="py-24 bg-[var(--navy-2)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="eyebrow">We are Hiring</p>
          <h1 className="h-section mb-6">
            Join Our Team &amp; Shape<br />
            <span className="text-[var(--teal)]">the Future of AI</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg mb-10 leading-relaxed">
            We are building the next generation of AI-powered business solutions. Join us in creating technology that transforms how companies work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#positions" className="btn-primary">View Open Positions <ArrowRight className="w-4 h-4" /></a>
            <Link href="/about" className="btn-outline">Learn About Us</Link>
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="h-section text-center mb-14">Why Work at Veridianaitech AI Solutions Inc.?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Cutting-Edge Technology", desc: "Work with the latest AI technologies and tools. We invest in your learning and development." },
              { title: "Flexible Work Culture", desc: "Remote-first culture with flexible hours. Work from anywhere and maintain work-life balance." },
              { title: "Growth & Impact", desc: "Make a real impact on businesses worldwide. Grow your career with mentorship and opportunities." },
            ].map((b, i) => (
              <div key={i} className="glass-card text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--teal)]/10 border border-[var(--teal)]/20 flex items-center justify-center mx-auto mb-5">
                  <div className="w-4 h-0.5 bg-[var(--teal)]" />
                </div>
                <h3 className="text-[var(--text)] font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-[var(--navy-2)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="eyebrow">Open Positions</p>
            <h2 className="h-section">Find your next opportunity<br />and join our growing team</h2>
          </div>

          <div className="space-y-6">
            {roles.map((role, i) => (
              <div key={i} className="glass-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-[var(--text)] font-bold text-xl">{role.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs px-3 py-1 bg-[var(--teal)]/10 text-[var(--teal)] rounded-full font-medium">{role.dept}</span>
                      <span className="text-xs px-3 py-1 bg-[rgba(100,150,255,0.05)] text-[var(--text-muted)] rounded-full">{role.location}</span>
                      <span className="text-xs px-3 py-1 bg-[rgba(100,150,255,0.05)] text-[var(--text-muted)] rounded-full">{role.type}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-muted)] text-sm mb-4">{role.desc}</p>
                <div className="mb-5">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Key Requirements:</p>
                  <ul className="space-y-1">
                    {role.reqs.map((r, j) => (
                      <li key={j} className="text-[var(--text-muted)] text-sm flex items-start gap-2">
                        <span className="text-[var(--teal)] mt-0.5">—</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary text-sm">Apply Now <ArrowRight className="w-4 h-4" /></Link>
              </div>
            ))}
          </div>

          {/* Don't see a fit */}
          <div className="mt-12 text-center glass-card">
            <h3 className="text-[var(--text)] font-bold text-xl mb-3">Don't See a Perfect Fit?</h3>
            <p className="text-[var(--text-muted)] text-sm mb-6">We are always looking for talented individuals. Send us your resume and let us know what you are passionate about.</p>
            <Link href="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
