import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const stats = [
  { value: "0", label: "On-chain credit protocols for Solana wallets" },
  { value: "25%", label: "Capital gains tax loss when selling assets for liquidity" },
  { value: "Manual", label: "Underwriting is subjective and opaque" },
  { value: "0%", label: "Identity signals unused in lending decisions" },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-cool py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="mb-5 max-w-3xl">
              On-Chain Activity Has No Credit Layer
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Wallets transact billions in volume but have zero standardized creditworthiness signal.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 gap-x-12 gap-y-8" stagger={0.1}>
          {stats.map((item, i) => (
            <StaggerItem key={i} index={i}>
              <div className="card-brutal-sm card-hover rounded-3xl bg-card p-8">
                <p className="text-4xl sm:text-5xl font-extrabold text-primary mb-3">{item.value}</p>
                <p className="font-semibold text-foreground">{item.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-20 pt-8 border-t-2 border-foreground/10">
            <p className="text-sm font-medium text-muted-foreground">On-chain behavior should be a first-class credit signal.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
