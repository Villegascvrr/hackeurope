import { ArrowRight } from "lucide-react";

const steps = [
  { label: "Portfolio Intake", sublabel: "Asset classification, liquidity profiling, and valuation feeds" },
  { label: "Risk Engine", sublabel: "Volatility modeling, drawdown analysis, correlation matrices" },
  { label: "Decision Engine", sublabel: "Dynamic overcollateralization logic and threshold enforcement" },
  { label: "Structured Guarantee", sublabel: "Asset-backed capital deployment without liquidation" },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">The Solution</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            A Real-Time Collateral Infrastructure Layer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collateral Core transforms invested assets into structured, risk-managed guarantees through automated quantitative assessment and rule-based execution.
          </p>
        </div>

        <div className="rounded-xl border border-border p-8 overflow-x-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4 min-w-[600px] mx-auto">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 sm:gap-4">
                <div className="rounded-lg border border-border p-4 sm:p-6 text-center min-w-[140px] sm:min-w-[160px] bg-accent/50">
                  <p className="text-sm sm:text-base font-semibold">{step.label}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{step.sublabel}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
