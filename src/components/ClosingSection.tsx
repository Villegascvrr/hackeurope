import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ClosingSection = () => {
  return (
    <section className="section-accent py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div>
              <h2 className="mb-5 max-w-2xl">
                On-Chain Credit Starts Here
              </h2>
              <p className="text-lg max-w-lg leading-relaxed opacity-80">
                Connect your Solana wallet and get an AI-generated credit profile in minutes.
              </p>
            </div>
            <div className="shrink-0">
              <Button className="rounded-3xl bg-background text-foreground border-2 border-background hover:bg-background/90 btn-brutal" size="xl" asChild>
                <a href="/onboarding">
                  Launch Credit Engine <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClosingSection;
