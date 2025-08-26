"use client"

import Image from "next/image"

const pillars = [
  {
    id: 1,
    title: "Laughter",
    subtitle: "Deep belly, no-apology joy",
    image: "/Herjoy_pillar1.png",
  },
  {
    id: 2,
    title: "Wellness",
    subtitle: "From green juice to green flags",
    image: "/Herjoy_pillar2.png",
  },
  {
    id: 3,
    title: "Movement",
    subtitle: "Sweat it out, stretch it out, dance it off",
    image: "/Herjoy_pillar3.png",
  },
  {
    id: 4,
    title: "Legacy",
    subtitle: "Leaving the world better for the next woman",
    image: "/Herjoy_pillar4.png",
  },
]

export default function Pillar() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center font-[Chopin] font-bold text-[55px] leading-[27px] tracking-[-0.04em] text-black mb-8">
          Our Pillars
        </h2>

        {/* Animated curved line */}
        <div className="flex justify-center mb-16">
          <svg
            width="278"
            height="65"
            viewBox="0 0 278 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
          >
            <path
              d="M277 1C257 50.9999 145 89 1.00003 41.0001"
              stroke="#A7C047"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="group">
              {/* Desktop Card - Image fills card with overlaid text */}
              <div className="hidden md:block relative rounded-3xl overflow-hidden aspect-[3/4] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src={pillar.image || "/placeholder.svg"} alt={pillar.title} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#A7C047] p-6 rounded-b-3xl">
                  <h3 className="font-[Chopin] font-semibold text-[30px] leading-[27px] tracking-[-0.04em] text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-[Chopin] font-medium text-[17px] leading-[15px] tracking-[-0.04em] text-white">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              {/* Mobile Card - Padded image with text below */}
              <div className="md:hidden bg-[#A7C047] rounded-3xl p-6 shadow-lg">
                <div className="relative aspect-[4/3] mb-4 rounded-2xl overflow-hidden">
                  <Image src={pillar.image || "/placeholder.svg"} alt={pillar.title} fill className="object-cover" />
                </div>
                <h3 className="font-[Chopin] font-semibold text-[24px] leading-[27px] tracking-[-0.04em] text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="font-[Chopin] font-medium text-[14px] leading-[15px] tracking-[-0.04em] text-white">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
