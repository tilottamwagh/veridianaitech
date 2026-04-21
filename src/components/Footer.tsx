"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { heading: "Solutions", links: [{ label: "AI Sales Agent", href: "/solutions/sales" }, { label: "Support Automation", href: "/solutions/support" }, { label: "Document Processing", href: "/solutions/document-processing" }, { label: "AI-Powered CRM", href: "/solutions/ai-powered-crm" }, { label: "All Solutions", href: "/solutions" }] },
  { heading: "Company", links: [{ label: "About Us", href: "/about" }, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }] },
  { heading: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "Cookie Policy", href: "/cookies" }] },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-2)", borderTop: "1px solid rgba(100,150,255,0.08)" }}>
      {/* CTA Strip */}
      <div style={{ borderBottom: "1px solid rgba(100,150,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] uppercase mb-2" style={{ color: "var(--teal)" }}>Ready to automate?</p>
            <h3 className="text-2xl md:text-3xl font-black leading-tight" style={{ color: "var(--text)" }}>
              See AI Agents Running Live<br className="hidden md:block" /> in Your Industry
            </h3>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap flex-shrink-0"><span>Book a Free Demo</span></Link>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="mb-5">
              <div className="text-xl font-black tracking-tight" style={{ color: "var(--text)" }}>Veridianaitech</div>
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5" style={{ color: "var(--teal)", opacity: 0.7 }}>AI Solutions Inc.</div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "var(--text-muted)" }}>
              Intelligent automation for forward-thinking businesses. AI that works around the clock so your team can focus on what matters.
            </p>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Kalyani Nagar, Pune, Maharashtra, India" },
                { icon: Phone, text: "+91 9168693209 / +91 8830599371" },
                { icon: Mail, text: "support@veridianaitech.com" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--teal)" }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold tracking-[0.16em] uppercase mb-5" style={{ color: "rgba(200,210,240,0.25)" }}>{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm flex items-center gap-1 group transition-colors duration-200"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--teal)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                      {l.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="px-6 lg:px-8 py-6" style={{ borderTop: "1px solid rgba(100,150,255,0.05)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(200,210,240,0.2)" }}>
            © {new Date().getFullYear()} Veridianaitech AI Solutions Inc. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(200,210,240,0.15)" }}>
            Kalyani Nagar, Pune, Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
}
