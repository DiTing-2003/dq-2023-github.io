import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Film, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/about', label: '简历' },
  { to: '/contact', label: '联系' },
]

export default function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-[#f59e0b] transition-colors group"
          >
            <Film className="w-6 h-6 text-[#f59e0b] group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold tracking-wide">狄婷婷</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-sm font-medium transition-colors relative py-1',
                  location.pathname === link.to
                    ? 'text-[#f59e0b]'
                    : 'text-[#a3a3a3] hover:text-white'
                )}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f59e0b] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:text-[#f59e0b] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-white/5 pt-4 animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'text-sm font-medium transition-colors px-3 py-2 rounded-lg',
                    location.pathname === link.to
                      ? 'text-[#f59e0b] bg-[#f59e0b]/10'
                      : 'text-[#a3a3a3] hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
