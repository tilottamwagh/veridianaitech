"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function DocumentProcessing() {
  return (
    <div className="bg-[var(--navy)] pt-20">
      <section className="py-24 bg-[var(--navy-2)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="eyebrow">Document Automation</p>
          <h1 className="h-section mb-6">Document Processing<br /><span className="text-[var(--teal)]">&amp; Research</span></h1>
          <p className="text-[var(--text-muted)] text-lg mb-10 leading-relaxed">
            Automate document extraction, analysis, and research with AI that understands, categorizes, and processes information from any document type at scale.
          </p>
          <Link href="/contact" className="btn-primary text-base">Get Started <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow">Document Processing Features</p>
            <h2 className="h-section mb-4">Comprehensive tools for automating<br />document workflows and research</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Intelligent Document Extraction", desc: "Automatically extract data from PDFs, images, forms, and unstructured documents with high accuracy." },
              { title: "AI-Powered Research", desc: "Analyze vast amounts of documents and extract key insights, summaries, and actionable intelligence." },
              { title: "Data Structuring", desc: "Transform unstructured data into organized, searchable databases automatically." },
              { title: "Contextual Understanding", desc: "Advanced NLP that understands context, relationships, and meaning within documents." },
            ].map((f, i) => (
              <div key={i} className="glass-card group">
                <div className="w-8 h-0.5 bg-[var(--teal)] mb-4 group-hover:w-12 transition-all" />
                <h3 className="text-[var(--text)] font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--navy-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="h-section mb-6">Automate Document Intelligence</h2>
              <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                Our AI document processing transforms how organizations handle paperwork, extracting critical information from any document type and turning it into actionable data.
              </p>
              <ul className="space-y-3">
                {[
                  "Process thousands of documents in minutes, not days",
                  "Extract data with 98%+ accuracy",
                  "Eliminate manual data entry and human error",
                  "Handle multiple file formats and languages",
                  "Integrate extracted data directly into your systems",
                  "Reduce document processing costs by 85%",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] text-sm">
                    <Check className="w-4 h-4 text-[var(--teal)] mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              {[
                { val: "10,000+", label: "Documents Processed Per Hour" },
                { val: "98%", label: "Data Extraction Accuracy" },
                { val: "85%", label: "Processing Cost Reduction" },
              ].map((s, i) => (
                <div key={i} className="glass-card text-center py-8">
                  <div className="text-4xl font-black text-[var(--teal)] mb-2">{s.val}</div>
                  <div className="text-[var(--text-muted)] font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="h-section mb-10 text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Invoice Processing", desc: "Automatically extract data from invoices and sync to accounting systems." },
              { title: "Legal Document Analysis", desc: "Review contracts, extract clauses, and identify key terms automatically." },
              { title: "Real Estate Data", desc: "Extract property data from MLS listings and market reports." },
              { title: "Medical Records", desc: "Digitize and structure patient records for easy access and analysis." },
              { title: "Research & Analysis", desc: "Analyze research papers, reports, and extract key findings." },
              { title: "Form Processing", desc: "Digitize handwritten and printed forms with high accuracy." },
            ].map((f, i) => (
              <div key={i} className="glass-card">
                <h3 className="text-[var(--teal)] font-bold mb-2">{f.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--navy-2)] border-t border-[rgba(100,150,255,0.05)] text-center">
        <h2 className="text-3xl font-black text-[var(--text)] mb-4">Ready to Automate Document Processing?</h2>
        <p className="text-[var(--text-muted)] mb-8">Join businesses processing thousands of documents with AI automation.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">Schedule a Demo</Link>
          <Link href="/about" className="btn-outline">View Case Studies</Link>
        </div>
      </section>
    </div>
  );
}
