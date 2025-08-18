import AboutUs from "@/components/about-us"
import Hero from "@/components/hero"

export default function HomePage() {
  return (
    <main className="min-h-screen pt-24" style={{ backgroundColor: "#F2F4DE" }}>
      <Hero />
      <AboutUs />
      {/* Add other page sections here */}
    </main>
  )
}
