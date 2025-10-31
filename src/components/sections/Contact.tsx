import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const content = contentRef.current;
    if (!title || !content) return;

    gsap.fromTo(
      title,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      content,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="section-container min-h-[80vh]" id="contact">
      <div className="max-w-4xl space-y-12">
        <h2 ref={titleRef} className="section-title">
          Contact
        </h2>
        <div ref={contentRef} className="space-y-8">
          <p className="text-lg md:text-xl text-muted-foreground">
            Let's create something amazing together. Reach out for collaborations or just a friendly
            hello.
          </p>
          <div className="flex gap-8 items-center pt-4">
            <a
              href="mailto:hello@example.com"
              className="hover:opacity-70 transition-opacity"
              aria-label="Email"
            >
              <Mail className="w-7 h-7" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
