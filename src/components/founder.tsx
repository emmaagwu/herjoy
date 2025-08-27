// "use client"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// export default function Founder() {
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section ref={sectionRef} className="py-16 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2
//             className={`font-[Chopin] font-bold text-[55px] leading-[50px] tracking-[-0.04em] text-black mb-2 transition-transform duration-700 ${
//               isVisible ? "translate-y-0" : "translate-y-4"
//             }`}
//           >
//             Meet the founder and
//             <br />
//             her story
//           </h2>

//           {/* Animated SVG Line */}
//           <div className="flex justify-center">
//             <svg
//               width="278"
//               height="65"
//               viewBox="0 0 278 65"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className={`transition-all duration-1000 delay-300 ${isVisible ? "scale-110" : "scale-75"}`}
//             >
//               <path
//                 d="M277 1C257 50.9999 145 89 1.00003 41.0001"
//                 stroke="#A7C047"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 className={`transition-all duration-1000 delay-500 ${
//                   isVisible ? "stroke-dasharray-0" : "stroke-dasharray-1000 stroke-dashoffset-1000"
//                 }`}
//                 style={{
//                   strokeDasharray: isVisible ? "0" : "1000",
//                   strokeDashoffset: isVisible ? "0" : "1000",
//                 }}
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Content Container */}
//         <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
//           <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//             {/* Founder Image */}
//             <div className="flex-shrink-0 order-1 lg:order-1 lg:flex-1">
//               <div className="relative w-[300px] h-[314px] md:w-[400px] md:h-[418px] lg:w-full lg:h-[500px] max-w-[450px] mx-auto">
//                 <Image
//                   src="/ifunaya.png"
//                   alt="Ifunanya, Founder of HerJoy Movement"
//                   fill
//                   className="object-contain rounded-2xl"
//                   sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 450px"
//                 />
//               </div>
//             </div>

//             {/* Text Content */}
//             <div className="flex-1 order-2 lg:order-2">
//               <div className="space-y-6">
//                 <p className="font-[Chopin] font-medium text-[18px] leading-[22px] tracking-[-0.04em] text-[#3A4704]">
//                   HerJoy Movement was born not from a perfect moment...<br></br>
//                   But from grief. Deep. Raw. Sacred.<br></br>
//                   When we lost our precious daughter, my heart cracked open but somehow I didn&apos;t get lost in the darkness.<br></br>
//                   Instead, I found a strange, holy peace. I cried every day. But I never lost me.
//                 </p>
//                 <p className="font-[Chopin] font-medium text-[18px] leading-[22px] tracking-[-0.04em] text-[#3A4704]">
//                   That season showed me that wellness isn&apos;t a trend, it&apos;s how we survive. It&apos;s how we remember our joy
//                   again. And that&apos;s why this movement exists.
//                 </p>

//                 <p className="font-[Chopin] font-medium text-[18px] leading-[22px] tracking-[-0.04em] text-[#3A4704]">
//                   For every woman holding a child... or holding their breath.
//                   For every mama carrying joy and pain at the same time.
//                   For every sister seeking softness, sweat, laughter, and legacy.
//                 </p>
//                 <p className="font-[Chopin] font-medium text-[18px] leading-[22px] tracking-[-0.04em] text-[#3A4704]">
//                   HerJoy Movement is for you if you&apos;re ready to glow again.<br></br>
//                   Not because everything&apos;s perfect,<br></br>
//                   But because you choose to live.
//                 </p>
//               </div>

