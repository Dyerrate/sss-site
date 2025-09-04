import GlassSection from "@/app/components/GlassSection"
import Glass from "@/app/components/Glass"
import ModelTextGLB from "@/app/components/ModelTextGLB"
import ThreeSection from "@/app/components/ThreeSection"
import GlassProductButton from "@/app/components/GlassProductButton"
import GlassScrollShowcase from "./components/GlassScrollShowcase"
export default function Page() {
  return (
    <>
      {/* Auto-sized to content, centered with page padding */}
        <section
        aria-hidden
        className="h-screen w-full"
      />
     
  <section className="h-screen w-full">
      <ThreeSection height={520}>
        <ModelTextGLB src="/brand/sss-text-logo2.glb" scale={1.25} />
      </ThreeSection>
</section>

      {/* Another section */}

     <section className="h-screen flex items-center justify-center">
  <GlassSection className="text-center max-w-3xl w-full px-10 py-16 rounded-3xl">
    {/* Top blurb */}
    <p className="text-neutral-300 leading-relaxed text-lg">
      <strong>Sub Spatial Studio</strong> is an indie AR/VR studio. Driven by a solo developer
      with ambition to craft imaginative, tactile experiences—and publish creative AR/VR
      apps that feel both playful and premium.
    </p>

    {/* Enticing CTA */}
    <p className="mt-8 text-neutral-300 text-base leading-relaxed">
      Since starting as a solo developer I've only just realized it’s not pesky bugs that hinder
      my updates, but time itself. Managing expectations with a 9/5 daily life will be key to
      my success. I hope you’ll understand the timeline of my progression moving forward.
      <br /> <span className="italic">— Some Dev</span>
    </p>

    {/* Buttons grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* buttons go here */}
    </div>
  </GlassSection>
</section>

 <GlassScrollShowcase heightVh={300} minScale={0.38}>
        {/* Text that appears only when the box is fullscreen */}
        <h3 className="text-2xl md:text-3xl font-semibold">What we’re building</h3>
        <p className="text-neutral-300">
          A growing catalog of playful, premium AR/VR apps—crafted by an indie studio obsessed
          with tactility, finish, and flow.
        </p>
      </GlassScrollShowcase>

     <section className="h-screen flex items-center justify-center">
  <GlassSection className="text-center max-w-3xl w-full px-10 py-16 rounded-3xl">
    {/* Top blurb */}
    <p className="text-neutral-300 leading-relaxed text-lg">
      <strong>Sub Spatial Studio</strong> is an indie AR/VR studio. Driven by a solo developer
      with ambition to craft imaginative, tactile experiences—and publish creative AR/VR
      apps that feel both playful and premium.
    </p>

    {/* Enticing CTA */}
    <p className="mt-8 text-neutral-300 text-base leading-relaxed">
      Since starting as a solo developer I've only just realized it’s not pesky bugs that hinder
      my updates, but time itself. Managing expectations with a 9/5 daily life will be key to
      my success. I hope you’ll understand the timeline of my progression moving forward.
      <br /> <span className="italic">— Some Dev</span>
    </p>

    {/* Buttons grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* buttons go here */}
    </div>
  </GlassSection>
</section>

      {/* Fullscreen example (e.g., future contact overlay or gallery) */}
      {/* <Glass full padding="p-10" glow>
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-semibold">Fullscreen Glass</h2>
            <p className="mt-4 text-neutral-200">Use for overlays or modals.</p>
          </div>
        </div>
      </Glass> */}
    </>
  )
}

