import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const stack = [
  { title: "Helius API", desc: "Wallet data extraction and transaction history from Solana RPC." },
  { title: "Solana Devnet", desc: "On-chain integration for wallet verification and loan simulation." },
  { title: "AI Underwriting Engine", desc: "LLM-based decision engine for trust scoring and risk assessment." },
  { title: "JSON Risk Scoring", desc: "Structured, machine-readable risk output for downstream consumption." },
  { title: "Devnet USDC Simulation", desc: "End-to-end loan simulation with on-chain token transfers." },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="section-cool py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">Infrastructure</p>
            <h2 className="mb-5 max-w-3xl">Technical Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Protocol-level infrastructure built for on-chain credit decisioning.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal stagger={0.1}>
          <div className="space-y-0">
            {stack.map((item, i) => (
              <StaggerItem key={item.title} index={i}>
                <div className="flex items-start gap-6 py-6 border-b-2 border-border last:border-0">
                  <span className="text-sm text-primary font-extrabold w-8 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-extrabold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default TechStackSection;
