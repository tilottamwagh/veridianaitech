"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const solutions = [
  { name: "AI Sales Agent", href: "/solutions/sales" },
  { name: "24/7 Support Automation", href: "/solutions/support" },
  { name: "Document Processing", href: "/solutions/document-processing" },
  { name: "Enterprise AI CRM", href: "/solutions/ai-powered-crm" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-black text-white tracking-wide">Veridianaitech</span>
            <span className="text-[10px] font-bold text-[#c5a059] tracking-[0.2em] uppercase">AI Solutions Inc.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Solutions Dropdown — click-based with a bridge so gap doesn't close it */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setSolutionsOpen((prev) => !prev)}
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Solutions{" "}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {solutionsOpen && (
                <>
                  {/* Transparent bridge fills the gap so mouse can reach the menu */}
                  <div className="absolute top-full left-0 w-full h-3" />
                  <div className="absolute top-[calc(100%+8px)] left-0 w-56 bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                    {solutions.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-[#c5a059] hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</Link>
            <Link href="/careers" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Careers</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#c5a059] hover:bg-[#d4b870] text-black text-sm font-bold rounded-full transition-all transform hover:scale-105"
            >
              Book a Free Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 space-y-1">
          <p className="text-xs text-gray-500 uppercase font-bold px-2 py-1">Solutions</p>
          {solutions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setIsOpen(false)}
              className="block px-2 py-2 text-gray-300 hover:text-[#c5a059] transition-colors"
            >
              {s.name}
            </Link>
          ))}
          <div className="border-t border-white/10 mt-2 pt-2 space-y-1">
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-gray-300 hover:text-[#c5a059]">About Us</Link>
            <Link href="/careers" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-gray-300 hover:text-[#c5a059]">Careers</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-gray-300 hover:text-[#c5a059]">Contact</Link>
          </div>
          <div className="pt-2">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-center px-5 py-3 bg-[#c5a059] text-black font-bold rounded-full">
              Book a Free Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
