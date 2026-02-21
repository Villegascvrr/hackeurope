const criteria = [
  {
    title: "Startup Potential",
    desc: "Financial infrastructure for mid-market treasury operations.",
  },
  {
    title: "Technical Complexity",
    desc: "Quantitative multi-agent risk modeling and automated collateral logic.",
  },
  {
    title: "Execution",
    desc: "Complete architecture, live simulation, and structured decision output.",
  },
];

const JudgingSection = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Alignment</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Designed to Meet HackEurope Judging Criteria
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {criteria.map((item, i) => (
            <div key={i} className="border border-border rounded-lg p-8">
              <span className="text-xs text-muted-foreground font-medium">0{i + 1}</span>
              <h3 className="text-lg font-semibold mt-3 mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgingSection;
