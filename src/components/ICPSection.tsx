const industries = [
"Construction & engineering",
"Event & production operators",
"Growth-stage companies with active treasury functions"];


const criteria = [
"Manage €1M+ in invested financial assets",
"Actively optimize treasury allocation",
"Regularly post temporary guarantees or security deposits",
"Require structured, compliant capital deployment"];


const ICPSection = () => {
  return (
    <section id="icp" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 tracking-widest uppercase">Target Profile</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for Institutional Treasury Operations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Collateral Core is designed for mid-market companies that manage active investment portfolios and require structured collateral solutions.
            </p>
          </div>

          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold mb-4">Company profile</p>
              <div className="space-y-0">
                {criteria.map((item, i) =>
                <div key={i} className="flex items-start gap-4 py-3 border-b border-border">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-4">Industries</p>
              <div className="space-y-0">
                {industries.map((item, i) =>
                <div key={i} className="flex items-start gap-4 py-3 border-b border-border">
                    <span className="text-xs text-muted-foreground font-medium mt-0.5 w-6 shrink-0">0{i + 1}</span>
                    <p className="text-sm">{item}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8">
          
        </div>
      </div>
    </section>);

};

export default ICPSection;