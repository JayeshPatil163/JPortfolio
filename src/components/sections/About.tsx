import { motion } from "framer-motion";

const categories = [
  { title: "Languages", color: "#ffffff", items: ["C++", "JavaScript", "TypeScript", "Python"] },
  { title: "Frontend", color: "#f3f3f3", items: ["React.js", "Next.js", "Tailwind CSS"] },
  { title: "Backend", color: "#0d0d0d", items: ["Node.js", "Express", "FastAPI"] },
  { title: "AI/ML & Data", color: "#fff54f", items: ["TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"] },
  { title: "Tools & Platforms", color: "#181818", items: ["GitHub", "Postman", "Figma"] },
  { title: "Other Skills", color: "#ffffff", items: ["REST APIs", "Firebase", "GraphQL", "Docker", "CI/CD", "WebSockets"] },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-black text-black"
    >
      {categories.map((cat, i) => (
        <motion.div
          key={i}
          whileHover={{
            scale: 1.02,
            rotate: [0, -2, 2, 0],
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.97,
            transition: { type: "spring", stiffness: 300, damping: 12 },
          }}
          style={{ backgroundColor: cat.color }}
          className={`rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]
                      ${cat.color === "#0d0d0d" || cat.color === "#181818" ? "text-white" : "text-black"}`}
        >
          <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
          <div className="flex flex-wrap gap-3">
            {cat.items.map((skill, j) => (
              <motion.div
                key={j}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 2, -2, 0],
                  transition: { type: "spring", stiffness: 400, damping: 8 },
                }}
                className={`px-5 py-2 text-sm rounded-full border ${
                  cat.color === "#0d0d0d" || cat.color === "#181818"
                    ? "border-white/30"
                    : "border-black/20"
                }`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
