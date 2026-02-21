import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const principles = [
  { number: "01", title: "On-chain verification", desc: "All credit signals derived from verifiable wallet activity on Solana." },
  { number: "02", title: "Transparent scoring", desc: "Trust Scores are deterministic and explainable — no black-box decisions." },
  { number: "03", title: "No custody risk", desc: "We read wallet data. We never hold, move, or control user funds." },
  { number: "04", title: "Privacy-first identity", desc: "Identity signals are optional and user-consented. No KYC requirement." },
];

const SecuritySection = () => {
  return (
    <section id="governance" className="py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div>
              <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">Trust Model</p>
              <h2 className="mb-5">Protocol-Level Security</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Built on transparency, verifiability, and non-custodial architecture.
              </p>
            </div>
          </ScrollReveal>

          <div>
            <StaggerReveal stagger={0.1}>
              {principles.map((item, i) => (
                <StaggerItem key={item.number} index={i}>
                  <div className="flex items-start gap-6 py-6 border-b-2 border-border last:border-0">
                    <span className="text-sm text-primary font-extrabold w-8 shrink-0">{item.number}</span>
                    <div>
                      <h3 className="text-lg font-extrabold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
