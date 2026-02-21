import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard, FilePlus, Briefcase, BarChart3, Shield, Activity, Settings,
  Bell, ChevronDown, Menu, X, FlaskConical, AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "New Guarantee", icon: FilePlus, path: "/product/new-guarantee" },
  { label: "Portfolio", icon: Briefcase, path: "/product/portfolio" },
  { label: "Risk Analysis", icon: BarChart3, active: true, path: "/product/risk-analysis" },
  { label: "Active Guarantees", icon: Shield, path: "/product/active-guarantees" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
  { label: "Simulation Lab", icon: FlaskConical, path: "/product/simulation" },
  { label: "Settings", icon: Settings, path: "/product/settings" },
];

const riskMetrics = [
  { title: "Portfolio VaR (95%)", value: "€186,400", sub: "1-day Value at Risk" },
  { title: "Max Drawdown (30d)", value: "-6.2%", sub: "Worst rolling period" },
  { title: "Sharpe Ratio", value: "1.42", sub: "Risk-adjusted return" },
  { title: "Beta to Market", value: "0.87", sub: "Relative to benchmark" },
];

const assetRisk = [
  { ticker: "SPY", volatility: 14.2, var95: 18200, maxDD: -4.1, beta: 1.0, concentration: 28.4, score: "Low" },
  { ticker: "TSLA", volatility: 52.8, var95: 42100, maxDD: -18.7, beta: 1.82, concentration: 7.0, score: "High" },
  { ticker: "VGLT", volatility: 8.6, var95: 4800, maxDD: -2.3, beta: 0.12, concentration: 8.7, score: "Low" },
  { ticker: "AAPL", volatility: 22.1, var95: 12400, maxDD: -7.8, beta: 1.15, concentration: 9.3, score: "Medium" },
  { ticker: "BND", volatility: 5.2, var95: 8200, maxDD: -1.4, beta: 0.05, concentration: 24.9, score: "Low" },
  { ticker: "NVDA", volatility: 48.3, var95: 28600, maxDD: -15.2, beta: 1.68, concentration: 9.0, score: "Medium" },
  { ticker: "RE-III", volatility: 18.4, var95: 11800, maxDD: -8.3, beta: 0.62, concentration: 10.4, score: "Medium" },
];

const concentrationRisks = [
  { label: "Top 3 Holdings", value: 62.0, threshold: 60, status: "Warning" },
  { label: "Single Asset Max", value: 28.4, threshold: 30, status: "Acceptable" },
  { label: "Equity Exposure", value: 53.7, threshold: 65, status: "Acceptable" },
  { label: "High-Risk Assets", value: 16.0, threshold: 20, status: "Acceptable" },
];

const scoreColor = (s: string) => {
  if (s === "Low") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (s === "Medium") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-600 border-red-200";
};

const RiskAnalysis = () => {
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
            <span className="text-sm text-muted-foreground">Risk Engine</span>
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">Operational</Badge>
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
              <h1 className="text-xl font-semibold text-foreground">Risk Analysis</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Quantitative risk metrics and portfolio exposure assessment.</p>
            </div>

            {/* Risk KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {riskMetrics.map(m => (
                <Card key={m.title} className="border-border shadow-none bg-white">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{m.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <span className="text-2xl font-semibold text-foreground">{m.value}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Concentration Risk */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Concentration Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                {concentrationRisks.map(c => (
                  <div key={c.label} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{c.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{c.value}%</span>
                        <span className="text-xs text-muted-foreground">/ {c.threshold}% limit</span>
                        {c.status === "Warning" && <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />}
                      </div>
                    </div>
                    <Progress value={(c.value / c.threshold) * 100} className={`h-2 ${c.status === "Warning" ? "[&>div]:bg-amber-500" : ""}`} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Asset Risk Table */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Per-Asset Risk Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-border">
                      {["Ticker", "Volatility (Ann.)", "VaR 95%", "Max Drawdown", "Beta", "Concentration", "Risk Score"].map(h => (
                        <TableHead key={h} className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10">{h}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assetRisk.map(a => (
                      <TableRow key={a.ticker} className="border-b border-border/50 hover:bg-secondary/30">
                        <TableCell className="text-sm font-mono font-medium text-foreground">{a.ticker}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{a.volatility}%</TableCell>
                        <TableCell className="text-sm text-muted-foreground">€{a.var95.toLocaleString()}</TableCell>
                        <TableCell className={`text-sm font-medium ${a.maxDD < -10 ? "text-red-600" : "text-muted-foreground"}`}>{a.maxDD}%</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{a.beta}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{a.concentration}%</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`text-xs font-medium ${scoreColor(a.score)}`}>{a.score}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <p className="text-xs text-muted-foreground">
              Risk metrics computed using historical return distributions and Monte Carlo simulation. Updated at market close.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RiskAnalysis;
