import { siteConfig } from '@/data/portfolio'

export default function About() {
  const skills = [
    { name: 'Premiere Pro', level: 95 },
    { name: 'After Effects', level: 85 },
    { name: 'Final Cut Pro', level: 80 },
    { name: 'DaVinci Resolve', level: 75 },
    { name: 'Photoshop', level: 70 },
    { name: 'Audition', level: 85 },
  ]

  const experiences = [
    {
      period: '2022 — 至今',
      company: '自由剪辑师',
      description: '承接各类商业广告、短视频、纪录片等剪辑项目',
    },
    {
      period: '2020 — 2022',
      company: '某某传媒有限公司',
      description: '担任后期剪辑师，负责影视项目后期制作',
    },
    {
      period: '2018 — 2020',
      company: '某某影视工作室',
      description: '初级剪辑师，参与多部短片和广告制作',
    },
  ]

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-brand-slate font-medium mb-3">
          关于我
        </p>
        <h1 className="text-3xl sm:text-4xl font-medium text-white leading-tight tracking-[-0.5px] mb-16">
          个人简历
        </h1>

        {/* Profile */}
        <div className="border border-brand-border rounded-sm p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-20 h-20 rounded-sm bg-brand-surface flex items-center justify-center flex-shrink-0 border border-brand-border">
              <span className="text-2xl font-medium text-brand-gold">{siteConfig.name[0]}</span>
            </div>
            <div>
              <h2 className="text-xl font-medium text-white mb-1">{siteConfig.name}</h2>
              <p className="text-brand-slate text-sm mb-4">{siteConfig.description}</p>
              <p className="text-brand-muted text-sm leading-relaxed">
                热爱视频创作，拥有多年专业剪辑经验。擅长通过精准的节奏把控和富有创意的叙事手法，
                将原始素材转化为引人入胜的视觉作品。对画面质感、色彩搭配和声音设计有深入理解，
                致力于为每一个项目打造独特的视觉语言。
              </p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="border border-brand-border rounded-sm p-8 mb-8">
          <p className="text-[11px] uppercase tracking-[0.15em] text-brand-slate font-medium mb-8">
            工作经历
          </p>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l border-brand-border last:border-transparent">
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-brand-gold -translate-x-1/2 mt-1.5" />
                <p className="text-xs text-brand-gold uppercase tracking-[0.1em] font-medium">{exp.period}</p>
                <h3 className="text-white font-medium mt-1">{exp.company}</h3>
                <p className="text-brand-muted text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="border border-brand-border rounded-sm p-8">
          <p className="text-[11px] uppercase tracking-[0.15em] text-brand-slate font-medium mb-8">
            专业技能
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-white text-sm">{skill.name}</span>
                  <span className="text-brand-slate text-xs">{skill.level}%</span>
                </div>
                <div className="h-1 bg-brand-border rounded-sm overflow-hidden">
                  <div
                    className="h-full bg-brand-gold rounded-sm transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
