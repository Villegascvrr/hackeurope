import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-36 pb-28 lg:pt-52 lg:pb-40">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="mb-2 max-w-4xl">
            One Risk Engine.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <h1 className="text-muted-foreground max-w-4xl mb-10">
            Two Capital Worlds.
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Unified underwriting infrastructure for traditional assets and on-chain capital.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
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
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Unified credit infrastructure for institutional and digital-native capital.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
