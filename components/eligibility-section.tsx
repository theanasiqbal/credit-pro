"use client"

export default function EligibilitySection() {
  const requirements = [
    {
      step: "01",
      title: "Credit score",
      description: "Minimum 720 credit score. demonstrates financial responsibility and creditworthiness.",
    },
    {
      step: "02",
      title: "Annual income",
      description: "$50,000+ annual income. ensures financial stability and spending capacity.",
    },
    {
      step: "03",
      title: "Credit history",
      description: "3+ years of credit history. proven track record of responsible credit usage.",
    },
    {
      step: "04",
      title: "Commitment",
      description: "Active membership engagement. Regular transactions and participation in program.",
    },
  ]

  return (
    <section className="relative w-full py-24 lg:py-32 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">Membership eligibility</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Exclusive but achievable. We seek members who are serious about financial growth and rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-border bg-card p-8 transition-all duration-300"
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
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-black text-xl group-hover:scale-110 transition-transform">
                {req.step}
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">{req.title}</h3>
                <p className="text-foreground/70">{req.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-foreground/60 mb-8">Meet all requirements?</p>
          <button
            style={{
              backgroundColor: "#ff6b35",
              color: "#000000",
              padding: "0.75rem 1.5rem",
              fontWeight: "bold",
              borderRadius: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 0 rgba(255, 107, 53, 0.3)",
              transition: "all 300ms ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"
              e.currentTarget.style.boxShadow = "0 12px 0 rgba(255, 107, 53, 0.5)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
              e.currentTarget.style.boxShadow = "0 8px 0 rgba(255, 107, 53, 0.3)"
            }}
          >
            Apply now
          </button>
        </div>
      </div>
    </section>
  )
}
