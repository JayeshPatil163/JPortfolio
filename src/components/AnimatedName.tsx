import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import ContactMorph from "./ContactMorph";

gsap.registerPlugin(ScrollTrigger);

const AnimatedName = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLSpanElement>(null);
  const myNameRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
const [emailOpen, setEmailOpen] = useState(false);

  // const [compact, setCompact] = useState(true);

  useEffect(() => {
    const name = nameRef.current;
    const sub = subRef.current;
    const myName = myNameRef.current;
    if (!name) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=500",
        scrub: 2,
      },
    });

    gsap.to(sub, {
      opacity: 0,
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
      scrub: true,
    });

    tl.to(myName, {
      opacity: 1,
    });

    // tl.from(name, {setCompact(true)}, {duration: 0.5});

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="section-container" id="name">
      <div className="fixed top-2 right-12 text-right space-y-1">
        <p className="text-neutral-400" style={{ fontSize: "0.8em" }}>OPEN TO WORK</p>
        <p className="text-neutral-400" style={{ fontSize: "0.8em" }}>FROM DECEMBER 2025</p>
        {/* <button className="border border-neutral-600 px-4 py-1 mt-2 rounded-full text-sm hover:bg-white hover:text-black transition" style={{ fontSize: "0.8em" }}>
          CONTACT
        </button> */}
        <ContactMorph />
      </div>
      <div ref={myNameRef} className="fixed text-xs top-2 left-12 opacity-0"> 
          <p className="font-light" style={{ fontSize: "1.2em" }}>JAYESH PATIL</p>
          <p className="text-neutral-400" style={{ fontSize: "1.1em" }}>FULL-STACK DEVELOPER</p>
      </div>
      <p className="fixed bottom-6 text-neutral-400 right-12 text-right hidden md:block" style={{ fontSize: "0.8em" }}>SCROLL DOWN</p>
      {/* {compact ? ( */}
        <div
        ref={nameRef}
        className="fixed top-1/4.1 left-2 z-50 pointer-events-none fixed-name"
        style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}>
    
        <h1 className="font-bold tracking-tight leading-none">
          <span ref={subRef} style={{ fontSize: "0.5em" }}>HI, I'M</span>
          <br/>
          <span className='font-sans' style={{ fontSize: "3em"}}>JAYESH</span>
          <br/>
          <span className='font-sans' style={{ fontSize: "3em" }}>PATIL</span>
        </h1>
    </div>
    {/* ) : (
        
    )} */}
    </section>
);
};

export default AnimatedName;
