import { ArrowRight, ArrowDown } from "lucide-react";

const bullets = [
  "Quantitative modeling",
  "Behavioral risk scoring",
  "Automated structuring",
  "Continuous monitoring",
];

const UnifiedArchitectureSection = () => {
  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Architecture</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Unified Risk Architecture
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Two underwriting pathways converging into a single risk framework.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Diagram */}
          <div className="space-y-6">
            {/* Traditional path */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-[hsl(var(--dark-border))] p-4 text-center flex-1 bg-[hsl(var(--dark-bg))]">
                <p className="text-sm font-semibold">Traditional Assets</p>
              </div>
              <ArrowRight className="h-4 w-4 text-primary shrink-0" />
              <div className="rounded-lg border border-[hsl(var(--dark-border))] p-4 text-center flex-1 bg-[hsl(var(--dark-bg))]">
                <p className="text-sm font-semibold">Risk Engine</p>
              </div>
              <ArrowRight className="h-4 w-4 text-primary shrink-0" />
              <div className="rounded-lg border border-[hsl(var(--dark-border))] p-4 text-center flex-1 bg-[hsl(var(--dark-bg))]">
                <p className="text-sm font-semibold">Structured Credit</p>
              </div>
            </div>

            {/* On-chain path */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-[hsl(var(--dark-border))] p-4 text-center flex-1 bg-[hsl(var(--dark-bg))]">
                <p className="text-sm font-semibold">On-Chain Wallet</p>
              </div>
              <ArrowRight className="h-4 w-4 text-primary shrink-0" />
              <div className="rounded-lg border border-[hsl(var(--dark-border))] p-4 text-center flex-1 bg-[hsl(var(--dark-bg))]">
                <p className="text-sm font-semibold">AI Underwriter</p>
              </div>
              <ArrowRight className="h-4 w-4 text-primary shrink-0" />
              <div className="rounded-lg border border-[hsl(var(--dark-border))] p-4 text-center flex-1 bg-[hsl(var(--dark-bg))]">
                <p className="text-sm font-semibold">Credit Decision</p>
              </div>
            </div>

            {/* Convergence */}
            <div className="flex justify-center">
              <ArrowDown className="h-4 w-4 text-primary" />
            </div>
            <div className="rounded-lg border border-primary/30 p-5 text-center bg-primary/5">
              <p className="text-sm font-bold">Collateral Core Risk Framework</p>
            </div>
          </div>

          {/* Bullet points */}
          <div className="space-y-0">
            {bullets.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-[hsl(var(--dark-border))]">
                <span className="text-xs text-muted-foreground font-medium mt-0.5 w-6 shrink-0">0{i + 1}</span>
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedArchitectureSection;
