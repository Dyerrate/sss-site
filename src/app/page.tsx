import GlassSection from "@/app/components/GlassSection"
import Glass from "@/app/components/Glass"
import ModelTextGLB from "@/app/components/ModelTextGLB"
import ThreeSection from "@/app/components/ThreeSection"
import GlassProductButton from "@/app/components/GlassProductButton"
import GlassScrollShowcase from "./components/GlassScrollShowcase"
import GlassContactForm from "./components/GlassContactForm"
import FadeInOnce from "@/app/components/FadeInOnce"
import InteractiveChipGLB from "@/app/components/InteractiveChipGLB"

export default function Page() {
  return (
    <>
      {/* Auto-sized to content, centered with page padding */}
        <section
        aria-hidden
        className="h-screen w-full"
      />
           {/* Intro GLB Text Section */}

  <section className="h-screen w-full">
      <ThreeSection height={520} controls={{ rotate: false, pan: false, zoom: false }}>
        <ModelTextGLB src="/brand/sss-text-logo2.glb" scale={1.25} />
      </ThreeSection>
</section>

      {/* Welcome to Launch Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <FadeInOnce amount={0.3} duration={0.9}>
          <GlassSection className="text-center max-w-4xl w-full px-10 md:px-16 py-20 rounded-3xl relative overflow-hidden">
            {/* Decorative gradient orbs */}
 
            <div className="relative z-10">
              {/* Main Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Launch</span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-8 rounded-full" />

              {/* Product Name Highlight */}
              <div className="mb-8">
                <p className="text-neutral-400 text-sm uppercase tracking-wider mb-3">Introducing</p>
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 mb-4">
                  Poker Legends
                </h3>
                <p className="text-neutral-300 text-base md:text-lg italic max-w-2xl mx-auto">
                  A premium tabletop casino experience designed exclusively for visionOS
                </p>
              </div>

              {/* Interactive Poker Chip */}
              <div className="my-8">
                <ThreeSection height={300} controls={{ rotate: false, pan: false, zoom: false }}>
                  <InteractiveChipGLB scale={25} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]} />
                </ThreeSection>
              </div>

              {/* Launch Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-blue-300 text-sm font-semibold tracking-wide">LAUNCHING SOON</span>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                {/* Twitter/X */}
                <a 
                  href="https://twitter.com/subspacialstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-neutral-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">Twitter</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/company/subspacialstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-neutral-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">LinkedIn</span>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com/@subspacialstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-neutral-300 group-hover:text-red-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">YouTube</span>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/subspacialstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-neutral-300 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">GitHub</span>
                </a>
              </div>
            </div>
          </GlassSection>
        </FadeInOnce>
      </section>

      {/* Combined Crafting + Solo Development Section */}

     <section className="min-h-screen flex items-center justify-center px-4 py-16">
  <div className="max-w-[90rem] w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    {/* LEFT: Crafting Immersive Worlds */}
    <FadeInOnce amount={0.3} duration={0.8} delay={0.1}>
      <GlassSection className="group/left text-center px-6 md:px-10 py-10 lg:py-8 rounded-3xl relative overflow-hidden h-full transition-all duration-700 ease-in-out lg:hover:py-10 lg:cursor-pointer">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-700 lg:group-hover/left:bg-blue-500/20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-all duration-700 lg:group-hover/left:bg-purple-500/20" />
        
        {/* Content with relative positioning */}
        <div className="relative z-10">
          {/* Hero headline - Always visible */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 leading-tight transition-all duration-500">
            Crafting Immersive Worlds
          </h1>
          
          {/* Decorative divider - Always visible */}
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-4 rounded-full transition-all duration-500 lg:group-hover/left:w-24" />
          
          {/* Expandable content - Always visible on mobile, hidden on desktop until hover */}
          <div className="max-h-[2000px] opacity-100 lg:max-h-0 lg:opacity-0 overflow-hidden transition-all duration-700 ease-in-out lg:group-hover/left:max-h-[2000px] lg:group-hover/left:opacity-100">
          {/* Subheadline */}
          <p className="text-neutral-200 text-base md:text-lg leading-relaxed mb-3">
            <strong className="text-white font-semibold">Sub Spatial Studio LLC</strong> is a professional AR/VR development studio 
            specializing in immersive spatial experiences.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            Founded and operated by a dedicated solo developer with expertise in spatial computing 
            and interactive design, we deliver high-quality extended reality applications that blend 
            creativity with technical excellence.
          </p>

          {/* Value proposition cards */}
          <div className="grid grid-cols-1 gap-3 mt-6">
            <div className="group/card p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-2 group-hover/card:scale-110 transition-transform duration-300">🥽</div>
              <h3 className="text-white font-semibold text-base mb-1">Immersive Apps</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">Engaging spatial experiences that captivate and challenge users with intuitive interactions</p>
            </div>
            
            <div className="group/card p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-2 group-hover/card:scale-110 transition-transform duration-300">🛠️</div>
              <h3 className="text-white font-semibold text-base mb-1">Productivity Tools</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">Practical applications that enhance spatial workflows and boost efficiency</p>
            </div>
            
            <div className="group/card p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-400/30 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-2 group-hover/card:scale-110 transition-transform duration-300">✨</div>
              <h3 className="text-white font-semibold text-base mb-1">Innovative Design</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">Pushing boundaries of mixed reality interaction with thoughtful UX</p>
            </div>
          </div>
        </div>
      </div>
    </GlassSection>
    </FadeInOnce>

    {/* RIGHT: Solo Development */}
    <FadeInOnce amount={0.3} duration={0.8} delay={0.2}>
      <GlassSection className="group/right text-center px-6 md:px-10 py-10 lg:py-8 rounded-3xl relative overflow-hidden h-full transition-all duration-700 ease-in-out lg:hover:py-10 lg:cursor-pointer">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 transition-all duration-700 lg:group-hover/right:bg-green-500/20" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 transition-all duration-700 lg:group-hover/right:bg-blue-500/20" />
        
        <div className="relative z-10">
          {/* Section Title - Always visible */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight transition-all duration-500">
            The Reality of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Solo Development</span>
          </h2>
          
          {/* Decorative divider - Always visible */}
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-4 rounded-full transition-all duration-500 lg:group-hover/right:w-24" />

          {/* Expandable content - Always visible on mobile, hidden on desktop until hover */}
          <div className="max-h-[2000px] opacity-100 lg:max-h-0 lg:opacity-0 overflow-hidden transition-all duration-700 ease-in-out lg:group-hover/right:max-h-[2000px] lg:group-hover/right:opacity-100">
          {/* Main Content */}
          <div className="space-y-4">
            <p className="text-neutral-300 text-base leading-relaxed">
              As a solo developer running Sub Spatial Studio LLC, I've learned that the greatest challenge 
              isn't debugging complex spatial interactions or optimizing performance—it's <strong className="text-white">time management</strong>.
            </p>

            <p className="text-neutral-300 text-base leading-relaxed">
              Balancing a full-time career alongside indie development means progress moves at a measured pace. 
              Each project receives dedicated attention during evenings and weekends, with updates rolling out 
              as quality allows rather than hitting arbitrary deadlines.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl mb-2">⏱️</div>
                <h4 className="text-white font-semibold mb-1 text-sm">Sustainable Pace</h4>
                <p className="text-neutral-400 text-xs">Quality development over rushed releases</p>
              </div>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="text-white font-semibold mb-1 text-sm">Focused Vision</h4>
                <p className="text-neutral-400 text-xs">Every feature is intentional and polished</p>
              </div>
            </div>

            <p className="text-neutral-300 text-base leading-relaxed">
              This approach means you're not just getting software—you're getting a product crafted with care 
              by someone who genuinely loves spatial computing and takes pride in every detail. Thank you for 
              your patience and understanding as this journey unfolds.
            </p>
          </div>

          {/* Signature */}
          <p className="text-neutral-400 italic mt-5 text-sm">
            — Founder, Sub Spatial Studio LLC
          </p>
        </div>
      </div>
    </GlassSection>
    </FadeInOnce>
    
  </div>
</section>

      {/* Contact Form Section - Last scrollable content */}
      <GlassContactForm />
    </>
  )
}
