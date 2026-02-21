import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import MeshGradientHero from "./MeshGradientHero";

const ease = [0.25, 0.1, 0.25, 1.0] as [number, number, number, number];

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="pt-36 pb-28 lg:pt-52 lg:pb-40 relative overflow-hidden">
      <MeshGradientHero />

      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <h1 className="mb-2 max-w-4xl">One Risk Engine.</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.1 }}
        >
          <h1 className="text-muted-foreground max-w-4xl mb-10">Two Capital Worlds.</h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.2 }}
        >
          Unified underwriting infrastructure for traditional assets and on-chain capital.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.3 }}
        >
          <Button className="rounded-3xl btn-brutal bg-primary text-primary-foreground" size="xl" asChild>
            <a href="/onboarding">
              Enter Platform <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.p
          className="mt-10 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease, delay: 0.45 }}
        >
          Unified credit infrastructure for institutional and digital-native capital.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
