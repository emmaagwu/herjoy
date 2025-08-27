// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"


// const navigationItems = [
//   { name: "Home", href: "/" },
//   { name: "About us", href: "/about" },
//   { name: "Programmes", href: "/programmes" },
//   { name: "Testimonials", href: "/testimonials" },
//   { name: "FAQs", href: "/faqs" },
// ]

// export default function Navigation() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   return (
//     <>
//       <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
//         <div className="bg-white rounded-4xl">
//           <div className="px-6 lg:px-8">
//             <div className="flex justify-between items-center h-14">
//               {/* Logo */}
//               <div className="flex items-center">
//                 <Link href="/">
//                   <Image
//                     src="/Herjoy_logo.png"
//                     alt="HerJoy Logo"
//                     width={140}
//                     height={100}
//                   />
//                 </Link>
//               </div>

//               {/* Desktop Navigation */}
//               <div className="hidden md:block">
//                 <div className="flex items-center space-x-11">
//                   {navigationItems.map((item) => (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       className="text-[F3F3F3] hover:text-[#A7C047] px-3 py-2 text-sm font-[Chopin] font-medium transition-colors duration-200"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* Mobile menu button */}
//               <div className="md:hidden">
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={toggleMobileMenu}
//                   className="text-gray-700 hover:text-green-600"
//                 >
//                   {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {isMobileMenuOpen && (
//           <div className="md:hidden mt-2">
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-4">
//               <div className="space-y-2">
//                 {navigationItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-gray-700 hover:text-[#A7C047] block px-3 py-2 text-base font-[Chopin] font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#about" },
  { name: "Programmes", href: "#programmes" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faqs" },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Handle smooth scrolling to sections
  const scrollToSection = (href: string) => {
    const targetId = href.substring(1) // Remove the # from href
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      })
      setActiveSection(targetId)
    }

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 transition-all duration-1000 ease-out ${
        isLoaded
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8'
      }`}>
        <div className="bg-white/90 backdrop-blur-md rounded-4xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out border border-white/20">
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-14">
              {/* Logo Container */}
              <div className="flex items-center">
                <button
                  onClick={() => scrollToSection("#home")}
                  className="flex items-center space-x-2 group cursor-pointer"
                >
                  {/* Rotating Logo */}
                  <div className="relative">
                    <Image
                      src="/Herjoy_logo.png"
                      alt="HerJoy Logo"
                      width={40}
                      height={40}
                      className="transition-transform duration-700 ease-out group-hover:rotate-360 transform-gpu"
                      style={{
                        transform: 'rotate(0deg)',
                        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.transform = 'rotate(360deg)'
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.transform = 'rotate(0deg)'
                      }}
                    />
                  </div>

                  {/* Logo Text */}
                  <Image
                    src="/Herjoy_logo_text.png"
                    alt="HerJoy Text"
                    width={100}
                    height={30}
                    className="transition-all duration-300 ease-out group-hover:scale-105"
                  />
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-11">
                  {navigationItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`relative px-3 py-2 text-sm font-[Chopin] font-medium transition-all duration-300 ease-out transform hover:scale-105 ${
                        activeSection === item.href.substring(1)
                          ? 'text-[#A7C047]'
                          : 'text-gray-700 hover:text-[#A7C047]'
                      } ${
                        isLoaded
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: isLoaded ? `${200 + index * 100}ms` : '0ms'
                      }}
                    >
                      {item.name}
                      {/* Active indicator */}
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#A7C047] transition-all duration-300 ease-out ${
                        activeSection === item.href.substring(1)
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className={`md:hidden transition-all duration-500 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-4'
              }`}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-[#A7C047] hover:bg-[#A7C047]/10 transition-all duration-300 ease-out hover:scale-110 active:scale-95"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 transition-transform duration-300 ease-out rotate-90" />
                  ) : (
                    <Menu className="h-6 w-6 transition-transform duration-300 ease-out" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-2 transition-all duration-500 ease-out transform ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 px-6 py-4 overflow-hidden">
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative w-full text-left px-4 py-4 text-base font-[Chopin] font-medium rounded-lg group overflow-hidden transition-all duration-500 ease-out transform ${
                    activeSection === item.href.substring(1)
                      ? 'text-[#A7C047] bg-[#A7C047]/10 shadow-sm scale-105'
                      : 'text-gray-700 hover:text-white hover:shadow-lg'
                  } ${
                    isMobileMenuOpen
                      ? 'opacity-100 translate-x-0 translate-y-0'
                      : 'opacity-0 translate-x-8 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${150 + index * 100}ms` : '0ms'
                  }}
                >
                  {/* Background animation on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A7C047] to-[#8FA038] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg"></div>

                  {/* Animated border */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#A7C047]/20 rounded-lg transition-all duration-300"></div>

                  {/* Text content */}
                  <span className="relative z-10 flex items-center justify-between">
                    <span className="transition-all duration-300 group-hover:transform group-hover:translate-x-1">
                      {item.name}
                    </span>

                    {/* Animated arrow */}
                    <span className="transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-white">
                      →
                    </span>
                  </span>

                  {/* Ripple effect on click */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 transform scale-0 group-active:scale-100 transition-transform duration-200 ease-out origin-center rounded-full"></div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-12"></div>
                </button>
              ))}
            </div>

            {/* Mobile menu decorative elements */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#A7C047] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#A7C047] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </nav>

      {/* Custom styles for 360 degree rotation */}
      <style jsx>{`
        .group:hover img:first-child {
          transform: rotate(360deg) !important;
        }
      `}</style>
    </>
  )
}