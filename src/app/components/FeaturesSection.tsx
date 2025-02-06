'use client'

const features = [
  {
    title: "Advanced Analytics",
    description: "Deep insights into group dynamics, member behavior, and engagement patterns.",
    image: "https://i.ibb.co/7xmFNncc/Bildschirmfoto-2025-02-05-um-20-57-07.png",
    gradient: "from-purple-500/10 to-blue-500/10"
  },
  {
    title: "Smart Lead Generation",
    description: "Automatically identify and qualify potential leads based on engagement and activity.",
    image: "https://i.ibb.co/7xmFNncc/Bildschirmfoto-2025-02-05-um-20-57-07.png",
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Automated Responses",
    description: "Set up intelligent auto-replies and engagement workflows powered by AI.",
    image: "https://i.ibb.co/7xmFNncc/Bildschirmfoto-2025-02-05-um-20-57-07.png",
    gradient: "from-emerald-500/10 to-green-500/10"
  },
  {
    title: "Content Scheduling",
    description: "Plan and schedule your content with our intuitive calendar interface.",
    image: "https://i.ibb.co/7xmFNncc/Bildschirmfoto-2025-02-05-um-20-57-07.png",
    gradient: "from-orange-500/10 to-amber-500/10"
  },
  {
    title: "Growth Tracking",
    description: "Monitor your growth metrics and engagement rates with detailed reports.",
    image: "https://i.ibb.co/7xmFNncc/Bildschirmfoto-2025-02-05-um-20-57-07.png",
    gradient: "from-pink-500/10 to-rose-500/10"
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations and insights based on your data.",
    image: "https://i.ibb.co/7xmFNncc/Bildschirmfoto-2025-02-05-um-20-57-07.png",
    gradient: "from-violet-500/10 to-purple-500/10"
  }
]

export default function FeaturesSection() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-32 relative z-20">
      {/* Header */}
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 rounded-full text-xs text-zinc-400">
          <span>⚡</span>
          Features
        </div>
        <h2 className="text-4xl font-semibold text-white">
          Powerful Features for<br />Advanced Automation
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Everything you need to analyze, track, and automate your Telegram presence
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            <div className={`aspect-[4/3] rounded-[28px] bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-white/[0.05] overflow-hidden mb-6 relative`}>
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
              <img 
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Add this at the bottom, after all existing content */}
      <div className="mt-20 text-center">
        {/* Main content */}
        <p className="relative text-lg text-zinc-400 px-8 py-4 rounded-full bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/[0.05]">
          And we are working on a <span className="text-white font-medium">LOT</span> more features that will change the way you see telegram as of now <span className="ml-1">👀</span>
        </p>
      </div>
    </div>
  )
} 