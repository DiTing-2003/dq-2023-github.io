import { Link } from 'react-router-dom'
import { Play, ArrowRight } from 'lucide-react'

function scrollToPortfolio(e: React.MouseEvent) {
  e.preventDefault()
  const el = document.getElementById('portfolio')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
import { siteConfig } from '@/data/portfolio'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f59e0b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f59e0b]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-8">
          <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
          <span className="text-sm text-[#f59e0b] font-medium">专业剪辑师</span>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="text-lg sm:text-xl text-[#a3a3a3] mb-10 max-w-2xl mx-auto leading-relaxed">
          专注于视频后期制作，用镜头讲述故事，以剪辑创造感动。
          多年行业经验，服务过众多品牌与项目。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f59e0b] text-black font-semibold rounded-xl hover:bg-[#d97706] transition-all duration-300 shadow-lg shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/30 hover:-translate-y-0.5"
          >
            <Play className="w-5 h-5" />
            查看作品
          </a>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/5 transition-all duration-300 hover:border-[#f59e0b]/30"
          >
            关于我
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[#f59e0b] rounded-full" />
        </div>
      </div>
    </section>
  )
}
