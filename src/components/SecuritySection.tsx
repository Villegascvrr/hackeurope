import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const principles = [
  { number: "01", title: "Overcollateralization", desc: "Security margins built into every structured guarantee." },
  { number: "02", title: "Contractual clarity", desc: "Transparent legal structure and defined execution rules." },
  { number: "03", title: "No speculation", desc: "Assets are pledged, not traded. No leverage amplification." },
  { number: "04", title: "Regulatory alignment", desc: "Designed within established financial regulatory frameworks." },
];

const SecuritySection = () => {
  return (
    <section id="governance" className="py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div>
              <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">Risk Framework</p>
              <h2 className="mb-5">Institutional Governance Framework</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Built on transparency, clear rules, and institutional-grade risk management.
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
            <ScrollReveal delay={0.4}>
              <p className="text-sm text-muted-foreground mt-8">Risk management is embedded at the infrastructure layer.</p>
              <p className="text-sm text-muted-foreground mt-3">Risk management principles apply consistently across traditional and on-chain credit issuance.</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
