"use client"

import { useEffect, useRef, useState } from "react"

export default function Product() {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: "#A7C047" }}>
      <div className="max-w-7xl mx-auto">
        {/* Title - centered on all screens */}
        <h2 className={`text-center mb-8 font-[Chopin] font-bold text-[55px] leading-[55px] tracking-[-0.04em] text-black transition-all duration-800 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        } hover:scale-105`}>
          HerJoy Natural Drinks
        </h2>

        {/* Content Container */}
        <div className={`bg-white rounded-3xl p-8 lg:p-12 transition-all duration-1000 ease-out delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-12 scale-95'
        } hover:shadow-2xl hover:shadow-black/10`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Mobile: Text first */}
            <div className={`lg:hidden mb-8 transition-all duration-800 ease-out delay-500 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-6 hover:text-[#3A470A] transition-colors duration-300">
                HerJoy juice is cold-pressed, nutrient-rich, and freshly blended weekly in Leicester to nourish
                you from within.
              </p>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-6 hover:text-[#3A470A] transition-colors duration-300">
                Available for Leicester based collection only (for now).
              </p>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-8 hover:text-[#3A470A] transition-colors duration-300">
                Interested? click to join the waitlist
              </p>
              <a 
                href="https://bit.ly/HerJoyMovement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#A7C047] text-white px-8 py-3 rounded-full font-[Chopin] font-medium text-[18px] transition-all duration-300 ease-out hover:bg-[#8FA038] hover:scale-105 hover:shadow-lg hover:shadow-[#A7C047]/30 active:scale-95 transform-gpu"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
              >
                <span className="relative z-10">Join the waitlist</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-[#A7C047] to-[#8FA038] rounded-full transition-opacity duration-300 ${
                  buttonHovered ? 'opacity-100' : 'opacity-0'
                }`} />
              </a>
            </div>

            {/* Images */}
            <div className={`flex flex-col lg:flex-row gap-6 lg:gap-4 lg:flex-1 transition-all duration-1000 ease-out delay-700 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative w-full lg:w-[197px] h-[300px] lg:h-[392px] rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-500 ease-out">
                <img 
                  src="/drinks/drink1.png" 
                  alt="Green juice in jars" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A7C047]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative w-full lg:w-[197px] h-[300px] lg:h-[392px] rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-500 ease-out">
                <img 
                  src="/drinks/drink2.png" 
                  alt="Red juice in bottles" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A7C047]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative w-full lg:w-[197px] h-[300px] lg:h-[392px] rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-500 ease-out">
                <img 
                  src="/drinks/drink3.png" 
                  alt="Green juice in bottles" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A7C047]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Desktop: Text on right */}
            <div className={`hidden lg:block lg:flex-1 transition-all duration-1000 ease-out delay-900 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-6 hover:text-[#3A470A] transition-colors duration-300">
                HerJoy juice is cold-pressed, nutrient-rich, and freshly blended weekly in Leicester to nourish
                you from within.
              </p>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-6 hover:text-[#3A470A] transition-colors duration-300">
                Available for Leicester based collection only (for now).
              </p>
              <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-black mb-8 hover:text-[#3A470A] transition-colors duration-300">
                Interested? click to join the waitlist
              </p>
              <a 
                href="https://bit.ly/HerJoyMovement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#A7C047] text-white px-8 py-3 rounded-full font-[Chopin] font-medium text-[18px] transition-all duration-300 ease-out hover:bg-[#8FA038] hover:scale-105 hover:shadow-lg hover:shadow-[#A7C047]/30 active:scale-95 transform-gpu relative overflow-hidden"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
              >
                <span className="relative z-10">Join the waitlist</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-[#A7C047] to-[#8FA038] rounded-full transition-opacity duration-300 ${
                  buttonHovered ? 'opacity-100' : 'opacity-0'
                }`} />
              </a>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className={`absolute top-1/4 left-8 w-24 h-24 bg-white rounded-full opacity-10 transition-all duration-2000 ${
            isVisible ? 'translate-x-0 scale-100' : '-translate-x-16 scale-0'
          }`} style={{ filter: 'blur(30px)' }} />
          <div className={`absolute bottom-1/4 right-8 w-32 h-32 bg-white rounded-full opacity-5 transition-all duration-2000 delay-800 ${
            isVisible ? 'translate-x-0 scale-100' : 'translate-x-16 scale-0'
          }`} style={{ filter: 'blur(40px)' }} />
        </div>
      </div>
    </section>
  )
}
