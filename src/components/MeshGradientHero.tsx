import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const MeshGradientHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      smoothMouse.current.x = lerp(smoothMouse.current.x, mouse.x, 0.06);
      smoothMouse.current.y = lerp(smoothMouse.current.y, mouse.y, 0.06);
      const el = document.getElementById("mesh-gradient-layer");
      if (el) {
        el.style.transform = `translate(${smoothMouse.current.x}px, ${smoothMouse.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mouse, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <div
        id="mesh-gradient-layer"
        className="absolute inset-[-20%] will-change-transform"
        style={{ filter: "blur(100px)" }}
      >
        <div className="absolute inset-0 mesh-blob mesh-blob-1" />
        <div className="absolute inset-0 mesh-blob mesh-blob-2" />
        <div className="absolute inset-0 mesh-blob mesh-blob-3" />
        <div className="absolute inset-0 mesh-blob mesh-blob-4" />
      </div>
    </div>
  );
};

export default MeshGradientHero;
