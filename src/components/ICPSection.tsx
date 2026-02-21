import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

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

const CriteriaList = ({ items }: { items: string[] }) => (
  <StaggerReveal className="space-y-0" stagger={0.08}>
    {items.map((item, i) => (
      <StaggerItem key={i} index={i}>
        <div className="flex items-start gap-4 py-3 border-b border-border last:border-0">
          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
          <p className="text-sm font-medium text-muted-foreground">{item}</p>
        </div>
      </StaggerItem>
    ))}
  </StaggerReveal>
);

const ICPSection = () => {
  return (
    <section id="icp" className="section-cool py-32 lg:py-44">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">Target Profile</p>
            <h2 className="mb-5 max-w-3xl">Who It's For</h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Collateral Core serves two distinct but converging segments of the credit market.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="card-brutal card-hover rounded-3xl bg-card p-8 lg:p-10 h-full">
              <h3 className="text-2xl font-extrabold mb-3">Institutional Treasury Teams</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Mid-market companies managing active investment portfolios and structured collateral requirements.
              </p>
              <CriteriaList items={institutionalCriteria} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="card-brutal card-hover rounded-3xl bg-card p-8 lg:p-10 h-full">
              <h3 className="text-2xl font-extrabold mb-3">Digital-Native Capital Participants</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Protocols, DAOs, and on-chain capital allocators requiring rigorous credit infrastructure.
              </p>
              <CriteriaList items={digitalCriteria} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ICPSection;
