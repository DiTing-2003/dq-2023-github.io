import { Play } from 'lucide-react'
import type { PortfolioItem } from '@/data/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
  onClick: (item: PortfolioItem) => void
}

export default function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  const categoryLabels: Record<string, string> = {
    commercial: '商业',
    film: '影视',
    music: '音乐',
    documentary: '纪录片',
  }

  return (
    <div
      className="group relative bg-brand-surface rounded-sm overflow-hidden border border-brand-border cursor-pointer transition-all duration-500 hover:border-white/20"
      onClick={() => onClick(item)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-brand-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-surface to-brand-black flex items-center justify-center">
          <div className="text-center">
            <Play className="w-10 h-10 text-brand-muted/30 mx-auto mb-2" />
            <span className="text-xs text-brand-muted">{item.title}</span>
          </div>
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
            <Play className="w-5 h-5 text-black ml-0.5" />
          </div>
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-2 py-1 text-[11px] uppercase tracking-[0.1em] font-medium bg-black/60 text-brand-muted rounded-sm">
          {categoryLabels[item.category] || item.category}
        </span>

        {/* Year Badge */}
        <span className="absolute top-3 right-3 px-2 py-1 text-[11px] text-brand-muted bg-black/40 rounded-sm">
          {item.year}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-white font-medium text-lg leading-tight mb-1.5 group-hover:text-brand-gold transition-colors line-clamp-1">
          {item.title}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed line-clamp-2 mb-3">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] uppercase tracking-[0.05em] text-brand-slate bg-white/[0.04] rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
