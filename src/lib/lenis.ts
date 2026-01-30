// src/lib/lenis.ts
import Lenis from "@studio-freight/lenis";

export const lenis = new Lenis({
  duration: 0, // slow + premium
  easing: (t) => 1 - Math.pow(1 - t, 2), // easeOutCubic
  smoothWheel: true,
});
