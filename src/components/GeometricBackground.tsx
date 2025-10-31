import { useEffect, useRef } from "react";

const GeometricBackground = ({ debug = false }: { debug?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resizeCanvas = () => {
      const w = Math.max(window.innerWidth, 1);
      const h = Math.max(window.innerHeight, 1);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const readLineColor = () => {
      const root = getComputedStyle(document.documentElement);
      let val = root.getPropertyValue("--line").trim() || "0 0% 20%";
      return `hsl(${val})`;
    };

    let baseLineColor = readLineColor();
    const mo = new MutationObserver(() => {
      baseLineColor = readLineColor();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    const handlePointerMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (e.touches && e.touches[0]) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    }, { passive: true });
    const gridSize = 40;
    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
    
      const { x: mx, y: my } = mouseRef.current;
      const active = mx > 0 && my > 0;
      const gridSize = 40;
      ctx.lineWidth = 0.6;
    
      for (let x = 0; x <= w; x += gridSize) {
        for (let y = 0; y <= h; y += gridSize) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 200;
          let alpha = 0.08;
          if (active) {
            const fade = 1 - Math.min(dist / radius, 1);
            alpha = 0.02 + 0.25 * fade ** 2;
          }
    
          ctx.strokeStyle = convertHslToCssWithAlpha(baseLineColor, alpha);
          ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }

      if (active) {
        const radius = 450;
        const inner = 0;
        const outer = radius;
      
        const grd = ctx.createRadialGradient(mx, my, inner, mx, my, outer);
        const lightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
        const baseAlpha = lightTheme ? 0.15 : 0.1;
      
        grd.addColorStop(0, convertHslToCssWithAlpha(baseLineColor, baseAlpha));
        grd.addColorStop(0.2, convertHslToCssWithAlpha(baseLineColor, baseAlpha * 0.6));
        grd.addColorStop(0.4, convertHslToCssWithAlpha(baseLineColor, baseAlpha * 0.3));
        grd.addColorStop(0.7, convertHslToCssWithAlpha(baseLineColor, baseAlpha * 0.1));
        grd.addColorStop(1, convertHslToCssWithAlpha(baseLineColor, 0));
      
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(mx, my, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    

    const loop = () => {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      mo.disconnect();
    };
  }, [debug]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
        style={{
          background: "hsl(var(--background))",
          transition: "background 0.25s ease, opacity 0.25s ease",
        }}
        aria-hidden
      />
    </>
  );
};

function convertHslToCssWithAlpha(hslString: string, alpha: number) {
  if (hslString.includes("/")) {
    const parts = hslString.split("/");
    return `${parts[0].trim()} / ${alpha})`.replace(/\)\s*\/\s/, "/");
  }
  return hslString.replace(")", ` / ${alpha})`);
}

export default GeometricBackground;
