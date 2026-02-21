import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const steps = [
  {
    label: "Connect Wallet",
    sublabel: "We fetch wallet history via Solana RPC (Helius).",
  },
  {
    label: "Behavioral Analysis",
    sublabel: "We analyze wallet age, transaction volume, and liquidation history.",
  },
  {
    label: "Identity Signals",
    sublabel: "Optional GitHub / LinkedIn verification increases trust score.",
  },
  {
    label: "AI Underwriting",
    sublabel: "An LLM evaluates quantitative + qualitative signals to generate a Trust Score (300–850) and loan eligibility.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">Process</p>
            <h2 className="mb-5 max-w-3xl">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              From wallet connection to credit decision in four steps.
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

export default HowItWorksSection;
