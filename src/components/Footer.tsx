import { X, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#e5e5e5] text-gray-800 pt-20 pb-10 px-4 md:px-10 font-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Logo and About */}
          <div className="space-y-6">
            <p className="text-3xl font-serif font-black tracking-tight text-black">OCEAN <span className="text-[#a48e60]">PEARL</span></p>
            <p className="text-gray-600 leading-relaxed max-w-62">
              Defining the standard of global luxury hospitality since 2000.
            </p>
            <div className="flex gap-4">
              <button className="p-3 border-2 border-gray-400 rounded-lg hover:bg-white hover:border-[#a48e60] transition-all duration-300" aria-label="Facebook">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </button>
              <button className="p-3 border-2 border-gray-400 rounded-lg hover:bg-white hover:border-[#a48e60] transition-all duration-300" aria-label="Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </button>
              <button className="p-3 border-2 border-gray-400 rounded-lg hover:bg-white hover:border-[#a48e60] transition-all duration-300" aria-label="Threads">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="M19.29 17.29L18 16c-1.12-1.12-2.58-1.55-4.5-1.55-2.14 0-3.5.86-3.5 2.55s1.36 2.55 3.5 2.55 3.41-.49 4.33-1.2l1.46 1.45c-1.38 1.13-3.23 1.75-5.79 1.75-3.66 0-6.5-2-6.5-5.55s2.84-5.55 6.5-5.55c2.31 0 4.19.68 5.46 1.84L20 11.5l1.5-1.5c-1.38-1.44-3.66-2.5-7.5-2.5-4.8 0-9.5 3.25-9.5 9.5s4.7 9.5 9.5 9.5c3.27 0 5.86-1.1 7.79-3.21z" />
                  <path d="M13.5 11.5V6.5" />
                  <path d="M13.5 6.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5" />
                </svg>
              </button>
              <button className="p-3 border-2 border-gray-400 rounded-lg hover:bg-white hover:border-[#a48e60] transition-all duration-300" aria-label="X">
                <X size={20} className="text-black" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-black px-1">Navigation</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li><a href="#about" className="hover:text-black transition-colors px-1">About Us</a></li>
              <li><a href="#accommodations" className="hover:text-black transition-colors px-1">Accommodations</a></li>
              <li><a href="#dining" className="hover:text-black transition-colors px-1">Dining Experience</a></li>
              <li><a href="#spa" className="hover:text-black transition-colors px-1">Spa & Wellness</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-black px-1">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li><a href="#privacy" className="hover:text-black transition-colors px-1">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-black transition-colors px-1">Terms of Service</a></li>
              <li><a href="#careers" className="hover:text-black transition-colors px-1">Careers</a></li>
              <li><a href="#press" className="hover:text-black transition-colors px-1">Press Kit</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-black px-1">Newsletter</h3>
            <p className="text-gray-600 text-sm leading-relaxed px-1">
              Subscribe to receive exclusive offers and heritage news.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-transparent border border-gray-900 px-4 py-3 pr-12 focus:outline-none focus:bg-white/50 transition-all text-sm"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 hover:translate-x-1 transition-transform">
                <ArrowRight size={20} className="text-gray-900" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500">
          <p>© {new Date().getFullYear()} OCEAN PEARL RESORTS. ALL RIGHTS RESERVED.</p>
          <p className="text-gray-900">DESIGNED FOR EXCELLENCE</p>
        </div>
      </div>
    </footer>
  )
}
