import { MessageCircle, Camera, X, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#e5e5e5] text-gray-800 pt-20 pb-10 px-4 md:px-10 font-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Logo and About */}
          <div className="space-y-6">
            <p className="text-3xl font-serif font-black tracking-tight text-black">OCEAN PEARL</p>
            <p className="text-gray-600 leading-relaxed max-w-62">
              Defining the standard of global luxury hospitality since 1904.
            </p>
            <div className="flex gap-4">
              <button className="p-3 border border-gray-400 rounded-lg hover:bg-white hover:border-black transition-all duration-300">
                <MessageCircle size={20} className="text-black" />
              </button>
              <button className="p-3 border border-gray-400 rounded-lg hover:bg-white hover:border-black transition-all duration-300">
                <X size={20} className="text-black" />
              </button>
              <button className="p-3 border border-gray-400 rounded-lg hover:bg-white hover:border-black transition-all duration-300">
                <Camera size={20} className="text-black" />
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
        <div className="pt-10 border-t border-gray-300 flex flex-col md:row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500">
          <p>© {new Date().getFullYear()} OCEAN PEARL RESORTS. ALL RIGHTS RESERVED.</p>
          <p className="text-gray-900">DESIGNED FOR EXCELLENCE</p>
        </div>
      </div>
    </footer>
  )
}
