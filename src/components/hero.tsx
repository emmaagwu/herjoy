export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <div className="text-center">
        {/* Main heading with specific typography */}
        <h1 className="mb-6 lg:mb-8">
          <span
            className="block text-black"
            style={{
              fontFamily: "var(--font-chopin, serif)",
              fontWeight: 600,
              fontSize: "clamp(32px, 8vw, 60px)",
              lineHeight: "1",
              letterSpacing: "-0.04em",
              textAlign: "center",
            }}
          >
            Wellness is{" "}
            <span
              style={{
                fontFamily: "var(--font-chopin, serif)",
                fontWeight: 800,
                fontStyle: "italic",
                color: "#A7C047",
              }}
            >
              Power.
            </span>
          </span>
          <span
            className="block text-black mt-2"
            style={{
              fontFamily: "var(--font-chopin, serif)",
              fontWeight: 600,
              fontSize: "clamp(32px, 8vw, 60px)",
              lineHeight: "1",
              letterSpacing: "-0.04em",
              textAlign: "center",
            }}
          >
            It's Joy. It's Legacy
          </span>
        </h1>

        {/* Subtitle text */}
        <p
          className="mb-8 lg:mb-12 max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--font-chopin, serif)",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "-0.04em",
            textAlign: "center",
            color: "#3A470A",
          }}
        >
          Welcome to HerJoy Movement — a soulful wellness space for women who want to move, laugh, heal, and grow
          unapologetically. Whether you're holding your breath, holding a baby, or just trying to hold it together...
          you belong here.
        </p>

        {/* CTA Button */}
        <button
          className="mb-12 lg:mb-16 px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#A7C047" }}
        >
          Join the movement for free
        </button>

        {/* Hero Image Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/Herjoy_hero.png"
              alt="Three women in black workout attire smiling together"
              className="w-full h-auto"
              style={{
                maxWidth: "900px",
                height: "auto",
                aspectRatio: "900/542",
              }}
            />
          </div>

          {/* Statistics badges */}
          <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 flex gap-4">
            <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold">
              <span className="hidden lg:inline">1440</span>
              <span className="lg:hidden">350.63</span>
            </div>
            <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold">
              <span className="hidden lg:inline">1084</span>
              <span className="lg:hidden">211.09</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
