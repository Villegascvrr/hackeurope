import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus,
  Briefcase,
  BarChart3,
  Shield,
  Activity,
  Settings,
  Bell,
  ChevronDown,
  Menu,
  X,
  FlaskConical,
  Home,
  LogOut,
  Globe,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Web3Credit from "./Web3Credit";

const institutionalNav = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "New Guarantee", icon: FilePlus, path: "/product/new-guarantee" },
  { label: "Portfolio", icon: Briefcase, path: "/product/portfolio" },
  { label: "Risk Analysis", icon: BarChart3, path: "/product/risk-analysis" },
  { label: "Active Guarantees", icon: Shield, path: "/product/active-guarantees" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
  { label: "Simulation Lab", icon: FlaskConical, path: "/product/simulation" },
];

const digitalCreditNav = [
  { label: "Web3 Credit", icon: Globe, path: "/product/web3-credit" },
];

const bottomNav = [
  { label: "Settings", icon: Settings, path: "/product/settings" },
];

const Web3CreditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;

  const renderNavItem = (item: { label: string; icon: any; path: string }) => (
    <button
      key={item.label}
      onClick={() => navigate(item.path)}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
        isActive(item.path)
          ? "bg-[hsl(220,20%,95%)] text-[hsl(220,20%,10%)] font-medium"
          : "text-[hsl(220,10%,46%)] hover:bg-[hsl(220,20%,96%)] hover:text-[hsl(220,20%,10%)]"
      }`}
    >
      <item.icon className="h-4 w-4" />
      {item.label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-60" : "w-0 overflow-hidden"
        } shrink-0 border-r border-[hsl(220,13%,91%)] bg-white transition-all duration-200 flex flex-col`}
      >
        <div className="h-14 px-5 flex items-center border-b border-[hsl(220,13%,91%)]">
          <span className="text-[hsl(220,20%,10%)] font-semibold text-sm tracking-tight">
            Collateral Core
          </span>
        </div>

        <nav className="flex-1 py-3 px-3 space-y-0.5">
          {institutionalNav.map(renderNavItem)}

          {/* Divider */}
          <div className="pt-4 pb-2 px-3">
            <p className="text-[10px] font-semibold text-[hsl(220,10%,46%)] uppercase tracking-widest">
              Digital Credit Infrastructure
            </p>
          </div>

          {digitalCreditNav.map(renderNavItem)}
        </nav>

        <div className="px-3 py-1 space-y-0.5">
          {bottomNav.map(renderNavItem)}
        </div>

        <div className="border-t border-[hsl(220,13%,91%)] px-3 py-3 space-y-0.5">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(220,10%,46%)] hover:bg-[hsl(220,20%,96%)] hover:text-[hsl(220,20%,10%)] transition-colors"
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

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-[hsl(220,13%,91%)] flex items-center justify-between px-5 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-[hsl(220,10%,46%)] hover:text-[hsl(220,20%,10%)] transition-colors"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <div className="h-5 w-px bg-[hsl(220,13%,91%)]" />
            <span className="text-sm text-[hsl(220,10%,46%)]">
              Web3 Credit Module
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md text-[hsl(220,10%,46%)] hover:bg-[hsl(220,20%,96%)] transition-colors">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>
            <div className="h-5 w-px bg-[hsl(220,13%,91%)]" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-sm text-[hsl(220,20%,10%)] hover:bg-[hsl(220,20%,96%)] rounded-md px-2 py-1.5 transition-colors">
                  <div className="h-7 w-7 rounded-full bg-[hsl(220,20%,90%)] flex items-center justify-center text-xs font-medium text-[hsl(220,20%,30%)]">
                    CC
                  </div>
                  <span className="font-medium">Admin</span>
                  <ChevronDown className="h-3 w-3 text-[hsl(220,10%,46%)]" />
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

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1200px] mx-auto">
            <Web3Credit />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Web3CreditPage;
