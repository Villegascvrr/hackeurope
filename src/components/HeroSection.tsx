import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground mb-8 opacity-0 animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          Financial Infrastructure for Asset-Backed Guarantees
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Unlock Capital Efficiency{" "}
          <span className="text-gradient">Without Liquidating Assets</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Use invested capital as structured collateral for temporary guarantees — powered by a real-time risk engine.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl">Request Access</Button>
          <Button variant="hero-outline" size="xl">View Infrastructure Overview</Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
