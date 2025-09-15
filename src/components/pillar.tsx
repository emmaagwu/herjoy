//

"use client"

import { useState, useEffect, useRef } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const [svgProgress, setSvgProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate SVG growth
          const animateSVG = () => {
            let progress = 0;
            const animate = () => {
              progress += 0.02;
              setSvgProgress(Math.min(progress, 1));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            setTimeout(animate, 500); // Start after title animation
          };
          animateSVG();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className={`text-center font-[Chopin] font-bold text-[55px] leading-[55px] tracking-[-0.04em] text-black mb-2 transition-all duration-800 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        } hover:scale-105`}>
          Our Pillars
        </h2>

        {/* Animated curved line - moved closer to title */}
        <div className="flex justify-center mb-16 -mt-4">
          <svg
            width="278"
            height="65"
            viewBox="0 0 278 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <path
              d="M277 1C257 50.9999 145 89 1.00003 41.0001"
              stroke="#A7C047"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="400"
              strokeDashoffset={400 * (1 - svgProgress)}
              style={{
                transition: 'stroke-dashoffset 1.5s ease-out'
              }}
            />
          </svg>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`group transition-all duration-800 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionDelay: `${800 + (index * 200)}ms`
              }}
            >
              {/* Desktop Card - Image fills card with overlaid text */}
              <div className="hidden md:block relative rounded-3xl overflow-hidden aspect-[3/4] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 group">
                <img
                  src={pillar.image || "/placeholder.svg"}
                  alt={pillar.title}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#A7C047] p-6 rounded-b-3xl transition-all duration-500 ease-out group-hover:bg-[#8FA038]">
                  <h3 className="font-[Chopin] font-semibold text-[30px] leading-[30px] tracking-[-0.04em] text-white mb-2 transition-transform duration-300 group-hover:scale-105">
                    {pillar.title}
                  </h3>
                  <p className="font-[Chopin] font-medium text-[17px] leading-[17px] tracking-[-0.04em] text-white transition-all duration-300 group-hover:text-white/90">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Floating decoration */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#A7C047] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
              </div>

              {/* Mobile Card - Padded image with text below */}
              <div className="md:hidden bg-[#A7C047] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:bg-[#8FA038] group">
                <div className="relative aspect-[4/3] mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={pillar.image || "/placeholder.svg"}
                    alt={pillar.title}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <h3 className="font-[Chopin] font-semibold text-[24px] leading-[27px] tracking-[-0.04em] text-white mb-2 transition-transform duration-300 group-hover:scale-105">
                  {pillar.title}
                </h3>
                <p className="font-[Chopin] font-medium text-[14px] leading-[15px] tracking-[-0.04em] text-white transition-all duration-300 group-hover:text-white/90">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className={`absolute top-1/3 left-8 w-20 h-20 bg-[#A7C047] rounded-full opacity-5 transition-all duration-2000 ${
            isVisible ? 'translate-x-0 scale-100' : '-translate-x-16 scale-0'
          }`} style={{ filter: 'blur(25px)' }} />
          <div className={`absolute bottom-1/3 right-8 w-28 h-28 bg-[#A7C047] rounded-full opacity-3 transition-all duration-2000 delay-1000 ${
            isVisible ? 'translate-x-0 scale-100' : 'translate-x-16 scale-0'
          }`} style={{ filter: 'blur(35px)' }} />
        </div>
      </div>
    </section>
  )
}