import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import ArcNav from "../ArcNav";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalTechShowcase() {
  const tittleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = tittleRef.current;
    if (!text) return;

    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 120,
      opacity: 0,
      scale: 0.95,
      duration: 1.3,
      ease: "power3.out",
    })
  }, []);

  return (
    <section
      id="techstack"
      // ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between px-12 "
    >
      <div ref={tittleRef} className="flex justify-evenly top-0">
        <span className="font-medium font-maintanker text-[30vw]">TECH STACK</span>
      </div>
    </section>
  );
}

// const categories = [
//   {
//     title: "Languages",
//     subtitle: "Code Foundation",
//     items: ["C++", "JavaScript", "TypeScript", "Python"],
//     desc: "Building strong logic and fundamentals with efficient, modern languages.",
//   },
//   {
//     title: "Frontend",
//     subtitle: "Interfaces & Interactions",
//     items: ["React.js", "Next.js", "Tailwind CSS"],
//     desc: "Designing smooth, responsive, and pixel-perfect user experiences.",
//   },
//   {
//     title: "Backend",
//     subtitle: "Systems & Logic",
//     items: ["Node.js", "Express", "FastAPI"],
//     desc: "Developing scalable APIs and services that power modern applications.",
//   },
//   {
//     title: "AI / ML & Data",
//     subtitle: "Data & Intelligence",
//     items: ["TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
//     desc: "Creating intelligent systems that learn, predict, and optimize real-world problems.",
//   },
//   {
//     title: "Tools & Platforms",
//     subtitle: "Ecosystem & Workflow",
//     items: ["GitHub", "Postman", "Figma", "Docker"],
//     desc: "Enhancing collaboration, deployment, and rapid prototyping pipelines.",
//   },
// ];

  // const containerRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const sections = gsap.utils.toArray(".panel");
  //   const container = containerRef.current;
  //   if (!container) return;

  //   const totalWidth = (sections.length - 1) * window.innerWidth;

  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       pin: true,
  //       scrub: 1,
  //       snap: 1 / (sections.length - 1),
  //       end: () => `+=${container.offsetWidth}`,
  //     },
  //   });

  //   return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  // }, []);


{/* {categories.map((cat, i) => (
        <div
          key={i}
          className="panel relative flex flex-col justify-center items-center w-screen h-screen"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" text-[clamp(4rem,16vw,15rem)] font-bold tracking-tighter 
                       text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            {/*animate-glow*}
            {cat.title}
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-24 text-gray-400 text-xl"
          >
            {cat.subtitle}
          </motion.h3>

          <div className="
          absolute flex flex-wrap gap-6 max-w-lg justify-center text-gray-400 text-sm opacity-80"
          style={{
            filter: "url(#liquid-glass)",
            backdropFilter: "blur(1px) contrast(1.3) brightness(1.1)",
            WebkitBackdropFilter: "blur(1px) contrast(1.3) brightness(1.1)",
          }}>
            {cat.items.map((skill, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: j * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="backdrop-blur-sm px-4 py-2 border border-white/20 rounded-full hover:scale-105 hover:text-white transition-transform"
                
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-24 text-center max-w-xl text-gray-400 text-base leading-relaxed"
          >
            {cat.desc}
          </motion.p>
        </div>
      ))} */}