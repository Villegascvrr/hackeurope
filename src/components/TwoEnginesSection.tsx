import ScrollReveal from "@/components/ScrollReveal";

const leftFeatures = [
  "Portfolio intake",
  "Risk engine",
  "Dynamic collateral ratios",
  "Monitoring & enforcement",
];

const rightFeatures = [
  "On-chain transaction analysis",
  "Liquidation history checks",
  "Identity signal integration",
  "Real-time credit score issuance",
];

const TwoEnginesSection = () => {
  return (
    <section className="section-accent py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs font-bold mb-4 tracking-widest uppercase opacity-70">Platform Overview</p>
            <h2 className="mb-5 max-w-3xl">
              Two Credit Engines. One Infrastructure Layer.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl bg-background p-8 lg:p-10 border-2 border-primary-foreground/20 h-full">
              <h3 className="text-2xl font-extrabold text-foreground mb-3">Asset-Backed Underwriting</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Quantitative collateral modeling for mid-market treasury operations.
              </p>
              <div className="space-y-0">
                {leftFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-3xl bg-background p-8 lg:p-10 border-2 border-primary-foreground/20 h-full">
              <h3 className="text-2xl font-extrabold text-foreground mb-3">AI On-Chain Credit (TrustScore.sol)</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Wallet-level credit scoring powered by behavioral and identity analysis.
              </p>
              <div className="space-y-0">
                {rightFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-sm font-medium mt-12 opacity-80">
            Both engines operate under a unified risk framework.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TwoEnginesSection;
