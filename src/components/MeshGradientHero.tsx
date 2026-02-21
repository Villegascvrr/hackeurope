import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const MeshGradientHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const smoothRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMove = (e: MouseEvent) => {
      targetRef.current.x = (e.clientX / window.innerWidth - 0.5) * 20;
      targetRef.current.y = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    const tick = () => {
      smoothRef.current.x += (targetRef.current.x - smoothRef.current.x) * 0.04;
      smoothRef.current.y += (targetRef.current.y - smoothRef.current.y) * 0.04;
      if (containerRef.current) {
        containerRef.current.style.transform = `translate(${smoothRef.current.x}px, ${smoothRef.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Liquid gradient layer */}
      <div
        ref={containerRef}
        className="absolute inset-[-40%] will-change-transform liquid-gradient"
        style={{ opacity: prefersReducedMotion ? 0.12 : undefined }}
      />
    </div>
  );
};

export default MeshGradientHero;
