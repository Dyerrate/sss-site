"use client"

import { motion, useReducedMotion } from "framer-motion"
import FadeInOnce from "@/app/components/FadeInOnce"

export default function ConnectzAppStoreSection() {
  const reduced = useReducedMotion() ?? false
  const year = new Date().getFullYear()

  return (
    <section
      id="connectz-appstore"
      className="px-4 sm:px-6 py-12 sm:py-20 md:py-28"
    >
      <div className="max-w-2xl mx-auto">
        <FadeInOnce amount={0.2} duration={0.9}>
          <div className="rounded-[var(--glass-radius)] border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)] bg-[var(--glass-tint)] backdrop-blur-[var(--glass-backdrop-blur)] backdrop-saturate-[140%] backdrop-brightness-[115%] p-8 sm:p-12 text-center">

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#47B5DD]/20 border border-[#47B5DD]/30 flex items-center justify-center">
                <svg aria-hidden className="w-8 h-8 text-[#47B5DD]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider mb-3">Coming Soon</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Connectz is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-[#264E9B]">
                on its way.
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-300 via-blue-500 to-[#264E9B] mx-auto mb-6 rounded-full" />

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10">
              Wishlist now on the App Store and be among the first to connect when we launch.
              No spam — just a notification the day it drops.
            </p>

            {/* CTA with pulse rings */}
            <div className="relative inline-flex items-center justify-center mb-6">
              {/* Pulse rings */}
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-2xl bg-[#47B5DD]/20"
                animate={reduced ? {} : { scale: [1, 1.35], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-2xl bg-[#47B5DD]/15"
                animate={reduced ? {} : { scale: [1, 1.6], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
              />

              {/* TODO: replace with real App Store URL before launch */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wishlist Connectz on the App Store (opens in new tab)"
                className="relative z-10 inline-flex items-center gap-3 rounded-2xl
                           bg-[#47B5DD] hover:bg-[#2173AA] active:scale-[0.98]
                           px-7 py-3.5 text-white font-semibold text-base
                           transition-colors duration-300 shadow-lg shadow-[#47B5DD]/20
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47B5DD] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {/* Apple logo mark */}
                <svg aria-hidden className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 814 1000">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.8 0 663.6 0 541.8c0-207.8 135.4-317.9 268.5-317.9 70.5 0 129.4 46.4 173.8 46.4 42.8 0 109.9-48.9 190.5-48.9 30.3 0 108.2 2.6 168.2 79.3zm-160-156.8c-7.7 36.6-29 73.2-55.2 97.1-27.9 25.3-62.5 44.9-97.1 44.9-3.9 0-7.7-.3-11.6-.9 1.3-37.9 17.4-76.2 43-103.4 26.3-28.5 64.2-49.4 99.5-57.1 3.5-.7 7-.9 10.3-.9l11.1.3z" />
                </svg>
                Wishlist on the App Store
              </a>
            </div>

            <p className="text-neutral-500 text-xs sm:text-sm">
              iOS only &middot; {year} &middot; Requires iCloud sign-in
            </p>

            <div className="mt-6 pt-6 border-t border-white/8">
              <a
                href="/products/connectz/privacypolicy"
                className="text-neutral-500 hover:text-[#47B5DD] text-xs transition-colors underline underline-offset-2"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </FadeInOnce>
      </div>
    </section>
  )
}
