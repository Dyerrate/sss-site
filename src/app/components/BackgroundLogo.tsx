// src/components/BackgroundLogo.tsx
"use client"
import Image from "next/image"

export default function BackgroundLogo() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
    >
      <div
        className="relative logo-anim logo-glow"
        style={{
          /* Timing: hue slowly, breathe a bit quicker */
          animation: "hueCycle 40s linear infinite, breathe 6s ease-in-out infinite",
          willChange: "filter, transform, opacity",
        }}
      >
        {/* Optional extra blurred halo layer behind the image */}
        <div
          className="absolute -inset-16 blur-[80px]"
          style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.06), transparent)" }}
        />
        <Image
          src="/brand/sss-logo.png"
          alt=""
          width={768}
          height={768}
          priority
          className="select-none"
          sizes="(max-width: 768px) 60vw, (max-width: 1280px) 40vw, 768px"
        />
      </div>
    </div>
  )
}
