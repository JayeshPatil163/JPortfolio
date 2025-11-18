import { useState, useEffect,useRef } from "react";
import { motion } from "framer-motion";

interface ArcNavProps {
  items: string[];
}

interface VisibleItem {
  label: string;
  offset: number;
}

export default function ArcNav({ items }: ArcNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);


  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
  
    const handler = (e: WheelEvent) => {
      e.preventDefault();
    };
  
    el.addEventListener("wheel", handler, { passive: false });
  
    return () => {
      el.removeEventListener("wheel", handler);
    };
  }, []);

  const getVisibleItems = (): VisibleItem[] => {
    const result: VisibleItem[] = [];
    for (let i = -2; i <= 2; i++) {
      result.push({
        label: items[(activeIndex + i + items.length) % items.length],
        offset: i,
      });
    }
    return result;
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  
    if (isScrolling) return;
    setIsScrolling(true);
  
    if (e.deltaY > 0) {
      setActiveIndex((prev) => (prev + 1) % items.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  
    setTimeout(() => setIsScrolling(false), 300);
  };
  

  const visible = getVisibleItems();

  return (
    <div
    ref={containerRef}
    className="relative w-64 h-96 flex items-center justify-end"
    onWheel={handleWheel}
  >
    <div className="absolute inset-y-0 right-0 w-40 backdrop-blur-[2px] z-10 rounded-full" />

      <div className="relative flex flex-col items-end justify-center">
        {visible.map(({ label, offset }, idx) => {
          const scale = offset === 0 ? 1 : 0.8 - Math.abs(offset) * 0.12;
          const opacity = offset === 0 ? 1 : 0.5 - Math.abs(offset) * 0.1;

          return (
            <motion.button
            
              key={idx}
              onClick={() =>
                setActiveIndex((activeIndex + offset + items.length) % items.length)
              }
              animate={{ scale, opacity}}
              className={`font-bold tracking-wide z-${offset == 0 ? 20 : 0}`}
              style={{
                transformOrigin: "left center",
              }}
            >
              {offset === 2 || offset === 1 ? <hr className="w-32 my-2 border-gray-300"></hr> : ""}
              {label}
              {offset === -2 || offset === -1 ? <hr className="w-32 my-2 border-gray-300"></hr> : ""}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
