import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const AmbientBackground = () => {
  const prefersReducedMotion = useReducedMotion();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const { scrollYProgress } = useScroll();

  // Scroll-driven hue shift for blobs
  const blob1X = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blob3X = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMouse({ x, y });
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Blob 1 — top left, indigo */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(245 72% 57% / 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          x: blob1X,
          translateX: mouse.x * -12,
          translateY: mouse.y * -8,
        }}
        animate={{ y: [0, 30, -20, 0], scale: [1, 1.05, 0.97, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 — center right, warm */}
      <motion.div
        className="absolute top-[40%] -right-24 w-[420px] h-[420px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(40 80% 60% / 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
          y: blob2Y,
          translateX: mouse.x * 10,
          translateY: mouse.y * 6,
        }}
        animate={{ y: [0, -25, 15, 0], scale: [1, 0.96, 1.04, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 3 — bottom left, cool */}
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[360px] h-[360px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(220 60% 55% / 0.06) 0%, transparent 70%)",
          filter: "blur(55px)",
          x: blob3X,
          translateX: mouse.x * -8,
          translateY: mouse.y * 10,
        }}
        animate={{ y: [0, 20, -30, 0], x: [0, -15, 10, 0], scale: [1, 1.03, 0.98, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Micro particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/10"
          style={{
            top: `${15 + i * 18}%`,
            left: `${8 + i * 20}%`,
          }}
          animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
        />
      ))}
    </div>
  );
};

export default AmbientBackground;
