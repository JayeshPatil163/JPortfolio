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

    let viewPortHeight = (window.innerHeight - 107)/3;
    console.log("Viewport Height:", viewPortHeight);

    const onReady = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: `top top+=${viewPortHeight}`, 
          end: `bottom top+=${viewPortHeight}`,
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
            start: `top+=1 top+=${viewPortHeight}`,
            end: `bottom top+=${(viewPortHeight * 2) + 106}`,
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
  className="relative min-h-screen flex flex-col justify-between px-12 pb-30"
>

  <div ref={devtag} className="relative flex flex-col right-0 pt-10 text-right leading-none">
    <h1 className="font-vanchrome tracking-tight text-[30vh]" style={{ textShadow: '4px 4px 10px rgba(0,0,0,0.5)' }}>FULL <span className="text-red-500">—</span> STACK</h1>
    <h1 className="font-sans font-bold tracking-tight text-[30vh]" style={{ textShadow: '4px 4px 10px rgba(0,0,0,0.5)' }}>DEVELOPER</h1>
  </div>

  <div className="justify-between text-xs md:text-sm pt-[25vh] pb-[10vh] pr-10">
    <span className="font-bold max-w-3 text-[2vw]">Driven full-stack & open-source dev</span>
    <p className="text-[0.9vw] pt-4 justify-start text-neutral-400">
      I'm a creative developer passionate about building modern, interactive<br/>
      web apps powered by AI. 500+ problems solved, top 14% on LeetCode.<br/>
      Winner of AlgoBharat HackSeries & multiple hackathons.<br/>
      Focused on creating interactive experiences, impactful and innovative<br/>
      solutions and exploring emerging tech.
    </p>
  </div>


    <div className="mt-10">

      <div className="flex items-center gap-5 text-[0.9vw] mb-[4vh]">
        {icons.map((it, i) => (
          <motion.a
            key={it.key}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
            custom={i}
            initial="hidden"
            exit="exit"
            className="w-[1.5vw] h-[1.5vw] flex rounded-full transition-shadow"
            aria-label={it.key}
          >
          {it.icon}
          </motion.a>
              ))}
      </div>

      <div className="flex items-center gap-2 text-[0.9vw] mb-8">
        <MapPin className="w-[1vw] h-[1vw] drop-shadow-sm" />
        <span className="tracking-wide">Pune, Maharashtra, India</span>
      </div>

      <div className="flex items-center gap-4 pb-60">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 transition-all rounded-xl px-[1.5vw] py-[0.8vw] shadow-sm hover:bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX7S3kIzPC3Ajg23qRgmeOrMR4EKH_DIqC54Fa3gU1cSsEk_ub1nK5ENqcOIRjmAA3-zFwb147RfRn6F4zakyRAi1OJ_TScW64Di-FVkvMxAdrGm8WsSEMM3pwJFC9UjakItuz1_Lp4eSh/w919/the-batman-2021-logo-uhdpaper.com-4K-3.2948-wp.thumbnail.jpg')] bg-cover bg-center">
              <FileText className="w-[1vw] h-[1vw]" />
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
                  className="flex items-center gap-2 border-gray-400 transition-all rounded-xl px-[1.5vw] py-[0.8vw]"
                >
                  <Download className="w-[1vw] h-[1vw]" />
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
          className="flex items-center gap-2 transition-all hover:border-red-800 rounded-xl px-6 py-3"
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
