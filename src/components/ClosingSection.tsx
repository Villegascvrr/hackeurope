import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ClosingSection = () => {
  return (
    <>
      {/* Status section - light */}
      <section id="status" className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Current focus</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            We're in <span className="underline text-primary">selective conversations</span> with CFOs, finance teams, and investors to validate operational requirements before opening access. Not everyone is a fit — and that's <span className="underline text-foreground">intentional</span>.
          </p>
        </div>
      </section>

      {/* CTA section - dark */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's talk</h2>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              If you deal with B2B deposits and this resonates, we'd like to learn from you.
            </p>
          </div>
          <div className="text-right shrink-0">
            <Button variant="outline" size="xl" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
              Request a 15-minute conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground mt-3">No commitment. Learning from CFOs, founders, investors.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClosingSection;
