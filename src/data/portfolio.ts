export type VideoType = 'direct' | 'youtube' | 'bilibili' | 'vimeo' | '123pan'

export interface PortfolioItem {
  id: string
  title: string
  category: 'commercial' | 'film' | 'music' | 'documentary'
  description: string
  videoUrl: string
  videoType: VideoType
  thumbnail: string
  tags: string[]
  year: string
}

export interface HeroBackground {
  type: 'image' | 'video'
  url: string
}

export interface SiteConfig {
  name: string
  description: string
  email: string
  phone: string
  location: string
  heroBackground?: HeroBackground
}

/* ─── Design Tokens (Inspired by RunwayML) ───
   Color comes from visual content, not the interface.
   The UI is intentionally invisible — minimal borders, zero shadows.
*/
export const designTokens = {
  colors: {
    black: '#000000',
    deepBlack: '#030303',
    darkSurface: '#1a1a1a',
    pureWhite: '#ffffff',
    charcoal: '#404040',
    coolSlate: '#767d88',
    midSlate: '#7d848e',
    mutedGray: '#a7a7a7',
    borderDark: '#27272a',
    coolSilver: '#c9ccd1',
    gold: '#d4a853',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    displaySize: '48px',
    sectionHeading: '40px',
    cardTitle: '24px',
    bodySize: '16px',
    captionSize: '14px',
    microSize: '11px',
    tightLineHeight: '1.0',
    bodyLineHeight: '1.3',
    negativeTracking: '-1.2px',
  },
  spacing: {
    section: '80px',
    component: '24px',
    gap: '16px',
  },
  radius: {
    subtle: '4px',
    comfortable: '8px',
    generous: '16px',
  },
} as const

export const siteConfig: SiteConfig = {
  name: '狄婷婷',
  description: '专业剪辑师 | 视频后期制作',
  email: 'dq20231216@163.com',
  phone: '18239866359',
  location: '地址',
  heroBackground: {
    type: 'image',
    url: 'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%83%8C%E6%99%AF.jpg',
  },
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: '作品标题 1',
    category: 'commercial',
    description: '作品描述内容，这是一段商业剪辑作品。',
    videoUrl: 'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%A7%86%E9%A2%9102.mp4',
    videoType: 'direct',
    thumbnail: '/dq-2023-github.io/placeholder-1.jpg',
    tags: ['商业', '剪辑'],
    year: '2024',
  },
  {
    id: '2',
    title: '作品标题 2',
    category: 'film',
    description: '作品描述内容，这是一段影视剪辑作品。',
    videoUrl: '视频2地址',
    videoType: 'direct',
    thumbnail: '/dq-2023-github.io/placeholder-2.jpg',
    tags: ['影视', '调色'],
    year: '2024',
  },
  {
    id: '3',
    title: '作品标题 3',
    category: 'music',
    description: '作品描述内容，这是一段音乐剪辑作品。',
    videoUrl: '视频3地址',
    videoType: 'direct',
    thumbnail: '/dq-2023-github.io/placeholder-3.jpg',
    tags: ['音乐', 'MV'],
    year: '2024',
  },
]

export const categories = [
  { key: 'all', label: '全部' },
  { key: 'commercial', label: '商业' },
  { key: 'film', label: '影视' },
  { key: 'music', label: '音乐' },
  { key: 'documentary', label: '纪录片' },
] as const
