import { siteConfig } from '@/data/portfolio'

export default function Contact() {
  return (
    <main className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-brand-slate font-medium mb-3">
          联系我
        </p>
        <h1 className="text-3xl sm:text-4xl font-medium text-white leading-tight tracking-[-0.5px] mb-6">
          与我联系
        </h1>
        <p className="text-brand-slate text-sm mb-16 max-w-lg">
          欢迎联系我，让我们一起创造精彩的视觉作品
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { label: '邮箱', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { label: '电话', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { label: '地址', value: siteConfig.location, href: null },
            ].map((item) => (
              <div key={item.label} className="border border-brand-border rounded-sm p-5 hover:border-white/20 transition-colors">
                <p className="text-[11px] uppercase tracking-[0.15em] text-brand-muted font-medium mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="text-white text-sm hover:text-brand-gold transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white text-sm">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="border border-brand-border rounded-sm p-6">
            <p className="text-sm font-medium text-white mb-6">发送消息</p>
            <form action={`mailto:${siteConfig.email}`} method="GET" className="space-y-4">
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="姓名"
                  className="w-full px-3 py-2.5 bg-brand-black border border-brand-border rounded-sm text-white text-sm placeholder:text-brand-muted focus:outline-none focus:border-white/30 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="cc"
                  placeholder="邮箱"
                  className="w-full px-3 py-2.5 bg-brand-black border border-brand-border rounded-sm text-white text-sm placeholder:text-brand-muted focus:outline-none focus:border-white/30 transition-all"
                />
              </div>
              <div>
                <textarea
                  name="body"
                  rows={4}
                  placeholder="消息内容"
                  className="w-full px-3 py-2.5 bg-brand-black border border-brand-border rounded-sm text-white text-sm placeholder:text-brand-muted focus:outline-none focus:border-white/30 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2.5 text-sm font-medium text-black bg-white rounded-sm hover:bg-white/90 transition-all"
              >
                发送
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
