import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard, FilePlus, Briefcase, BarChart3, Shield, Activity, Settings,
  Bell, ChevronDown, Menu, X, FlaskConical, TrendingUp, TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "New Guarantee", icon: FilePlus, path: "/product/new-guarantee" },
  { label: "Portfolio", icon: Briefcase, active: true, path: "/product/portfolio" },
  { label: "Risk Analysis", icon: BarChart3, path: "/product/risk-analysis" },
  { label: "Active Guarantees", icon: Shield, path: "/product/active-guarantees" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
  { label: "Simulation Lab", icon: FlaskConical, path: "/product/simulation" },
  { label: "Settings", icon: Settings, path: "/product/settings" },
];

const holdings = [
  { ticker: "SPY", name: "SPDR S&P 500 ETF", units: 450, price: 512.30, value: 230535, change: 1.2, allocation: 28.4, risk: "Low", eligible: true },
  { ticker: "TSLA", name: "Tesla Inc.", units: 320, price: 178.50, value: 57120, change: -2.8, allocation: 7.0, risk: "High", eligible: true },
  { ticker: "VGLT", name: "Vanguard Long-Term Treasury", units: 1200, price: 58.90, value: 70680, change: 0.3, allocation: 8.7, risk: "Low", eligible: true },
  { ticker: "AAPL", name: "Apple Inc.", units: 380, price: 198.20, value: 75316, change: 0.8, allocation: 9.3, risk: "Low", eligible: true },
  { ticker: "BND", name: "Vanguard Total Bond Market", units: 2800, price: 72.10, value: 201880, change: 0.1, allocation: 24.9, risk: "Low", eligible: true },
  { ticker: "NVDA", name: "NVIDIA Corp.", units: 150, price: 485.60, value: 72840, change: 3.4, allocation: 9.0, risk: "Medium", eligible: true },
  { ticker: "CRYPTO", name: "Bitcoin Trust", units: 500, price: 42.80, value: 21400, change: -4.2, allocation: 2.6, risk: "High", eligible: false },
  { ticker: "RE-III", name: "Real Estate Fund III", units: 800, price: 105.30, value: 84240, change: -0.5, allocation: 10.4, risk: "Medium", eligible: true },
];

const totalValue = holdings.reduce((s, h) => s + h.value, 0);
const eligibleValue = holdings.filter(h => h.eligible).reduce((s, h) => s + h.value, 0);

const riskColor = (r: string) => {
  if (r === "Low") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (r === "Medium") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-600 border-red-200";
};

const Portfolio = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] flex">
      <aside className={`${sidebarOpen ? "w-60" : "w-0 overflow-hidden"} shrink-0 border-r border-border bg-white transition-all duration-200 flex flex-col`}>
        <div className="h-14 px-5 flex items-center border-b border-border">
          <span className="text-foreground font-semibold text-sm tracking-tight">Collateral Core</span>
        </div>
        <nav className="flex-1 py-3 px-3 space-y-0.5">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => item.path && navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                item.active ? "bg-secondary text-foreground font-medium" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}>
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white border-b border-border flex items-center justify-between px-5 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-muted-foreground hover:text-foreground transition-colors">
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <div className="h-5 w-px bg-border" />
            <span className="text-sm text-muted-foreground">Total Portfolio Value</span>
            <span className="text-sm font-semibold text-foreground">€{totalValue.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md text-muted-foreground hover:bg-secondary transition-colors">
              <Bell className="h-4 w-4" />
            </button>
            <div className="h-5 w-px bg-border" />
            <button className="flex items-center gap-2 text-sm text-foreground hover:bg-secondary rounded-md px-2 py-1.5 transition-colors">
              <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-xs font-medium">CC</div>
              <span className="font-medium">Admin</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div>
              <h1 className="text-xl font-semibold text-foreground">Portfolio Overview</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Asset holdings, allocation, and collateral eligibility.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Portfolio Value", value: `€${totalValue.toLocaleString()}` },
                { title: "Eligible Collateral", value: `€${eligibleValue.toLocaleString()}` },
                { title: "Total Holdings", value: `${holdings.length} Assets` },
                { title: "Eligibility Rate", value: `${Math.round((eligibleValue / totalValue) * 100)}%` },
              ].map(c => (
                <Card key={c.title} className="border-border shadow-none bg-white">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <span className="text-2xl font-semibold text-foreground">{c.value}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Allocation Breakdown */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Asset Allocation</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-3">
                {holdings.map(h => (
                  <div key={h.ticker} className="flex items-center gap-4">
                    <span className="text-xs font-mono font-medium text-foreground w-16">{h.ticker}</span>
                    <div className="flex-1">
                      <Progress value={h.allocation} className="h-2" />
                    </div>
                    <span className="text-xs text-muted-foreground w-12 text-right">{h.allocation}%</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Holdings Table */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Holdings Detail</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-border">
                      {["Ticker", "Name", "Units", "Price", "Market Value", "Daily Change", "Risk", "Eligible"].map(h => (
                        <TableHead key={h} className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10">{h}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {holdings.map(h => (
                      <TableRow key={h.ticker} className="border-b border-border/50 hover:bg-secondary/30">
                        <TableCell className="text-sm font-mono font-medium text-foreground">{h.ticker}</TableCell>
                        <TableCell className="text-sm text-foreground">{h.name}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{h.units.toLocaleString()}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">€{h.price.toFixed(2)}</TableCell>
                        <TableCell className="text-sm font-medium text-foreground">€{h.value.toLocaleString()}</TableCell>
                        <TableCell>
                          <span className={`flex items-center gap-1 text-xs font-medium ${h.change >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                            {h.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                            {h.change > 0 ? "+" : ""}{h.change}%
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`text-xs font-medium ${riskColor(h.risk)}`}>{h.risk}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className={`text-xs font-medium ${h.eligible ? "text-emerald-600" : "text-red-600"}`}>
                            {h.eligible ? "Yes" : "No"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <p className="text-xs text-muted-foreground">
              Collateral eligibility determined by asset class, liquidity profile, and regulatory classification.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
