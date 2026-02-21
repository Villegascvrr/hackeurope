import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Modern Treasury Requires Structured Collateralization
          </h2>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            If you manage treasury operations and this resonates, we'd like to hear from you.
          </p>
        </div>
        <div className="shrink-0 flex flex-col gap-3">
          <Button className="rounded-full" size="xl" asChild>
            <a href="/onboarding">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" className="rounded-full" size="xl">
            Schedule a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
