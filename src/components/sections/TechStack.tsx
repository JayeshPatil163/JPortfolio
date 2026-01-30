import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Masonry from "../Masonry";
// import { lenis } from "../../lib/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(null);


  useEffect(() => {
    const text = titleRef.current;
    const target = targetRef.current;

    // ScrollTrigger.create({
    //   trigger: target,
    //   start: "top top",
    //   end: "bottom bottom",
    //   onEnter: () => (lenis.options.duration = 1.8),
    //   onLeave: () => (lenis.options.duration = 1.2),
    //   onEnterBack: () => (lenis.options.duration = 1.8),
    //   onLeaveBack: () => (lenis.options.duration = 1.2),
    // });

    const tl = gsap.timeline({
            scrollTrigger: {
              trigger: text,
              start: `bottom bottom`,
              end: () => `+=${target.offsetHeight}`,
              scrub: 2.5,
              pin: true,
              anticipatePin: 1,
            }
          })

          gsap.fromTo(
            titleRef.current,
            { letterSpacing: "0.2em" },
            {
              letterSpacing: "-0.02em",
              scrollTrigger: {
                trigger: targetRef.current,
                start: "top bottom-=800",
                end: () => `+=${target.offsetHeight}`,
                scrub: true,

              },
              ease: "power4.out",

            }
          );

          gsap.to(titleRef.current, {
            clipPath: "inset(0 0 0% 0)",
            ease: "power3.out",
            scrollTrigger: {
              trigger: targetRef.current,
              start: "top 70%",
              end: "top top",
              scrub: true,
            },
          });
          
          
          
      
          gsap.from(text, {
            y: 120,
            opacity: 0,
            scale: 0.95,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top bottom",
              toggleActions: "play none none reverse",
              markers: false
            }
          })

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
  }, []);

  return (
    <section
      ref={targetRef}
      id="techstack"
      className="relative min-h-screen mx-12 mt-[10vh]"
    >

      <div ref={pinRef} className="absolute inset-0 pointer-events-none">
        <span
          ref={titleRef}
          className="
            skill-title
            absolute top-0 left-0
            font-medium climate-crisis-regular
            text-[10vw]
            leading-none
            z-20
            select-none
          "
        >
          SKILL SET
        </span>
      </div>

      <div className="pt-[25vh] pointer-events-auto">
        <Masonry />
      </div>
    </section>
  );
}
