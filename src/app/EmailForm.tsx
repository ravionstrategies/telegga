'use client'

export default function EmailForm() {
  return (
    <div className="flex gap-3 justify-center">
      <input
        type="email"
        placeholder="Email Address"
        className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-zinc-700 w-64 text-sm"
      />
      <button className="px-6 py-3 bg-[#E8E3DE] text-black rounded-xl hover:bg-[#D8D3CE] transition-colors text-sm font-medium">
        Join Beta
      </button>
    </div>
  )
} 