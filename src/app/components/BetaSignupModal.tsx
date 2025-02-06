'use client'

import { useState } from 'react'

interface BetaSignupModalProps {
  isOpen: boolean
  onClose: () => void
  plan: 'pro' | 'enterprise' | null
}

export default function BetaSignupModal({ isOpen, onClose, plan }: BetaSignupModalProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl p-8 border border-white/[0.05] max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B5CF6]/10 rounded-full text-xs text-[#8B5CF6] mb-4">
                🚀 Early Access
              </div>
              <h2 className="text-2xl font-medium text-white mb-2">Join Our Beta Whitelist</h2>
              <p className="text-zinc-400 text-sm">
                We're currently running an exclusive beta program. Sign up now to get early access and priority on the waiting list for our {plan} plan!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900/50 rounded-xl border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Join Whitelist
              </button>

              <p className="text-xs text-zinc-500 text-center">
                By joining, you'll get priority access and exclusive early-bird benefits! 🎉
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] mx-auto flex items-center justify-center mb-6">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Thank You!</h3>
            <p className="text-zinc-400 text-sm mb-6">
              We'll reach out to you personally with exclusive early access details for the {plan} plan. You're now on our priority list! 
            </p>
            <button
              onClick={onClose}
              className="text-sm text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 