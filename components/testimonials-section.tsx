"use client"

import { useState, useEffect } from "react"
import { AnimatedTestimonials } from "./ui/animated-testimonials"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Credit pro transformed how i earn rewards. I'm getting cashback on every purchase and the exclusive perks are incredible.",
      name: "Alex Chen",
      designation: "Founder, Techstart",
      src: "/professional-portrait-alex.jpg",
    },
    {
      quote:
        "The rewards program is unmatched. I've already redeemed for flights and exclusive events that i couldn't access anywhere else.",
      name: "Sarah Martinez",
      designation: "Marketing director",
      src: "/professional-portrait-sarah.jpg",
    },
    {
      quote:
        "Seamless integration, amazing rewards, and the security is top-notch. This is the credit card i've been waiting for.",
      name: "Michael Jordan",
      designation: "Investor",
      src: "/professional-portrait-michael.jpg",
    },
    {
      quote:
        "Finally a credit card that values its members. The exclusive access and cashback rates are better than anything i've seen.",
      name: "Emily Zhao",
      designation: "CEO, Fintech co",
      src: "/professional-portrait-emily.jpg",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

   return <AnimatedTestimonials testimonials={testimonials} autoplay={isAutoPlay}/>;
}
