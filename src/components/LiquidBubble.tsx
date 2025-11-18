import { useEffect, useRef } from "react";

export function LiquidBubble({ children }: { children: any }) {
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    // Sync bubble background position so distortion matches true page backdrop
    const sync = () => {
      const x = window.scrollX;
      const y = window.scrollY;

      bubble.style.setProperty("--bg-pos", `${x * -1}px ${y * -1}px`);
    };

    sync();
    window.addEventListener("scroll", sync);
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <div
      ref={bubbleRef}
      className="relative px-5 py-2 rounded-full overflow-hidden border border-white/20"
      style={{
        position: "relative",
        zIndex: 5,
      }}
    >

      {/* Distorted background clone */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundImage: "var(--page-bg)",
          backgroundSize: "cover",
          backgroundPosition: "var(--bg-pos)",
          filter: "url(#liquid-distort)",
          opacity: 0.9,
        }}
      />

      {/* Glass shine */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Frost-free clear glass */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          backdropFilter: "blur(1px) brightness(1.15) contrast(1.2)",
        }}
      />

      {/* TEXT stays sharp */}
      <span className="relative z-10 text-gray-200 tracking-wide font-medium">
        {children}
      </span>
    </div>
  );
}
