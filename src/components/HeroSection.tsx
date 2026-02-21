import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3 max-w-3xl">
          One Risk Engine.
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 max-w-3xl text-muted-foreground">
          Two Capital Worlds.
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Unified underwriting infrastructure for traditional assets and on-chain capital.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button className="rounded-full" size="xl" asChild>
            <a href="/onboarding">
              Enter Platform <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Unified credit infrastructure for institutional and digital-native capital.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
