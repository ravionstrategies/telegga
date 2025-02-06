'use client'

import { useState } from 'react'
import BetaSignupModal from './BetaSignupModal'

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'pro' | 'enterprise' | null>(null)

  const prices = {
    free: 0,
    pro: 49,
    enterprise: 99
  }

  const getPrice = (basePrice: number) => {
    if (isAnnual) {
      // 20% Rabatt für jährliche Zahlung
      const annualPrice = basePrice * 12
      const discount = annualPrice * 0.2
      return Math.floor(annualPrice - discount)
    }
    return basePrice
  }

  const handleGetStarted = (plan: 'pro' | 'enterprise') => {
    setSelectedPlan(plan)
    setIsBetaModalOpen(true)
  }

  return (
    <>
      <div className="w-full max-w-7xl mx-auto mt-32 relative">
        {/* Floating Icons */}
        <div className="absolute -top-20 -left-10 w-full h-40">
          {/* Analysis Icon */}
          <div className="absolute left-[10%] top-[20%] animate-float-slow">
            <div className="w-14 h-14 rounded-[18px] bg-[#1A1A1A]/60 backdrop-blur-md border border-white/[0.05] flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              </svg>
            </div>
          </div>

          {/* Telegram Icon */}
          <div className="absolute left-[45%] -top-[10%] animate-float-normal">
            <div className="w-14 h-14 rounded-[18px] bg-[#1A1A1A]/60 backdrop-blur-md border border-white/[0.05] flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.5 5.5l-20 8l7.5 3M21.5 5.5l-11 14l-1.5-5.5M21.5 5.5L9 16" />
              </svg>
            </div>
          </div>

          {/* Money Icon */}
          <div className="absolute right-[20%] top-[30%] animate-float-fast">
            <div className="w-14 h-14 rounded-[18px] bg-[#1A1A1A]/60 backdrop-blur-md border border-white/[0.05] flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 rounded-full text-xs text-zinc-400">
            <span>💰</span>
            Pricing
          </div>
          <h2 className="text-4xl font-semibold">
            Simple and Flexible <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-transparent bg-clip-text">Pricing</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900/50 rounded-full p-1 flex gap-1">
            <button 
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                !isAnnual ? 'bg-white text-black' : 'text-zinc-400 hover:text-zinc-300'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                isAnnual ? 'bg-white text-black' : 'text-zinc-400 hover:text-zinc-300'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-[28px] p-8 border border-white/[0.05] relative group transition-all duration-300 hover:bg-[#1A1A1A]/80">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[28px]" />
            <div className="relative space-y-4">
              <div className="inline-flex px-3 py-1 bg-zinc-800/50 rounded-full text-xs text-zinc-400">
                Free
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-medium text-white">$0</span>
                <span className="text-sm text-zinc-500">/{isAnnual ? 'per year' : 'per month'}</span>
              </div>
              <p className="text-sm text-zinc-500">💡 Start for free – Upgrade for Full Power!</p>
            </div>

            <div className="relative mt-8 space-y-4">
              <ul className="space-y-5">
                {[
                  {
                    title: 'Basic AI Group Segment Analysis 🔍',
                    description: '3x per day analysis with limited AI filters.'
                  },
                  {
                    title: 'AI Group Summarizer 📜',
                    description: 'Access conversation insights from the last 7 days.'
                  },
                  {
                    title: 'Basic Post Scheduler 📆',
                    description: 'Schedule posts with limited scheduling options.'
                  },
                  {
                    title: 'Basic Engagement Detection 🔎',
                    description: 'Basic scan for fake engagement & bot detection.'
                  },
                  {
                    title: 'AI Lead Finder 🎯',
                    description: 'Get 10 hyper-targeted leads per day.'
                  }
                ].map((feature) => (
                  <li key={feature.title} className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-1 flex-shrink-0 text-zinc-400" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="space-y-1">
                      <span className="block text-sm text-zinc-300">{feature.title}</span>
                      <span className="block text-xs text-zinc-500 leading-relaxed">{feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/[0.05] pt-4">
                <p className="text-sm text-zinc-400">
                  🚀 Perfect for testing the power of our AI before unlocking full automation!
                </p>
              </div>
            </div>

            <div className="relative mt-8">
              <button
                id="free-plan-beta-button"
                onClick={() => setIsBetaModalOpen(true)}
                className="w-full py-3 rounded-xl bg-zinc-800/80 text-sm text-white hover:bg-zinc-700 transition-colors border border-white/[0.1]"
              >
                Apply for Beta
              </button>
            </div>
          </div>

          {/* Pro Plan - Highlighted */}
          <div className="bg-white rounded-[28px] p-8 relative scale-105 shadow-2xl shadow-white/5">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-full text-xs text-white font-medium">
              🔥 Most Popular
            </div>
            <div className="space-y-4">
              <div className="inline-flex px-3 py-1 bg-black/5 rounded-full text-xs text-black/60">
                Pro
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-medium text-black">${getPrice(prices.pro)}</span>
                <span className="text-sm text-zinc-600">/{isAnnual ? 'per year' : 'per month'}</span>
              </div>
              <p className="text-sm text-zinc-600">💡 For growing teams & businesses needing full automation & deeper insights.</p>
            </div>

            <div className="relative mt-8 space-y-4">
              <ul className="space-y-5">
                {[
                  {
                    title: 'Unlimited AI Group Segment Analysis 🔍',
                    description: 'Analyze unlimited groups with full AI-powered filtering.'
                  },
                  {
                    title: 'Advanced AI Group Summarizer 📜',
                    description: 'Access & analyze conversations up to 30 days back.'
                  },
                  {
                    title: 'AI Lead Finder 🚀',
                    description: '50 hyper-targeted leads daily with AI prioritization.'
                  },
                  {
                    title: 'Unlimited AI Post Scheduler 📆',
                    description: 'Plan & automate unlimited posts for maximum reach.'
                  },
                  {
                    title: 'AI Competitor Group Tracking 📊',
                    description: 'Track up to 5 competitor groups for insights & trends.'
                  },
                  {
                    title: 'Deep AI Fake Engagement & Bot Detection 🔎',
                    description: 'Advanced AI scans to detect and avoid low-quality groups.'
                  },
                  {
                    title: 'Priority AI Processing ⚡',
                    description: 'Faster processing & priority access for every request.'
                  }
                ].map((feature) => (
                  <li key={feature.title} className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-1 flex-shrink-0 text-zinc-600" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="space-y-1">
                      <span className="block text-sm text-zinc-800 font-medium">{feature.title}</span>
                      <span className="block text-xs text-zinc-600 leading-relaxed">{feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => handleGetStarted('pro')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </button>
            </div>

            {isAnnual && (
              <div className="mt-2 text-xs text-emerald-600 font-medium">
                Save 20% with annual billing
              </div>
            )}
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-[28px] p-8 border border-white/[0.05] relative group transition-all duration-300 hover:bg-[#1A1A1A]/80">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[28px]" />
            <div className="relative space-y-4">
              <div className="inline-flex px-3 py-1 bg-zinc-800/50 rounded-full text-xs text-zinc-400">
                ⚡ Enterprise
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-medium text-white">${getPrice(prices.enterprise)}</span>
                <span className="text-sm text-zinc-500">/{isAnnual ? 'per year' : 'per month'}</span>
              </div>
              <p className="text-sm text-zinc-500">💡 For businesses managing multiple groups, with full control & unlimited power.</p>
            </div>

            <div className="relative mt-8 space-y-4">
              <div className="text-sm text-white">Everything in Pro, plus:</div>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Unlimited Everything 🔥',
                    description: 'Unlimited access to all AI features, analytics & automation – with NO daily limits.'
                  },
                  {
                    title: 'Early Access & Feature Co-Creation 🚀',
                    description: 'Join our inner circle & help shape new features before they launch.'
                  },
                  {
                    title: 'Exclusive AI-Driven Insights & Automation Tools 🔐',
                    description: 'Unlock advanced analytics, automated engagement & Telegram growth tools.'
                  },
                  {
                    title: 'Custom AI Reports & Data Insights 📊',
                    description: 'Get deeper insights into your audience, engagement & competitor activities.'
                  },
                  {
                    title: '24/7 Priority Support 💬',
                    description: 'Dedicated support & faster response times for Enterprise users.'
                  }
                ].map((feature) => (
                  <li key={feature.title} className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-1 flex-shrink-0 text-zinc-400" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="space-y-1">
                      <span className="block text-sm text-zinc-300">{feature.title}</span>
                      <span className="block text-xs text-zinc-500 leading-relaxed">{feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-8">
              <button 
                onClick={() => handleGetStarted('enterprise')}
                className="w-full py-3 rounded-xl bg-zinc-800/80 text-sm text-white hover:bg-zinc-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            {isAnnual && (
              <div className="mt-2 text-xs text-emerald-500 font-medium">
                Save 20% with annual billing
              </div>
            )}
          </div>
        </div>
      </div>

      <BetaSignupModal 
        isOpen={isBetaModalOpen}
        onClose={() => {
          setIsBetaModalOpen(false)
          setSelectedPlan(null)
        }}
        plan={selectedPlan}
      />
    </>
  )
} 