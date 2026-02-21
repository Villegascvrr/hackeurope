import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
          Unlock Capital Efficiency{" "}
          <span className="text-primary">Without Liquidating Assets</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Use invested capital as structured collateral for temporary guarantees — powered by a real-time risk engine.
        </p>

        <Button className="rounded-full" size="xl">
          Request a conversation <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="flex items-center gap-3 mt-12 text-sm text-muted-foreground">
          <span>Built for</span>
          {["CFOs", "Finance Leaders", "Growth Companies"].map((label) => (
            <span key={label} className="border border-border rounded-full px-4 py-1.5 text-foreground text-sm">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
