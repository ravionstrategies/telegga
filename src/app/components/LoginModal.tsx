'use client'

import { useState, useEffect } from 'react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onApplyClick: () => void
}

export default function LoginModal({ isOpen, onClose, onApplyClick }: LoginModalProps) {
  const [view, setView] = useState<'initial' | 'login'>('initial')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setView('initial')
      setEmail('')
      setPassword('')
      setError('')
    }
  }, [isOpen])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simulate login
    setTimeout(() => {
      sessionStorage.setItem('isLoggedIn', 'true')
      window.location.href = '/dashboard'
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        {view === 'initial' && (
          <>
            <h2 className="text-2xl font-medium text-white text-center mb-2">Access Portal</h2>
            <p className="text-zinc-400 text-center mb-8">Login is only for private beta testers.</p>
            <p className="text-zinc-400 text-center mb-6">
              Please apply below - you will get a notification<br />per email once you're selected.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => {
                  onClose()
                  setTimeout(() => {
                    onApplyClick()
                    // Highlight the free plan beta button
                    setTimeout(() => {
                      const betaButton = document.querySelector('#free-plan-beta-button')
                      if (betaButton) {
                        betaButton.classList.add('animate-highlight-pulse')
                        setTimeout(() => {
                          betaButton.classList.remove('animate-highlight-pulse')
                        }, 2000)
                      }
                    }, 500)
                  }, 100)
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Apply for Beta Access
              </button>
              <button
                onClick={() => setView('login')}
                className="w-full py-3 rounded-xl bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors"
              >
                Proceed to Login
              </button>
            </div>
          </>
        )}

        {view === 'login' && (
          <>
            <h2 className="text-2xl font-medium text-white text-center mb-6">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900/50 rounded-xl border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900/50 rounded-xl border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50"
                required
              />
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <button
                type="button"
                onClick={() => setView('initial')}
                className="w-full py-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
} 