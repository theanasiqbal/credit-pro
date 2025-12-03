"use client"

import { useEffect, useRef } from "react"
import { Cover } from "./ui/cover"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number

    const drawScene = () => {
      // Clear canvas
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() / 1000

      // Draw animated credit cards
      const drawCard = (x: number, y: number, width: number, height: number, color: string, rotation: number) => {
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(rotation)

        // Main card
        ctx.fillStyle = color
        ctx.shadowColor = color + "80"
        ctx.shadowBlur = 20
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.fillRect(-width / 2, -height / 2, width, height)

        // Card shine effect
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
        ctx.fillRect(-width / 2, -height / 2, width, 10)

        // Chip
        ctx.fillStyle = "#ffd700"
        ctx.fillRect(-width / 2 + 15, height / 2 - 30, 20, 25)

        ctx.restore()
      }

      // Animate cards
      const card1X = canvas.width * 0.75
      const card1Y = canvas.height * 0.35 + Math.sin(time * 0.5) * 20
      drawCard(card1X, card1Y, 120, 200, "#FF6B35", time * 0.3)

      const card2X = canvas.width * 0.8
      const card2Y = canvas.height * 0.55 + Math.cos(time * 0.4) * 25
      drawCard(card2X, card2Y, 100, 170, "#00D9FF", time * 0.25)

      const card3X = canvas.width * 0.7
      const card3Y = canvas.height * 0.65 + Math.sin(time * 0.3) * 15
      drawCard(card3X, card3Y, 90, 150, "#B24BF3", time * 0.35)

      // Draw animated reward particles
      ctx.fillStyle = "#39FF14"
      for (let i = 0; i < 5; i++) {
        const px = canvas.width * 0.65 + Math.sin(time * 0.3 + i) * 100
        const py = canvas.height * 0.4 + Math.cos(time * 0.4 + i) * 100
        ctx.beginPath()
        ctx.arc(px, py, 3 + Math.sin(time + i) * 2, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(drawScene)
    }

    drawScene()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background ">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
                <span className="text-balance">Earn more.</span>
                <Cover className="text-balance"> Spend smart.</Cover>
              </h1>
              <p className="text-4xl lg:text-5xl font-black text-foreground/60 leading-tight">Credit <span className="text-[#ff6b35]">Pro</span> rewards</p>
            </div>

            <p className="text-md lg:text-lg text-foreground/70 leading-relaxed max-w-md">
              Pay with your credit card and unlock unlimited rewards. Members earn cashback, exclusive perks, and access
              to premium events with every transaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#00d9ff",
                  padding: "0.75rem 1.5rem",
                  fontWeight: "bold",
                  borderRadius: "1rem",
                  border: "2px solid #00d9ff",
                  cursor: "pointer",
                  boxShadow: "none",
                  transition: "all 300ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                  e.currentTarget.style.boxShadow = "0 8px 0 rgba(0, 217, 255, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                How it works
              </button>
            </div>
          </div>

          {/* Visual - Canvas handles this */}
          <div className="hidden lg:block relative h-96" />
        </div>
      </div>

      {/* Scroll indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="text-primary text-2xl">↓</div>
      </div> */}
    </section>
  )
}
