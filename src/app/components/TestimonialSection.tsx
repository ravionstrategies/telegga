'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Telegga transformed our community management. The AI insights helped us grow our crypto community by 300% in just 2 months.",
    author: "Alex Chen",
    role: "Head of Community",
    company: "DeFi Protocol",
    stats: {
      growth: "300%",
      members: "50k+",
      engagement: "89%"
    }
  },
  {
    quote: "The automated responses and lead generation are game-changing. We're saving 20+ hours per week while providing better support.",
    author: "Sarah Miller",
    role: "Operations Director",
    company: "TechStart Solutions",
    stats: {
      time: "20h/week",
      response: "2min",
      satisfaction: "96%"
    }
  },
  {
    quote: "As a Web3 startup, community is everything. Telegga's analytics helped us identify key influencers and grow organically.",
    author: "Michael Park",
    role: "Founder & CEO",
    company: "MetaVerse Labs",
    stats: {
      retention: "95%",
      conversion: "40%",
      growth: "500%"
    }
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % testimonials.length)
        setIsAnimating(false)
      }, 300)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = testimonials[currentIndex]

  return (
    <div className="w-full max-w-7xl mx-auto my-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#8B5CF6]/20 to-[#3B82F6]/20 rounded-full blur-[120px] opacity-30" />
      </div>
      
      {/* Header */}
      <div className="text-center space-y-4 mb-16 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 rounded-full text-xs text-zinc-400">
          <span>💬</span>
          Success Stories
        </div>
        <h2 className="text-4xl font-semibold text-white">
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="relative max-w-4xl mx-auto">
        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {/* Company Logo */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-white/[0.05] rounded-xl p-2">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#8B5CF6]/10 to-[#3B82F6]/10 flex items-center justify-center text-white/50 text-xl font-medium">
                {testimonial.company.split(' ')[0][0]}
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="relative bg-[#1A1A1A]/60 backdrop-blur-sm border border-white/[0.05] rounded-[28px] p-8 pt-12">
            {/* Quote */}
            <div className="relative text-xl text-white/90 text-center leading-relaxed mb-8">
              "{testimonial.quote}"
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {Object.entries(testimonial.stats).map(([key, value]) => (
                <div key={key} className="bg-white/[0.02] rounded-xl p-4 text-center group hover:bg-white/[0.04] transition-colors">
                  <div className="text-xl font-medium text-white mb-1 group-hover:text-[#8B5CF6] transition-colors">{value}</div>
                  <div className="text-xs text-zinc-500 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>
            
            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center text-white font-medium">
                {testimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-left">
                <div className="text-white font-medium">{testimonial.author}</div>
                <div className="text-sm text-zinc-400">{testimonial.role}</div>
                <div className="text-sm text-zinc-400">{testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsAnimating(false)
                }, 300)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-white' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 