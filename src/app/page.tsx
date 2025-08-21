'use client'

import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import MatrixBackground from '@/components/MatrixBackground'

interface Project {
  id: string
  name: { ja: string; en: string }
  description: { ja: string; en: string }
  technologies: string[]
  category: { ja: string; en: string }
}

const services: Project[] = [
  {
    id: 'ai-layout',
    name: { ja: 'AIレイアウトシステム', en: 'AI Layout System' },
    description: {
      ja: 'インテリジェントなデザインレイアウト自動選択プラットフォーム',
      en: 'Intelligent design layout auto-selection platform'
    },
    technologies: ['React', 'TypeScript', 'AI/ML', 'MongoDB'],
    category: { ja: 'AIプラットフォーム', en: 'AI Platform' }
  },
  {
    id: 'chatbot-solution',
    name: { ja: 'エンタープライズチャットボット', en: 'Enterprise Chatbot' },
    description: {
      ja: '高度なAI対話システム - 企業向けカスタマイズ可能なソリューション',
      en: 'Advanced AI conversation system - Customizable enterprise solutions'
    },
    technologies: ['Python', 'FastAPI', 'NLP', 'Redis'],
    category: { ja: 'AIチャットボット', en: 'AI Chatbot' }
  },
  {
    id: 'custom-llm',
    name: { ja: 'カスタムLLMアプリケーション', en: 'Custom LLM Application' },
    description: {
      ja: '企業専用の大規模言語モデルアプリケーション - セキュアで効率的',
      en: 'Custom large language model applications - Secure & efficient'
    },
    technologies: ['Next.js', 'FastAPI', 'CosmosDB', 'Firebase'],
    category: { ja: 'カスタムLLM', en: 'Custom LLM' }
  },
  {
    id: 'cloud-platform',
    name: { ja: 'AI/MLクラウドプラットフォーム', en: 'AI/ML Cloud Platform' },
    description: {
      ja: 'スケーラブルなクラウドインフラストラクチャ - Terraform自動化',
      en: 'Scalable cloud infrastructure - Terraform automation'
    },
    technologies: ['Terraform', 'AWS', 'Python', 'Docker'],
    category: { ja: 'クラウドプラットフォーム', en: 'Cloud Platform' }
  }
]

