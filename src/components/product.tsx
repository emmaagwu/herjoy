"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Product() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: "#A7C047" }}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center lg:text-left mb-8 font-[Chopin] font-bold text-[55px] leading-[50px] tracking-[-0.04em] text-black">
          HerJoy Natural Drinks
        </h2>

        {/* Content Container */}
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Mobile: Text first */}
            <div className="lg:hidden mb-8">
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-6">
                HerJoy green juice is cold-pressed, nutrient-rich, and freshly blended weekly in Leicester to nourish
                you from within.
              </p>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-6">
                Available for Leicester based collection only (for now).
              </p>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-8">
                Interested? click to join the waitlist
              </p>
              <button className="bg-[#A7C047] text-white px-8 py-3 rounded-full font-[Chopin] font-medium text-[18px] hover:bg-[#96B03A] transition-colors duration-200">
                Join the waitlist
              </button>
            </div>

            {/* Images */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 lg:flex-1">
              <div className="relative w-full lg:w-[197px] h-[300px] lg:h-[392px] rounded-2xl overflow-hidden">
                <Image src="/drinks/drink1.png" alt="Green juice in jars" fill className="object-cover" />
              </div>
              <div className="relative w-full lg:w-[197px] h-[300px] lg:h-[392px] rounded-2xl overflow-hidden">
                <Image src="/drinks/drink2.png" alt="Red juice in bottles" fill className="object-cover" />
              </div>
              <div className="relative w-full lg:w-[197px] h-[300px] lg:h-[392px] rounded-2xl overflow-hidden">
                <Image src="/drinks/drink3.png" alt="Green juice in bottles" fill className="object-cover" />
              </div>
            </div>

            {/* Desktop: Text on right */}
            <div className="hidden lg:block lg:flex-1">
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-6">
                HerJoy green juice is cold-pressed, nutrient-rich, and freshly blended weekly in Leicester to nourish
                you from within.
              </p>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-6">
                Available for Leicester based collection only (for now).
              </p>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-8">
                Interested? click to join the waitlist
              </p>
              <button className="bg-[#A7C047] text-white px-8 py-3 rounded-full font-[Chopin] font-medium text-[18px] hover:bg-[#96B03A] transition-colors duration-200">
                Join the waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
