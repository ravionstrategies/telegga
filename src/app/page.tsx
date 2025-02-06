'use client'

import { useState, useRef } from 'react'
import EmailForm from './components/EmailForm'
import LoginModal from './components/LoginModal'
import PricingSection from './components/PricingSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialSection from './components/TestimonialSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import BetaSignupModal from './components/BetaSignupModal'

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const pricingRef = useRef<HTMLDivElement>(null)

  const scrollToPricing = () => {
    setIsLoginOpen(false) // Close the modal
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Login button */}
      <div className="fixed top-6 right-8 z-50">
        <button 
          onClick={() => setIsLoginOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-light text-white hover:bg-white/10 transition-colors"
        >
          <span>🔐</span>
          <span>LOG IN</span>
        </button>
      </div>

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onApplyClick={scrollToPricing}
      />

      {/* Background grid effect */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(transparent_1px,#0A0A0A_1px),linear-gradient(90deg,transparent_1px,#0A0A0A_1px)] bg-[size:40px_40px] [background-position:center_center] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
        style={{
          backgroundColor: 'transparent',
          backgroundImage: `
            linear-gradient(to right, #1a1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
          `,
        }}
      />
      
      {/* Background dots/particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary dust particles */}
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float-${['slow', 'normal', 'fast', 'slow-reverse', 'normal-reverse', 'fast-reverse'][i % 6]}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1 + (Math.random() * 0.3),
              transform: `scale(${0.8 + Math.random() * 0.5})`
            }}
          >
            <div 
              className="w-[1px] h-[1px] bg-white rounded-full"
              style={{
                filter: `blur(${Math.random() * 1}px)`
              }}
            />
          </div>
        ))}

        {/* Larger glowing particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`glow-${i}`}
            className={`absolute animate-float-${['slow', 'normal', 'fast'][i % 3]}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.05 + (Math.random() * 0.1)
            }}
          >
            <div 
              className="w-[2px] h-[2px] bg-white rounded-full"
              style={{
                filter: `blur(2px) brightness(${1 + Math.random()})`
              }}
            />
          </div>
        ))}

        {/* Clustered particle groups */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`cluster-${i}`}
            className={`absolute animate-float-${['slow', 'normal'][i % 2]}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <div className="relative">
              {Array.from({ length: 5 }).map((_, j) => (
                <div
                  key={`dot-${j}`}
                  className="absolute bg-white/20 rounded-full animate-twinkle"
                  style={{
                    width: `${1 + Math.random()}px`,
                    height: `${1 + Math.random()}px`,
                    top: `${(Math.random() - 0.5) * 30}px`,
                    left: `${(Math.random() - 0.5) * 30}px`,
                    filter: 'blur(1px)',
                    animationDelay: `${Math.random() * 4}s`,
                    animation: `float-${['slow', 'normal', 'fast'][j % 3]} ${5 + Math.random() * 5}s infinite`
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Extra bright particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`bright-${i}`}
            className="absolute animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4 + (Math.random() * 0.3)
            }}
          >
            <div 
              className="w-[2px] h-[2px] bg-white rounded-full"
              style={{
                filter: `blur(1px) brightness(1.5)`
              }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-6xl w-full text-center space-y-12 relative">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-full mb-6 text-sm text-gray-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            Trusted by Over 250 Private Beta Users
          </div>
          <h1 className="text-6xl font-semibold tracking-tight leading-[1.15]">
            <span className="inline-block bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-transparent bg-clip-text pb-1">Telegram</span> Intelligence
            <br />& Automation Tool
          </h1>
          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
            Analyze groups, find leads, track trends, and automate engagement.
            All powered by AI.
          </p>
        </div>
        
        <EmailForm />

        {/* Stats boxes */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-6 mt-12">
            {/* 250+ box */}
            <div className="group relative">
              <div className="relative px-8 py-7 rounded-[28px] border border-white/[0.05] bg-transparent">
                <div className="text-3xl font-medium text-white mb-2">250+</div>
                <div className="text-sm text-zinc-500 font-light leading-relaxed">
                  Trusted, satisfied<br />customers.
                </div>
              </div>
            </div>

            {/* 8+ box */}
            <div className="group relative">
              <div className="relative px-8 py-7 rounded-[28px] border border-white/[0.05] bg-transparent">
                <div className="text-3xl font-medium text-white mb-2">8+</div>
                <div className="text-sm text-zinc-500 font-light leading-relaxed">
                  Expertise driving<br />business success.
                </div>
              </div>
            </div>

            {/* 24/7 box */}
            <div className="group relative">
              <div className="relative px-8 py-7 rounded-[28px] border border-white/[0.05] bg-transparent">
                <div className="text-3xl font-medium text-white mb-2">24/7</div>
                <div className="text-sm text-zinc-500 font-light leading-relaxed">
                  Support available<br />to assist you.
                </div>
              </div>
            </div>

            {/* 50+ box */}
            <div className="group relative">
              <div className="relative px-8 py-7 rounded-[28px] border border-white/[0.05] bg-transparent">
                <div className="text-3xl font-medium text-white mb-2">50+</div>
                <div className="text-sm text-zinc-500 font-light leading-relaxed">
                  Successful projects<br />delivered.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturesSection />
      <TestimonialSection />
      <div ref={pricingRef}>
        <PricingSection />
      </div>
      <FAQSection />
      <Footer />
    </main>
  )
} 