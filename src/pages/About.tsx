import { Calendar, Award } from 'lucide-react'
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
      period: '2022 - 至今',
      company: '自由剪辑师',
      description: '承接各类商业广告、短视频、纪录片等剪辑项目',
    },
    {
      period: '2020 - 2022',
      company: '某某传媒有限公司',
      description: '担任后期剪辑师，负责影视项目后期制作',
    },
    {
      period: '2018 - 2020',
      company: '某某影视工作室',
      description: '初级剪辑师，参与多部短片和广告制作',
    },
  ]

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-16">
          <span className="text-[#f59e0b] text-sm font-medium uppercase tracking-widest">关于我</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-3">个人简历</h1>
        </div>

        {/* Profile Section */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar Placeholder */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-black">{siteConfig.name[0]}</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">{siteConfig.name}</h2>
              <p className="text-[#f59e0b] mb-4 font-medium">{siteConfig.description}</p>
              <p className="text-[#a3a3a3] leading-relaxed">
                热爱视频创作，拥有多年专业剪辑经验。擅长通过精准的节奏把控和富有创意的叙事手法，
                将原始素材转化为引人入胜的视觉作品。对画面质感、色彩搭配和声音设计有深入理解，
                致力于为每一个项目打造独特的视觉语言。
              </p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-5 h-5 text-[#f59e0b]" />
            <h3 className="text-xl font-bold text-white">工作经历</h3>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-white/10 last:border-transparent">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#f59e0b] border-4 border-[#1a1a1a] -translate-x-1/2" />
                <span className="text-sm text-[#f59e0b] font-medium">{exp.period}</span>
                <h4 className="text-white font-semibold mt-1">{exp.company}</h4>
                <p className="text-[#a3a3a3] text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-5 h-5 text-[#f59e0b]" />
            <h3 className="text-xl font-bold text-white">专业技能</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                  <span className="text-[#a3a3a3] text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-full transition-all duration-1000"
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
