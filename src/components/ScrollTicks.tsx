import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollZoomIndicator = () => {
  const linesRef = useRef<HTMLDivElement[]>([]);
  const activeIndexRef = useRef<number | null>(null);

  useEffect(() => {
    const lines = linesRef.current;
    if (!lines.length) return;

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.floor(progress * (lines.length - 1));

        if (activeIndexRef.current === activeIndex) return;
        activeIndexRef.current = activeIndex;

        lines.forEach((line, i) => {
          const isActive = i === activeIndex;
          gsap.to(line, {
            scaleX: isActive ? 1 : 0.5,
            opacity: isActive ? 1 : 0.3,
            backgroundColor: isActive
              ? "red"
              : getComputedStyle(document.documentElement)
                  .getPropertyValue("--line-color")
                  .trim(),
            transformOrigin: "right center",
            duration: 0.25,
            ease: "power2.out",
          });
        });
      },
    });
  }, []);

  return (
    <div className="fixed right-10 top-1/3 flex flex-col items-end z-50 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (linesRef.current[i] = el!)}
          className="scroll-line w-8 h-[1px] my-[10px] rounded-full transition-all duration-50"
        />
      ))}
    </div>
  );
};

export default ScrollZoomIndicator;
