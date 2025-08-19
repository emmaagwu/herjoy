"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      image: "/Herjoy_Testimony1.png",
      quote: "After just one Saturday, I felt lighter in my body and spirit. The community energy? Unmatched!",
      author: "HerJoy Babe",
    },
    {
      image: "/Herjoy_Testimony2.png",
      quote: "I came for the workout, I stayed for the laughter, the healing, and the juice!",
      author: "First-time participant",
    },
    {
      image: "/Herjoy_Testimony3.png",
      quote: "I came for the workout, I stayed for the laughter, the healing, and the juice!",
      author: "First-time participant",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
      {/* Title */}
      <h2
        className={`text-center mb-2 font-[Chopin] font-bold text-[55px] leading-[27px] tracking-[-0.04em] transition-transform duration-700 ${
          isVisible ? "translate-y-0" : "translate-y-2"
        }`}
        style={{ color: "#000000" }}
      >
        Testimonials
      </h2>

      {/* Animated SVG Line */}
      <div className="flex justify-center mb-8">
        <svg
          width="278"
          height="65"
          viewBox="0 0 278 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-1000 ease-out ${isVisible ? "scale-110" : "scale-75"}`}
        >
          <path
            d="M277 1C257 50.9999 145 89 1.00003 41.0001"
            stroke="#A7C047"
            strokeWidth="2"
            strokeLinecap="round"
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "stroke-dasharray-0" : "stroke-dasharray-1000"
            }`}
            style={{
              strokeDasharray: isVisible ? "0" : "1000",
              strokeDashoffset: isVisible ? "0" : "1000",
            }}
          />
        </svg>
      </div>

      {/* Description Text */}
      <p
        className="text-center max-w-2xl mx-auto mb-8 font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em]"
        style={{ color: "#3A470A" }}
      >
        Every woman's journey is unique, and so is her healing. Hear how HerJoy has helped women rediscover their
        strength, restore balance, and embrace their glow, one step, one sip, one breath at a time?
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mb-12">
        <button className="bg-[#A7C047] text-white px-8 py-3 rounded-full font-[Chopin] font-medium text-[16px] hover:bg-[#96B03A] transition-colors duration-200">
          Join the movement for free
        </button>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-sm">
            {/* Image */}
            <div className="mb-6">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={`Testimonial from ${testimonial.author}`}
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>

            {/* Quote */}
            <blockquote
              className="mb-4 font-[Chopin] font-medium text-[20px] leading-[20px] tracking-[-0.04em]"
              style={{ color: "#3A4704" }}
            >
              "{testimonial.quote}"
            </blockquote>

            {/* Author */}
            <cite
              className="font-[Chopin] font-normal italic text-[20px] leading-[20px] tracking-[-0.04em]"
              style={{ color: "#3A4704" }}
            >
              {testimonial.author}
            </cite>
          </div>
        ))}
      </div>
    </section>
  )
}
