const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center">
            <div className="h-3 w-3 rounded-sm bg-primary" />
          </div>
          <span className="text-sm font-semibold">Collateral Core</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Financial infrastructure for structured, asset-backed guarantees.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
