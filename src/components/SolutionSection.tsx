import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const steps = [
  { label: "Wallet Intake", sublabel: "Solana wallet connection, transaction history extraction via Helius API" },
  { label: "Behavioral Engine", sublabel: "Wallet age, volume analysis, liquidation history, and protocol interaction mapping" },
  { label: "Identity Layer", sublabel: "Optional GitHub and LinkedIn verification for trust signal enrichment" },
  { label: "Programmatic Pignoration", sublabel: "AI-driven underwriting generating Trust Score and securing advances without asset liquidation" },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">The Solution</p>
            <h2 className="mb-5 max-w-3xl">
              Programmatic Pignoration Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Execute smart-contract secured advances, unlocking liquidity against digital assets without triggering capital gains events.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {steps.map((step, i) => (
            <StaggerItem key={step.label} index={i}>
              <div className="card-brutal card-hover rounded-3xl bg-card p-6 h-full flex flex-col">
                <span className="text-xs font-bold text-primary mb-4 tracking-wider">0{i + 1}</span>
                <p className="text-lg font-extrabold mb-2">{step.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{step.sublabel}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
