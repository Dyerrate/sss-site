// Subtle fade/slide — 1 s feels premium without feeling slow
export const fadeInSoft = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } },
} as const
