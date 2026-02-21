const principles = [
  { number: "01", title: "Over-collateralization", desc: "Pledge values exceed deposit amounts. Security margin built in." },
  { number: "02", title: "Contractual clarity", desc: "Transparent agreements. Rights and procedures defined upfront." },
  { number: "03", title: "No speculation", desc: "Assets pledged only. No trading, no leverage, no risk amplification." },
  { number: "04", title: "Regulatory alignment", desc: "Designed within existing financial regulatory frameworks." },
];

const SecuritySection = () => {
  return (
    <section id="governance" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="border-t border-border pt-8">
              {principles.map((item) => (
                <div key={item.number} className="py-6 border-b border-border">
                  <div className="flex items-start gap-6">
                    <span className="text-sm text-muted-foreground font-medium w-6 shrink-0">{item.number}</span>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Final governance framework to be established with legal and regulatory advisors.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Risk Framework</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Governance principles</h2>
            <p className="text-muted-foreground leading-relaxed">
              Built on transparency, clear rules, and institutional-grade risk management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
