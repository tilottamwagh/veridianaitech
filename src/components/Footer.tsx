import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-4 inline-block">
              <span className="text-2xl font-black text-white tracking-wide">Veridianaitech</span>
              <span className="text-[10px] font-bold text-[#c5a059] tracking-[0.2em] uppercase">AI Solutions Inc.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              Veridianaitech AI Solutions Inc. builds AI-powered voice agents, process automation, and enterprise software for growth-minded businesses. Based in Pune, India — serving clients globally.
            </p>
            <div className="mt-5 space-y-1 text-gray-500 text-sm">
              <p>Kalyani Nagar, Pune, Maharashtra, India</p>
              <p>+91 9168693209</p>
              <p>+91 8830599371</p>
              <p>support@veridianaitech.com</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions/sales" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">AI Sales Agent</Link></li>
              <li><Link href="/solutions/support" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">24/7 Support Automation</Link></li>
              <li><Link href="/solutions/document-processing" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">Document Processing</Link></li>
              <li><Link href="/solutions/ai-powered-crm" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">Enterprise Application AI</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-500 hover:text-[#c5a059] text-sm transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Veridianaitech AI Solutions Inc. All rights reserved.</p>
          <p className="text-gray-600 text-sm">veridianaitech.com</p>
        </div>
      </div>
    </footer>
  );
}
