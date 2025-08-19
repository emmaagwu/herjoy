import AboutUs from "@/components/about-us"
import Hero from "@/components/hero"
import Pillar from "@/components/pillar"
import Programme from "@/components/programme"
import Testimonials from "@/components/testimonials"

export default function HomePage() {
  return (
    <main className="min-h-screen pt-24" style={{ backgroundColor: "#F2F4DE" }}>
      <Hero />
      <AboutUs />
      <Pillar />
      <Programme />
      <Testimonials />
      {/* Add other page sections here */}
    </main>
  )
}
