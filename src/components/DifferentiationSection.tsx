const differentiators = [
  "Real-time asset valuation across multiple instrument types",
  "Volatility-adjusted collateral modeling with dynamic haircuts",
  "Dynamic overcollateralization logic responding to market conditions",
  "Automated margin triggers with configurable thresholds",
  "Treasury optimization modeling for capital deployment",
];

const DifferentiationSection = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Technical Differentiation</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built as Financial Infrastructure, Not a Lending Platform
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Collateral Core operates at the infrastructure layer — providing the risk computation, collateral management, and structured guarantee orchestration that institutional treasury operations require.
            </p>
          </div>

          <div className="space-y-0">
            {differentiators.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
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

export default DifferentiationSection;
