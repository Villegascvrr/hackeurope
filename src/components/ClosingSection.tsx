import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Modern Treasury Requires Infrastructure-Level Collateralization
          </h2>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            If you manage treasury operations and this resonates, we'd like to learn from you.
          </p>
        </div>
        <div className="shrink-0 flex flex-col gap-3">
          <Button className="rounded-full" size="xl">
            View the Product <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="xl" className="rounded-full border-[hsl(var(--dark-border))] hover:bg-[hsl(var(--dark-border))]">
            View Architecture
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
