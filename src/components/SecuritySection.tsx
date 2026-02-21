const principles = [
  { number: "01", title: "Overcollateralization", desc: "Security margins built into every structured guarantee." },
  { number: "02", title: "Contractual clarity", desc: "Transparent legal structure and defined execution rules." },
  { number: "03", title: "No speculation", desc: "Assets are pledged, not traded. No leverage amplification." },
  { number: "04", title: "Regulatory alignment", desc: "Designed within established financial regulatory frameworks." },
];

const SecuritySection = () => {
  return (
    <section id="governance" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Risk Framework</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Institutional Governance Framework</h2>
            <p className="text-muted-foreground leading-relaxed">
              Built on transparency, clear rules, and institutional-grade risk management.
            </p>
          </div>

          <div>
            <div className="space-y-0">
              {principles.map((item) => (
                <div key={item.number} className="flex items-start gap-6 py-5 border-b border-border">
                  <span className="text-sm text-muted-foreground font-medium w-6 shrink-0">{item.number}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">Risk management is embedded at the infrastructure layer.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
