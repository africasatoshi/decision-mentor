import Image from 'next/image';
import Link from 'next/link';
import { AIAgent } from './components/AIAgent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 z-0" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12 flex justify-center">
            <AIAgent />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gradient">
            Turn Complex Decisions into Clear Actions
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Combine expert decision-making frameworks with AI to make better choices, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#demo" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg font-semibold shadow-lg hover:shadow-blue-500/25">
              Start Making Better Decisions
            </Link>
            <Link href="#how-it-works"
              className="px-8 py-4 bg-gray-800/80 backdrop-blur-sm text-white rounded-lg hover:bg-gray-700/80 transition-all text-lg font-semibold border border-gray-700">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient">
            The 4-Point Framework for Clarity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Timing",
                description: "Identify the optimal moment for action, understanding market cycles and opportunity windows.",
                icon: (
                  <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Risk vs Reward",
                description: "Quantify potential outcomes and their probabilities to make informed choices.",
                icon: (
                  <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18l-3 10H6L3 6z" />
                    <path d="M3 6l2.5 2.5M21 6l-2.5 2.5M12 6V3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Balance",
                description: "Harmonize competing priorities and stakeholder interests for sustainable decisions.",
                icon: (
                  <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v18M3 12h18" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )
              },
              {
                title: "Pattern Recognition",
                description: "Leverage historical insights and emerging trends to predict future outcomes.",
                icon: (
                  <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16M4 12h16M4 20h16" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="4" r="1" fill="currentColor" />
                    <circle cx="14" cy="12" r="1" fill="currentColor" />
                    <circle cx="19" cy="20" r="1" fill="currentColor" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl card-hover border border-gray-700/50 group">
                <div className="mb-6 bg-blue-500/10 p-4 rounded-lg inline-block transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient">
            How Decision Mentor Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Input Your Situation",
                description: "Share the context and key factors of your decision."
              },
              {
                step: "2",
                title: "AI Analysis",
                description: "Our AI applies expert frameworks to break down your situation."
              },
              {
                step: "3",
                title: "Clear Action Steps",
                description: "Get structured guidance and concrete next steps."
              }
            ].map((step, index) => (
              <div key={index} className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl card-hover border border-gray-700/50">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gradient">
            Trusted by Decision Makers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "1000+", label: "Decisions Analyzed" },
              { metric: "500+", label: "Hours Saved" },
              { metric: "98%", label: "Satisfaction Rate" },
              { metric: "24/7", label: "AI Availability" }
            ].map((stat, index) => (
              <div key={index} className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl card-hover border border-gray-700/50">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">{stat.metric}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gradient">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "Free",
                features: ["1 decision framework/month", "Basic AI analysis", "Email support"]
              },
              {
                name: "Pro",
                price: "$49/mo",
                features: ["Unlimited decisions", "Advanced AI insights", "Priority support", "Export capabilities"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Custom solutions", "Dedicated support", "API access", "Team collaboration"]
              }
            ].map((plan, index) => (
              <div key={index} className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl card-hover border border-gray-700/50">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">{plan.price}</div>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-500/25">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Ready to Make Better Decisions?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of professionals using Decision Mentor to navigate complex choices.
          </p>
          <Link href="#demo"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg font-semibold shadow-lg hover:shadow-blue-500/25">
            Start Free Trial
          </Link>
        </div>
      </section>
    </main>
  );
}
