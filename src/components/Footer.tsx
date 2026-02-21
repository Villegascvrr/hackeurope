const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-semibold">Collateral Core</span>
        <p className="text-xs text-muted-foreground">
          Financial infrastructure for structured, asset-backed guarantees.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
