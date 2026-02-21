const steps = [
  { number: "01", title: "Deposit required", desc: "Contract, lease, or project" },
  { number: "02", title: "Assets pledged", desc: "As collateral, not sold" },
  { number: "03", title: "Cash deposited", desc: "To the final provider" },
  { number: "04", title: "Assets keep working", desc: "Invested, generating returns" },
  { number: "05", title: "Deposit released", desc: "Assets unlocked" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Assets are pledged as collateral — <span className="underline text-foreground">not liquidated</span>. Cash stays operational.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm text-accent-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Conceptual framework
            </span>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-baseline gap-6 py-5 border-b border-border">
                <span className="text-sm text-muted-foreground font-medium w-6 shrink-0">{step.number}</span>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-semibold">{step.title}</h3>
                  <span className="text-muted-foreground">—</span>
                  <span className="text-muted-foreground text-sm">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
