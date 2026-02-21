const deliverables = [
  "Simulated portfolio ingestion",
  "Volatility & drawdown computation",
  "Dynamic collateral ratio output",
  "Margin trigger simulation",
  "Structured guarantee generation logic",
];

const MVPScopeSection = () => {
  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Execution</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hackathon Build Scope</h2>
            <p className="text-muted-foreground leading-relaxed">
              In this 48-hour build, we are delivering a functional prototype of the collateral risk engine with live simulation output.
            </p>
          </div>

          <div>
            <div className="space-y-0">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-[hsl(var(--dark-border))]">
                  <span className="text-xs text-muted-foreground font-medium mt-0.5 w-6 shrink-0">0{i + 1}</span>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-[hsl(var(--dark-border))] mt-8 pt-6">
              <p className="text-sm font-medium">Live risk simulation demo with decision output.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPScopeSection;
