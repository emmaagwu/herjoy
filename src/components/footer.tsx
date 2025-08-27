import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#A7C047] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:justify-between lg:items-start lg:mb-8">
          {/* Left side - Email and Location */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
                <Image
                  src="/logos/mail.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <a
                  href="mailto:Connect@herjoymovement.com"
                  className="font-[Chopin] font-semibold text-[14px] lg:text-[24px] leading-[30px] tracking-[-0.04em] hover:underline"
                >
                  Connect@herjoymovement.com
                </a>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/logos/location.png" alt="Location" width={24} height={24} className="w-6 h-6" />
              <span className="font-[Chopin] font-semibold text-[24px] leading-[30px] tracking-[-0.04em]">
                377 Fosse Road North, Leicester, LE3 5RT, United Kingdom
              </span>
            </div>
          </div>

          {/* Right side - Instagram */}
          <a
            href="https://www.instagram.com/queeniofthemic?igsh=MWdlNWNseW9zc2ozbw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logos/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="font-[Chopin] font-semibold text-[24px] leading-[30px] tracking-[-0.04em]">
              Ifunanya Ruth...
            </span>
          </a>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6 mb-8">
          <a
            href="https://www.instagram.com/queeniofthemic?igsh=MWdlNWNseW9zc2ozbw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logos/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="font-[Chopin] font-semibold text-[14px] lg:text-[24px] leading-[30px] tracking-[-0.04em]">
              Ifunanya Ruth...
            </span>
          </a>

          <div className="flex items-center gap-3">
            <Image
              src="/logos/mail.png"
              alt="Email"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <a
              href="mailto:Connect@herjoymovement.com"
              className="font-[Chopin] font-semibold text-[14px] lg:text-[24px] leading-[30px] tracking-[-0.04em] hover:underline"
            >
              Connect@herjoymovement.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Image src="/logos/location.png" alt="Location" width={24} height={24} className="w-6 h-6" />
            <span className="font-[Chopin] font-semibold text-[14px] lg:text-[24px] leading-[30px] tracking-[-0.04em]">
              377 Fosse Road North, Leicester, LE3 5RT, United Kingdom
            </span>
          </div>
        </div>

        {/* Copyright - Same for both layouts */}
        <div className="text-left">
          <span className="font-[Chopin] font-semibold text-[14px] lg:text-[24px] leading-[30px] tracking-[-0.04em] lg:text-left">
            <span className="inline">©</span>HerJoyMovement2025
          </span>
        </div>
      </div>
    </footer>
  )
}
