export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <div className="text-center">
        {/* Main heading */}
        <h1 className="mb-6 lg:mb-8">
          <span
            className="block text-black font-[Chopin] font-semibold text-[34.76px] leading-[34.76px] tracking-[-0.04em] text-center lg:text-[60px] lg:leading-[60px]"
          >
            Wellness is{" "}
            <span
              className="font-[Chopin] font-extrabold italic text-[34.76px] leading-[34.76px] tracking-[-0.04em] lg:text-[60px] lg:leading-[60px] text-center text-[#A7C047]"
            >
              Power.
            </span>
          </span>
          <span
            className="block text-black mt-2 font-[Chopin] font-semibold text-[34.76px] leading-[34.76px] tracking-[-0.04em] text-center lg:text-[60px] lg:leading-[60px]"
          >
            It&apos;s Joy. It&apos;s Legacy
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-8 lg:mb-12 max-w-2xl mx-auto font-[Chopin] font-medium text-[12px] leading-[14px] lg:text-[16px] lg:leading-[20px] tracking-[-0.04em] text-center text-[#3A470A]"
        >
          Welcome to HerJoy Movement — a soulful wellness space for women who want to move, laugh, heal, and grow
          unapologetically. Whether you&apos;re holding your breath, holding a baby, or just trying to hold it together...
          you belong here.
        </p>

        {/* CTA Button */}
        <button
          className="mb-12 lg:mb-16 px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity bg-[#A7C047]"
        >
          Join the movement for free
        </button>

        {/* Hero Image Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/Herjoy_hero.png"
              alt="Three women in black workout attire smiling together"
              className="w-full h-auto max-w-[900px] aspect-[900/542]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
