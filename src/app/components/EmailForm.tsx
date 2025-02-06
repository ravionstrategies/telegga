'use client'

import { useState } from 'react'
import BetaSignupModal from './BetaSignupModal'

interface EmailFormProps {
  initialEmail?: string // Optional prop hinzugefügt
}

export default function EmailForm({ initialEmail = '' }: EmailFormProps) {
  const [email, setEmail] = useState(initialEmail)
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false)
  const [error, setError] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email address')
      return
    }

    setIsBetaModalOpen(true)
    setError('')
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-3 justify-center items-center relative">
        <div className="relative flex flex-col items-center group">
          {/* Glowing background effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] opacity-0 blur-xl transition-opacity duration-300 rounded-xl -z-10 ${
            isFocused ? 'opacity-10' : 'group-hover:opacity-5'
          }`} />
          
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('')
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`px-6 py-3 rounded-xl bg-[#141414] border transition-all duration-300 w-64 text-sm placeholder-zinc-500 focus:outline-none ${
              error 
                ? 'border-[#8B5CF6]/50 focus:border-[#8B5CF6] shadow-[0_0_10px_rgba(139,92,246,0.1)]' 
                : isFocused
                  ? 'border-[#8B5CF6]/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]'
                  : 'border-zinc-800 hover:border-zinc-700'
            }`}
          />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/5 to-transparent pointer-events-none rounded-xl" />
          
          {/* Message below input */}
          <p className={`absolute -bottom-6 text-xs transition-all duration-300 ${
            error 
              ? 'text-[#8B5CF6] opacity-100 translate-y-0' 
              : isFocused
                ? 'text-[#8B5CF6]/70 opacity-100'
                : 'text-zinc-500 opacity-100'
          }`}>
            {error || 'Beta access is closing soon!'}
          </p>
        </div>

        {/* Join Beta Button */}
        <div className="relative">
          <div className="absolute -top-3 -right-3 bg-white/5 backdrop-blur-sm px-2 py-0.5 text-[10px] text-white font-light rounded-md rotate-12 border border-white/10 z-10">
            Limited Spots
          </div>
          <button 
            onClick={handleSubmit}
            className="px-6 py-3 rounded-xl text-sm font-medium relative group overflow-hidden"
          >
            {/* Button gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] opacity-100 group-hover:opacity-90 transition-opacity" />
            
            {/* Button hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
            
            <span className="relative text-white">Join Beta</span>
          </button>
        </div>
      </div>

      <BetaSignupModal 
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        plan={null}
      />
    </div>
  )
} 