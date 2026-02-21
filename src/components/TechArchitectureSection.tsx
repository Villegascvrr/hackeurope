import { ArrowDown } from "lucide-react";

const agents = [
  { label: "Portfolio Intake Layer", desc: null },
  { label: "Agent 1 — Asset Risk", desc: "Volatility, beta, max drawdown" },
  { label: "Agent 2 — Market Regime Detection", desc: "Trend & stress signals" },
  { label: "Agent 3 — Liquidity & Compliance", desc: "Constraints enforcement" },
  { label: "Decision Engine", desc: "Dynamic collateral ratio" },
  { label: "Guarantee Output Layer", desc: null },
];

const capabilities = [
  "Real-time asset valuation",
  "Volatility-adjusted haircut modeling",
  "Correlation matrix analysis",
  "Stress scenario simulation",
  "Automated margin trigger logic",
  "Rule-based decision enforcement",
];

const TechArchitectureSection = () => {
  return (
    <section id="architecture" className="section-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Architecture</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Multi-Agent Collateral Risk Engine
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Quantitative risk modeling powering structured guarantees in real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Diagram */}
          <div className="flex flex-col items-center gap-0">
            {agents.map((agent, i) => (
              <div key={agent.label} className="flex flex-col items-center w-full max-w-xs">
                <div className="rounded-lg border border-[hsl(var(--dark-border))] p-4 text-center w-full bg-[hsl(var(--dark-bg))]">
                  <p className="text-sm font-semibold">{agent.label}</p>
                  {agent.desc && <p className="text-xs text-muted-foreground mt-1">{agent.desc}</p>}
                </div>
                {i < agents.length - 1 && (
                  <ArrowDown className="h-4 w-4 text-primary my-2 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="space-y-0">
            {capabilities.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-[hsl(var(--dark-border))]">
                <span className="text-xs text-muted-foreground font-medium mt-0.5 w-6 shrink-0">0{i + 1}</span>
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitectureSection;
