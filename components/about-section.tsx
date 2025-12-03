"use client";

import { cn } from "@/lib/utils";
import { CardSpotlight } from "./ui/card-spotlight";

export default function AboutSection() {
  const cards = [
    {
      icon: "⚡",
      title: "What is credit pro ?",
      description:
        "An exclusive membership platform designed for those who value rewards. every action, every transaction, every milestone counts.",
    },
    {
      icon: "👑",
      title: "Who it's for ?",
      description:
        "Ambitious individuals who demand more from their finances. members who expect premium experiences and exclusive access to opportunities.",
    },
    {
      icon: "🔑",
      title: "How to join ?",
      description:
        "Qualification based on credit profile and financial activity. membership is by invitation or application. limited slots available each month.",
    },
    {
      icon: "🎁",
      title: "Member benefits",
      description:
        "Exclusive rewards on every transaction. early access to premium features. priority customer support and concierge services.",
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
