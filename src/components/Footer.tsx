import { Link } from 'react-router-dom'
import { Film, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Film className="w-5 h-5 text-[#f59e0b]" />
              <span className="text-white font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              专业视频剪辑与后期制作，用镜头讲述每一个精彩故事。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#a3a3a3] text-sm hover:text-[#f59e0b] transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#a3a3a3] text-sm hover:text-[#f59e0b] transition-colors">
                  简历
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#a3a3a3] text-sm hover:text-[#f59e0b] transition-colors">
                  联系
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#a3a3a3] text-sm">
                <Mail className="w-4 h-4 text-[#f59e0b]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#f59e0b] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#a3a3a3] text-sm">
                <Phone className="w-4 h-4 text-[#f59e0b]" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#f59e0b] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#a3a3a3] text-sm">
                <MapPin className="w-4 h-4 text-[#f59e0b]" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-[#a3a3a3] text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
