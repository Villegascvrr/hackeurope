import { Shield, Users, FileText, Ban } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Client-Owned Assets",
    description: "Assets remain in client custody throughout the entire collateral lifecycle. Ownership is never transferred.",
  },
  {
    icon: Users,
    title: "Custodian Integrations",
    description: "Direct integrations with institutional custodians ensure secure, verified asset positions at all times.",
  },
  {
    icon: FileText,
    title: "Transparent Contractual Rules",
    description: "All terms, triggers, and release conditions are defined upfront with full contractual transparency.",
  },
  {
    icon: Ban,
    title: "No Speculative Exposure",
    description: "No balance sheet risk-taking, no speculative positioning. Pure infrastructure-level collateral management.",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 lg:py-32 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Security & Governance</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Institutional-Grade Security by Design
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with the governance, custody, and transparency standards that institutional finance demands.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-6 card-elevated hover:border-primary/20 transition-colors duration-300">
              <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
