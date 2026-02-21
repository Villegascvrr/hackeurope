import { ArrowRight } from "lucide-react";

const steps = [
  { label: "Portfolio", sublabel: "Asset Intake" },
  { label: "Risk Engine", sublabel: "Volatility & Drawdown" },
  { label: "Decision Engine", sublabel: "Dynamic Ratios" },
  { label: "Structured Guarantee", sublabel: "Output" },
];

const features = [
  "Portfolio intake and classification",
  "Volatility, drawdown, and liquidity analysis",
  "Dynamic collateral ratio computation",
  "Automated margin threshold monitoring",
  "Structured release mechanisms",
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 lg:py-32 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">The Solution</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            A Real-Time Collateral Infrastructure Layer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An end-to-end system that transforms invested assets into structured, risk-managed collateral for temporary guarantees.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="rounded-xl border border-border bg-card p-8 mb-16 card-elevated overflow-x-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4 min-w-[600px] mx-auto">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 sm:gap-4">
                <div className="border-gradient rounded-lg p-4 sm:p-6 text-center min-w-[120px] sm:min-w-[140px] bg-muted/50">
                  <p className="text-sm sm:text-base font-semibold">{step.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{step.sublabel}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature List */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-3 py-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-sm text-secondary-foreground">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
