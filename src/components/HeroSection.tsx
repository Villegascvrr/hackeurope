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
    <section ref={sectionRef} className="pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <MeshGradientHero />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <h1 className="mb-10 max-w-4xl leading-[1.1]">
            The Institutional Credit <br className="hidden md:block" />
            & Reputation Layer <span className="text-muted-foreground">for </span>
            <span className="text-blue-600">Solana.</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.2 }}
        >
          Unlock B2B liquidity without selling your assets. AI-powered credit underwriting with zero tax friction and MiCA 2026 compliance.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.3 }}
        >
          <Button className="rounded-3xl btn-brutal bg-primary text-primary-foreground" size="xl" asChild>
            <a href="/onboarding">
              Launch Credit Engine <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
