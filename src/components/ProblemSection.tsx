const stats = [
  { value: "€20k–€300k+", label: "Locked per deposit" },
  { value: "3–6 months", label: "Typical lock period" },
  { value: "2–4 weeks", label: "Traditional bank approval" },
  { value: "0%", label: "Return on immobilized capital" },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Temporary Guarantees Create Structural Capital Friction
          </h2>
          <p className="text-muted-foreground">
            Every deposit requirement creates a capital efficiency problem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
          {stats.map((item, i) => (
            <div key={i} className="border-b border-[hsl(var(--dark-border))] pb-8">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{item.value}</p>
              <p className="font-semibold">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[hsl(var(--dark-border))] mt-16 pt-8">
          <p className="text-sm font-medium">Mandatory deposits should not distort capital allocation decisions.</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
