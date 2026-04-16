"use client"

import { motion, useReducedMotion } from "framer-motion"
import FadeInOnce from "@/app/components/FadeInOnce"

const privacyPoints = [
  {
    label: "Zero server-side storage",
    detail: "No Connectz servers ever see or store your data",
    icon: (
      <svg aria-hidden className="w-5 h-5 text-[#47B5DD]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
        <line x1="2" y1="12" x2="22" y2="12" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    label: "No ad tracking",
    detail: "We don't collect, sell, or profile your behaviour",
    icon: (
      <svg aria-hidden className="w-5 h-5 text-[#47B5DD]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  {
    label: "CloudKit encrypted",
    detail: "Apple encrypts your data end-to-end on your own iCloud",
    icon: (
      <svg aria-hidden className="w-5 h-5 text-[#47B5DD]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "Delete anytime",
    detail: "Remove your account and all data instantly — no friction",
    icon: (
      <svg aria-hidden className="w-5 h-5 text-[#47B5DD]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6M14 11v6" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    ),
  },
]

export default function ConnectzPrivacySection() {
  const reduced = useReducedMotion() ?? false

  return (
    <section
      id="connectz-privacy"
      className="px-4 sm:px-6 py-12 sm:py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[var(--glass-radius)] border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)] bg-[var(--glass-tint)] backdrop-blur-[var(--glass-backdrop-blur)] backdrop-saturate-[140%] backdrop-brightness-[115%] p-8 sm:p-12 overflow-hidden relative">

          {/* Background shield watermark */}
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={0.5}
            className="absolute -right-8 -bottom-8 w-64 h-64 opacity-[0.03] pointer-events-none"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Left — text */}
            <FadeInOnce amount={0.2} duration={0.9}>
              <div>
                <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider mb-3">Privacy</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                  Your data.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-[#264E9B]">
                    Your device.
                  </span>
                  <br />Your CloudKit.
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-sky-300 via-blue-500 to-[#264E9B] mb-6 rounded-full" />
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                  Connectz is built on a single principle: your personal information belongs to you alone.
                  We store everything — your profile, connections, and conversations — exclusively in Apple&apos;s
                  CloudKit infrastructure.
                </p>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  That means our servers never see your data. No third-party analytics, no advertising
                  SDKs, no silent data brokers. Just you and the people you choose to connect with.
                </p>
              </div>
            </FadeInOnce>

            {/* Right — privacy badges */}
            <ul className="flex flex-col gap-3" aria-label="Privacy guarantees">
              {privacyPoints.map((point, i) => (
                <FadeInOnce key={point.label} delay={i * 0.12} duration={0.8} amount={0.1}>
                  <li className="flex items-center gap-4 rounded-2xl border border-[#264E9B]/30 bg-[#264E9B]/10 p-4">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-[#47B5DD]/20 flex items-center justify-center flex-shrink-0"
                      initial={reduced ? { scale: 1 } : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {point.icon}
                    </motion.div>
                    <div>
                      <p className="text-white font-semibold text-sm">{point.label}</p>
                      <p className="text-neutral-400 text-xs mt-0.5">{point.detail}</p>
                    </div>
                  </li>
                </FadeInOnce>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
