import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  AlertTriangle,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "New Guarantee", icon: FilePlus, path: "/product/new-guarantee" },
  { label: "Portfolio", icon: Briefcase },
  { label: "Risk Analysis", icon: BarChart3 },
  { label: "Active Guarantees", icon: Shield },
  { label: "Monitoring", icon: Activity, active: true, path: "/product/monitoring" },
  { label: "Settings", icon: Settings },
];

const exposureData = [
  { ticker: "SPY", marketValue: 130000, dailyChange: -0.8, risk: "Low", haircut: 20, adjusted: 104000, status: "Stable" },
  { ticker: "TSLA", marketValue: 38000, dailyChange: -3.4, risk: "High", haircut: 40, adjusted: 22800, status: "Elevated" },
];

const riskColor = (r: string) => {
  if (r === "Low") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (r === "High") return "bg-red-50 text-red-600 border-red-200";
  return "bg-amber-50 text-amber-700 border-amber-200";
};

const statusColor = (s: string) => {
  if (s === "Stable") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (s === "Elevated") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-600 border-red-200";
};

const stressResults: Record<string, { ratio: string; marginCall: string; topUp: string }> = {
  "-10": { ratio: "124%", marginCall: "No", topUp: "€0" },
  "-20": { ratio: "110%", marginCall: "Yes", topUp: "€32,000" },
  "volatility": { ratio: "118%", marginCall: "Yes", topUp: "€14,500" },
  "custom": { ratio: "—", marginCall: "—", topUp: "—" },
};

