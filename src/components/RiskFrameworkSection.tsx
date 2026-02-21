import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const tiers = [
  {
    label: "Low Volatility Assets",
    riskFactor: "0.75x – 0.95x",
    collateralRange: "115%–150%",
  },
  {
    label: "Medium Volatility Assets",
    riskFactor: "1.00x – 1.10x",
    collateralRange: "135%–175%",
  },
  {
    label: "High Volatility Assets",
    riskFactor: "1.20x – 1.50x",
    collateralRange: "160%–220%",
  },
];

const RiskFrameworkSection = () => {
  return (
    <section className="py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">
              Risk Model
            </p>
            <h2 className="mb-5 max-w-3xl">Risk Framework &amp; Collateral Model</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Structured volatility tiers and time-based pricing logic powering the underwriting engine.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal stagger={0.12}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {tiers.map((tier, i) => (
              <StaggerItem key={i} index={i}>
                <div className="card-brutal-sm card-hover rounded-2xl p-8 bg-card space-y-6">
                  <p className="text-sm font-extrabold">{tier.label}</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b-2 border-border pb-3">
                      <span className="text-sm text-muted-foreground">Risk Factor</span>
                      <span className="text-sm font-extrabold text-primary">{tier.riskFactor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Collateral Range</span>
                      <span className="text-sm font-extrabold">{tier.collateralRange}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>

        <ScrollReveal delay={0.2}>
          <div className="card-brutal-primary card-hover rounded-2xl p-8 bg-accent text-center space-y-4">
            <p className="text-xs font-bold text-accent-foreground/60 tracking-widest uppercase">
              Final Commission Formula
            </p>
            <p className="text-2xl md:text-3xl font-extrabold text-accent-foreground tracking-tight">
              C<sub>f</sub> = R<sub>b</sub>(t) × F<sub>r</sub> × M<sub>c</sub>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/risk-model"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              View Full Risk Model
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RiskFrameworkSection;
