import { ArrowRight, ArrowDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const bullets = [
  "Quantitative modeling",
  "Behavioral risk scoring",
  "Automated structuring",
  "Continuous monitoring",
];

const UnifiedArchitectureSection = () => {
  return (
    <section className="py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">Architecture</p>
            <h2 className="mb-5 max-w-3xl">
              Unified Risk Architecture
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Two underwriting pathways converging into a single risk framework.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              {/* Traditional path */}
              <div className="flex items-center gap-3">
                <div className="card-brutal-sm rounded-2xl p-4 text-center flex-1 bg-card">
                  <p className="text-sm font-extrabold">Traditional Assets</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <div className="card-brutal-sm rounded-2xl p-4 text-center flex-1 bg-card">
                  <p className="text-sm font-extrabold">Risk Engine</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <div className="card-brutal-sm rounded-2xl p-4 text-center flex-1 bg-card">
                  <p className="text-sm font-extrabold">Structured Credit</p>
                </div>
              </div>

              {/* On-chain path */}
              <div className="flex items-center gap-3">
                <div className="card-brutal-sm rounded-2xl p-4 text-center flex-1 bg-card">
                  <p className="text-sm font-extrabold">On-Chain Wallet</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <div className="card-brutal-sm rounded-2xl p-4 text-center flex-1 bg-card">
                  <p className="text-sm font-extrabold">AI Underwriter</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <div className="card-brutal-sm rounded-2xl p-4 text-center flex-1 bg-card">
                  <p className="text-sm font-extrabold">Credit Decision</p>
                </div>
              </div>

              {/* Convergence */}
              <div className="flex justify-center">
                <ArrowDown className="h-5 w-5 text-primary" />
              </div>
              <div className="card-brutal-primary rounded-2xl p-6 text-center bg-accent">
                <p className="text-sm font-extrabold text-accent-foreground">Collateral Core Risk Framework</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-0">
              {bullets.map((item, i) => (
                <div key={i} className="flex items-start gap-5 py-5 border-b-2 border-border last:border-0">
                  <span className="text-sm text-primary font-extrabold w-8 shrink-0">0{i + 1}</span>
                  <p className="text-base font-medium">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default UnifiedArchitectureSection;
