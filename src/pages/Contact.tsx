import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { siteConfig } from '@/data/portfolio'

export default function Contact() {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-16">
          <span className="text-[#f59e0b] text-sm font-medium uppercase tracking-widest">联系我</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-3">与我联系</h1>
          <p className="text-[#a3a3a3] mt-4 max-w-xl mx-auto">
            欢迎联系我，让我们一起创造精彩的视觉作品
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-[#f59e0b]/20 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center group-hover:bg-[#f59e0b]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">邮箱</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#a3a3a3] text-sm hover:text-[#f59e0b] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-[#f59e0b]/20 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center group-hover:bg-[#f59e0b]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">电话</h3>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-[#a3a3a3] text-sm hover:text-[#f59e0b] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-[#f59e0b]/20 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center group-hover:bg-[#f59e0b]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">地址</h3>
                  <p className="text-[#a3a3a3] text-sm">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#f59e0b]" />
              发送消息
            </h3>
            <form
              action={`mailto:${siteConfig.email}`}
              method="GET"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-[#a3a3a3] mb-2">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="subject"
                  placeholder="您的姓名"
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-white/10 rounded-xl text-white placeholder:text-[#555] focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]/30 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#a3a3a3] mb-2">邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="cc"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-white/10 rounded-xl text-white placeholder:text-[#555] focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]/30 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#a3a3a3] mb-2">消息</label>
                <textarea
                  id="message"
                  name="body"
                  rows={5}
                  placeholder="请输入您的消息..."
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-white/10 rounded-xl text-white placeholder:text-[#555] focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]/30 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#f59e0b] text-black font-semibold rounded-xl hover:bg-[#d97706] transition-all duration-300 shadow-lg shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/30"
              >
                <Send className="w-4 h-4" />
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
