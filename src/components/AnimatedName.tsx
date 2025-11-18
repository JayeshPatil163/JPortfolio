import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactMorph from "./ContactMorph";

gsap.registerPlugin(ScrollTrigger);

const AnimatedName = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLSpanElement[]>([]);
  subRef.current = [];
  const myNameRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    const name = nameRef.current;
    const sub = subRef.current;
    const myName = myNameRef.current;
    if (!name) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=1500",
        scrub: 2,
      },
    });

    gsap.to(sub, {
      opacity: 0,
      fontSize: "0rem",
      x: 0,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=500",
        scrub: 2,
      },
    });

    tl.to(name, {
      fontSize: "clamp(0.2rem, 1vw, 0.3rem)",
      opacity: 0,
      top: "0.1rem",
      right: "10rem",
      transform: "translate(0, 0)",
      duration: 0.5,
      scrub: 2,
      pin: true
    });

    tl.to(myName, {
      opacity: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="section-container" id="name">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav
        className="flex items-center gap-5 px-10 py-1 rounded-full
        backdrop-blur-lg shadow-lg border text-neutral-400 border-white/20 font-medium text-lg tracking-wide
        transition-all duration-300"
        style={{ fontSize: "0.8em" }}
      >
        <button
          onClick={() => scrollToSection("hero")}
          className="hover:text-white transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-white transition-colors"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-white transition-colors"
        >
          Contact
        </button>
      </nav>
    </div>
      <div className="fixed top-2 right-12 text-right space-y-1 z-50">
        <p className="text-neutral-400" style={{ fontSize: "0.8em" }}>OPEN TO WORK</p>
        <p className="text-neutral-400" style={{ fontSize: "0.8em" }}>FROM DECEMBER 2025</p>
        <ContactMorph />
      </div>
      <div ref={myNameRef} className="rounded-full fixed text-xs top-2 left-12 opacity-0 z-50"> 
          <p className="font-light" style={{ fontSize: "1.2em" }}>JAYESH PATIL</p>
          <p className="text-neutral-400" style={{ fontSize: "1.1em" }}>FULL-STACK DEVELOPER</p>
      </div>
      <p className="fixed bottom-6 text-neutral-400 right-12 text-right hidden md:block" style={{ fontSize: "0.8em" }}>SCROLL DOWN</p>
        <div
        ref={nameRef}
        className="fixed top-10 left-2 z-50 pointer-events-none fixed-name"
        style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}>
    
        <h1 className="fixed font-bold left-12 tracking-tight leading-none"> 
          <span ref={(el) => el && subRef.current.push(el)} className="font-vanchrome font-medium text-[10vh]">HI, I'M</span>
          <br/>
          <span className='font-sans text-transparent bg-cover bg-center bg-clip-text text-[55vh]' style={{backgroundImage: "url('../../public/batman.png')"}}>JAYESH</span>
          {/* <span className='font-sans text-transparent bg-cover bg-center bg-clip-text text-[50vh]' style={{backgroundImage: "url('../../public/batman.png')"}}>A</span><span className='font-sans text-[50vh]'>YESH</span> */}
          <br/>
          <span ref={(el) => el && subRef.current.push(el)} className='font-sans text-[27vh]'>PATIL</span> 
        </h1>
    </div>
    </section>
);
};

export default AnimatedName;
