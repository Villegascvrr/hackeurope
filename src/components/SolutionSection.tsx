import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { label: "Portfolio Intake", sublabel: "Asset classification, liquidity profiling, and valuation feeds" },
  { label: "Risk Engine", sublabel: "Volatility modeling, drawdown analysis, correlation matrices" },
  { label: "Decision Engine", sublabel: "Dynamic overcollateralization logic and threshold enforcement" },
  { label: "Structured Guarantee", sublabel: "Asset-backed capital deployment without liquidation" },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">The Solution</p>
            <h2 className="mb-5 max-w-3xl">
              A Real-Time Collateral Infrastructure Layer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Collateral Core transforms invested assets into structured, risk-managed guarantees through automated quantitative assessment and rule-based execution.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.label} delay={i * 0.1}>
              <div className="card-brutal rounded-3xl bg-card p-6 h-full flex flex-col">
                <span className="text-xs font-bold text-primary mb-4 tracking-wider">0{i + 1}</span>
                <p className="text-lg font-extrabold mb-2">{step.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{step.sublabel}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
