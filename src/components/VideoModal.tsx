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
    return () => {
      document.body.style.overflow = ''
    }
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors p-2 group"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Video Title */}
        <h3 className="text-white text-lg font-semibold mb-4">{item.title}</h3>

        {/* Video Player */}
        {item.videoType === 'direct' ? (
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full aspect-video rounded-2xl"
              controlsList="nodownload"
            >
              <source src={item.videoUrl} type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
          </div>
        ) : (
          <div className="aspect-video bg-[#1a1a1a] rounded-2xl flex items-center justify-center shadow-2xl">
            <p className="text-[#a3a3a3]">
              视频类型：{item.videoType} | 视频地址：{item.videoUrl}
            </p>
          </div>
        )}

        {/* Video Info */}
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-white/10 text-[#a3a3a3] rounded-full"
            >
              {tag}
            </span>
          ))}
          <span className="px-3 py-1 text-sm bg-white/10 text-[#a3a3a3] rounded-full">
            {item.year}
          </span>
        </div>
      </div>
    </div>
  )
}
