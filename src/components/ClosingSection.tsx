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
                Unified Credit Infrastructure Starts Here
              </h2>
              <p className="text-lg max-w-lg leading-relaxed opacity-80">
                Whether you manage institutional treasury operations or on-chain capital, we'd like to hear from you.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-4">
              <Button className="rounded-3xl bg-background text-foreground border-2 border-background hover:bg-background/90 btn-brutal" size="xl" asChild>
                <a href="/onboarding">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="rounded-3xl border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10" size="xl">
                Schedule a Conversation
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClosingSection;
