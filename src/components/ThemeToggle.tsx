import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = storedTheme === "dark" || (!storedTheme && systemPrefersDark);
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-28 right-12 z-50 w-[6vh] h-[2.5vh] rounded-full
                 flex items-center justify-between"
      style={{
                  boxShadow: isDark
                    ? "inset 0 1px 4px rgba(255,255,255,0.2), 0 8px 20px rgba(0,0,0,0.5)"
                    : "inset 0 1px 4px rgba(255,255,255,0.3), 0 8px 20px rgba(0,0,0,0.2)",
                }}

      aria-label="Toggle theme"
    >
      <div  className="backdrop-blur-[6px]
                      shadow-[inset_1px_2px_2px_1px_rgba(255,255,255,0.2),inset_-2px_-2px_6px_rgba(0,0,0,0.2),0_6px_10px_rgba(0,0,0,0.3)]
                      transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
                      absolute inset-0 rounded-full pointer-events-none" />

      <span className={`absolute right-[0.7vh] text-[0.9vh] font-medium transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        {isDark ? ""  : "Light"}
      </span>

      <span className={`absolute left-[0.7vh] text-[0.9vh] font-medium transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        {isDark ? "Dark" : ""}
      </span>

      <div className={`w-[3.5vh] h-[4vh] rounded-full flex items-center justify-center
                      shadow-[0_1px_4px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.3)]
                      backdrop-blur-[1px]
                      transform transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
                      ${isDark ? "translate-x-[3vh]" : "-translate-x-1"}`}>
      {isDark ? (
              <Moon className="w-[1.5vh] h-[1.5vh] text-gray-400 rounded-full drop-shadow-[0_0_6px_rgba(0,0,0,0.5)]" /> 
      ) : (
              <Sun className="w-[1.5vh] h-[1.5vh] rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" />)}
       </div>
    </button>
  );
};

export default ThemeToggle;


{/* className="fixed top-28 right-12 z-50 p-2 rounded-full hover:bg-accent transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.25)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.25)]" > */}
      {/* {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} */} 