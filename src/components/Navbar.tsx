import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center">
            <div className="h-4 w-4 rounded-sm bg-primary" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Collateral Core</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" className="hover:text-foreground transition-colors">Solution</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#security" className="hover:text-foreground transition-colors">Security</a>
        </div>
        <Button variant="hero" size="sm">Request Access</Button>
      </div>
    </nav>
  );
};

export default Navbar;
