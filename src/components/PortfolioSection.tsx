import { useState } from 'react'
import { portfolioItems, categories, type PortfolioItem } from '@/data/portfolio'
import PortfolioCard from './PortfolioCard'
import VideoModal from './VideoModal'

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-brand-slate font-medium mb-3">
          作品
        </p>
        <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight tracking-[-0.5px]">
          精选作品
        </h2>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-1.5 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3 py-1.5 text-xs uppercase tracking-[0.08em] rounded-sm transition-all duration-200 ${
              activeCategory === cat.key
                ? 'bg-white text-black'
                : 'text-brand-slate border border-brand-border hover:text-white hover:border-white/30'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={(item) => setSelectedItem(item)}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-brand-slate text-sm">该分类暂无作品</p>
        </div>
      )}

      {selectedItem && (
        <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}
