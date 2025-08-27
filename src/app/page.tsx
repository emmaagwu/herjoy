import AboutUs from "@/components/about-us"
import Hero from "@/components/hero"
import Pillar from "@/components/pillar"
import Programme from "@/components/programme"
import Testimonials from "@/components/testimonials"
import Founder from "@/components/founder"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Product from "@/components/product"

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#F2F4DE" }}>
      <main className="pt-24 space-y-24 lg:space-y-40">
        <Hero />
        <AboutUs />
        <Pillar />
        <Programme />
        <Product />
        <Testimonials />
        <Founder />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
