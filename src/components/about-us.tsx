import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-end">
        {/* Text Block */}
        <div className="w-full lg:flex-1">
          <div className="rounded-4xl p-8 lg:p-16 lg:py-24 lg:h-[691px]" style={{ backgroundColor: "#A7C047" }}>
            {/* About Us Heading */}
            <h2 className="text-white text-[55px] font-[Chopin] font-bold leading-[27px] tracking-[-0.04em] text-center mb-8">
              About us
            </h2>

            {/* About Us Text */}
            <div className="text-white text-[20px] font-[Chopin] font-medium leading-[24px] tracking-[-0.04em] text-center space-y-6">
              <p>HerJoy Movement is more than a brand — it&apos;s a return home to yourself.</p>

              <p>
                Created by Ifunanya Joel-Beson, aka Queenofthemic, HerJoy was born from a deep, personal place to make
                wellness joyful, DNA embedded, and legacy-driven.
              </p>

              <p>
                We&apos;re a vibrant community of women moving our bodies, laughing with freedom, nourishing our insides, and
                showing up for ourselves in ways that feel soft, strong, and real.
              </p>

              <p>
                There&apos;s no shame here. No pressure. Just joy. From juicy workouts to healing slow days, HerJoy gives you
                the tools, space, and sisterhood to rise.
              </p>
            </div>
          </div>
        </div>

        {/* Image Block */}
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <div className="rounded-4xl overflow-hidden lg:w-[350px] lg:h-[430px] w-full h-auto">
            <Image
              src="/Herjoy_about.png"
              alt="Three women in black workout attire laughing together"
              width={434}
              height={538}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
