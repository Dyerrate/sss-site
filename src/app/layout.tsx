import type { Metadata, Viewport } from "next"
import "./globals.css"
import BackgroundLogo from "@/app/components/BackgroundLogo"
import ScrollResetProvider from "@/app/components/ScrollResetProvider"

export const metadata: Metadata = {
  title: "Sub Spacial Studio",
  description: "Immersive 3D/AR work by SSS",
}
export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="relative bg-black text-neutral-200 font-asimovian antialiased">
        <BackgroundLogo />
        <ScrollResetProvider>
          <main className="relative z-10">{children}</main>
        </ScrollResetProvider>
      </body>
    </html>
  )
}