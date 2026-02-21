const institutionalCriteria = [
  "Manage €1M+ in invested financial assets",
  "Actively optimize treasury allocation",
  "Regularly post temporary guarantees or security deposits",
  "Require structured, compliant capital deployment",
];

const digitalCriteria = [
  "Manage on-chain treasuries or protocol reserves",
  "Require credit evaluation for wallet-level counterparties",
  "Operate in digital-native lending or capital markets",
  "Seek institutional-grade risk assessment for on-chain activity",
];

const ICPSection = () => {
  return (
    <section id="icp" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Target Profile</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who It's For</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Collateral Core serves two distinct but converging segments of the credit market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Institutional */}
          <div>
            <h3 className="text-xl font-bold mb-2">Institutional Treasury Teams</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Mid-market companies managing active investment portfolios and structured collateral requirements.
            </p>
            <div className="space-y-0">
              {institutionalCriteria.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-border">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Digital-Native */}
          <div>
            <h3 className="text-xl font-bold mb-2">Digital-Native Capital Participants</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Protocols, DAOs, and on-chain capital allocators requiring rigorous credit infrastructure.
            </p>
            <div className="space-y-0">
              {digitalCriteria.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-border">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICPSection;
