// "use client"

// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"

// export default function Programme() {
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.3 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section ref={sectionRef} className="py-16 px-4 md:px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Title */}
//         <h2
//           className={`font-[Chopin] font-bold text-[55px] leading-[27px] tracking-[-0.04em] text-black mb-2 transition-transform duration-700 ${isVisible ? "translate-y-0" : "translate-y-2"}`}
//         >
//           Programmes
//         </h2>

//         {/* Animated curved line */}
//         <div className="flex justify-center mb-12 -mt-2">
//           <svg
//             width="278"
//             height="65"
//             viewBox="0 0 278 65"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className={`transition-all duration-1000 ease-out ${isVisible ? "scale-110" : "scale-75"}`}
//           >
//             <path
//               d="M277 1C257 50.9999 145 89 1.00003 41.0001"
//               stroke="#A7C047"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>

//         {/* Programme Content */}
//         <div className="space-y-8">
//           {/* Programme Title */}
//           <div className="space-y-2">
//             <h3 className="font-[Chopin] font-semibold text-[36px] leading-[36px] tracking-[-0.04em] text-black">
//               Sweat With Me Saturdays
//             </h3>
//             <p className="font-[Chopin] font-normal italic text-[36px] leading-[36px] tracking-[-0.04em] text-black">
//               (August Edition)
//             </p>
//           </div>

//           {/* Description */}
//           <p className="font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-[#3A470A] max-w-2xl mx-auto">
//             Join our FREE Saturday joy-workouts in Leicester all through August! Come move your body, vibe with other
//             women, and enjoy a post-workout cup of green glow. Expect joy, sweat, and dance breaks!
//           </p>

//           {/* CTA Button */}
//           <button className="bg-[#A7C047] text-white font-[Chopin] font-medium text-[18px] px-8 py-4 rounded-full hover:bg-[#96B03A] transition-colors duration-300">
//             Join us for free
//           </button>

//           {/* Programme Image */}
//           <div className="mt-12">
//             {/* Desktop - maintain aspect ratio */}
//             <div className="hidden md:block relative w-full max-w-4xl mx-auto aspect-[936/528] rounded-3xl overflow-hidden shadow-lg">
//               <Image
//                 src="/Herjoy_programme.png"
//                 alt="Sweat With Me Saturdays programme"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Mobile - crop sides */}
//             <div className="md:hidden relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
//               <Image
//                 src="/Herjoy_programme.png"
//                 alt="Sweat With Me Saturdays programme"
//                 fill
//                 className="object-cover object-center"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { useEffect, useRef, useState } from "react"

export default function Programme() {
  const [isVisible, setIsVisible] = useState(false);
  const [svgProgress, setSvgProgress] = useState(0);
  const [buttonHovered, setButtonHovered] = useState(false);
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
              progress += 0.025;
              setSvgProgress(Math.min(progress, 1));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            setTimeout(animate, 400); // Start after title animation
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
    <section  id="programmes" ref={sectionRef} className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2
          className={`font-[Chopin] font-bold text-[55px] leading-[55px] tracking-[-0.04em] text-black mb-2 transition-all duration-800 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          } hover:scale-105`}
        >
          Programmes
        </h2>

        {/* Animated curved line - moved closer to title */}
        <div className="flex justify-center mb-12 -mt-4">
          <svg
            width="278"
            height="65"
            viewBox="0 0 278 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
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
                transition: 'stroke-dashoffset 1.2s ease-out'
              }}
            />
          </svg>
        </div>

        {/* Programme Content */}
        <div className="space-y-8">
          {/* Programme Title */}
          <div className={`space-y-2 transition-all duration-800 ease-out delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h3 className="font-[Chopin] font-semibold text-[36px] leading-[36px] tracking-[-0.04em] text-black hover:scale-105 transition-transform duration-300">
              Sweat With Me Saturdays
            </h3>
            <p className="font-[Chopin] font-normal italic text-[36px] leading-[36px] tracking-[-0.04em] text-black hover:text-[#A7C047] transition-colors duration-300">
              (August Edition)
            </p>
          </div>

          {/* Description */}
          <p className={`font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] text-[#3A470A] max-w-2xl mx-auto transition-all duration-800 ease-out delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } hover:text-[#2A350A] hover:scale-105`}>
            Join our FREE Saturday joy-workouts in Leicester all through August! Come move your body, vibe with other
            women, and enjoy a post-workout cup of green glow. Expect joy, sweat, and dance breaks!
          </p>

          {/* CTA Button */}
          <div className={`transition-all duration-800 ease-out delay-900 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}>
            <a
              href="https://bit.ly/HerJoyMovement"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A7C047] text-white font-[Chopin] font-medium text-[18px] px-8 py-4 rounded-full transition-all duration-300 ease-out hover:bg-[#8FA038] hover:scale-105 hover:shadow-lg hover:shadow-[#A7C047]/30 active:scale-95 transform-gpu"
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
            >
              <span className="relative z-10">Join us for free</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-[#A7C047] to-[#8FA038] rounded-full transition-opacity duration-300 ${
                buttonHovered ? 'opacity-100' : 'opacity-0'
              }`} />
            </a>
          </div>

          {/* Programme Image */}
          <div className={`mt-12 transition-all duration-1000 ease-out delay-1100 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}>
            {/* Desktop - maintain aspect ratio */}
            <div className="hidden md:block relative w-full max-w-4xl mx-auto aspect-[936/528] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out group">
              <img
                src="/Herjoy_programme.png"
                alt="Sweat With Me Saturdays programme"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#A7C047]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating decorations */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#A7C047] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#A7C047] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Mobile - crop sides */}
            <div className="md:hidden relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out group">
              <img
                src="/Herjoy_programme.png"
                alt="Sweat With Me Saturdays programme"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#A7C047]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className={`absolute top-1/4 left-4 w-16 h-16 bg-[#A7C047] rounded-full opacity-5 transition-all duration-2000 ${
            isVisible ? 'translate-x-0 scale-100' : '-translate-x-12 scale-0'
          }`} style={{ filter: 'blur(20px)' }} />
          <div className={`absolute bottom-1/4 right-4 w-20 h-20 bg-[#A7C047] rounded-full opacity-3 transition-all duration-2000 delay-800 ${
            isVisible ? 'translate-x-0 scale-100' : 'translate-x-12 scale-0'
          }`} style={{ filter: 'blur(25px)' }} />
        </div>
      </div>
    </section>
  )
}