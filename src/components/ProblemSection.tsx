import { TrendingDown, Lock, BarChart3, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Zero Return on Deposits",
    description: "Temporary deposits sit idle, generating no return while consuming working capital.",
  },
  {
    icon: Lock,
    title: "Locked Working Capital",
    description: "Cash tied up in deposits cannot be deployed toward growth or operational needs.",
  },
  {
    icon: BarChart3,
    title: "Inefficient Treasury Decisions",
    description: "Static deposit requirements force suboptimal allocation across the balance sheet.",
  },
  {
    icon: AlertTriangle,
    title: "Distorted Capital Allocation",
    description: "Deposit obligations distort how capital is allocated across the organization.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Temporary Deposits Create Capital Friction
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Traditional deposit requirements lock valuable capital, creating systemic inefficiency across corporate treasury operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-6 card-elevated hover:border-primary/20 transition-colors duration-300"
            >
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

export default ProblemSection;
