import { useState } from 'react'
import { cn } from '@/lib/utils'
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
      <div className="text-center mb-12">
        <span className="text-[#f59e0b] text-sm font-medium uppercase tracking-widest">作品集</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">精选作品</h2>
        <p className="text-[#a3a3a3] max-w-xl mx-auto">
          点击作品卡片查看视频演示
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              'px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300',
              activeCategory === cat.key
                ? 'bg-[#f59e0b] text-black shadow-lg shadow-[#f59e0b]/20'
                : 'bg-white/5 text-[#a3a3a3] hover:text-white hover:bg-white/10 border border-white/5'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={(item) => setSelectedItem(item)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-[#a3a3a3]">该分类暂无作品</p>
        </div>
      )}

      {/* Video Modal */}
      {selectedItem && (
        <VideoModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  )
}
