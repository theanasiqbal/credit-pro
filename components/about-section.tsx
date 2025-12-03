"use client";

import { cn } from "@/lib/utils";
import { CardSpotlight } from "./ui/card-spotlight";

export default function AboutSection() {
const cards = [
  {
    icon: "💳",
    title: "What is Credit Pro?",
    description:
      "A smart payment app that lets you add your credit cards, pay anywhere, and earn instant rewards on every spend.",
  },
  {
    icon: "👥",
    title: "Who is it for?",
    description:
      "Anyone who uses credit cards and wants extra benefits. If you love rewards and smoother payments, you're in the right place.",
  },
  {
    icon: "🪄",
    title: "How to get started?",
    description:
      "Simply add your credit card in the app, verify it securely, and start paying through Credit Pro. No waiting, no hassle.",
  },
  {
    icon: "🎉",
    title: "Why you’ll love it",
    description:
      "Earn rewards on every payment, track your spends, and enjoy exclusive perks — all from one clean, effortless app.",
  },
];


  return (
    <section className="relative w-full py-24 lg:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
            About Credit <span className="text-[#ff6b35]">Pro</span>
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <CardSpotlight className="h-48 rounded-3xl bg-card">
              <div className="text relative z-50">
                <div className="flex items-center gap-2">
                  <div className=" text-3xl">{card.icon}</div>

                  <h1 className="font-bold text-xl md:text-3xl text-foreground/80 relative">
                    {card.title}
                  </h1>
                </div>

                <p className="font-normal text-base text-foreground/80 relative my-4">
                  {card.description}
                </p>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
