const capabilities = [
  "Real-time quantitative risk modeling",
  "Dynamic collateral ratio computation",
  "Portfolio-level risk aggregation",
  "Automated threshold monitoring",
  "Simulation-based stress testing",
];

const TechComplexitySection = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Technical Depth</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for Technical Depth, Not Just UI
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This system implements computational infrastructure at the intersection of quantitative finance and automated decision logic.
            </p>
          </div>

          <div>
            <div className="space-y-0">
              {capabilities.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-8 pt-6">
              <p className="text-sm font-medium">Complexity is computational, not cosmetic.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechComplexitySection;
