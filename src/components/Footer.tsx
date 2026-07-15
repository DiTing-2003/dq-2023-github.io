import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-border bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Brand */}
          <div>
            <p className="text-white font-medium mb-3 tracking-tight">{siteConfig.name}</p>
            <p className="text-brand-slate text-sm leading-relaxed">
              专业视频剪辑与后期制作
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-brand-muted mb-4 font-medium">导航</p>
            <ul className="space-y-2">
              {[
                { to: '/', label: '首页' },
                { to: '/about', label: '简历' },
                { to: '/contact', label: '联系' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-brand-slate text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-brand-muted mb-4 font-medium">联系方式</p>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-brand-slate text-sm hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="text-brand-slate text-sm hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-brand-slate text-sm">
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 text-center">
          <p className="text-brand-muted text-xs">
            &copy; {currentYear} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
