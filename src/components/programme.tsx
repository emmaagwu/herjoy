"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Programme() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2
          className={`font-[Chopin] font-bold text-[55px] leading-[27px] tracking-[-0.04em] text-black mb-2 transition-transform duration-700 ${isVisible ? "translate-y-0" : "translate-y-2"}`}
        >
          Programmes
        </h2>

        {/* Animated curved line */}
        <div className="flex justify-center mb-12 -mt-2">
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
            />
          </svg>
        </div>

        {/* Programme Content */}
        <div className="space-y-8">
          {/* Programme Title */}
          <div className="space-y-2">
            <h3 className="font-[Chopin] font-semibold text-[36px] leading-[36px] tracking-[-0.04em] text-black">
              Sweat With Me Saturdays
            </h3>
            <p className="font-[Chopin] font-normal italic text-[36px] leading-[36px] tracking-[-0.04em] text-black">
              (August Edition)
            </p>
          </div>

          {/* Description */}
          <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-[#3A470A] max-w-2xl mx-auto">
            Join our FREE Saturday joy-workouts in Leicester all through August! Come move your body, vibe with other
            women, and enjoy a post-workout cup of green glow. Expect joy, sweat, and dance breaks!
          </p>

          {/* CTA Button */}
          <button className="bg-[#A7C047] text-white font-[Chopin] font-medium text-[18px] px-8 py-4 rounded-full hover:bg-[#96B03A] transition-colors duration-300">
            Join us for free
          </button>

          {/* Programme Image */}
          <div className="mt-12">
            {/* Desktop - maintain aspect ratio */}
            <div className="hidden md:block relative w-full max-w-4xl mx-auto aspect-[936/528] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/Herjoy_programme.png"
                alt="Sweat With Me Saturdays programme"
                fill
                className="object-cover"
              />
            </div>

            {/* Mobile - crop sides */}
            <div className="md:hidden relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/Herjoy_programme.png"
                alt="Sweat With Me Saturdays programme"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
