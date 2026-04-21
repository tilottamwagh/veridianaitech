export default function Terms() {
  return (
    <div className="bg-[var(--navy)] pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <p className="eyebrow">Legal</p>
        <h1 className="text-4xl font-black text-[var(--text)] mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last Updated: April 21, 2026</p>
        <div className="space-y-10 text-[var(--text-muted)] leading-relaxed">
          {[
            { title: "1. Acceptance of Terms", body: "By accessing or using any services provided by Veridianaitech AI Solutions Inc., you agree to be bound by these Terms of Service. If you do not agree, please do not use our services or website." },
            { title: "2. Services", body: "Veridianaitech AI Solutions Inc. provides AI-powered voice agents, process automation, enterprise software development, and related consulting services. Specific terms for each engagement are governed by individual service agreements." },
            { title: "3. Intellectual Property", body: "All content, features, and functionality on this website — including text, graphics, logos, and software — are the exclusive property of Veridianaitech AI Solutions Inc. and are protected by Canadian and international copyright laws." },
            { title: "4. Limitation of Liability", body: "Veridianaitech AI Solutions Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, our website or services." },
            { title: "5. Governing Law", body: "These Terms of Service are governed by the laws of the Province of Ontario, Canada. Any disputes shall be resolved in the courts of Ontario." },
            { title: "6. Contact", body: "For questions about these Terms, contact us at legal@veridianaitech.com or at 15 Glenmanor Drive, Brampton, ON, Canada." },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-[var(--text)] font-bold text-xl mb-3">{s.title}</h2>
              <p className="text-[var(--text-muted)]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
