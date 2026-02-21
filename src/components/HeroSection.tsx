import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
          Rebuilding Credit Infrastructure{" "}
          <span className="text-primary">for Traditional and Digital Capital</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Collateral Core provides structured asset-backed guarantees for institutions and AI-powered on-chain credit scoring for digital-native markets.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button className="rounded-full" size="xl" asChild>
            <a href="/onboarding">
              Explore Institutional Infrastructure <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" className="rounded-full" size="xl" asChild>
            <a href="/product/web3-credit">
              Explore On-Chain Credit
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Unified credit infrastructure for mid-market treasury teams and digital-native capital participants.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
