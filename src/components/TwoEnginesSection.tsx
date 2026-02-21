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
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Platform Overview</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Two Credit Engines. One Infrastructure Layer.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="rounded-xl border border-border p-8">
            <h3 className="text-xl font-bold mb-2">Asset-Backed Underwriting</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Quantitative collateral modeling for mid-market treasury operations.
            </p>
            <div className="space-y-0">
              {leftFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-border">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="rounded-xl border border-border p-8">
            <h3 className="text-xl font-bold mb-2">AI On-Chain Credit (TrustScore.sol)</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Wallet-level credit scoring powered by behavioral and identity analysis.
            </p>
            <div className="space-y-0">
              {rightFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-border">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Both engines operate under a unified risk framework.
        </p>
      </div>
    </section>
  );
};

export default TwoEnginesSection;
