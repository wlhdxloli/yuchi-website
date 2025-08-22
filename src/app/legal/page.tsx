'use client'

import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import MatrixBackground from '@/components/MatrixBackground'
import Link from 'next/link'

export default function LegalPage() {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja')

  const content = {
    ja: {
      title: '特定商取引法に基づく表記',
      backToHome: 'ホームに戻る',
      sections: {
        business: {
          title: '販売業者',
          value: '合同会社YUCHI',
          icon: '🏢'
        },
        representative: {
          title: '代表責任者',
          value: '千賀　恒',
          icon: '👨‍💼'
        },
        address: {
          title: '所在地',
          value: '〒188-0012\n東京都西東京市南町３丁目１６番３号',
          icon: '📍'
        },
        contact: {
          title: '連絡先',
          value: 'メール：info@yuchidata.com',
          icon: '📞'
        },
        services: {
          title: '販売商品・サービス',
          value: 'ソフトウェア開発サービス\nAI・LLMアプリケーション開発\nクラウドプラットフォーム構築\nシステム設計・開発・保守',
          icon: '💻'
        },
        pricing: {
          title: '販売価格',
          value: '各案件により個別に見積もりいたします。\n詳細はお問い合わせください。',
          icon: '💰'
        },
        payment: {
          title: '支払い方法・時期',
          value: '銀行振込\n支払い時期：契約により定める',
          icon: '💳'
        },
        banks: {
          title: '提携銀行',
          value: '三菱UFJ銀行\nPayPay銀行',
          icon: '🏦'
        },
        delivery: {
          title: '商品・サービスの引渡時期',
          value: '契約により定める期日に納品いたします。',
          icon: '📦'
        },
        returns: {
          title: '返品・キャンセルについて',
          value: 'サービスの性質上、原則として返品・キャンセルはお受けできません。\n詳細は契約時にご確認ください。',
          icon: '🔄'
        }
      }
    },
    en: {
      title: 'Legal Disclosure (Based on Specified Commercial Transactions Act)',
      backToHome: 'Back to Home',
      sections: {
        business: {
          title: 'Business Name',
          value: 'Yuchi LLC',
          icon: '🏢'
        },
        representative: {
          title: 'Representative',
          value: 'Koh Senga',
          icon: '👨‍💼'
        },
        address: {
          title: 'Address',
          value: '3-16-3 Minami-cho, Nishitokyo City, Tokyo 188-0012, Japan',
          icon: '📍'
        },
        contact: {
          title: 'Contact Information',
          value: 'Email: info@yuchidata.com',
          icon: '📞'
        },
        services: {
          title: 'Products/Services',
          value: 'Software Development Services\nAI & LLM Application Development\nCloud Platform Construction\nSystem Design, Development & Maintenance',
          icon: '💻'
        },
        pricing: {
          title: 'Pricing',
          value: 'Individual quotations provided for each project.\nPlease contact us for details.',
          icon: '💰'
        },
        payment: {
          title: 'Payment Method & Timing',
          value: 'Bank Transfer\nPayment Timing: As specified in contract',
          icon: '💳'
        },
        banks: {
          title: 'Partner Banks',
          value: 'MUFG Bank\nPayPay Bank',
          icon: '🏦'
        },
        delivery: {
          title: 'Service Delivery Time',
          value: 'Delivery according to the deadline specified in the contract.',
          icon: '📦'
        },
        returns: {
          title: 'Returns & Cancellations',
          value: 'Due to the nature of our services, returns and cancellations are generally not accepted.\nPlease confirm details at the time of contract.',
          icon: '🔄'
        }
      }
    }
  }

  const t = content[language]

  return (
    <TooltipProvider>
    <div className="min-h-screen relative overflow-hidden">
      {/* Sci-Fi Hacker Matrix Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-gray-900 z-0">
        {/* Matrix digital rain */}
        <div className="absolute inset-0 z-10">
          <MatrixBackground />
        </div>
        {/* Hacker-style ambient lighting */}
        <div className="absolute top-1/6 left-1/6 w-80 h-80 bg-gradient-radial from-green-400/40 via-cyan-300/20 to-transparent rounded-full blur-3xl animate-float-slow z-5"></div>
        <div className="absolute top-2/3 right-1/5 w-96 h-96 bg-gradient-radial from-cyan-400/35 via-blue-300/20 to-transparent rounded-full blur-3xl animate-float-slow delay-1000 z-5"></div>
        <div className="absolute bottom-1/5 left-1/3 w-72 h-72 bg-gradient-radial from-emerald-400/30 via-green-300/15 to-transparent rounded-full blur-3xl animate-float-slow delay-2000 z-5"></div>
        
        {/* Terminal grid overlay */}
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
          <Link href="/" className="flex items-center space-x-4">
            <div className="liquid-glass-element w-12 h-12 rounded-2xl flex items-center justify-center shadow-glass hover:shadow-glass-lg transition-all duration-500 hover:scale-110">
              <span className="text-white font-bold text-lg drop-shadow-lg">Y</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
              Yuchi LLC
            </h1>
          </Link>
          
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

      <main className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="liquid-glass-badge inline-flex items-center px-6 py-3 rounded-full text-white/90 text-lg font-medium shadow-glass mb-6">
              <span className="mr-3 text-2xl">📋</span>
              Legal Information
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent mb-8 drop-shadow-2xl">
              {t.title}
            </h1>
            <div className="liquid-glass-button rounded-xl px-6 py-3 inline-block transition-all duration-300 hover:scale-105">
              <Link href="/" className="text-white text-lg flex items-center space-x-2">
                <span>←</span>
                <span>{t.backToHome}</span>
              </Link>
            </div>
          </div>

          {/* Legal Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(t.sections).map(([key, section], index) => {
              const gradients = [
                'from-blue-500/30 to-cyan-500/40',
                'from-green-500/30 to-teal-500/40',
                'from-purple-500/30 to-pink-500/40',
                'from-orange-500/30 to-red-500/40',
                'from-rose-500/30 to-pink-500/40',
                'from-cyan-500/30 to-blue-500/40',
                'from-teal-500/30 to-green-500/40',
                'from-indigo-500/30 to-purple-500/40',
                'from-amber-500/30 to-orange-500/40',
                'from-emerald-500/30 to-teal-500/40'
              ]
              return (
                <div 
                  key={key} 
                  className="liquid-glass-card rounded-3xl p-8 group transition-all duration-500 hover:scale-105 animate-slide-up relative overflow-hidden"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl`}></div>
                  <div className="relative">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="liquid-glass-element w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-glass group-hover:rotate-12 transition-transform duration-500">
                        {section.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {section.title}
                      </h3>
                    </div>
                    <div className="text-white/80 whitespace-pre-line leading-relaxed text-lg group-hover:text-white/90 transition-colors">
                      {section.value}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <div className="liquid-glass-element rounded-2xl px-8 py-4 inline-block">
              <p className="text-white/60 text-lg">
                最終更新日: 2025年1月 | Last Updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Liquid Glass Footer */}
      <footer className="liquid-glass-header border-t border-white/10 py-12 mt-20 relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60 text-lg">
            © 2025 合同会社YUCHI / Yuchi LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </TooltipProvider>
  )
}