import type { Metadata } from "next"
import ConnectzHeroSection from "@/app/components/ConnectzHeroSection"
import ConnectzFeaturesSection from "@/app/components/ConnectzFeaturesSection"
import ConnectzPrivacySection from "@/app/components/ConnectzPrivacySection"
import ConnectzAppStoreSection from "@/app/components/ConnectzAppStoreSection"

export const metadata: Metadata = {
  title: "Connectz | Sub Spatial Studio",
  description:
    "Meet fellow travelers, explore together, and connect privately. Connectz keeps your data in CloudKit — never on a server.",
}

export default function ConnectzPage() {
  return (
    <div className="w-full">
      <ConnectzHeroSection />
      <ConnectzFeaturesSection />
      <ConnectzPrivacySection />
      <ConnectzAppStoreSection />
    </div>
  )
}
