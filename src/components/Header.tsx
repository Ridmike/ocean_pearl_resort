import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'ROOMS', path: '/rooms' },
  { name: 'FACILITIES', path: '/facilities' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACT', path: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <header 
      className={`fixed top-0  lg:backdrop-blur-sm left-0 w-full z-50 transition-all duration-300 px-4 md:px-10 lg:px-20 py-4 ${
        isScrolled ? 'lg:bg-white/70 bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className={`text-2xl font-serif font-black tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}
        >
          OCEAN <span className="text-[#a48e60]">PEARL</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/')
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] tracking-[0.25em] font-bold transition-all duration-300 border-b-2 pb-1 ${
                  isActive 
                    ? 'text-[#a48e60] border-[#a48e60]' 
                    : ' border-transparent hover:text-[#a48e60]'
                } ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button className="bg-black text-white px-8 py-3 text-[10px] tracking-[0.25em] font-bold hover:bg-[#a48e60] transition-colors duration-300 rounded-sm">
            BOOK NOW
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-md bg-white z-60 flex flex-col items-center justify-center gap-8 transition-transform duration-500 shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-black"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl tracking-[0.3em] font-bold text-gray-900 hover:text-[#a48e60]"
          >
            {link.name}
          </Link>
        ))}
        
        <button className="mt-4 bg-black text-white px-10 py-4 tracking-[0.3em] font-bold rounded-sm">
          BOOK NOW
        </button>
      </div>
    </header>
  )
}
