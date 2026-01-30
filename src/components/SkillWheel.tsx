import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Skill {
  title: string;
  sub: string;
  bg: string;
}

interface Props {
  skills: Skill[];
}

export default function SkillWheel({ skills }: Props) {
  const wheelRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheel = wheelRef.current;
    const textGroup = textGroupRef.current;
    const wrapper = wrapperRef.current;
    if (!wheel || !textGroup) return;

    const total = skills.length;
    const angleStep = 360 / total;

    const labels = Array.from(textGroup.children) as HTMLElement[];

    labels.forEach((label, i) => {
      const angle = (i * angleStep - 90) * (Math.PI / 180); // math angle
      const radius = 200; // adjust based on your circle size
    
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
    
      gsap.set(label, {
        x,
        y,
        rotate: i * angleStep, // rotate label to match tangent
        transformOrigin: "center center",
      });
    });
    

    let viewPortHeight = (window.innerHeight);

    gsap.to(wrapper, {
      scrollTrigger: {
        trigger: wrapper,
        start: `top top`,
        end: "bottom+=1500",
        pin: true,
        scrub: true,
        markers: true
      },
    });
    
    gsap.fromTo(
      wheel,
      { boxShadow: `
        0 0 0 0 rgba(255,255,255,0),
        0 0 0 0 rgba(255,255,255,0),
        0 0 0 0 rgba(255,0,0,0),
        0 0 0 0 rgba(255,0,0,0)
      ` },
      { 
        boxShadow: `
      inset 0 0 10px 4px rgba(255,255,255,0.25),
      0 0 35px 15px rgba(255,255,255,0.15),
      0 0 60px 25px rgba(255,0,0,0.25),
      0 0 120px 40px rgba(255,0,0,0.35)
    `,
        scrollTrigger: {
          trigger: wheel,
          start: "top top",
          end: `top+=${viewPortHeight/4}`,
          scrub: true,
          markers: true
        }
      }
    );
    



    // Scroll → rotate the wheel
    // gsap.to(wheel, {
    //   rotate: 360,
    //   scrollTrigger: {
    //     trigger: wheel,
    //     start: "top top",
    //     end: "bottom+=1500",
    //     pin: true,
    //     scrub: true,
    //   },
    //   onUpdate: (self) => {
    //     const progressAngle = self.progress * 360;
    //     const idx = Math.round((progressAngle % 360) / angleStep) % total;
    //     setActiveIndex(idx);
    //   }
    // });
  }, [skills]);

  // return (
  //   <div className="absolute w-full min-h-screen flex items-center overflow-hidden">

  //     {/* GIANT LIFTING CIRCLE */}
  //     <div className="wheel-wrapper" ref={wrapperRef}>
  //     <div
  //       ref={wheelRef}
  //       className="
  //         w-[150vh] h-[150vh] rounded-full relative
  //         mt-[8vh] -ml-[50vh]
  //       "
  //     >


  //       {/* SKILL LABELS */}
  //       <div
  //         ref={textGroupRef}
  //         className="absolute inset-0 flex justify-center items-center pointer-events-none"
  //       >
  //         {skills.map((skill, i) => (
  //           <div
  //             key={i}
  //             className="
  //               absolute text-xl font-semibold 
  //               text-neutral-200 dark:text-neutral-900
  //             "
  //           >
  //             {skill.title}
  //           </div>
  //         ))}
  //       </div>

  //       {/* ACTIVE SKILL IN CENTER */}
  //       <div className="absolute inset-0 flex justify-center items-center">
  //         <h1 className="text-4xl font-bold text-white dark:text-black">
  //           {skills[activeIndex].title}
  //         </h1>
  //       </div>
  //     </div>
  //     </div>

  //     {/* SUB SKILLS PANEL */}
  //     <div className="absolute bottom-20 text-center">
  //       <h2 className="text-2xl font-bold mb-3 text-white dark:text-black">
  //         {skills[activeIndex].title}
  //       </h2>
  //       <p className="text-lg text-neutral-300 dark:text-neutral-700">
  //         {/* {skills[activeIndex].sub.join(" • ")} */}
  //       </p>
  //     </div>

  //   </div>
  // );


  return (
    <div className="relative w-full min-h-screen overflow-hidden">
  
      {/* WRAPPER THAT GETS PINNED */}
      <div
        ref={wrapperRef}
        className="relative w-full h-[200vh] flex justify-center items-start"
      >
        {/* GIANT CIRCLE */}
        <div
          ref={wheelRef}
          className="
            absolute 
            top-[20vh] 
            left-1/2 -translate-x-1/2 
            w-[140vh] h-[140vh] 
            rounded-full 
            bg-neutral-900 dark:bg-neutral-200
          "
        >
  
          {/* LABELS AROUND THE CIRCLE */}
          <div
            ref={textGroupRef}
            className="
              absolute inset-0 
              pointer-events-none 
              flex justify-center items-center
            "
          >
            {skills.map((skill, i) => (
              <div
                key={i}
                className="
                  absolute 
                  text-xl font-semibold
                  text-neutral-300 dark:text-neutral-800
                  select-none
                "
              >
                {skill.title}
              </div>
            ))}
          </div>
  
          {/* ACTIVE SKILL IN CENTER */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-5xl font-bold text-white dark:text-black tracking-wide">
              {skills[activeIndex].title}
            </h1>
          </div>
        </div>
      </div>
  
      {/* BOTTOM INFO PANEL */}
      <div className="absolute bottom-16 w-full flex justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-white dark:text-black">
            {skills[activeIndex].title}
          </h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-700">
            {skills[activeIndex].sub}
          </p>
        </div>
      </div>
  
    </div>
  );
  
}
