'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase'

export default function AuthCallback() {
  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleCallback = async () => {
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (error || !user) {
        setError('Invalid or expired link')
        return
      }

      // Prüfe, ob der Benutzer bereits ein Passwort hat
      const { data: profile } = await supabase
        .from('profiles')
        .select('has_password')
        .eq('id', user.id)
        .single()

      if (profile?.has_password) {
        window.location.href = '/dashboard'
      }
    }

    handleCallback()
  }, [])

  const handleSetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    
    try {
      const { error } = await supabase.auth.updateUser({
        password
      })

      if (error) throw error

      // Setze has_password auf true
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ has_password: true })
        .eq('id', (await supabase.auth.getUser()).data.user?.id)

      if (profileError) throw profileError

      // Redirect zum Dashboard
      window.location.href = '/dashboard'
      
    } catch (error) {
      console.error('Error:', error)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl p-8 border border-white/[0.05] max-w-md w-full">
          <div className="text-red-500 text-center">{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl p-8 border border-white/[0.05] max-w-md w-full">
        <h1 className="text-2xl font-medium text-white text-center mb-6">Set Your Password</h1>
        <form onSubmit={handleSetPassword} className="space-y-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-900/50 rounded-xl border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-900/50 rounded-xl border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Setting password...' : 'Set Password'}
          </button>
        </form>
      </div>
    </div>
  )
} 