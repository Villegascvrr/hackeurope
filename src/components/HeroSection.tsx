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
          Structured, real-time asset-backed guarantees powered by a quantitative collateral risk engine.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button className="rounded-full" size="xl">
            Request Access <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full" size="xl">
            View Architecture
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Designed for mid-market treasury teams managing active investment portfolios.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
