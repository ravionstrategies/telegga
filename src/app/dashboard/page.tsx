'use client'

import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Einfache Session-Prüfung
    const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      window.location.href = '/'
    }
    setLoading(false)
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn')
    window.location.href = '/'
  }

  if (loading) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Background grid effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(26, 26, 26, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(26, 26, 26, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      {/* Floating orbs effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-[20%] w-72 h-72 bg-[#8B5CF6] rounded-full opacity-[0.015] blur-[100px] animate-float-slow" />
        <div className="absolute top-40 right-[20%] w-96 h-96 bg-[#3B82F6] rounded-full opacity-[0.015] blur-[100px] animate-float-normal" />
      </div>

      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-16 bg-[#1A1A1A]/60 backdrop-blur-md border-r border-white/[0.05] flex flex-col items-center py-8 z-50">
        <div className="flex flex-col items-center gap-8 h-full">
          {/* Logo */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center mb-4">
            <span className="text-xl">⚡</span>
          </div>

          {/* Navigation Icons */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: '📊',
                label: 'Analytics',
                glow: true
              },
              {
                icon: '🎯',
                label: 'Leads'
              },
              {
                icon: '🤖',
                label: 'AI Tools'
              },
              {
                icon: '📅',
                label: 'Schedule'
              },
              {
                icon: '⚙️',
                label: 'Settings'
              },
              {
                icon: '💬',
                label: 'Support'
              }
            ].map((item, i) => (
              <button
                key={i}
                className={`w-10 h-10 rounded-xl border border-white/[0.05] flex items-center justify-center transition-all duration-300 group relative
                  ${item.glow ? 'bg-gradient-to-r from-[#8B5CF6]/20 to-[#3B82F6]/20 hover:from-[#8B5CF6]/30 hover:to-[#3B82F6]/30' : 'bg-white/[0.03] hover:bg-white/[0.06]'}`}
              >
                <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#1A1A1A]/90 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none backdrop-blur-sm border border-white/[0.05]">
                  {item.label}
                </div>
              </button>
            ))}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-red-500/10 border border-white/[0.05] flex items-center justify-center transition-all duration-300 group relative mt-auto hover:border-red-500/20"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">🚪</span>
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#1A1A1A]/90 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none backdrop-blur-sm border border-white/[0.05]">
              Logout
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-16 p-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header with gradient text */}
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl font-medium">
              Welcome to <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-transparent bg-clip-text">Telegga</span>
            </h1>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-xl bg-white/[0.03] text-sm text-zinc-400 hover:bg-white/[0.06] transition-colors flex items-center gap-2">
                <span>📅</span> March 2024
              </button>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-sm text-white hover:opacity-90 transition-opacity flex items-center gap-2">
                <span>+</span> New Analysis
              </button>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Groups', value: '24', change: '+3', icon: '📊', trend: 'up' },
              { label: 'Active Members', value: '1.2k', change: '+127', icon: '👥', trend: 'up' },
              { label: 'Messages Today', value: '847', change: '+92', icon: '💬', trend: 'up' },
              { label: 'New Leads', value: '34', change: '+12', icon: '🎯', trend: 'up' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl p-6 border border-white/[0.05] group hover:bg-[#1A1A1A]/80 transition-all duration-300 hover:border-white/[0.08]">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
                  <div className="text-2xl">{stat.icon}</div>
                </div>
                <div className="text-2xl font-medium text-white mb-2 group-hover:text-[#8B5CF6] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-emerald-500 flex items-center gap-1 font-medium">
                  <span className="text-lg">↗</span>
                  {stat.change} today
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl p-8 border border-white/[0.05] hover:border-white/[0.08] transition-colors">
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-medium text-white">Recent Activity</div>
              <button className="px-4 py-2 rounded-xl bg-white/[0.03] text-sm text-zinc-400 hover:bg-white/[0.06] transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🤖', title: 'AI Analysis Complete', desc: 'Group "Crypto Traders" analyzed', time: '2m ago', color: 'from-purple-500/10 to-blue-500/10' },
                { icon: '📊', title: 'New Analytics Report', desc: 'Monthly engagement metrics updated', time: '5m ago', color: 'from-blue-500/10 to-cyan-500/10' },
                { icon: '🎯', title: 'Lead Generation', desc: '12 new potential leads identified', time: '12m ago', color: 'from-green-500/10 to-emerald-500/10' },
                { icon: '💬', title: 'Message Analysis', desc: 'Sentiment analysis completed', time: '15m ago', color: 'from-yellow-500/10 to-orange-500/10' },
                { icon: '📅', title: 'Schedule Updated', desc: 'New post scheduled for tomorrow', time: '25m ago', color: 'from-pink-500/10 to-rose-500/10' }
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-all duration-300 group">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${activity.color} flex items-center justify-center border border-white/[0.05] group-hover:scale-105 transition-all duration-300`}>
                    <span className="text-xl">{activity.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white group-hover:text-[#8B5CF6] transition-colors font-medium">{activity.title}</div>
                    <div className="text-xs text-zinc-500">{activity.desc}</div>
                  </div>
                  <div className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 