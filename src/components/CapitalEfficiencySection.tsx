import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const capabilities = [
  "Deposit pattern modeling",
  "Capital allocation optimization",
  "Liquidity forecasting",
  "Scenario-based collateral planning",
];

const CapitalEfficiencySection = () => {
  return (
    <section className="section-dark py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div>
              <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">Capital Layer</p>
              <h2 className="mb-5">Beyond Guarantees — Treasury Optimization</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Collateral Core is designed as long-term financial infrastructure, not a single-use product.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal stagger={0.1}>
            <div className="space-y-0">
              {capabilities.map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex items-start gap-5 py-5 border-b-2 border-[hsl(var(--dark-border))] last:border-0">
                    <span className="text-sm text-primary font-extrabold w-8 shrink-0">0{i + 1}</span>
                    <p className="text-base font-medium">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
};

export default CapitalEfficiencySection;
