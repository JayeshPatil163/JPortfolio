import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactMorph() {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const icons = [
    { key: "mail", icon: <Mail className="w-8 h-8" />, href: "mailto:jayeshjpatil163@gmail.com" },
    { key: "github", icon: <Github className="w-8 h-8" />, href: "https://github.com/JayeshPatil163" },
    { key: "linkedin", icon: <Linkedin className="w-8 h-8" />, href: "https://www.linkedin.com/in/jayesh-patil-1901b1297" },
    { key: "twitter", icon: <Twitter className="w-8 h-8" />, href: "https://x.com/JAYESHPATI73061" },
  ];

  const offsets = [-72, -24, 24, 72];

  const buttonVariants = {
    closed: { scale: 1, width: "100px", borderRadius: "9999px" },
    open: { scale: 0, width: "40px", borderRadius: "9999px" },
  };

  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const iconVariants = (x: number) => ({
    hidden: { opacity: 0, scale: 0.5, x: 0, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      x,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 28, delay: i *0.04 },
    }),
    exit: { opacity: 0, scale: 0.6, x: 0, transition: { duration: 1 } },
  });

  return (
    <div ref={containerRef} className="relative inline-flex">
      <AnimatePresence>
        <motion.button
          key="contact-button"
          aria-expanded={expanded}
          onClick={() => setExpanded((s) => !s)}
          variants={buttonVariants}
          initial="closed"
          animate={expanded ? "open" : "closed"}
          className="border border-neutral-600 pdx-4 py-1 mt-2 rounded-full text-sm overflow-hidden bg-transparent text-neutral-200 hover:bg-white hover:text-black transition-all relative z-10"
          style={{ fontSize: "0.8em" }}
        >
          {/* Hide text when expanded */}
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: expanded ? 0 : 1 }}
            transition={{ duration: 0.12 }}
            className="inline-block"
            aria-hidden={expanded}
          >
            CONTACT
          </motion.span>
        </motion.button>
      </AnimatePresence>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="icons"
            className="absolute right-2 bottom-full mb-2 z-20 flex items-center"
            variants={iconContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {icons.map((it, i) => (
              <motion.a
                key={it.key}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                custom={i}
                variants={iconVariants(offsets[i])}
                initial="hidden"
                // animate="visible"
                animate={{ x: -40 * (i + 1), opacity: 1 }}
                exit="exit"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "auto",
                }}
                className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-shadow"
                aria-label={it.key}
                onClick={() => setExpanded(false)}
              >
                {it.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}