import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import type { PortfolioItem } from '@/data/portfolio'

interface VideoModalProps {
  item: PortfolioItem
  onClose: () => void
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-brand-muted hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-white text-lg font-medium mb-3 leading-tight">
          {item.title}
        </h3>

        {item.videoType === 'direct' ? (
          <div className="relative bg-black overflow-hidden rounded-sm">
            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full aspect-video"
              controlsList="nodownload"
            >
              <source src={item.videoUrl} type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
          </div>
        ) : (
          <div className="aspect-video bg-brand-deep rounded-sm flex items-center justify-center">
            <p className="text-brand-slate text-sm">
              视频类型：{item.videoType}
            </p>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs text-brand-slate border border-brand-border rounded-sm">
              {tag}
            </span>
          ))}
          <span className="px-2 py-0.5 text-xs text-brand-slate border border-brand-border rounded-sm">
            {item.year}
          </span>
        </div>
      </div>
    </div>
  )
}
