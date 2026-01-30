const logos = [
    "react.svg",
    "tailwindcss.svg",
    "vite.svg",
    "nodedotjs.svg",
    "express.svg",
    "postgresql.svg",
    "mongodb.svg",
    "javascript.svg",
    "typescript.svg",
    "python.svg",
    "github.svg",
    "docker.svg",
    "alby.svg",
  ];
  
  export default function SkillsCarousel() {
    return (
      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, i) => (
            <div className="logo-card " key={i}>
              <img src={`../../public/logos/${logo}`} alt="" style={{color: "white"}}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
  