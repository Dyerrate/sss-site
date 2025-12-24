"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Glass from "@/app/components/Glass"
import { usePageTransition } from "@/app/components/PageTransitionProvider"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
] as const

export default function SiteNav() {
  const pathname = usePathname()
  const { transitionTo, isTransitioning } = usePageTransition()
  const headerRef = useRef<HTMLElement>(null)
  const [pendingHref, setPendingHref] = useState<string | null>(null)

  useEffect(() => {
    if (!isTransitioning) {
      setPendingHref(null)
    }
  }, [isTransitioning])

  useEffect(() => {
    if (pendingHref && pathname === pendingHref) {
      setPendingHref(null)
    }
  }, [pathname, pendingHref])

  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const update = () => {
      const h = el.getBoundingClientRect().height
      document.documentElement.style.setProperty("--site-nav-h", `${h}px`)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener("resize", update)

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-40 w-full px-4 pt-4">
      <Glass padding="px-5 py-4" className="w-full">
        <nav className="relative flex items-center justify-between gap-6">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault()
              transitionTo("/")
            }}
            aria-disabled={isTransitioning}
            className={clsx(
              "text-white font-semibold tracking-wide whitespace-nowrap",
              isTransitioning && "pointer-events-none opacity-80"
            )}
          >
            Sub Spatial Studio
          </Link>

          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault()
              transitionTo("/")
            }}
            aria-disabled={isTransitioning}
            aria-label="Home"
            className={clsx(
              "absolute left-1/2 -translate-x-1/2",
              isTransitioning && "pointer-events-none opacity-80"
            )}
          >
            <Image
              src="/brand/sss-logo.svg"
              alt=""
              aria-hidden="true"
              width={72}
              height={72}
              className="h-[72px] w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)
              const isPending = isTransitioning && pendingHref === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setPendingHref(item.href)
                    transitionTo(item.href)
                  }}
                  aria-disabled={isTransitioning}
                  className={clsx(
                    "px-4 py-2 rounded-2xl text-sm border transition-colors",
                    isTransitioning && "pointer-events-none",
                    isPending && "text-white border-white/35 bg-white/10 border-dashed",
                    !isPending &&
                      (isActive
                        ? "text-white border-white/25 bg-white/10"
                        : "text-neutral-300 border-white/10 hover:text-white hover:border-white/20 hover:bg-white/5")
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      </Glass>
    </header>
  )
}
