import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <div className="h-1.5 bg-primary w-full fixed top-0 left-0 right-0 z-[60]" />
      <nav className="fixed top-1.5 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <span className="text-lg font-extrabold tracking-tight">Collateral Core</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
            <a href="#solution" className="hover:text-foreground transition-colors">Solution</a>
            <a href="#architecture" className="hover:text-foreground transition-colors">Architecture</a>
            <a href="#governance" className="hover:text-foreground transition-colors">Governance</a>
          </div>
          <Button className="rounded-3xl btn-brutal bg-primary text-primary-foreground" size="sm" asChild>
            <a href="/onboarding">Get Started</a>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
