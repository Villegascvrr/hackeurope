import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Modern Treasury Needs Infrastructure-Level Collateralization
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Join the institutions building capital-efficient treasury operations with structured, asset-backed guarantees.
        </p>
        <Button variant="hero" size="xl">Request Early Access</Button>
      </div>
    </section>
  );
};

export default ClosingSection;