export default function Home() {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja')

  const content = {
    ja: {
      title: '合同会社YUCHI',
      subtitle: 'AI・LLM開発',
      description: '最新のAI技術を活用したカスタムアプリケーションの設計・開発を専門とする、次世代のソフトウェア開発会社です。',
      servicesTitle: 'サービス',
      services: [
        { title: 'AIアプリケーション開発', desc: 'カスタムAI・LLMソリューションの設計・開発', icon: '◢◣' },
        { title: 'クラウドプラットフォーム', desc: 'AWS・Azureを使用したスケーラブルなインフラ構築', icon: '▲▼' },
        { title: 'フルスタック開発', desc: 'React/Next.js フロントエンド + Python/FastAPI バックエンド', icon: '◆◇' },
        { title: 'データベース設計', desc: 'MongoDB・CosmosDB・PostgreSQLによる最適なデータ管理', icon: '║═' }
      ],
      servicesPortfolioTitle: 'ポートフォリオ',
      contactTitle: 'お問い合わせ',
      contactLabels: {
        company: '販売業者:',
        representative: '代表責任者:',
        address: '所在地:',
        email: 'メール:'
      },
      contactInfo: {
        company: '合同会社YUCHI',
        representative: '千賀　恒',
        email: 'info@yuchidata.com',
        address: '〒188-0012 東京都西東京市南町３丁目１６番３号'
      },
      bankTitle: '提携銀行',
      partnerBanks: ['三菱UFJ銀行', 'PayPay銀行'],
      legalTitle: '特定商取引法に基づく表記',
      viewLegal: '詳細を見る'
    },
    en: {
      title: 'YUCHI LLC',
      subtitle: 'AI & LLM Development',
      description: 'Next-generation software development company specializing in designing and developing custom applications using cutting-edge AI technology.',
      servicesTitle: 'SERVICES',
      services: [
        { title: 'AI Application Development', desc: 'Custom AI & LLM solutions design and development', icon: '◢◣' },
        { title: 'Cloud Platform', desc: 'Scalable infrastructure using AWS & Azure', icon: '▲▼' },
        { title: 'Full-Stack Development', desc: 'React/Next.js frontend + Python/FastAPI backend', icon: '◆◇' },
        { title: 'Database Design', desc: 'Optimal data management with MongoDB, CosmosDB & PostgreSQL', icon: '║═' }
      ],
      servicesPortfolioTitle: 'PORTFOLIO',
      contactTitle: 'CONTACT INFO',
      contactLabels: {
        company: 'Company:',
        representative: 'Representative:',
        address: 'Address:',
        email: 'Email:'
      },
      contactInfo: {
        company: 'Yuchi LLC',
        representative: 'Koh Senga',
        email: 'info@yuchidata.com',
        address: '3-16-3 Minami-cho, Nishitokyo City, Tokyo 188-0012, Japan'
      },
      bankTitle: 'PARTNER BANKS',
      partnerBanks: ['MUFG Bank', 'PayPay Bank'],
      legalTitle: 'Legal Disclosure',
      viewLegal: 'View Details'
    }
  }

  const t = content[language]

  return (
    <TooltipProvider>
    <div className="min-h-screen relative overflow-hidden">
      {/* Sci-Fi Hacker Matrix Background - Higher z-index */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-gray-900 z-0">
        {/* Matrix digital rain - Higher z-index */}
        <div className="absolute inset-0 z-10">
          <MatrixBackground />
        </div>
        
        {/* Hacker-style ambient lighting */}
        <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-green-400/40 via-cyan-300/20 to-transparent rounded-full blur-3xl animate-float-slow z-5"></div>
        <div className="absolute top-2/3 right-1/5 w-88 h-88 bg-gradient-radial from-cyan-400/35 via-blue-300/20 to-transparent rounded-full blur-3xl animate-float-slow delay-1000 z-5"></div>
        <div className="absolute bottom-1/5 left-1/3 w-80 h-80 bg-gradient-radial from-emerald-400/30 via-green-300/15 to-transparent rounded-full blur-3xl animate-float-slow delay-2000 z-5"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-radial from-blue-400/25 via-cyan-300/15 to-transparent rounded-full blur-3xl animate-float-slow delay-500 z-5"></div>
        
        {/* Terminal grid overlay - Higher z-index */}
        <div className="absolute inset-0 opacity-30 z-15" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,0,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,0,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
      </div>

      {/* Liquid Glass Header */}
      <header className="liquid-glass-header sticky top-0 z-50 relative">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="liquid-glass-element w-12 h-12 rounded-2xl flex items-center justify-center shadow-glass hover:shadow-glass-lg transition-all duration-500 hover:scale-110">
              <span className="text-white font-bold text-lg drop-shadow-lg">Y</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg" style={{ fontFamily: language === 'ja' ? 'var(--font-noto-sans-jp)' : 'var(--font-dela-gothic)', fontWeight: language === 'ja' ? '700' : '400' }}>
              {t.title}
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <div
              onClick={() => setLanguage('ja')}
              className={`liquid-glass-button px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${language === 'ja' ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
            >
              <span className="text-white font-medium">日本語</span>
            </div>
            <div
              onClick={() => setLanguage('en')}
              className={`liquid-glass-button px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${language === 'en' ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
            >
              <span className="text-white font-medium">English</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-20 relative z-30">
        {/* Liquid Glass Hero Section */}
        <section className="text-center space-y-10 py-20 relative">
          <div className="space-y-8 animate-fade-in">
            <div className="liquid-glass-badge inline-flex items-center px-6 py-3 rounded-full text-green-300/90 text-lg font-medium shadow-glass">
              AI & LLM Development
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent leading-tight drop-shadow-2xl" style={{ fontFamily: language === 'ja' ? 'var(--font-noto-sans-jp)' : 'var(--font-dela-gothic)', fontWeight: language === 'ja' ? '700' : '400' }}>
              {t.subtitle}
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              {t.description}
            </p>
            <div className="flex justify-center space-x-8 pt-12">
              <div className="liquid-glass-orb w-24 h-24 rounded-3xl flex items-center justify-center text-3xl shadow-glass animate-float font-mono text-green-400">
                ◢◣
              </div>
              <div className="liquid-glass-orb w-24 h-24 rounded-3xl flex items-center justify-center text-3xl shadow-glass animate-float delay-200 font-mono text-cyan-400">
                ▲▼
              </div>
              <div className="liquid-glass-orb w-24 h-24 rounded-3xl flex items-center justify-center text-3xl shadow-glass animate-float delay-400 font-mono text-blue-400">
                ◆◇
              </div>
            </div>
          </div>
        </section>

        {/* Liquid Glass Services Section */}
        <section className="space-y-12">
          <h3 className="text-5xl font-bold text-center text-white animate-slide-up" style={{ fontFamily: language === 'ja' ? 'var(--font-noto-sans-jp)' : 'var(--font-dela-gothic)', fontWeight: language === 'ja' ? '700' : '400' }}>{t.servicesTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.map((service, index) => {
              const gradients = [
                'from-green-400/20 to-cyan-500/30',
                'from-cyan-400/20 to-blue-500/30', 
                'from-blue-400/20 to-purple-500/30',
                'from-purple-400/20 to-green-500/30'
              ]
              return (
                <div
                  key={index}
                  className="liquid-glass-card rounded-3xl p-8 group animate-slide-up transition-all duration-500 hover:scale-105"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="relative">
                    <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-3xl flex items-center justify-center text-2xl group-hover:rotate-12 group-hover:matrix-glitch transition-transform duration-500 shadow-glass font-mono text-green-400`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl text-green-300 group-hover:text-cyan-200 transition-colors font-medium mb-4">{service.title}</h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors leading-relaxed text-lg">{service.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Liquid Glass Services Portfolio Section */}
        <section className="space-y-12">
          <h3 className="text-5xl font-bold text-center text-white animate-slide-up" style={{ fontFamily: language === 'ja' ? 'var(--font-noto-sans-jp)' : 'var(--font-dela-gothic)', fontWeight: language === 'ja' ? '700' : '400' }}>{t.servicesPortfolioTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((project, index) => {
              const projectIcons = ['◢◣', '▲▼', '◆◇', '║═']
              const gradients = [
                'from-green-500/30 to-cyan-500/40',
                'from-cyan-500/30 to-blue-500/40', 
                'from-blue-500/30 to-purple-500/40',
                'from-purple-500/30 to-green-500/40'
              ]
              return (
                <div
                  key={project.id}
                  className="liquid-glass-card rounded-3xl p-8 group animate-slide-up relative overflow-hidden transition-all duration-500 hover:scale-105"
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                  <div className="relative space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <div className="liquid-glass-element w-16 h-16 rounded-3xl flex items-center justify-center text-2xl group-hover:rotate-12 group-hover:matrix-glitch transition-transform duration-500 shadow-glass font-mono text-green-400">
                          {projectIcons[index]}
                        </div>
                        <h3 className="text-2xl text-green-300 group-hover:text-cyan-200 transition-colors font-medium">{project.name[language]}</h3>
                      </div>
                      <div className="liquid-glass-element text-sm text-cyan-300/80 group-hover:text-cyan-200 transition-colors rounded-xl px-3 py-1">
                        {project.category[language]}
                      </div>
                    </div>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors text-lg">
                      {project.description[language]}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Tooltip key={tech}>
                          <TooltipTrigger>
                            <div
                              className="liquid-glass-element text-sm text-green-300/80 hover:text-green-200 hover:scale-110 hover:matrix-glitch transition-all duration-300 cursor-default rounded-xl px-3 py-1"
                              style={{animationDelay: `${techIndex * 100}ms`}}
                            >
                              {tech}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-mono">TECH: {tech}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-20"></div>

        {/* Liquid Glass Contact & Bank Section */}
        <section className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8 animate-slide-up">
            <h3 className="text-4xl font-bold text-green-300 flex items-center" style={{ fontFamily: language === 'ja' ? 'var(--font-noto-sans-jp)' : 'var(--font-dela-gothic)', fontWeight: language === 'ja' ? '700' : '400' }}>
              {t.contactTitle}
            </h3>
            <div className="liquid-glass-card rounded-3xl p-8 group transition-all duration-500">
              <div className="space-y-6">
                <div className="space-y-4 text-lg">
                  <div>
                    <strong className="text-green-300">{t.contactLabels.company}</strong>
                    <div className="text-white/90 mt-1">{t.contactInfo.company}</div>
                  </div>
                  <div>
                    <strong className="text-green-300">{t.contactLabels.representative}</strong>
                    <div className="text-white/90 mt-1">{t.contactInfo.representative}</div>
                  </div>
                  <div>
                    <strong className="text-green-300">{t.contactLabels.address}</strong>
                    <div className="text-white/90 mt-1 leading-relaxed">{t.contactInfo.address}</div>
                  </div>
                  <div>
                    <strong className="text-green-300">{t.contactLabels.email}</strong>
                    <div className="mt-1">
                      <a href={`mailto:${t.contactInfo.email}`} className="text-cyan-300 hover:text-cyan-200 hover:underline transition-colors">
                        {t.contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-4xl font-bold text-green-300 flex items-center" style={{ fontFamily: language === 'ja' ? 'var(--font-noto-sans-jp)' : 'var(--font-dela-gothic)', fontWeight: language === 'ja' ? '700' : '400' }}>
              {t.bankTitle}
            </h3>
            <div className="liquid-glass-card rounded-3xl p-8 group transition-all duration-500">
              <div>
                <ul className="space-y-4">
                  {t.partnerBanks.map((bank, index) => (
                    <li key={index} className="flex items-center space-x-4 group-hover:translate-x-2 transition-transform duration-300 text-lg" style={{animationDelay: `${index * 100}ms`}}>
                      <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full animate-pulse shadow-glass"></div>
                      <span className="group-hover:text-cyan-200 transition-colors text-white/90 font-mono">{bank}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="liquid-glass-card rounded-3xl p-8 group transition-all duration-500">
              <div className="space-y-6">
                <h4 className="text-2xl flex items-center text-green-300 font-mono">
                  <div className="liquid-glass-element w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-3 shadow-glass font-mono text-green-400">
                    0x
                  </div>
                  {t.legalTitle}
                </h4>
                <div className="liquid-glass-button rounded-xl px-6 py-3 group transition-all duration-300 hover:scale-105 cursor-pointer">
                  <a href="/legal" className="flex items-center space-x-3 text-green-300 font-mono">
                    <span>{t.viewLegal}</span>
                    <span className="group-hover:translate-x-1 transition-transform text-xl">{'>'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Liquid Glass Footer */}
      <footer className="liquid-glass-header border-t border-white/10 py-12 mt-20 relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60 text-lg">
            © 2025 {t.contactInfo.company}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </TooltipProvider>
  )
}