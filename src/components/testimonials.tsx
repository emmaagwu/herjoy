// "use client"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// export default function Testimonials() {
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

//   const testimonials = [
//     {
//       image: "/Herjoy_Testimony1.png",
//       quote: "After just one Saturday, I felt lighter in my body and spirit. The community energy? Unmatched!",
//       author: "HerJoy Babe",
//     },
//     {
//       image: "/Herjoy_Testimony2.png",
//       quote: "I came for the workout, I stayed for the laughter, the healing, and the juice!",
//       author: "First-time participant",
//     },
//     {
//       image: "/Herjoy_Testimony3.png",
//       quote: "I came for the workout, I stayed for the laughter, the healing, and the juice!",
//       author: "First-time participant",
//     },
//   ]

//   return (
//     <section ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
//       {/* Title */}
//       <h2
//         className={`text-center mb-2 font-[Chopin] font-bold text-[55px] leading-[27px] tracking-[-0.04em] transition-transform duration-700 ${
//           isVisible ? "translate-y-0" : "translate-y-2"
//         }`}
//         style={{ color: "#000000" }}
//       >
//         Testimonials
//       </h2>

//       {/* Animated SVG Line */}
//       <div className="flex justify-center mb-8">
//         <svg
//           width="278"
//           height="65"
//           viewBox="0 0 278 65"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className={`transition-all duration-1000 ease-out ${isVisible ? "scale-110" : "scale-75"}`}
//         >
//           <path
//             d="M277 1C257 50.9999 145 89 1.00003 41.0001"
//             stroke="#A7C047"
//             strokeWidth="2"
//             strokeLinecap="round"
//             className={`transition-all duration-1000 ease-out ${
//               isVisible ? "stroke-dasharray-0" : "stroke-dasharray-1000"
//             }`}
//             style={{
//               strokeDasharray: isVisible ? "0" : "1000",
//               strokeDashoffset: isVisible ? "0" : "1000",
//             }}
//           />
//         </svg>
//       </div>

//       {/* Description Text */}
//       <p
//         className="text-center max-w-2xl mx-auto mb-8 font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em]"
//         style={{ color: "#3A470A" }}
//       >
//         Every woman&apos;s journey is unique, and so is her healing. Hear how HerJoy has helped women rediscover their
//         strength, restore balance, and embrace their glow, one step, one sip, one breath at a time?
//       </p>

//       {/* CTA Button */}
//       <div className="flex justify-center mb-12">
//         <button className="bg-[#A7C047] text-white px-8 py-3 rounded-full font-[Chopin] font-medium text-[16px] hover:bg-[#96B03A] transition-colors duration-200">
//           Join the movement for free
//         </button>
//       </div>

//       {/* Testimonial Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="bg-white rounded-3xl p-6 shadow-sm">
//             {/* Image */}
//             <div className="mb-6">
//               <Image
//                 src={testimonial.image || "/placeholder.svg"}
//                 alt={`Testimonial from ${testimonial.author}`}
//                 width={300}
//                 height={300}
//                 className="w-full h-64 object-cover rounded-2xl"
//               />
//             </div>

//             {/* Quote */}
//             <blockquote
//               className="mb-4 font-[Chopin] font-medium text-[20px] leading-[20px] tracking-[-0.04em]"
//               style={{ color: "#3A4704" }}
//             >
//               &apos;{testimonial.quote}&apos;
//             </blockquote>

//             {/* Author */}
//             <cite
//               className="font-[Chopin] font-normal italic text-[20px] leading-[20px] tracking-[-0.04em]"
//               style={{ color: "#3A4704" }}
//             >
//               {testimonial.author}
//             </cite>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"

export default function Testimonials() {
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
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
      {/* Title - matching pillar component animation */}
      <h2
        className={`text-center mb-2 font-[Chopin] font-bold text-[55px] leading-[55px] tracking-[-0.04em] transition-all duration-800 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        } hover:scale-105`}
        style={{ color: "#000000" }}
      >
        Testimonials
      </h2>

      {/* Animated SVG Line - matching pillar component */}
      <div className="flex justify-center mb-8 -mt-4">
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

      {/* Description Text */}
      <p
        className={`text-center max-w-2xl mx-auto mb-8 font-[Chopin] font-medium text-[20px] leading-[27px] tracking-[-0.04em] transition-all duration-800 ease-out delay-500 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        } hover:text-[#2A350A] hover:scale-105`}
        style={{ color: "#3A470A" }}
      >
        Every woman&apos;s journey is unique, and so is her healing. Hear how HerJoy has helped women rediscover their
        strength, restore balance, and embrace their glow, one step, one sip, one breath at a time?
      </p>

      {/* CTA Button */}
      <div className={`flex justify-center mb-12 transition-all duration-800 ease-out delay-700 ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      }`}>
        <a
          href="https://bit.ly/HerJoyMovement"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#A7C047] text-white px-8 py-3 rounded-full font-[Chopin] font-medium text-[16px] transition-all duration-300 ease-out hover:bg-[#8FA038] hover:scale-105 hover:shadow-lg hover:shadow-[#A7C047]/30 active:scale-95 transform-gpu relative overflow-hidden"
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          <span className="relative z-10">Join the movement for free</span>
          <div className={`absolute inset-0 bg-gradient-to-r from-[#A7C047] to-[#8FA038] rounded-full transition-opacity duration-300 ${
            buttonHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </a>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 group ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{
              transitionDelay: `${900 + (index * 200)}ms`
            }}
          >
            {/* Image */}
            <div className="mb-6">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={`Testimonial from ${testimonial.author}`}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#A7C047]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>

            {/* Quote */}
            <blockquote
              className="mb-4 font-[Chopin] font-medium text-[20px] leading-[20px] tracking-[-0.04em] transition-all duration-300 group-hover:text-[#2A350A] group-hover:scale-105"
              style={{ color: "#3A4704" }}
            >
              &apos;{testimonial.quote}&apos;
            </blockquote>

            {/* Author */}
            <cite
              className="font-[Chopin] font-normal italic text-[20px] leading-[20px] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#A7C047]"
              style={{ color: "#3A4704" }}
            >
              {testimonial.author}
            </cite>

            {/* Floating decoration */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-[#A7C047] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
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
    </section>
  )
}
