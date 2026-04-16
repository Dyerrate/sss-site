"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import FadeInOnce from "@/app/components/FadeInOnce"

// ─── Animation variants ───────────────────────────────────────────────────────

const pieceVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -15 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.9 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
}

const groupStyle = { transformBox: "fill-box" as const, transformOrigin: "center" }

// ─── Inline animated SVG logo ─────────────────────────────────────────────────

function ConnectzLogo({ reduced }: { reduced: boolean }) {
  const initial = reduced ? "visible" : "hidden"
  const vp = { once: true as const, amount: 0.3 as const }

  return (
    <motion.svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-48 h-48 sm:w-64 sm:h-64 drop-shadow-[0_0_32px_rgba(65,181,221,0.4)]"
      role="img"
      aria-label="Connectz logo — a human figure made of interconnected puzzle pieces"
    >
      <defs>
        <linearGradient id="cz_p0" x1="55.04" x2="145.3" y1="171.7" y2="171.7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3178B1" offset="0" /><stop stopColor="#004A7F" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p1" x1="19.53" x2="38.83" y1="125" y2="125" gradientUnits="userSpaceOnUse">
          <stop stopColor="#115A8B" offset="0" /><stop stopColor="#2173AA" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p2" x1="158.4" x2="178.4" y1="127.3" y2="127.3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#115A8B" offset="0" /><stop stopColor="#2173AA" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p3" x1="48.26" x2="56.65" y1="117.1" y2="117.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#115A8B" offset="0" /><stop stopColor="#2173AA" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p4" x1="66.63" x2="137.9" y1="147.5" y2="147.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#264E9B" offset="0" /><stop stopColor="#2AA6DF" offset=".28" />
          <stop stopColor="#59B16A" offset=".76" /><stop stopColor="#59B16A" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p5" x1="155.6" x2="177.6" y1="66.1" y2="66.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#264E9B" offset="0" /><stop stopColor="#369FCA" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p6" x1="20.07" x2="133.8" y1="47.17" y2="47.17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#99D6EA" offset="0" /><stop stopColor="#47B5DD" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p7" x1="127.4" x2="141.3" y1="82.99" y2="82.99" gradientUnits="userSpaceOnUse">
          <stop stopColor="#369FCA" offset="0" /><stop stopColor="#369FCA" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p8" x1="37.25" x2="57.05" y1="41.5" y2="41.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#73C4E2" offset="0" /><stop stopColor="#C8DB82" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p9" x1="37.63" x2="67.48" y1="84.31" y2="84.31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#73C4E2" offset="0" /><stop stopColor="#47B5DD" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p10" x1="157.2" x2="176.3" y1="81.73" y2="81.73" gradientUnits="userSpaceOnUse">
          <stop stopColor="#264E9B" offset="0" /><stop stopColor="#369FCA" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p11" x1="132" x2="171.9" y1="37.65" y2="37.65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#97D68D" offset="0" /><stop stopColor="#38A7BA" offset=".61" />
          <stop stopColor="#38A7BA" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p12" x1="66.63" x2="137" y1="51.93" y2="51.93" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C0DF8E" offset="0" /><stop stopColor="#47B6DD" offset=".61" />
          <stop stopColor="#47B6DD" offset="1" />
        </linearGradient>
        <linearGradient id="cz_p13" x1="134.5" x2="172.7" y1="149.4" y2="149.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#47B6DD" offset="0" /><stop stopColor="#264E9B" offset=".71" />
          <stop stopColor="#264E9B" offset="1" />
        </linearGradient>
      </defs>

      {/* Group 0 — shadow ellipse */}
      <motion.g custom={0} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m61.31 192.2c0 1.35 14.67 2.44 32.78 2.44 18.12 0 43.12-1.09 43.12-2.44 0-1.36-25-1.84-43.12-1.84-18.11 0-32.78 0.48-32.78 1.84z" fill="#327A9B" opacity=".25" />
      </motion.g>

      {/* Group 1 — right arm + hand */}
      <motion.g custom={1} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m179.4 185.1c-2.16-2.36-3.18-1.95-7.23-3.47-3.84-1.43-6.47-6.5-7.47-9.25-0.99-2.75-6.93-7.64-8.18-10.39s-1.38-5.24 1.12-5.24 8.98 9.06 13.74 10.43c3.44 1.03 5.05 0 5.05 0l-0.92-2 0.65-6.95-1.24-2.46-5.95-4.63 14.42 3.38 7.49 23.15 2.09 2.71" fill="#CEE3EA" />
        <path d="m178.2 192c-2.35-4.21-5.96-4.59-8.2-5.99-4.87-2.9-5.96-6.05-7.91-10.2-1.25-2.93-6.79-8.9-8.3-10.71-2.89-3.42-3.4-7.73-0.09-7.94 3.77-0.23 9.26 9.81 14.75 10.94 2.64 0.57 5.53-0.34 5.53-0.34l-1.6-1.65 0.33-6.04-7.33-6.04 4.5-7.86 13.25 8.72c2.81 1.97 4.03 15.02 9.51 24.3" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="m165.1 170.6-4.65 5.84c-1.61 2.22-5.3 1.52-5.53-1.19l0.27-2.86c-2.35 1.32-4.32 0.88-4.94-1.47-0.62-2.36 1.89-5.21 1.89-5.21" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </motion.g>

      {/* Group 2 — lower body arc */}
      <motion.g custom={2} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m136.1 163.6c0.8-1.42 3.14-1.84 4.97-0.31l4.25 2.45c-12.55 10.04-28.3 15.86-46.22 15.86-16.77 0-31.82-5.18-44.05-14.28l2.44-1.87c3-1.15 4.7 1.87 4.7 1.87l2.24 4.22c9.52 5.52 20.3 7.66 32.26 7.66 13.95 0 27.11-3.83 38.13-10.71l1.28-4.89z" fill="url(#cz_p0)" stroke="#003264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </motion.g>

      {/* Group 3 — left + right body outer */}
      <motion.g custom={3} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m19.53 116.8c1.76 8.98 5.61 17.36 8.28 21.89l1.08-0.93c-1.08-4.63 2.07-13.02 5.56-14.05 2.24-0.67 3.95 1.17 4.26 0l-1.08-8.39c-2.09-1.1-2.85-2.52-3.18-3.45-3.15 3.45-7.07 5.5-14.92 4.93z" fill="url(#cz_p1)" stroke="#003264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="m48.26 116.4c0 2.86 1.77 4.32 4.22 4.32 2.93 0 4.17-1.8 4.17-4.32l-3.24-2.96c-1.7 1.45-2.62 2.08-5.15 2.96z" fill="url(#cz_p3)" stroke="#003264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </motion.g>

      {/* Group 4 — right body outer */}
      <motion.g custom={4} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m178.4 117.1c-1.87 8.39-5.36 16.91-8.25 21.44l-1.33-0.71c0.62-4.37-2.72-12.61-7.03-12.61-1.87 0-3.33 1.32-3.33 0l0.62-8.12c1.25-1.03 2.01-0.89 3.62 0 2.75 1.59 7.45 1.87 10.34-1.03 1.86 0.75 3.6 0.91 5.36 1.03z" fill="url(#cz_p2)" stroke="#003264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </motion.g>

      {/* Group 5 — core body mass */}
      <motion.g custom={5} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m137.8 128.2c-0.82 4.21-4.69 4.21-5.52 3.46-2.24-1.8-3.17 0.38-2.86 2.41l0.31 8.53-1.25 9.9c-0.62 2.75-2.12 1.72-3.68 1.15-2.72-0.94-5.66 1.46-5.6 3.91 0.06 2.46 2.03 3.11 4.27 2.46s3.17 0.14 2.24 2.74l-2.24 5.84c-3.25 0.48-8.12 0-8.12 0 1.77 1.36 0 4.96-3.46 4.96s-5.59-1.42-4.24-3.88c0.99-1.97-0.67-1.7-1.5-1.49l-8.85 0.62-0.52 10.89c-5.48 0-12.81-1.69-14.78-3.34l-8.25-9.38-8.55-0.92 2.55-4.09 3.46-1.49-2.55-3.37 2.24-2.45 0.31-1.01-2.13-16.29c-1.61-4.21-0.94-5.25 1.82-4.21 2.35 0.92 4.01-0.29 4.47-3.5 0.34-2.46-2.19-4.93-4.47-4-2.89 1.1-4.14 0.52-4.14-0.93v-7.85l1.38-1.57 2.76 1.57h6.79l1.25-1.57c0.93 1.29 2.01 1.29 2.93 1.29l6.86-0.81 1.08-1.1c0.93 1.56 2.38 1.91 3.31 1.91h5.48l1.35-2.39 2.35 0.48c1.87 3.24 4.76 3.58 6.31 3.58-0.82 1.83 1.42 3.73 4.57 3.73 3.46 0 5.7-1.9 4.62-6.69l2.68-1.45c2.13 2.53 4.85 3.02 8.31 3.02l-0.52 6.19c-0.47 2.35 1.66 3.11 3.01 2.07 2.89-2.14 7.23-0.41 6.52 3.07z" fill="url(#cz_p4)" stroke="#003264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </motion.g>

      {/* Group 6 — upper shoulders */}
      <motion.g custom={6} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m149.6 76.24c2.86-0.58 6.19 0.67 7.61 0.67l0.53-6.81 1.86-5.03 2.61 0.69 5.49-12.55c6 7.65 9.06 16.96 9.93 24.49l-2.94 1.3v9.83l-5.48 0.41-12.52-0.93v-4.08l-1.09-2.92-2.71-0.86-4.4-2.04v-1.09c-0.31-0.61 0-0.89 1.11-1.08z" fill="url(#cz_p5)" stroke="#003264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="m37.25 47.16 1.87 1.9 5.79-0.93 3-9.9c1.7-0.27 2.5 0.66 5.81-0.55 2.65-0.96 3.45-3.67 2.09-3.87-1.61-0.28-3.58 0.41-3.58 0.41l-1.52-0.69c-5.52 3.49-10.9 9.6-13.46 13.63z" fill="url(#cz_p8)" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="m139.8 82.28c1.34-1.42 3.05-6.17 0.53-6.66-2.09-0.43-9.43 0.89-10.88 0.62l-1.71 0.27 1.08 11.6 10.98 0.92v-6.75z" fill="url(#cz_p7)" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </motion.g>

      {/* Group 7 — head + upper body */}
      <motion.g custom={7} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m20.07 78.81c7.58-31.37 34.62-63.12 78.84-63.12 12.84 0 23.06 2.56 34.91 8.71l-1.71 1.97-11.18-1.97-3.82-5.67-4.38 1.97-5.18-0.85-1.87 1.9-6.86-5.19-1.61 6.1-8.19 1.74-2.24-0.85-4.25-3.43-5.18 4.28-8.84 0.93 3.91-4.63c-20.09 6.46-36.35 20.4-44.55 36.36-4.38 8.39-6.51 14.16-7.8 21.75z" fill="url(#cz_p6)" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="m37.63 77.63c4.06 0.92 2.5 0 6.74 0 3.27 0 4.75-0.45 4.2-4.12-0.45-3.07 1.25-4.17 3.38-4.3 2.35-0.14 3.46 1.86 3.09 3.52-0.53 2.18-2.4 4.9 1.61 4.9 2.44 0 5.41-0.38 10.12-1.12l0.71 11.12-0.71 0.99c-3.15-0.34-7.06 0-9.56 1.43-1.97-1.43-3.22-1.7-5.26-1.7-3.69 0-7.22 0.27-9.38 1.3 0.62-6.39-2.34-10.17-4.94-12.02z" fill="url(#cz_p9)" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="m157.2 76.64 7.69 0.99c2.81 0 3.37-1.52 2.12-3.91-0.99-2.04 0-3.56 1.66-3.28 1.71 0.34 2.02 1.7 2.16 4.33 0.14 2.65 1.56 3.58 3.11 3.58l2.35-0.72-0.93 11.13-1.61 0.27-5.7-0.72-10.85 0.31v-11.98z" fill="url(#cz_p10)" stroke="#003264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </motion.g>

      {/* Group 8 — right upper arm */}
      <motion.g custom={8} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m146.9 24.92 15.43 10.04-7.23 5.05c-1.45 2.04-1.38 4.72 0.51 5.4 2.79 1.03 7.9-4.24 12.31-5.67l2.21 2.93 0.57 0.86c1.66 1.9 2.32 3.7 0 5.53-1.87 1.42-3.68 0.35-4.5-1.3l-11.1 14.95-2.89-1.1c-2.56-1.22-6.09-2.9-5.31-4.55 0.99-1.03 2.69-1.72 2.69-4.46-0.52-2.78-3.98-5.57-6.48-3.4-1.76 1.56-1.93 2.79-2.81 4.72l-2.09-0.71-6.11-5.08 5.8-8.12c1.15-2.19-0.72-2.4-2.27-2.4-2.24 0-3.35-2.36-2.73-4.55 0.76-2.68 3.21-3.37 5-2.07 1.56 1.17 1.35 2.54 2.7 2.82 1.87 0.41 4.21-3.5 5.52-9.41l0.78 0.52z" fill="url(#cz_p11)" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="m146.9 24.4 10.91-12.7c1.56-1.66 2.91-2.14 5.36-1.87 3.85 0.41 14.56 0.48 19.04-1.25l4.06-1.17" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="m148.5 25.33 8.71-5.9 7.85-0.28 3.77 6.6c0.93 1.97 0 3.39-1.34 4.56l-6.86 5.75" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="m156.3 29.07 3.46-5.65 4.7 0.98 2.25 2.67" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="m170.1 39.74c6.18-1.92 12.97-1.92 17.21-8.12 2.35-3.55 4.41-5.04 7.65-6.56" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </motion.g>

      {/* Group 9 — mid-body puzzle + legs + left arm + details */}
      <motion.g custom={9} variants={pieceVariants} initial={initial} whileInView="visible" viewport={vp} style={groupStyle}>
        <path d="m38.21 49.82 6.91-1.62 2.52-1.84c1.25-0.2 3.97-0.55 4.77 0.73 0.8 1.29-1.44 2.73-0.82 4.9 0.47 1.65 2.92 1.86 5.06 0.61 2.13-1.25 2.44-2.51 1.97-4.97-0.33-1.65 0.92-2.22 2.17-2.22l9.15 0.67 2.55-8.92c-2.03 1.21-4.58 0.45-5.72-1.04-0.82-1.65 0.53-4.64 3.24-4.5 2.41 0.11 3.1 1.44 4.6 0l3.46-7.22 0.72-0.28 3.46-4c2.6-1.39 6.7-3.56 16.57-3.56l-0.43 6.51 0.8 1.33 7.44-0.35 1.38-3.35c1.71-0.58 4.05-0.58 4.72 0.91l0.52 2.79 9.46 0.93 2.34 5.66-1.45 3.23c-1.76-0.69-4.39-3.23-5.85-1.01-1.24 2.04 0 3.95 2.32 4.61 2.06 0.62 4.06-0.14 5.61-0.87 2.13 1.42 2.13 10.01 2.13 10.01l-1.08-1.55-8.15-0.79c-2.45 0-1.42 1.6-0.83 4.13 0.62 2.6-2.53 4.46-4.5 3.85-3.15-0.99-4.34-2.78-3.83-5.57 0.4-2.11-0.8-2.41-2.35-2.41l-9.46 0.51-0.76-7.9c1.97-0.48 2.44 0.59 4.41 0.59 2.35 0 3.95-1.7 3.95-3.6-0.51-2.6-2.38-3.23-4.09-2.6-2.03 0.82-3.58 0.54-3.58-1.11l0.85-6.81-7.85 0.21c-1.62 0-1.93 0.63-1.62 2.05 0.47 1.97-2.56 2.66-3.64 2.38-1.56-0.41-2.36-1.1-1.74-2.03l1.25-2.19-7.44 0.28-1.71 3.02-6.13 0.65c-2.24 0.55-4.3 2.92-3.83 5.46 0.47 2.53 2.18 2.59 4.46 2.53l2.35 0.06-2.6 9.69-9.87-0.4c-1.46 0-1.99 1.35-1.58 2.86 0.62 2.29-1.2 4.33-3.65 4.74-2.07 0.35-3.62-0.89-3.05-3.19 0.62-2.46 0.62-3.67-2.13-3.06l-4.7 1-3.1 10.03c-0.99 1.77-2.69 0.85-3.6 0.44-2.6-0.58-3.76 2.38-3.76 4.48 0 2.11 1.16 4.64 3.4 3.39 1.5-0.86 2.59-1.07 2.07 0.97l-2.29 9.84-2.34 0.72c-2.72-1.62-5.27-1.76-8.07-1.2l-4 0.48" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="m135.1 57.65c-2.13-2.39-4.85 0-5.18 0.28-1.71 1.22-2.63-0.62-2.63-1.9v-8.94l-8.58-2.47c-2.45-0.27-1.93 0.99-1.31 3.51 0.7 2.86-2.4 4.47-4.17 3.99-3.34-0.99-4.34-2.99-3.83-5.09 0.62-2.54-0.7-2.61-2.25-2.61l-9.56 0.71-0.69-0.27c-3.33 0.61-8.31 1.16-9.46 0.27-1.08-0.85 0.63-3.02 0-5.19-0.75-2.12-3.74-1.78-4.82-0.98-2.13 1.19-2.5 2.81-1.48 5.19 0.8 2-0.34 2.94-2.31 2.94l-9.12-0.73-2.25 8.49c-0.52 2.29 1.03 3.79 3 2.8 2.65-1.28 4.13-0.59 4.96 1.27 0.82 1.9 0 5.74-3.15 5.74-2.56 0-5.66-1.95-5.52 2.27l0.14 9.01 1.24-0.52 8.84-0.41c2.14 0 2.76 0.93 1.73 3.03-1.24 2.68-0.07 5.5 3.53 5.77 3.46 0.21 5.36-2.47 4.53-4.86-1.15-3.22-0.35-3.94 2.17-3.94l9.8 0.93 0.52-10.11c0-1.56-1.45-2.11-3.06-1.17-2.66 1.49-5.15-0.25-5.6-3.39-0.34-2.46 1.53-5.24 4.05-4.55 3.16 1 4.71 1 4.16-2.46l-1.08-8.52 9.25-0.92c2.07-0.2 2.73 0.79 1.92 2.94-1.05 2.95 1.4 4.36 3.54 4.84 2.45 0.61 5.51-1.47 4.84-4.4-0.57-2.59 0-3.38 1.87-3.17l8.15 1.12v2.78l0.31 7.17c0 1.62 1.81 2.27 2.89 1.55 3.2-2.14 5.13-1 6.12 1.41 0.9 2.35 0 5.77-1.97 5.77-2.04 0-2.87-0.93-4.21-0.93-1.39 0-1.7 1.21-1.65 2.63l1.14 9.41 0.31 0.17c2.9-0.49 6.59-1.1 8.72-0.83 2.79 0.41 2.59 2.83 1.34 5.17" fill="url(#cz_p12)" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="m134.5 155c1.15-4.21 3.21-9.66 4.82-8.34 0.82 0.58 0.97 2.23 3.07 2.78 3.02 0.86 5.52-2.2 5.52-4.24 0-2.6-2.06-3.6-4.3-3.32-2.35 0.31-1.11-2.91 1.13-6l3.17-4.19 6.35 4.6c1.77 1.17 3.33 0.07 3.33-1.35 0-2.6 1.97-4.03 3.83-3.75 3.92 0.57 5.28 3.75 3.97 5.72-0.99 1.52-2.49 1.45-1.8 3l8.32 4.7-7.74 14.08c2.06 1.77 7.67 2.46 7.94 3.72l-0.53 3.55-1.69 0.13c-4.5-1.35-9.84-10.24-14.85-10.81-2.63-0.31-4.05 2.34-1.71 5.83l1.24 2.82-20.07-8.93z" fill="url(#cz_p13)" stroke="#003264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="m16.79 188.7 2.65-3.53c2.42-2.02 5.38-1.75 8.27-4.1 4.63-3.6 5.43-7.67 7.58-11.82 1.96-3.1 5.79-6.5 8.39-9.79s1.98-3.81 0.96-4.4c-2.45-0.99-5.73 1.76-8.69 5.91-2.63 3.84-5.72 7.03-9.84 6.62l-4.1-0.52 0.69-9.42 6.26-5.9-2.34-4.93-11.71 8.24c-2.45 1.84-4.8 17.11-8.91 23.9" fill="#CEE3EA" />
        <path d="m20.55 191c2.13-3.97 4.48-3.97 8.34-5.87 5.73-2.78 7.46-9.12 8.74-11.58 2.13-4.14 6.33-7.54 9.22-11.53 1.87-2.81 0.97-6.34-2.41-6.34-3.77 0-8.37 8.95-13.27 11.73-2.45 1.38-5.06 0.14-5.06 0.14l0.62-5.53 5.69-5.41-5.69-11.5 8.56-4.7c1.76-1.15 0.78-1.76-0.84-3.76-1.61-2.11-0.78-3.87 0.84-4.94 2.13-1.35 5.02-0.56 5.15 1.58 0.17 3.02 0.51 3.84 2.38 3.36l7.34-4.94 4.7 9.12c0.99 1.55 2.17 0.79 3.11-0.97 1.17-2.32 4.42-2.11 5.97 0 1.71 2.45 1.08 5.05-0.53 5.56-2.24 0.75-5.31-0.07-4.69 2.39l5.7 7.49-16.34 10.54c1.02 2.47 1.09 5.59-1.87 6.77-1.49 0.61-3.2-1.46-3.72-1.87" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="m26.11 161.8 7.34-4.32" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="m164.4 158.1 6.91 3.04" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="m177.8 82.28 7.06-0.78c2.9 0 0.18 8.75-3.74 21.84l-3.32-0.14" stroke="#004A7F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="m178.5 106.3c-3.1 0-3.79 1.98-3.79 3.81 0 2.39 1.46 3.27 3.1 3.27 2.82 0 3.88-2.19 3.88-4.09 0-2.04-1.35-2.99-3.19-2.99z" fill="#004A7F" />
        <path d="m33.93 107c-2.72 2.75-4.18 3.03-6.6 3.03-4.05 0-6.68-3.3-6.68-9.76 0-8.32 3.46-16.47 8.26-16.47 2.24 0 2.1 1.7 1.41 5.09l0.31 0.89 5.25 1.35c3.03-3.1 1.16-9.64-6.76-9.64-9.59 0-15.97 9.64-15.97 19.41 0 7.86 4.31 13.27 10.61 13.27 4.47 0 7.87-2.14 11.18-6.35l-1.01-0.82z" fill="#115A8B" />
      </motion.g>

      {/* Text group — letters c-o-n-n-e-c-t-z (staggered after figure) */}
      {[
        // c
        "m54.61 92.63c-1.18-0.47-2-0.61-3.87-0.61-8.25 0-13.11 5.35-13.11 13.81 0 5.28 3.39 7.93 7.09 7.93 5.96 0 10.2-5.31 11.29-12.47h3.76l0.89-2.46h-4.45c-0.2-3.56-0.67-5.15-1.6-6.2zm-7.55 17.1c-1.94 0-2.58-2.11-2.58-5.1 0-4.39 1.73-10.22 4.23-10.22 1.25 0 1.84 1.32 2.03 5.22 0.07 0.68 0.07 1.28 0.07 1.9-0.65 4.8-2.03 8.2-3.75 8.2z",
        // o (n)
        "m74.03 92.56c-2.45 0-4.98 1.33-6.36 2.69l0.24-2.42-7.06 0.58-2.76 19.94h5.73l2.63-15.13c0.76-0.85 2.01-1.4 2.9-1.4 1.18 0 1.39 0.79 1.04 2.9l-1.55 8.45c-0.69 3.84 0.69 5.59 3.58 5.59 2.63 0 5.01-1.55 6.63-4.44l-0.86-0.76c-0.83 0.76-1.45 1.1-2 1.1-0.76 0-0.83-0.82-0.55-2.38l1.71-9.06c0.69-3.59-0.87-5.66-3.32-5.66z",
        // n
        "m96.62 92.56c-2.46 0-4.98 1.33-6.36 2.69l0.24-2.42-7.06 0.28-2.89 20.65h6.16l2.45-15.54c0.76-0.85 1.69-1.4 2.58-1.4 1.18 0 1.39 0.79 1.04 2.9l-1.55 8.45c-0.69 3.84 0.69 5.59 3.58 5.59 2.63 0 5.01-1.55 6.63-4.44l-0.86-0.76c-0.83 0.76-1.45 1.1-2 1.1-0.76 0-0.83-0.82-0.55-2.38l1.71-9.06c0.69-3.59-0.87-5.66-3.12-5.66z",
        // e
        "m114.8 92.5c-7.64 0-11.95 5.25-11.95 13.04 0 5.29 3.21 7.88 7.52 7.88 3.46 0 6.25-1.36 8.63-4.51l-0.76-1.29c-1.62 1.29-2.89 1.77-4.51 1.77-2.46 0-4.02-1.22-4.29-4.04 6.62-1.42 11.48-4.31 11.48-8.59 0-2.68-2.27-4.26-6.12-4.26zm-2.82 10.7c-0.71 0.34-1.47 0.62-2.61 0.89 0.07-4.96 1.59-9.39 4.01-9.39 1.24 0 1.9 1.03 1.9 2.6 0 2.53-1.14 4.71-3.3 5.9z",
        // c
        "m133.4 92.5c-7.34 0-11.49 5.79-11.49 12.71 0 5.28 3.03 8.55 7.59 8.55 3.62 0 6.96-1.9 9.28-4.85l-0.97-1.29c-1.62 1.49-3.07 1.9-4.55 1.9-2.89 0-4.45-2.31-4.45-6.6 0-4.9 1.56-8.22 3.8-8.22 1.25 0 1.32 1.17 0.92 4.06l5.42 0.96c1.31-3.51 0.26-7.22-5.55-7.22z",
        // t
        "m150.2 92.83 1.06-7.12-5.25 0.75-1.52 6.37h-2.82l-0.53 3.38h2.66l-2.46 11.96c-0.99 4.52 0.98 5.59 3.87 5.59 2.72 0 4.99-1.69 6.55-4.44l-0.93-0.89c-0.89 0.89-1.51 1.3-2.2 1.3-0.89 0-1.03-0.82-0.64-3l2.14-10.52h4.98l0.53-3.38h-5.44z",
        // z
        "m171.8 92.83h-14.63l-1.08 6.21 1.35 0.27 1.49-2.14h6.79l-9 10.66c-2.25 0.34-2.98 2.38-2.98 3.41 0 1.42 1.08 2.52 2.53 2.52 1.17 0 2.1-0.55 3-1.23 2.17 0.68 4 1.65 6.79 1.65s4.8-2.17 5.56-7.85l-1.55-0.27c-1.15 1.49-2.14 1.9-3.31 1.9-1.35 0-2.59-0.82-4.14-1.56l9.62-12.38-0.44-1.19z",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="#115A8B"
          custom={i}
          variants={letterVariants}
          initial={initial}
          whileInView="visible"
          viewport={vp}
          style={groupStyle}
        />
      ))}
    </motion.svg>
  )
}

// ─── Main hero section ────────────────────────────────────────────────────────

export default function ConnectzHeroSection() {
  const reduced = useReducedMotion() ?? false

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden">
      {/* Floating colour orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#99D6EA]/15 blur-[120px]"
          animate={reduced ? {} : { y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-[200px] h-[200px] rounded-full bg-[#47B5DD]/10 blur-[120px]"
          animate={reduced ? {} : { y: [0, 18, 0], x: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-[150px] h-[150px] rounded-full bg-[#59B16A]/10 blur-[120px]"
          animate={reduced ? {} : { y: [0, -14, 0], x: [0, 8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <FadeInOnce amount={0.2} duration={0.9}>
        <div className="relative z-10 w-full max-w-2xl mx-auto">
          <div className="rounded-[var(--glass-radius)] border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)] bg-[var(--glass-tint)] backdrop-blur-[var(--glass-backdrop-blur)] backdrop-saturate-[140%] backdrop-brightness-[115%] p-8 sm:p-12 md:p-16 text-center">
            {/* Animated logo */}
            <div className="flex justify-center mb-8 sm:mb-10">
              <ConnectzLogo reduced={reduced} />
            </div>

            {/* Gradient divider */}
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-sky-300 via-blue-500 to-[#264E9B] mx-auto mb-6 rounded-full" />

            {/* Tagline */}
            <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider mb-3">
              Coming to iOS
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Connect on your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-[#264E9B]">
                journey
              </span>
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8">
              Meet fellow travelers, explore together, and stay connected — with zero data tracking and
              everything stored privately in CloudKit.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href="#connectz-appstore"
                className="inline-flex items-center justify-center rounded-2xl bg-[#47B5DD] hover:bg-[#2173AA] px-6 py-3 text-sm font-semibold text-white active:scale-[0.98] transition-colors duration-300"
              >
                Wishlist on App Store
              </a>
              <a
                href="#connectz-privacy"
                className="inline-flex items-center justify-center rounded-2xl bg-white/5 border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/25 active:scale-[0.98] transition w-full sm:w-auto"
              >
                Our Privacy Promise
              </a>
            </div>
          </div>
        </div>
      </FadeInOnce>
    </section>
  )
}
