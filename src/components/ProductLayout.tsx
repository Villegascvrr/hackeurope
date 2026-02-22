import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Activity,
  Settings,
  Bell,
  ChevronDown,
  Menu,
  X,
  Home,
  LogOut,
  Cpu,
  Globe,
  CreditCard,
  Shield,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNav = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "Credit Engine", icon: Cpu, path: "/product/credit-engine" },
  { label: "Active Loan", icon: CreditCard, path: "/product/active-loan" },
  { label: "Risk Signals", icon: Shield, path: "/product/risk-signals" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
];

const bottomNav = [
  { label: "Settings", icon: Settings, path: "/product/settings" },
];

interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout = ({ children }: ProductLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] flex">
      <aside
        className={`fixed left-0 top-0 h-screen z-40 ${sidebarOpen ? "w-60" : "w-0"
          } border-r border-border bg-white transition-all duration-200 flex flex-col overflow-hidden shrink-0`}
      >
        <div className="h-14 px-5 flex items-center border-b border-border shrink-0">
          <span className="text-foreground font-semibold text-sm tracking-tight">
            TrustScore.sol
          </span>
        </div>

        <nav className="flex-1 py-3 px-3 space-y-0.5 overflow-y-auto">
          {mainNav.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive(item.path)
                ? "bg-[hsl(220,20%,95%)] text-foreground font-medium"
                : "text-muted-foreground hover:bg-[hsl(220,20%,96%)] hover:text-foreground"
                }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-3 py-1 space-y-0.5">
          {bottomNav.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive(item.path)
                ? "bg-[hsl(220,20%,95%)] text-foreground font-medium"
                : "text-muted-foreground hover:bg-[hsl(220,20%,96%)] hover:text-foreground"
                }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </div>

        <div className="border-t border-border px-3 py-3 space-y-0.5">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-[hsl(220,20%,96%)] hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Log Out
          </button>
        </div>
      </aside>

      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-200 ${sidebarOpen ? "ml-60" : "ml-0"}`}>
        <header className="h-14 bg-white border-b border-border flex items-center justify-between px-5 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <div className="h-5 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Solana Devnet</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md text-muted-foreground hover:bg-[hsl(220,20%,96%)] transition-colors">
              <Bell className="h-4 w-4" />
            </button>
            <div className="h-5 w-px bg-border" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-sm text-foreground hover:bg-[hsl(220,20%,96%)] rounded-md px-2 py-1.5 transition-colors">
                  <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                    TS
                  </div>
                  <span className="font-medium">Protocol</span>
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate("/")}>
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/")} className="text-red-600 focus:text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 p-6 pt-4 overflow-auto">
          <div className="max-w-[1200px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductLayout;
