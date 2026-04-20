"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function DocumentProcessing() {
  return (
    <div className="bg-black pt-20">
      <section className="py-24 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-label">Document Automation</p>
          <h1 className="section-title mb-6">Document Processing<br /><span className="text-[#c5a059]">&amp; Research</span></h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Automate document extraction, analysis, and research with AI that understands, categorizes, and processes information from any document type at scale.
          </p>
          <Link href="/contact" className="gold-btn text-base">Get Started <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Document Processing Features</p>
            <h2 className="section-title mb-4">Comprehensive tools for automating<br />document workflows and research</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Intelligent Document Extraction", desc: "Automatically extract data from PDFs, images, forms, and unstructured documents with high accuracy." },
              { title: "AI-Powered Research", desc: "Analyze vast amounts of documents and extract key insights, summaries, and actionable intelligence." },
              { title: "Data Structuring", desc: "Transform unstructured data into organized, searchable databases automatically." },
              { title: "Contextual Understanding", desc: "Advanced NLP that understands context, relationships, and meaning within documents." },
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

      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title mb-6">Automate Document Intelligence</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
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
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-[#c5a059] mt-0.5 flex-shrink-0" />
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
                <div key={i} className="card-dark text-center py-8">
                  <div className="text-4xl font-black text-[#c5a059] mb-2">{s.val}</div>
                  <div className="text-gray-400 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10 text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Invoice Processing", desc: "Automatically extract data from invoices and sync to accounting systems." },
              { title: "Legal Document Analysis", desc: "Review contracts, extract clauses, and identify key terms automatically." },
              { title: "Real Estate Data", desc: "Extract property data from MLS listings and market reports." },
              { title: "Medical Records", desc: "Digitize and structure patient records for easy access and analysis." },
              { title: "Research & Analysis", desc: "Analyze research papers, reports, and extract key findings." },
              { title: "Form Processing", desc: "Digitize handwritten and printed forms with high accuracy." },
            ].map((f, i) => (
              <div key={i} className="card-dark">
                <h3 className="text-[#c5a059] font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080808] border-t border-white/5 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Ready to Automate Document Processing?</h2>
        <p className="text-gray-400 mb-8">Join businesses processing thousands of documents with AI automation.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="gold-btn">Schedule a Demo</Link>
          <Link href="/about" className="ghost-btn">View Case Studies</Link>
        </div>
      </section>
    </div>
  );
}
