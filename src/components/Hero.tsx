import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/portfolio'

function scrollToPortfolio(e: React.MouseEvent) {
  e.preventDefault()
  const el = document.getElementById('portfolio')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const bg = siteConfig.heroBackground

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      {bg?.type === 'video' ? (
        <>
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={bg.url} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : bg?.type === 'image' ? (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg.url})` }} />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-brand-black" />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-border rounded-sm mb-10">
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
          <span className="text-xs uppercase tracking-[0.15em] text-brand-muted font-medium">
            专业剪辑师
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-[1.0] tracking-[-1.2px]">
          {siteConfig.name}
        </h1>

        <p className="text-base sm:text-lg text-brand-slate mb-12 max-w-xl mx-auto leading-relaxed">
          专注于视频后期制作，用镜头讲述故事，以剪辑创造感动。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="px-6 py-3 text-sm font-medium text-black bg-white rounded-sm hover:bg-white/90 transition-all"
          >
            查看作品
          </a>
          <Link
            to="/about"
            className="px-6 py-3 text-sm font-medium text-brand-slate border border-brand-border rounded-sm hover:text-white hover:border-white/30 transition-all"
          >
            关于我
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border border-brand-border rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2.5 bg-brand-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
