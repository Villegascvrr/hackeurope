import ScrollReveal from "@/components/ScrollReveal";

const VisionSection = () => {
  return (
    <section className="py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">Vision</p>
            <h2 className="mb-8">
              The Future of Credit Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Capital is increasingly hybrid — traditional portfolios and digital wallets coexist. Credit infrastructure must evaluate both with equal precision.
            </p>
            <div className="card-brutal-primary rounded-3xl bg-accent p-8">
              <p className="text-lg font-extrabold text-accent-foreground leading-relaxed">
                Collateral Core builds the underwriting layer for this new financial reality.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisionSection;
