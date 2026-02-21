const capabilities = [
  "Deposit pattern modeling",
  "Capital allocation optimization",
  "Liquidity forecasting",
  "Scenario-based collateral planning",
];

const CapitalEfficiencySection = () => {
  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Capital Layer</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Beyond Guarantees — Treasury Optimization
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Collateral Core is designed as long-term financial infrastructure, not a single-use product.
            </p>
          </div>

          <div className="space-y-0">
            {capabilities.map((item, i) => (
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

export default CapitalEfficiencySection;
