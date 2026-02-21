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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNav = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "Credit Engine", icon: Cpu, path: "/product/web3-credit" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
];

const bottomNav = [
  { label: "Settings", icon: Settings, path: "/product/settings" },
];

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;

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
          {mainNav.map((item) => (
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
          ))}
        </nav>

        <div className="px-3 py-1 space-y-0.5">
          {bottomNav.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(220,10%,46%)] hover:bg-[hsl(220,20%,96%)] hover:text-[hsl(220,20%,10%)] transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
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
            <div className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-[hsl(245,72%,57%)]" />
              <span className="text-xs font-medium text-[hsl(245,72%,57%)]">Solana Devnet</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md text-[hsl(220,10%,46%)] hover:bg-[hsl(220,20%,96%)] transition-colors">
              <Bell className="h-4 w-4" />
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
          <div className="max-w-[1200px] mx-auto space-y-6">
            {/* Banner */}
            <div className="rounded-lg border border-[hsl(245,40%,90%)] bg-[hsl(245,40%,97%)] p-4">
              <p className="text-sm font-medium text-[hsl(245,58%,51%)]">AI-Generated Credit Profile</p>
              <p className="text-xs text-[hsl(220,10%,46%)] mt-0.5">
                This score is generated from on-chain wallet behavior and identity signals.
              </p>
            </div>

            {/* Page header */}
            <div>
              <h1 className="text-xl font-semibold text-[hsl(220,20%,10%)]">
                Solana Credit Engine
              </h1>
              <p className="text-sm text-[hsl(220,10%,46%)] mt-0.5">
                On-chain wallet underwriting and trust scoring
              </p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-[hsl(220,13%,91%)] shadow-none bg-white">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider">
                    Wallets Analyzed
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0">
                  <span className="text-2xl font-semibold text-[hsl(220,20%,10%)]">247</span>
                </CardContent>
              </Card>
              <Card className="border-[hsl(220,13%,91%)] shadow-none bg-white">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider">
                    Avg Trust Score
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0">
                  <span className="text-2xl font-semibold text-[hsl(245,58%,51%)]">682</span>
                </CardContent>
              </Card>
              <Card className="border-[hsl(220,13%,91%)] shadow-none bg-white">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider">
                    Credit Decisions
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0">
                  <span className="text-2xl font-semibold text-[hsl(220,20%,10%)]">189</span>
                </CardContent>
              </Card>
              <Card className="border-[hsl(220,13%,91%)] shadow-none bg-white">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider">
                    Risk Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0">
                  <span className="text-2xl font-semibold text-emerald-600">Healthy</span>
                </CardContent>
              </Card>
            </div>

            {/* Quick action */}
            <Card className="border-[hsl(220,13%,91%)] shadow-none bg-white">
              <CardContent className="p-6">
                <h3 className="text-base font-semibold text-[hsl(220,20%,10%)] mb-1">
                  Credit Engine
                </h3>
                <p className="text-sm text-[hsl(220,10%,46%)] leading-relaxed mb-4">
                  Connect a Solana wallet to generate an AI-powered trust score and credit decision.
                </p>
                <Button
                  onClick={() => navigate("/product/web3-credit")}
                  className="rounded-md bg-[hsl(220,20%,10%)] text-white hover:bg-[hsl(220,20%,20%)] text-sm font-medium h-9 px-4"
                >
                  <Cpu className="h-4 w-4 mr-2" />
                  Launch Underwriting
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Product;
