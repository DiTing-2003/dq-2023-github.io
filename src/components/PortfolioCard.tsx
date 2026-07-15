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
      className="group relative bg-[#1f1f1f] rounded-2xl overflow-hidden border border-white/5 hover:border-[#f59e0b]/30 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f59e0b]/5"
      onClick={() => onClick(item)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-[#2a2a2a]">
        {/* Placeholder gradient when no real thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center">
          <div className="text-center">
            <Play className="w-12 h-12 text-[#f59e0b]/30 mx-auto mb-2" />
            <span className="text-xs text-[#a3a3a3]">{item.title}</span>
          </div>
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#f59e0b] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg shadow-[#f59e0b]/30">
            <Play className="w-6 h-6 text-black ml-0.5" />
          </div>
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm text-[#f59e0b] rounded-full border border-[#f59e0b]/20">
          {categoryLabels[item.category] || item.category}
        </span>

        {/* Year Badge */}
        <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm text-[#a3a3a3] rounded-full">
          {item.year}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#f59e0b] transition-colors line-clamp-1">
          {item.title}
        </h3>
        <p className="text-[#a3a3a3] text-sm leading-relaxed line-clamp-2 mb-3">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs bg-white/5 text-[#a3a3a3] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
