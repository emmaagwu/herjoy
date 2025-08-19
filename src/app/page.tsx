import AboutUs from "@/components/about-us"
import Hero from "@/components/hero"
import Pillar from "@/components/pillar"

export default function HomePage() {
  return (
    <main className="min-h-screen pt-24" style={{ backgroundColor: "#F2F4DE" }}>
      <Hero />
      <AboutUs />
      <Pillar />
      {/* Add other page sections here */}
    </main>
  )
}
