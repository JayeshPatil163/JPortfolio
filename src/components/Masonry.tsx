import { validateHeaderValue } from "http";
import SkillsCarousal from "./SkillsCarousel"



export default function Masonry() {
  
  //Forntend
  const Frotnend = [
    "React",
    "Next.js",
    "Angular",
    "Vite",
    "Tailwind CSS",
    "HTML",
    "jquery",
    "CSS",
  ];

  const Frontend_secondary = [
    "UI systems & reusable components",
    "Performance-aware rendering",
    "Responsive layouts",
  ];

  //Languages
  const Languages = [
    "Java",
    "JavaScript",
    "Python",
    "C++",
    "TypeScript",
    "SQL",
    "C"
  ];

  //Backend
  const Backend = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Postman",
    "Authentication",
    "Authorization",
    "Real-time Systems"
  ];
  
  const Backend_secondary = [
    "API design & testing",
    "Authentication & RBAC",
    "Validation & error handling",
    "Clean business logic architecture"
  ];
  
  //Databases
  const Databases = [
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "MySQL",
    "Schema design",
    "Query optimization"
  ];

  const Databases_secondary = [
    "Relational & NoSQL schema design",
    "Data modeling fundamentals",
    "Query optimization basics",
    "Indexes & relationships"
  ];
  
  //Real time systems
  const RealTime = [
    "Real-time messaging (Ably)",
    "Event-driven architecture",
    "Live multiplayer game systems",
    "Sync & state consistency",
    "Webhooks & async workflows"
  ]

  //Problem Solving, CP & CS Foundations
  const ProblemSolving = [
    "Data Structures & Algorithms",
    "Problem Solving",
    "Competitive Programming",
    "Algorithms",
    "Logic",
    "Big O Notation",
    "Time Complexity",
    "Space Complexity",
    "Patterns",
  ]

  const ProblemSolving_secondary =[
    "Competitive Programming",
    "Algorithmic thinking",
    "Time & space tradeoffs",
    "Debugging under pressure",
    "Complexity analysis",
  ]

  //DevOps & Tooling
  const DevOps = [
    "Git & GitHub",
    "Docker (basics)",
    "Cloud fundamentals",
    "CI/CD exposure",
    "Environment management"
  ]

  //Hackathons
  const Hackathons1 = [
    "Multiple national hackathons",
    "Rapid Application Development"
  ]

  const Hackathons2 = [
    "MVP-first mindset",
    "Shipping under deadlines",
    "Iterative product design"
  ]

  return (
    <section className="relative min-h-screen w-full" id="skill-grid">
        <div className="relative grid grid-rows-9 md:grid-rows-3 gap-3 w-full items-center justify-centers"> {/* Main Window */} 
            <div className="grid md:grid-cols-4 h-full w-full gap-3">
              <div className="relative col-span-2 skill-card"> {/* Top-side Parent Window */}
                <div className="absolute flex flex-row w-full mt-14 justify-between items-center px-10">
                  <span className="relative font-medium doto-bold text-5xl md:text-3">TECH STACK</span>
                  <span className="relative font-medium doto-bold w-64 text-xl justify-evenly md:text-xl">Tools, frameworks, and systems I work with.</span>
                </div>
                <div className="relative flex items-center justify-center">
                  <SkillsCarousal/>
                </div>
              </div>
              <div className="relative skill-card p-10 bg-[url('../../public/F1.png')] dark:bg-[url('../../public/F1dark.png')] bg-cover bg-center"> 
                <span className="relative font-medium doto-bold text-[3vw] md:text-[2vw]">Frontend Engineering</span>
                <div className="flex flex-wrap gap-3 mt-4">
                  {Frotnend.map(skill => (
                    <span key={skill} className="px-3 backdrop-blur-lg py-1 text-[1vw] rounded-full bg-black/10 dark:bg-white/10">
                      {skill}
                    </span>))}
                </div>
                <div className="mt-6 space-y-1 text-xs opacity-60 leading-relaxed">
                  {Frontend_secondary.map(skill => (
                    <p key={skill}>{skill}</p>
                  ))}
                </div>
              </div>
              <div className="p-10 skill-card">
                <span className="relative font-medium doto-bold text-[3vw] md:text-[2vw]">Backend & APIs</span>
                <div className="flex flex-wrap gap-3 mt-4">
                  {Backend.map(skill => (
                    <span key={skill} className="px-3 py-1 text-[1vw] rounded-full bg-black/10 dark:bg-white/10">
                      {skill}
                    </span>))}
                </div>                 
                <div className="mt-6 space-y-1 text-xs opacity-60 leading-relaxed">
                  {Backend_secondary.map(skill => (
                    <p key={skill}>{skill}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 w-full h-full gap-3">
              <div className="relative skill-card" style={{backgroundImage: "url('../../public/Dev.png')", backgroundSize: "cover", backgroundPosition: "center"}}/> 
              <div className="relative skill-card p-10">
                <span className="relative font-medium doto-bold text-[3vw] md:text-[2vw]">Databases & Data Modeling</span>
                <div className="flex flex-wrap gap-3 mt-4">
                  {Databases.map(skill => (
                    <span key={skill} className="px-3 py-1 text-[1vw] rounded-full bg-black/10 dark:bg-white/10">
                      {skill}
                    </span>))}
                </div>
                <div className="mt-6 space-y-1 text-xs opacity-60 leading-relaxed">
                  {Databases_secondary.map(skill => (
                    <p key={skill}>{skill}</p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative skill-card p-10"> 
                  <span className="relative font-medium doto-bold text-[3vw] md:text-[2vw]">Languages</span>
                  <div className="flex flex-wrap gap-3 mt-4">
                     {Languages.map(skill => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-full bg-black/10 dark:bg-white/10">
                        {skill}
                      </span>))}
                  </div>
                </div>
                <div className="relative skill-card p-10"> 
                  <span className="relative font-medium doto-bold text-[3vw] md:text-[2vw]">Hackathons</span>
                  <span className="relative font-medium text-[1vw] md:text-[1vw]"> & Product Thinking</span> 
                  <div className="flex flex-row gap-3">
                    <div className="relative mt-4 space-y-2 text-sm opacity-60 leading-relaxed">
                      {Hackathons1.map(skill => (
                        <p key={skill}>{skill}</p>
                        ))}
                    </div>
                    <div className="relative mt-4 space-y-2 text-sm opacity-60 leading-relaxed">
                      {Hackathons2.map(skill => (
                        <p key={skill}>{skill}</p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="grid md:grid-cols-4 h-full gap-3">
            <div className="skill-card p-10"> {/* Top-side Parent bottom Window */}
              <span className="relative font-medium doto-bold text-[3vw] md:text-[2vw]">Real-Time & Scalable Systems</span>
              <div className="mt-4 space-y-2 text-base opacity-60 leading-relaxed">
                {RealTime.map(skill => (
                  <p key={skill}>{skill}</p>
                ))}
              </div>
            </div>
            <div className="relative col-span-2 flex flex-row w-full gap-3"> {/* Bottom Parent Window */}
                <div className="relative skill-card p-10">
                  <span className="relative font-medium doto-bold text-[3vw] md:text-[2vw]">Problem Solving, CP & CS Foundations</span>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {ProblemSolving.map(skill => (
                      <span key={skill} className="px-3 py-1 text-[1vw] rounded-full bg-black/10 dark:bg-white/10">
                        {skill}
                      </span>))}
                  </div>

                  <div className="mt-6 space-y-1 text-xs opacity-60 leading-relaxed">
                    {ProblemSolving_secondary.map(skill => (
                      <p key={skill}>{skill}</p>
                    ))}
                  </div>
                </div>
            </div>
            <div className="relative flex flex-row w-full gap-3"> {/* Bottom Parent Window */}
                <div className="relative skill-card p-10">
                  <span className="relative font-medium doto-bold text-[3vw] md:text-[2vw]">DevOps & Tooling</span>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {DevOps.map(skill => (
                      <span key={skill} className="px-3 py-1 text-[1vw] rounded-full bg-black/10 dark:bg-white/10">
                        {skill}
                      </span>))}
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  );
}
