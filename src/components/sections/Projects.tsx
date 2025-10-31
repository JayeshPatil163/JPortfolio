import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project Alpha",
    description: "A minimalist web application focused on user experience and performance.",
    tech: "React, TypeScript, Tailwind",
  },
  {
    title: "Project Beta",
    description: "Interactive data visualization platform with real-time updates.",
    tech: "Next.js, D3.js, PostgreSQL",
  },
  {
    title: "Project Gamma",
    description: "Mobile-first e-commerce solution with seamless checkout flow.",
    tech: "React Native, Node.js, Stripe",
  },
];

const Projects = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const projectsContainer = projectsRef.current;
    if (!title || !projectsContainer) return;

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

    const projectItems = projectsContainer.querySelectorAll(".project-item");
    projectItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="section-container" id="projects">
      <div className="max-w-6xl w-full space-y-16">
        <h2 ref={titleRef} className="section-title">
          Projects
        </h2>
        <div ref={projectsRef} className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item border-l-2 border-line pl-8 py-4 space-y-3 hover:border-foreground transition-colors duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
              <p className="text-lg text-muted-foreground">{project.description}</p>
              <p className="text-sm text-muted-foreground/70 font-mono">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
