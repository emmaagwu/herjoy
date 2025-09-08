"use client"


import { useState, useEffect, useRef } from 'react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
    <div id="about" ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-8 lg:items-end lg:justify-center lg:min-h-[691px] ">
        {/* Text Block */}
        <div
          className={`relative min-h-[550px] lg:w-[514px] lg:h-[688px] p-8 lg:p-16 lg:py-24
            transition-all duration-1000 ease-out transform-gpu
            hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#A7C047]/20
            flex flex-col justify-center lg:justify-start`}
          style={{
            backgroundColor: "#A7C047",
            borderRadius: "80px"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            {/* About Us Heading */}
            <h2 className={`text-white text-[55px] font-[Chopin] font-bold leading-[55px] tracking-[-0.04em] text-center mb-8 lg:mb-12 transition-all duration-800 ease-out delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            } hover:scale-105`}>
              About us
            </h2>

            {/* About Us Text */}
            <div className="text-white text-[16px] lg:text-[20px] font-[Chopin] font-medium leading-[20px] lg:leading-[24px] tracking-[-0.04em] text-center space-y-4 lg:space-y-6">
              <p className={`transition-all duration-800 ease-out delay-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:scale-102`}>
                HerJoy is not just a community, it is a homecoming.
              </p>

              <p className={`transition-all duration-800 ease-out delay-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:scale-102`}>
                Here, women heal, move, and glow again through our four pillars:
              </p>

              <p className={`transition-all duration-800 ease-out delay-900 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:scale-102`}>
                Movement that awakens strength.
              </p>
              <p className={`transition-all duration-800 ease-out delay-900 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:scale-102`}>
                Wellness that nourishes body and soul.
              </p>
              <p className={`transition-all duration-800 ease-out delay-900 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:scale-102`}>
                Laughter that frees the spirit.
              </p>
              <p className={`transition-all duration-800 ease-out delay-900 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:scale-102`}>
                Legacy that turns scars into light.
              </p>

              <p className={`transition-all duration-800 ease-out delay-1100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:scale-102`}>
                This is your circle, your reminder that joy is never lost.
              </p>
            </div>

            {/* Floating decoration inside the green block */}
            <div className={`absolute top-8 right-8 w-4 h-4 bg-white/20 rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            } animate-pulse`} style={{ animationDelay: '2s' }} />
            <div className={`absolute bottom-12 left-12 w-6 h-6 bg-white/15 rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            } animate-pulse`} style={{ animationDelay: '2.5s' }} />
          </div>
        {/* </div> */}

        {/* Image Block */}
        {/* Image Block */}
      <div className="w-full lg:w-auto lg:flex-shrink-0">
        <div
          className={`overflow-hidden w-full h-auto lg:w-[514px] lg:h-[688px] transition-all duration-1200 ease-out delay-400 transform-gpu group ${
            isVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 translate-x-12 scale-95'
          } hover:scale-105 hover:shadow-2xl hover:shadow-black/20`}
          style={{ borderRadius: "80px" }}
        >
          <img
            src="/Herjoy_about.png"
            alt="Three women in black workout attire laughing together"
            className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
          />

    {/* Image overlay effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#A7C047]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Decorative elements around image */}
    <div className={`absolute -top-3 -right-3 w-8 h-8 bg-[#A7C047] rounded-full transition-all duration-1000 ${
      isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-0'
    } animate-bounce`} style={{ animationDelay: '3s' }} />
    <div className={`absolute -bottom-3 -left-3 w-6 h-6 bg-[#A7C047] rounded-full transition-all duration-1000 ${
      isVisible ? 'opacity-40 scale-100' : 'opacity-0 scale-0'
    } animate-bounce`} style={{ animationDelay: '3.5s' }} />
  </div>
</div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className={`absolute top-1/4 left-0 w-24 h-24 bg-[#A7C047] rounded-full opacity-5 transition-all duration-2000 ${
            isVisible ? 'translate-x-0 scale-100' : '-translate-x-20 scale-0'
          }`} style={{ filter: 'blur(30px)' }} />
          <div className={`absolute bottom-1/4 right-0 w-32 h-32 bg-[#A7C047] rounded-full opacity-3 transition-all duration-2000 delay-800 ${
            isVisible ? 'translate-x-0 scale-100' : 'translate-x-20 scale-0'
          }`} style={{ filter: 'blur(40px)' }} />
        </div>

        {/* Spacer removed since we're back to flexbox layout */}
      </div>
    </div>
  )
}