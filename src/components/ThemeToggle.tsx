// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setIsDark(prefersDark);
//     document.documentElement.classList.toggle("dark", prefersDark);
//   }, []);

//   const toggleTheme = () => {
//     const newIsDark = !isDark;
//     setIsDark(newIsDark);
//     document.documentElement.classList.toggle("dark", newIsDark);
//   };

//   return (
//     <button
//   onClick={toggleTheme}
//   className="fixed top-6 right-6 z-50 p-2 rounded-full hover:bg-accent transition-colors"
//   aria-label="Toggle theme"
// >
//   {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
// </button>
//   );
// };

// export default ThemeToggle;


import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Apply stored or system theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = storedTheme === "dark" || (!storedTheme && systemPrefersDark);
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  // Toggle theme & save preference
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-50 p-2 rounded-full hover:bg-accent transition-colors shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
    </button>
  );
};

export default ThemeToggle;
