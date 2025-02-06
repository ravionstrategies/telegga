export default function Footer() {
  return (
    <div className="w-full border-t border-white/[0.05] mt-32">
      <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-400 text-sm flex items-center gap-2">
          Made with <span className="text-red-500">❤️</span> by Telegga
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://t.me/teleggagroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A]/60 backdrop-blur-sm border border-white/[0.05] text-sm text-white hover:bg-[#1A1A1A]/80 transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.5 5.5l-20 8l7.5 3M21.5 5.5l-11 14l-1.5-5.5M21.5 5.5L9 16" />
            </svg>
            Join our Telegram Group
          </a>
        </div>
      </div>
    </div>
  )
} 