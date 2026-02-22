import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <div className="h-1.5 bg-primary w-full fixed top-0 left-0 right-0 z-[60]" />
      <motion.nav
        className="fixed top-1.5 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <span className="text-lg font-extrabold tracking-tight">Pledge Coin</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors duration-300">Problem</a>
            <a href="#solution" className="hover:text-foreground transition-colors duration-300">Solution</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors duration-300">How It Works</a>
            <a href="#tech-stack" className="hover:text-foreground transition-colors duration-300">Tech Stack</a>
          </div>
          <Button className="rounded-3xl btn-brutal bg-primary text-primary-foreground" size="sm" asChild>
            <a href="/onboarding">Launch Engine</a>
          </Button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
