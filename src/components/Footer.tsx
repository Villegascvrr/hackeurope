import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => {
  return (
    <footer className="border-t-2 border-border py-16">
      <ScrollReveal>
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-extrabold">Collateral Core</span>
          <p className="text-sm text-muted-foreground">
            Financial infrastructure for structured, asset-backed guarantees.
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
