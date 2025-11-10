import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileText, FolderOpen, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const devtag = useRef<HTMLDivElement>(null);
  const resumeLink = import.meta.env.VITE_RESUME_LINK;
  const resumeViewLink = import.meta.env.VITE_RESUME_VIEW_LINK;
  const [open, setOpen] = useState(false);

  const icons = [
    { key: "mail", icon: <Mail className="w-8 h-8" />, href: "mailto:jayeshjpatil163@gmail.com" },
    { key: "github", icon: <Github className="w-8 h-8" />, href: "https://github.com/JayeshPatil163" },
    { key: "linkedin", icon: <Linkedin className="w-8 h-8" />, href: "https://www.linkedin.com/in/jayesh-patil-1901b1297" },
    { key: "twitter", icon: <Twitter className="w-8 h-8" />, href: "https://x.com/JAYESHPATI73061" },
  ];

  useEffect(() => {
    const text = devtag.current;
    if (!text) return;

    const onReady = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: "top top+=30%",
          end: "bottom top+=30%",
          scrub: true,
          markers: false,
          pin: true,
        },
      });

      tl.fromTo(
        text,
        {
          scale: 1,
          opacity: 1,
        },
        {
          scale: 0.8,
          rotateY: -30,
          skewY: 10,
          transformOrigin: "right center",
          ease: "power2.inOut",
        }
      );

      gsap.to(text,
        {
          scrollTrigger: {
            trigger: text,
            start: "top+=1 top+=30%",
            end: "bottom top+=70%",
            scrub: true,
            markers: false,
            pin: true,
          },
        }
      );

      ScrollTrigger.refresh();
    };


    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(onReady);
    } else {
      window.addEventListener("load", onReady);
    }

    return () => {
      window.removeEventListener("load", onReady);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
  id="hero"
  className="relative min-h-scree flex flex-col justify-between px-12 overflow-hidden"
>

  <div ref={devtag} className="relative flex flex-col right-0 pt-10 text-right leading-none">
    {/* <h1 className="font-vanchrome text-[10vw] md:text-[12vw] tracking-tight" style={{ fontSize: "20em" }}>
      FULL — STACK
    </h1>
    <h1 className="font-sans font-bold text-[10vw] md:text-[12vw] tracking-tight" style={{ fontSize: "20em" }}>
      DEVELOPER
    </h1> */}
    <h1 className="font-vanchrome tracking-tight text-[clamp(3rem,20vw,20rem)]">
    FULL — STACK
  </h1>
  <h1 className="font-sans font-bold tracking-tight text-[clamp(3rem,20vw,20rem)]">
    DEVELOPER
  </h1>
  </div>

  <div className="justify-between text-xs md:text-sm pt-56 pb-20">
    <h1 className="font-bold mb-7 text-[clamp(1rem,2vw,2rem)]">Driven full-stack & open-source dev</h1> 
    <p className="text-[clamp(0.5rem,1vw,1rem)] justify-start text-neutral-400">
      I'm a creative developer passionate about building modern, interactive<br/>
      web apps powered by AI. 500+ problems solved, top 14% on LeetCode.<br/>
      Winner of AlgoBharat HackSeries & multiple hackathons.<br/>
      Focused on creating interactive experiences, impactful and innovative<br/>
      solutions and exploring emerging tech.
    </p>
  </div>


    <div className="mt-10">

      <div className="flex items-center gap-5 text-sm mb-8">
        {icons.map((it, i) => (
          <motion.a
            key={it.key}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
            custom={i}
            initial="hidden"
            exit="exit"
            className="w-6 h-6 text-gray-600 flex rounded-full transition-shadow"
            aria-label={it.key}
          >
          {it.icon}
          </motion.a>
              ))}
      </div>

      <div className="flex items-center gap-2 text-sm mb-8">
        <MapPin className="w-5 h-5 drop-shadow-sm" />
        <span className="tracking-wide">Pune, Maharashtra, India</span>
      </div>

      <div className="flex items-center gap-4 pb-60">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 transition-all rounded-xl px-6 py-3 shadow-sm hover:shadow-md">
              <FileText className="w-4 h-4" />
              Resume
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <DialogHeader className="flex justify-between items-center p-4 border-b">
              <DialogTitle className="text-lg font-semibold">
                Find my resume below
              </DialogTitle>
              <a
                href={resumeLink}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="flex items-center gap-2 border-gray-400 transition-all rounded-xl px-4 py-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <p className="text-xs">Download resume if not visible below</p>
            </DialogHeader>

            <div className="h-[80vh]">
              <iframe
                src={resumeViewLink}
                title="Resume Preview"
                className="w-full h-full border-0"
              />
            </div>
          </DialogContent>
        </Dialog>

        <Button
          variant="outline"
          className="flex items-center gap-2 border-gray-400 transition-all rounded-xl px-6 py-3"
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            projectsSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FolderOpen className="w-4 h-4" />
          View Projects
        </Button>
      </div>
    </div>
</section>

  );
};

export default Hero;
