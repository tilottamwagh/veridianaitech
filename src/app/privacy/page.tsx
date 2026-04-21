export default function Privacy() {
  return (
    <div className="bg-[var(--navy)] pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <p className="eyebrow">Legal</p>
        <h1 className="text-4xl font-black text-[var(--text)] mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last Updated: April 21, 2026</p>
        <div className="space-y-10 text-[var(--text-muted)] leading-relaxed">
          {[
            { title: "1. Information We Collect", body: "Veridianaitech AI Solutions Inc. collects information you provide directly, including your name, email address, phone number, and company details when you contact us or use our services. We also collect usage data such as pages visited, time spent, and browser information to improve our platform." },
            { title: "2. How We Use Your Information", body: "We use collected information to provide and improve our services, communicate with you about your inquiries and account, send relevant updates and insights (with your consent), and develop new AI automation capabilities. We do not sell your personal data to third parties." },
            { title: "3. Data Security", body: "We implement SOC 2 Type II compliant security measures to protect your personal information. All data is encrypted in transit and at rest. Access is restricted to authorized personnel only, and we conduct regular security audits." },
            { title: "4. Your Rights", body: "You have the right to access, update, or delete your personal information at any time. You may also opt out of marketing communications. To exercise these rights, contact us at privacy@veridianaitech.com." },
            { title: "5. Cookies", body: "We use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings or our cookie consent tool." },
            { title: "6. Contact Us", body: "If you have questions about this Privacy Policy, contact us at privacy@veridianaitech.com or by mail at 15 Glenmanor Drive, Brampton, ON, Canada." },
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
