"use client"



import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <div className="text-center">
        {/* Main heading */}
        <div className="mb-6 lg:mb-8">
          <h1 className="mb-4 lg:mb-6">
            <span
              className={`block text-black font-[Chopin] font-bold text-[34.76px] leading-[34.76px] tracking-[-0.04em] text-center lg:text-[60px] lg:leading-[60px] transition-all duration-1000 ease-out ${isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
            >
              We move. We heal. <span className='hidden md:inline-block' >We</span>
            </span>
            <span
              className={`block text-black mt-2 font-[Chopin] font-bold text-[34.76px] leading-[34.76px] tracking-[-0.04em] text-center lg:text-[60px] lg:leading-[60px] transition-all duration-1000 ease-out delay-200 ${isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
            >
              <span className='md:hidden' >We{' '}</span>
              laugh. We live{" "}
              <span className='text-[#A7C047] hidden md:inline-block'>
                again
              </span>
              <span className='text-[#A7C047] md:hidden'>
                <br />
                again
              </span>
            </span>
          </h1>

          {/* Subtitle - reduced width on large screens */}
          <p
            className={`font-[Chopin] font-medium text-[12px] leading-[14px] lg:text-[16px] lg:leading-[20px] tracking-[-0.04em] text-center text-[#3A470A] max-w-full px-10 lg:max-w-lg mx-auto transition-all duration-1000 ease-out delay-500 ${isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
          >
            HerJoy Movement is where women across the world return to their bodies and their joy. From Leicester to Lagos, from Dubai to Toronto — one rhythm, one sisterhood, one rising.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="https://bit.ly/HerJoyMovement"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`inline-block mb-12 lg:mb-16 px-8 py-3 rounded-full text-white font-medium transition-all duration-500 ease-out bg-[#A7C047] ${isLoaded
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
            } hover:scale-105 hover:bg-[#8FA038] hover:shadow-lg hover:shadow-[#A7C047]/30 active:scale-95 transform-gpu`}
          style={{
            transitionDelay: isLoaded ? '700ms' : '0ms',
            boxShadow: isHovered
              ? '0 10px 25px -5px rgba(167, 192, 71, 0.3), 0 0 0 1px rgba(167, 192, 71, 0.1)'
              : 'none'
          }}
        >
          <span className="relative z-10">
            Join the circle for free
          </span>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#A7C047] to-[#8FA038] rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </a>

        {/* Hero Image Container */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1200 ease-out delay-900 ${isLoaded
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-95'
          }`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 ease-out group">
            <img
              src="/Herjoy_hero.png"
              alt="Three women in black workout attire smiling together"
              className="w-full h-auto max-w-[900px] aspect-[900/542] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle overlay gradient that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating elements for extra visual interest */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#A7C047] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#A7C047] rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className={`absolute top-20 left-10 w-32 h-32 bg-[#A7C047] rounded-full opacity-5 transition-all duration-2000 ${isLoaded ? 'translate-x-0 translate-y-0' : '-translate-x-20 -translate-y-10'
            }`} style={{ filter: 'blur(40px)' }} />
          <div className={`absolute bottom-20 right-10 w-48 h-48 bg-[#A7C047] rounded-full opacity-3 transition-all duration-2000 delay-500 ${isLoaded ? 'translate-x-0 translate-y-0' : 'translate-x-20 translate-y-10'
            }`} style={{ filter: 'blur(60px)' }} />
        </div>
      </div>
    </div>
  )
}