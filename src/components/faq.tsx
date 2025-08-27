// "use client"

// import { useEffect, useRef, useState } from "react"

// export default function FAQ() {
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

//   const faqs = [
//     {
//       question: "Do I need to be fit to join the Saturday sessions?",
//       answer: "Not at all! Come as you are. Our sessions are beginner-friendly, joyful, and made for real-life women.",
//     },
//     {
//       question: "Can I bring a friend?",
//       answer:
//         "Yes please! The more joy, the better. Feel free to invite your sisters, cousins, neighbors — all are welcome.",
//     },
//     {
//       question: "Will you continue beyond August?",
//       answer: "We're just getting started — stay tuned for more movement events and juicy surprises.",
//     },
//     {
//       question: "What should I wear or bring?",
//       answer:
//         "Just wear something comfy that you can move in. A yoga mat, water bottle, and open heart are always good to bring too.",
//     },
//     {
//       question: "What kind of movement should I expect?",
//       answer:
//         "Think gentle stretches, joyful dance, deep breathing, and sisterhood vibes. It's less about performance and more about presence.",
//     },
//   ]

//   return (
//     <section ref={sectionRef} className="py-16 lg:py-24 px-4 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
//           {/* Title and SVG - Left Column on Desktop */}
//           <div className="text-center lg:text-left mb-16 lg:mb-0">
//             <h2
//               className={`font-[Chopin] font-bold text-[55px] leading-[50px] tracking-[-0.04em] mb-2 transition-transform duration-700 ${
//                 isVisible ? "translate-y-0" : "translate-y-4"
//               }`}
//             >
//               Any questions?
//               <br />
//               Here are your
//               <br />
//               answers
//             </h2>

//             {/* Animated SVG */}
//             <div className="flex justify-center lg:justify-start">
//               <svg
//                 width="278"
//                 height="65"
//                 viewBox="0 0 278 65"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className={`transition-all duration-1000 delay-300 ${
//                   isVisible ? "scale-110 opacity-100" : "scale-75 opacity-0"
//                 }`}
//               >
//                 <path
//                   d="M277 1C257 50.9999 145 89 1.00003 41.0001"
//                   stroke="#A7C047"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   className={`transition-all duration-1000 delay-500 ${
//                     isVisible ? "stroke-dasharray-0" : "stroke-dasharray-1000 stroke-dashoffset-1000"
//                   }`}
//                   style={{
//                     strokeDasharray: isVisible ? "0" : "1000",
//                     strokeDashoffset: isVisible ? "0" : "1000",
//                   }}
//                 />
//               </svg>
//             </div>
//           </div>

//           <div className="space-y-8">
//             {faqs.map((faq, index) => (
//               <div key={index} className="space-y-2">
//                 <div className="font-[Chopin] font-semibold text-[18px] leading-[26px] tracking-[-0.04em] text-black">
//                   Q: {faq.question}
//                 </div>
//                 <div className="font-[Chopin] font-medium text-[18px] leading-[26px] tracking-[-0.04em] text-black">
//                   A: {faq.answer}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [svgProgress, setSvgProgress] = useState(0);
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

  const faqs = [
    {
      question: "Do I need to be fit to join the Saturday sessions?",
      answer: "Not at all! Come as you are. Our sessions are beginner-friendly, joyful, and made for real-life women.",
    },
    {
      question: "Can I bring a friend?",
      answer:
        "Yes please! The more joy, the better. Feel free to invite your sisters, cousins, neighbors — all are welcome.",
    },
    {
      question: "Will you continue beyond August?",
      answer: "We're just getting started — stay tuned for more movement events and juicy surprises.",
    },
    {
      question: "What should I wear or bring?",
      answer:
        "Just wear something comfy that you can move in. A yoga mat, water bottle, and open heart are always good to bring too.",
    },
    {
      question: "What kind of movement should I expect?",
      answer:
        "Think gentle stretches, joyful dance, deep breathing, and sisterhood vibes. It's less about performance and more about presence.",
    },
  ];

  return (
    <section id="faqs" ref={sectionRef} className="py-16 lg:py-24 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Title and SVG - Left Column on Desktop */}
          <div className="text-center lg:text-left mb-16 lg:mb-0">
            <h2
              className={`font-[Chopin] font-bold text-[55px] leading-[55px] tracking-[-0.04em] mb-2 transition-all duration-800 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:scale-105`}
            >
              Any questions?
              <br />
              Here are your
              <br />
              answers
            </h2>

            {/* Animated SVG - moved closer to title */}
            <div className="flex justify-center lg:justify-start -mt-4">
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

          {/* FAQ Items */}
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`space-y-2 p-4 rounded-xl hover:bg-[#A7C047]/5 transition-all duration-500 ease-out hover:scale-102 hover:shadow-lg group ${
                  isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transitionDelay: `${500 + (index * 150)}ms`
                }}
              >
                <div className="font-[Chopin] font-semibold text-[18px] leading-[26px] tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-[#A7C047]">
                  Q: {faq.question}
                </div>
                <div className="font-[Chopin] font-medium text-[18px] leading-[26px] tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-[#3A470A]">
                  A: {faq.answer}
                </div>

                {/* Small decorative element */}
                <div className="w-2 h-2 bg-[#A7C047] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse ml-4" />
              </div>
            ))}

            {/* CTA Button */}
            <div className={`mt-12 transition-all duration-800 ease-out delay-1200 ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <a
                href="https://bit.ly/HerJoyMovement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#A7C047] text-white font-[Chopin] font-medium text-[16px] px-8 py-3 rounded-full transition-all duration-300 ease-out hover:bg-[#8FA038] hover:scale-105 hover:shadow-lg hover:shadow-[#A7C047]/30 active:scale-95 transform-gpu relative overflow-hidden group"
              >
                <span className="relative z-10">Join the movement for free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#A7C047] to-[#8FA038] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
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