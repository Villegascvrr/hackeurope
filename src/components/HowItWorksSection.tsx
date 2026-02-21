const steps = [
  {
    number: "01",
    title: "Pledge Financial Assets",
    description: "Submit portfolio holdings — ETFs, equities, or fund positions — into the collateral framework.",
  },
  {
    number: "02",
    title: "Risk Engine Evaluates Portfolio",
    description: "Real-time analysis of volatility, liquidity, concentration, and drawdown characteristics.",
  },
  {
    number: "03",
    title: "Structured Terms Generated",
    description: "Dynamic collateral ratios, margin thresholds, and guarantee terms are computed automatically.",
  },
  {
    number: "04",
    title: "Deposit Advanced",
    description: "Structured guarantee is issued against the collateral — no asset liquidation required.",
  },
  {
    number: "05",
    title: "Assets Released at End of Term",
    description: "Upon fulfillment, pledged assets are released back to the client with full ownership intact.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                <div className="relative z-10 h-12 w-12 shrink-0 rounded-lg bg-muted border border-border flex items-center justify-center">
                  <span className="mono text-xs font-medium text-primary">{step.number}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
