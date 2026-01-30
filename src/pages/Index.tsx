import GeometricBackground from "@/components/GeometricBackground";
import AnimatedName from "@/components/AnimatedName";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ScrollTicks from "@/components/ScrollTicks";
import { lenis } from "../lib/lenis";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {

//   useEffect(() => {
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//     lenis.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(document.body, {
//       scrollTop(value) {
//         if (arguments.length) {
//           lenis.scrollTo(value);
//         }
//         return lenis.scroll;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//     });

//     ScrollTrigger.defaults({
//       scroller: document.body,
//     });
//     const resize = () => ScrollTrigger.refresh();
//     window.addEventListener("resize", resize);

//     return () => {
//       window.removeEventListener("resize", resize);
//       lenis.destroy();
//     };
//   }, []);

  return (
    <div className="relative">
      <GeometricBackground />
      <ThemeToggle />
      <AnimatedName />
      <ScrollTicks />
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
