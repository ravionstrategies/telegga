'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "How does the AI-powered group analysis work?",
    answer: "Our AI analyzes group conversations, member behavior, and engagement patterns in real-time. It identifies key topics, sentiment, and potential leads while filtering out spam and fake engagement—all automatically and with respect to privacy."
  },
  {
    question: "Can I try Telegga before committing to a paid plan?",
    answer: "Absolutely! Our Free plan lets you experience core features like basic AI analysis, group summarization, and lead finding. It's perfect for testing how our AI can enhance your Telegram presence before upgrading."
  },
  {
    question: "What makes Telegga different from other Telegram tools?",
    answer: "Telegga uniquely combines advanced AI analysis, automated lead generation, and engagement tracking in one platform. Our AI provides deeper insights, more accurate lead scoring, and better spam detection than traditional tools."
  },
  {
    question: "How secure is my Telegram data with Telegga?",
    answer: "Security is our top priority. We use enterprise-grade encryption, never store message content, and only analyze metadata for insights. Our AI processing follows strict privacy guidelines and industry best practices."
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes! You can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, you'll keep your current features until the end of your billing cycle."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes, our Enterprise plan is fully customizable. We can tailor our AI tools, analytics, and automation to your specific needs. Contact us for a personalized solution that scales with your business."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-32 mb-32 px-4">
      {/* Header */}
      <div className="text-center space-y-6 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 rounded-full text-xs text-zinc-400 animate-float-slow">
          <span>❓</span>
          FAQ
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold">
            Common <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-transparent bg-clip-text">Questions</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about Telegga and our AI-powered features
          </p>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group relative"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left"
            >
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-[28px] border border-white/[0.05] overflow-hidden transition-all duration-300 hover:bg-[#1A1A1A]/80 p-8">
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-medium text-white group-hover:text-white/90 transition-colors">
                    {faq.question}
                  </h3>
                  <span 
                    className={`flex items-center justify-center w-6 h-6 text-2xl text-zinc-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </div>
                <div 
                  className={`
                    mt-4 text-sm text-zinc-400 leading-relaxed overflow-hidden transition-all duration-500
                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="border-t border-white/[0.05] pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Support Link */}
      <div className="mt-16 text-center">
        <a 
          href="#" 
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A1A1A]/60 backdrop-blur-sm border border-white/[0.05] text-sm text-zinc-400 hover:bg-[#1A1A1A]/80 transition-colors"
        >
          Still have questions? <span className="text-white font-medium">Contact our support team →</span>
        </a>
      </div>
    </div>
  )
} 