//               {/* CTA Button */}
//               <div className="mt-8">
//                 <button className="bg-[#A7C047] text-white font-[Chopin] font-medium text-[16px] px-8 py-3 rounded-full hover:bg-[#96B03A] transition-colors duration-200">
//                   Join us for free
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false);
  const [svgProgress, setSvgProgress] = useState(0);
  const [buttonHovered, setButtonHovered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate SVG growth - matching pillar component
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
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className={`font-[Chopin] font-bold text-[55px] leading-[55px] tracking-[-0.04em] text-black mb-2 transition-all duration-800 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            } hover:scale-105`}
          >
            Meet the founder and
            <br />
            her story
          </h2>

          {/* Animated SVG Line - moved closer to title */}
          <div className="flex justify-center -mt-4">
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
        </div>

        {/* Content Container */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out delay-300 ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Founder Image */}
            <div className={`flex-shrink-0 order-1 lg:order-1 lg:flex-1 transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-8 scale-95'
            }`}>
              <div className="relative w-[300px] h-[314px] md:w-[400px] md:h-[418px] lg:w-full lg:h-[500px] max-w-[450px] mx-auto group">
                <img
                  src="/ifunaya.png"
                  alt="Ifunanya, Founder of HerJoy Movement"
                  className="w-full h-full object-contain rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A7C047]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </div>

            {/* Text Content */}
            <div className={`flex-1 order-2 lg:order-2 transition-all duration-1000 ease-out delay-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}>
              <div className="space-y-6">
                <p className="font-[Chopin] font-medium text-[18px] leading-[22px] tracking-[-0.04em] text-[#3A4704] hover:text-[#2A350A] transition-colors duration-300">
                  HerJoy Movement was born not from a perfect moment...<br></br>
                  But from grief. Deep. Raw. Sacred.<br></br>
                  When we lost our precious daughter, my heart cracked open but somehow I didn&apos;t get lost in the darkness.<br></br>
                  Instead, I found a strange, holy peace. I cried every day. But I never lost me.
                </p>
                <p className="font-[Chopin] font-medium text-[18px] leading-[22px] tracking-[-0.04em] text-[#3A4704] hover:text-[#2A350A] transition-colors duration-300">
                  That season showed me that wellness isn&apos;t a trend, it&apos;s how we survive. It&apos;s how we remember our joy
                  again. And that&apos;s why this movement exists.
                </p>

                <p className="font-[Chopin] font-medium text-[18px] leading-[22px] tracking-[-0.04em] text-[#3A4704] hover:text-[#2A350A] transition-colors duration-300">
                  For every woman holding a child... or holding their breath.
                  For every mama carrying joy and pain at the same time.
                  For every sister seeking softness, sweat, laughter, and legacy.
                </p>
                <p className="font-[Chopin] font-medium text-[18px] leading-[22px] tracking-[-0.04em] text-[#3A4704] hover:text-[#2A350A] transition-colors duration-300">
                  HerJoy Movement is for you if you&apos;re ready to glow again.<br></br>
                  Not because everything&apos;s perfect,<br></br>
                  But because you choose to live.
                </p>
              </div>

              {/* CTA Button */}
              <div className={`mt-8 transition-all duration-800 ease-out delay-900 ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}>
                <a
                  href="https://bit.ly/HerJoyMovement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#A7C047] text-white font-[Chopin] font-medium text-[16px] px-8 py-3 rounded-full transition-all duration-300 ease-out hover:bg-[#8FA038] hover:scale-105 hover:shadow-lg hover:shadow-[#A7C047]/30 active:scale-95 transform-gpu relative overflow-hidden"
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                >
                  <span className="relative z-10">Join us for free</span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#A7C047] to-[#8FA038] rounded-full transition-opacity duration-300 ${
                    buttonHovered ? 'opacity-100' : 'opacity-0'
                  }`} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className={`absolute top-1/4 left-8 w-20 h-20 bg-[#A7C047] rounded-full opacity-5 transition-all duration-2000 ${
            isVisible ? 'translate-x-0 scale-100' : '-translate-x-16 scale-0'
          }`} style={{ filter: 'blur(25px)' }} />
          <div className={`absolute bottom-1/4 right-8 w-28 h-28 bg-[#A7C047] rounded-full opacity-3 transition-all duration-2000 delay-1000 ${
            isVisible ? 'translate-x-0 scale-100' : 'translate-x-16 scale-0'
          }`} style={{ filter: 'blur(35px)' }} />
        </div>
      </div>
    </section>
  )
}
