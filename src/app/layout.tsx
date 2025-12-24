import type { Metadata, Viewport } from "next"
import "./globals.css"
import BackgroundLogo from "@/app/components/BackgroundLogo"
import ScrollResetProvider from "@/app/components/ScrollResetProvider"
import SiteNav from "@/app/components/SiteNav"
import SiteFooter from "@/app/components/SiteFooter"
import PageTransitionProvider from "@/app/components/PageTransitionProvider"

export const metadata: Metadata = {
  title: "Sub Spatial Studio",
  description: "Immersive spatial and 3D experiences by Sub Spatial Studio.",
  icons: {
    icon: [{ url: "/brand/sss-logo.svg", type: "image/svg+xml" }],
    shortcut: ["/brand/sss-logo.svg"],
  },
}
export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="relative bg-black text-neutral-200 font-asimovian antialiased">
        <BackgroundLogo />
        <ScrollResetProvider>
          <PageTransitionProvider>
            <div className="relative z-10 min-h-screen flex flex-col">
              <SiteNav />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </PageTransitionProvider>
        </ScrollResetProvider>
      </body>
    </html>
  )
}