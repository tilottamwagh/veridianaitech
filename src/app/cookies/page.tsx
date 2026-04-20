export default function Cookies() {
  return (
    <div className="bg-black pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <p className="section-label">Legal</p>
        <h1 className="text-4xl font-black text-white mb-4">Cookie Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last Updated: April 21, 2026</p>
        <div className="space-y-10">
          {[
            { title: "What Are Cookies", body: "Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, understand how you use our site, and improve your overall experience." },
            { title: "Cookies We Use", body: "We use essential cookies (required for the site to function), analytical cookies (to understand site usage via tools like Google Analytics), and preference cookies (to remember your settings and choices)." },
            { title: "Managing Cookies", body: "You can control or disable cookies through your browser settings at any time. Note that disabling certain cookies may affect the functionality of parts of our website." },
            { title: "Contact", body: "For questions about our cookie practices, contact us at privacy@veridianaitech.com." },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-white font-bold text-xl mb-3">{s.title}</h2>
              <p className="text-gray-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
