import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const subtitle = subtitleRef.current;
    if (!subtitle) return;

    gsap.fromTo(
      subtitle,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: subtitle,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    // <section className="section-container" id="hero">
    //     <h1 className="font-sans" style={{ fontSize: "10em" }}>Full Stack Developer</h1>
    //     <h1 className="font-sans" style={{ fontSize: "4em" }}>& competitive coder</h1> 
    //     <div className="text-center space-y-6 max-w-4xl">
    //     <p
    //       ref={subtitleRef}
    //       className="text-lg md:text-xl text-muted-foreground tracking-wide"
    //     >
    //       I build modern web applications with a focus on integrating AI solutions. Driven full-stack & open-source dev, 500+ problems solved, top 14% on LeetCode. Winner of AlgoBharat HackSeries & hackathons. Building impactful solutions & growing. Passionate about creating interactive experiences and exploring emerging technologies.
    //     </p>
    //   </div>
    // </section>


    <section
  id="hero"
  className="relative min-h-scree flex flex-col justify-between px-12 py-10 overflow-hidden"
>
  <div className="flex justify-between text-xs tracking-widest">
    <div className="space-y-1">
      <p className="font-light">JAYESH PATIL</p>
      <p className="text-neutral-400">FULL-STACK DEVELOPER</p>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center text-center leading-none">
    <h1 className="font-sans font-bold text-[10vw] md:text-[12vw] tracking-tight">
      FULL — STACK
    </h1>
    <h1 className="font-sans font-bold text-[10vw] md:text-[12vw] tracking-tight">
      DEVELOPER
    </h1>
  </div>

  <div className="flex justify-between text-xs md:text-sm text-neutral-400">
    <p className="max-w-md">
      Driven full-stack & open-source dev passionate about building modern,
      interactive web apps powered by AI. 500+ problems solved, top 14% on
      LeetCode. Winner of AlgoBharat HackSeries & multiple hackathons. Focused
      on impactful solutions and exploring emerging tech.
    </p>
  </div>
</section>

  );
};

export default Hero;
