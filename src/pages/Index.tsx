import GeometricBackground from "@/components/GeometricBackground";
import AnimatedName from "@/components/AnimatedName";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ScrollTicks from "@/components/ScrollTicks";

const Index = () => {
  return (
    <div className="relative">
      <GeometricBackground />
      <ThemeToggle />
      <AnimatedName />
      <ScrollTicks />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