const Monitoring = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [scenario, setScenario] = useState("");

  const stress = scenario ? stressResults[scenario] : null;

  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] flex">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-60" : "w-0 overflow-hidden"} shrink-0 border-r border-border bg-white transition-all duration-200 flex flex-col`}
      >
        <div className="h-14 px-5 flex items-center border-b border-border">
          <span className="text-foreground font-semibold text-sm tracking-tight">Collateral Core</span>
        </div>
        <nav className="flex-1 py-3 px-3 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.path && navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                item.active
                  ? "bg-[hsl(220,20%,95%)] text-foreground font-medium"
                  : "text-muted-foreground hover:bg-[hsl(220,20%,96%)] hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-border flex items-center justify-between px-5 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-muted-foreground hover:text-foreground transition-colors">
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <div className="h-5 w-px bg-border" />
            <span className="text-sm text-muted-foreground">Monitoring</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md text-muted-foreground hover:bg-[hsl(220,20%,96%)] transition-colors">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>
            <div className="h-5 w-px bg-border" />
            <button className="flex items-center gap-2 text-sm text-foreground hover:bg-[hsl(220,20%,96%)] rounded-md px-2 py-1.5 transition-colors">
              <div className="h-7 w-7 rounded-full bg-[hsl(220,20%,90%)] flex items-center justify-center text-xs font-medium text-[hsl(220,20%,30%)]">CC</div>
              <span className="font-medium">Admin</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1200px] mx-auto space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-xl font-semibold text-foreground">Active Guarantee Monitoring</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Real-time collateral tracking and risk supervision.</p>
            </div>

            {/* Section 1 — KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Total Active Guarantees", value: "€450,000" },
                { label: "Aggregate Collateral Value", value: "€620,000" },
                { label: "Current Collateral Ratio", value: "138%" },
                { label: "Risk Status", value: "Stable", isStatus: true },
              ].map((c) => (
                <Card key={c.label} className="border-border shadow-none bg-white">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{c.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <span className={cn("text-2xl font-semibold", c.isStatus ? "text-emerald-600" : "text-foreground")}>{c.value}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Section 2 — Collateral Health Indicator */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Collateral Health Indicator</CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                {/* Gauge */}
                <div className="mb-4">
                  <div className="flex h-5 w-full rounded-sm overflow-hidden">
                    <div className="bg-red-400 flex-[120]" />
                    <div className="bg-amber-400 flex-[20]" />
                    <div className="bg-emerald-500 flex-[60]" />
                  </div>
                  {/* Labels */}
                  <div className="flex text-[10px] font-medium text-muted-foreground mt-1.5">
                    <div className="flex-[120] text-left">{"<120%"}</div>
                    <div className="flex-[20] text-center">120–140%</div>
                    <div className="flex-[60] text-right">140%+</div>
                  </div>
                  {/* Marker at 138% → position within the 120-140 zone */}
                  <div className="relative mt-2">
                    <div className="absolute text-xs font-semibold text-foreground" style={{ left: "calc(60% + 18% * 0.9)" }}>
                      <div className="flex flex-col items-center">
                        <div className="h-3 w-px bg-foreground" />
                        <span className="mt-0.5">138%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border my-5" />

                <div className="grid grid-cols-2 gap-6 mt-2">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Margin Buffer Remaining</p>
                    <p className="text-lg font-semibold text-foreground">8%</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Next Margin Trigger</p>
                    <p className="text-lg font-semibold text-foreground">-6% portfolio movement</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 — Exposure Table */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Underlying Asset Exposure</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-border">
                      {["Ticker", "Market Value", "Daily Change", "Risk Category", "Haircut", "Adjusted Value", "Status"].map((h) => (
                        <TableHead key={h} className={cn(
                          "text-xs font-medium text-muted-foreground uppercase tracking-wider h-10",
                          ["Market Value", "Daily Change", "Haircut", "Adjusted Value"].includes(h) && "text-right"
                        )}>{h}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exposureData.map((a) => (
                      <TableRow key={a.ticker} className="border-b border-[hsl(220,13%,93%)] hover:bg-[hsl(220,20%,98%)]">
                        <TableCell className="text-sm font-medium text-foreground">{a.ticker}</TableCell>
                        <TableCell className="text-sm text-foreground text-right tabular-nums">€{a.marketValue.toLocaleString()}</TableCell>
                        <TableCell className={cn("text-sm text-right tabular-nums font-medium", a.dailyChange < 0 ? "text-red-600" : "text-emerald-600")}>
                          {a.dailyChange > 0 ? "+" : ""}{a.dailyChange}%
                        </TableCell>
                        <TableCell><Badge variant="outline" className={`text-xs font-medium ${riskColor(a.risk)}`}>{a.risk}</Badge></TableCell>
                        <TableCell className="text-sm text-muted-foreground text-right tabular-nums">{a.haircut}%</TableCell>
                        <TableCell className="text-sm font-medium text-foreground text-right tabular-nums">€{a.adjusted.toLocaleString()}</TableCell>
                        <TableCell><Badge variant="outline" className={`text-xs font-medium ${statusColor(a.status)}`}>{a.status}</Badge></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <p className="text-xs text-muted-foreground px-5 py-3 border-t border-border">
                  Haircuts applied dynamically based on volatility-adjusted risk metrics.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Section 4 — Stress Testing */}
              <Card className="border-border shadow-none bg-white">
                <CardHeader className="px-5 py-4 border-b border-border">
                  <CardTitle className="text-sm font-semibold text-foreground">Stress Testing Simulation</CardTitle>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="space-y-1.5 mb-5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Scenario</label>
                    <Select value={scenario} onValueChange={setScenario}>
                      <SelectTrigger className="h-10 border-border bg-white text-sm">
                        <SelectValue placeholder="Select scenario" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-border z-50">
                        <SelectItem value="-10">-10% Market Shock</SelectItem>
                        <SelectItem value="-20">-20% Market Shock</SelectItem>
                        <SelectItem value="volatility">High Volatility Week</SelectItem>
                        <SelectItem value="custom">Custom Scenario</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {stress && (
                    <div className="space-y-4 pt-2">
                      <div className="h-px bg-border" />
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Projected Ratio</p>
                          <p className={cn("text-xl font-semibold tabular-nums", stress.marginCall === "Yes" ? "text-red-600" : "text-foreground")}>{stress.ratio}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Margin Call</p>
                          <p className={cn("text-xl font-semibold", stress.marginCall === "Yes" ? "text-red-600" : "text-emerald-600")}>{stress.marginCall}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Est. Top-Up</p>
                          <p className="text-xl font-semibold text-foreground tabular-nums">{stress.topUp}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Section 5 — Risk Alerts */}
              <Card className="border-border shadow-none bg-white">
                <CardHeader className="px-5 py-4 border-b border-border">
                  <CardTitle className="text-sm font-semibold text-foreground">Risk Alerts</CardTitle>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="space-y-3 mb-5">
                    {[
                      "Asset TSLA approaching margin threshold",
                      "Collateral ratio projected below 130% under -10% scenario",
                    ].map((alert) => (
                      <div key={alert} className="flex items-start gap-3 p-3 border border-amber-200 bg-amber-50 rounded-md">
                        <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-amber-800">{alert}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-border mb-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Auto-Notification</p>
                      <p className="text-sm font-medium text-emerald-600">Enabled</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Margin Monitoring</p>
                      <p className="text-sm font-medium text-foreground">Daily Close</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Buttons */}
            <div className="flex items-center justify-between pt-2">
              <Button variant="outline" className="h-10 px-5 text-sm border-border text-muted-foreground hover:text-foreground">
                <Download className="h-4 w-4 mr-2" />
                Export Risk Report
              </Button>
              <Button className="h-10 px-6 text-sm bg-foreground text-background hover:bg-[hsl(220,20%,20%)] font-medium">
                Adjust Collateral Structure
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Monitoring;
