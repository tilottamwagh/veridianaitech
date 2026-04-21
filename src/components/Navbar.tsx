"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const solutions = [
  { name: "AI Sales Agent", href: "/solutions/sales", desc: "Automate lead qualification 24/7" },
  { name: "Support Automation", href: "/solutions/support", desc: "AI-powered customer service" },
  { name: "Document Processing", href: "/solutions/document-processing", desc: "Extract data at scale" },
  { name: "Enterprise AI CRM", href: "/solutions/ai-powered-crm", desc: "Pipeline on autopilot" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl" : "bg-transparent"
      }`} style={ scrolled ? { background: "rgba(6,13,31,0.92)", borderBottom: "1px solid rgba(100,150,255,0.08)" } : {}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex flex-col group">
              <span className="text-[18px] font-black tracking-tight leading-none transition-all duration-300 group-hover:opacity-80" style={{ color: "var(--text)" }}>
                Veridianaitech
              </span>
              <span className="text-[9px] font-bold tracking-[0.22em] uppercase leading-none mt-1" style={{ color: "var(--teal)", opacity: 0.8 }}>
                AI Solutions Inc.
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              <div ref={dropRef} className="relative">
                <button onClick={() => setDropOpen(v => !v)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
                  style={{ color: "rgba(200,210,240,0.65)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(200,210,240,0.65)")}>
                  Solutions
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
                </button>

                {dropOpen && (
                  <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-72 rounded-2xl overflow-hidden shadow-2xl"
                    style={{ background: "var(--navy-3)", border: "1px solid rgba(100,150,255,0.12)", boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,198,167,0.05)" }}>
                    <div className="p-2">
                      {solutions.map((s) => (
                        <Link key={s.href} href={s.href} onClick={() => setDropOpen(false)}
                          className="flex items-start gap-3 px-4 py-3 rounded-xl group transition-all duration-200"
                          style={{ color: "var(--text-muted)" }}
                          onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,198,167,0.06)"; e.currentTarget.style.color = "var(--text)"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                          <div className="flex-1">
                            <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{s.name}</div>
                            <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.desc}</div>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 mt-0.5" style={{ color: "var(--teal)", opacity: 0.5 }} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {[{ label: "About Us", href: "/about" }, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }].map((item) => (
                <Link key={item.href} href={item.href}
                  className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
                  style={{ color: "rgba(200,210,240,0.65)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(200,210,240,0.65)")}>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link href="/contact" className="btn-primary text-[13px]"><span>Book a Free Demo</span></Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors"
              style={{ border: "1px solid rgba(100,150,255,0.15)", color: "var(--text)" }}>
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-8" style={{ background: "rgba(6,13,31,0.98)", backdropFilter: "blur(20px)" }}>
          <div className="space-y-1 flex-1">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 mb-3" style={{ color: "var(--teal)", opacity: 0.6 }}>Solutions</p>
            {solutions.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-xl transition-all" style={{ color: "var(--text-muted)" }}>
                <span className="font-medium">{s.name}</span>
                <ArrowUpRight className="w-4 h-4" style={{ color: "var(--teal)", opacity: 0.4 }} />
              </Link>
            ))}
            <div className="my-4 divider" />
            {[{ label: "About Us", href: "/about" }, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-xl transition-all" style={{ color: "var(--text-muted)" }}>
                <span className="font-medium">{item.label}</span>
                <ArrowUpRight className="w-4 h-4" style={{ color: "var(--teal)", opacity: 0.4 }} />
              </Link>
            ))}
          </div>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center text-sm"><span>Book a Free Demo</span></Link>
        </div>
      )}
    </>
  );
}
