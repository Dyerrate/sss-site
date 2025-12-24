import ModelTextGLB from "@/app/components/ModelTextGLB"
import ThreeSection from "@/app/components/ThreeSection"

export default function IntroLogoSection() {
  return (
    <section
      className="w-full"
      style={{ height: "calc(100dvh - var(--site-nav-h, 0px))" }}
    >
      <ThreeSection
        className="h-full"
        height="100%"
        controls={{ rotate: false, pan: false, zoom: false }}
      >
        <ModelTextGLB src="/brand/sss-text-logo2.glb" scale={1.25} />
      </ThreeSection>
    </section>
  )
}
