import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    <section className="section-container" id="about">
      <div className="max-w-4xl space-y-12">
        <h2 ref={titleRef} className="section-title">
          About
        </h2>
        <div ref={contentRef} className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>
            I'm a creative developer passionate about building minimal, elegant digital experiences
            that blend design and technology seamlessly.
          </p>
          <p>
            My work focuses on clean interfaces, thoughtful interactions, and modern web technologies
            that push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
