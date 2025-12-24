"use client"

import React from "react"
import Link from "next/link"
import clsx from "clsx"
import { usePageTransition } from "@/app/components/PageTransitionProvider"

type Props = Omit<React.ComponentProps<typeof Link>, "onClick"> & {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  disableTransition?: boolean
}

function isModifiedEvent(e: React.MouseEvent<HTMLAnchorElement>) {
  return e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== 0
}

function isInternalHref(href: unknown): href is string {
  if (typeof href !== "string") return false
  if (!href) return false
  if (href.startsWith("#")) return false
  if (href.startsWith("mailto:")) return false
  if (href.startsWith("tel:")) return false
  if (href.startsWith("http://") || href.startsWith("https://")) return false
  return href.startsWith("/")
}

export default function TransitionLink({
  href,
  onClick,
  className,
  disableTransition,
  ...rest
}: Props) {
  const { transitionTo, isTransitioning } = usePageTransition()

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return
        if (disableTransition) return
        if (isTransitioning) {
          e.preventDefault()
          return
        }
        if (isModifiedEvent(e)) return
        if (!isInternalHref(href)) return

        e.preventDefault()
        transitionTo(href)
      }}
      aria-disabled={isTransitioning ? true : undefined}
      className={clsx(isTransitioning && "pointer-events-none", className)}
      {...rest}
    />
  )
}
