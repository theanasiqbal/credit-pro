"use client"

export default function FeaturesSection() {
  const features = [
    {
      icon: "💎",
      title: "Premium rewards",
      description:
        "Earn points on every transaction. unlock exclusive perks and benefits. redeem for luxury experiences and premium products.",
    },
    {
      icon: "📈",
      title: "Financial progress",
      description:
        "Track your credit growth in real-time. watch your rewards multiply as you build better financial habits. celebrate milestones with bonuses.",
    },
    {
      icon: "🌟",
      title: "Exclusive access",
      description:
        "Members-only events and experiences. early access to new features and partnerships. vip treatment across premium merchants.",
    },
    {
      icon: "🔐",
      title: "Secure & trusted",
      description:
        "Bank-grade security on all transactions. zero fraud guarantee for members. complete privacy and data protection.",
    },
  ]

  return (
    <section className="relative w-full py-24 lg:py-32 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">Why join Credit <span className="text-[#ff6b35]">Pro</span></h2>
          <div className="w-24 h-1 bg-secondary rounded-full" />
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-8xl mb-8 opacity-80">{feature.icon}</div>
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-2 h-24 bg-gradient-to-b from-primary to-transparent rounded-full" />
                  <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight pl-8">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <div
                className="relative rounded-3xl border border-border bg-card p-8 transition-all duration-300"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-0.5rem)"
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(255, 107, 53, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow =
                    "inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.5)"
                }}
              >
                <p className="text-lg text-foreground/80 leading-relaxed">{feature.description}</p>
                {/* <div className="mt-8 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold">
                    01
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    02
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold">
                    03
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
