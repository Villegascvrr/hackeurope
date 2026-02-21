import { useState, useMemo } from "react";
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
  FlaskConical,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
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
  { label: "Portfolio", icon: Briefcase, path: "/product/portfolio" },
  { label: "Risk Analysis", icon: BarChart3, path: "/product/risk-analysis" },
  { label: "Active Guarantees", icon: Shield, path: "/product/active-guarantees" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
  { label: "Simulation Lab", icon: FlaskConical, active: true, path: "/product/simulation" },
  { label: "Settings", icon: Settings, path: "/product/settings" },
];

const guarantees = [
  { id: "abc", label: "ABC Construction – €100,000", amount: 100000, collateral: 140000, ratio: 140 },
  { id: "event", label: "Event Production Ltd – €75,000", amount: 75000, collateral: 105000, ratio: 140 },
];

interface Asset {
  ticker: string;
  value: number;
  haircut: number;
  risk: string;
}

const baseAssets: Asset[] = [
  { ticker: "SPY", value: 130000, haircut: 20, risk: "Low" },
  { ticker: "TSLA", value: 38000, haircut: 40, risk: "High" },
];

const riskColor = (r: string) => {
  if (r === "Low") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (r === "High") return "bg-red-50 text-red-600 border-red-200";
  return "bg-amber-50 text-amber-700 border-amber-200";
};

const SimulationLab = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedGuarantee, setSelectedGuarantee] = useState("abc");
  const [marketDrop, setMarketDrop] = useState(0);
  const [volSpike, setVolSpike] = useState(0);
  const [shockAsset, setShockAsset] = useState("TSLA");
  const [assetShock, setAssetShock] = useState(0);

  const guarantee = guarantees.find((g) => g.id === selectedGuarantee) || guarantees[0];

  const simulatedAssets = useMemo(() => {
    return baseAssets.map((a) => {
      let shock = marketDrop / 100;
      // Add vol impact as additional downside pressure
      shock -= (volSpike / 100) * 0.15;
      // Single asset shock
      if (a.ticker === shockAsset) {
        shock += assetShock / 100;
      }
      const simValue = Math.max(0, a.value * (1 + shock));
      const dynamicHaircut = Math.min(80, a.haircut + volSpike * 0.1);
      const adjusted = simValue * (1 - dynamicHaircut / 100);
      return {
        ...a,
        simValue: Math.round(simValue),
        dynamicHaircut: Math.round(dynamicHaircut),
        adjusted: Math.round(adjusted),
      };
    });
  }, [marketDrop, volSpike, shockAsset, assetShock]);

  const projectedPortfolio = simulatedAssets.reduce((s, a) => s + a.simValue, 0);
  const projectedCollateral = simulatedAssets.reduce((s, a) => s + a.adjusted, 0);
  const projectedRatio = guarantee.amount > 0 ? Math.round((projectedCollateral / guarantee.amount) * 100) : 0;
  const marginTriggered = projectedRatio < 120;
  const liquidationTriggered = projectedRatio < 110;
  const additionalCapital = marginTriggered ? Math.max(0, Math.round(guarantee.amount * 1.4 - projectedCollateral)) : 0;

  // Gauge position: map ratio 80-200 to 0-100%
  const gaugePos = Math.max(0, Math.min(100, ((projectedRatio - 80) / 120) * 100));

  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-60" : "w-0 overflow-hidden"} shrink-0 border-r border-border bg-white transition-all duration-200 flex flex-col`}>
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
            <span className="text-sm text-muted-foreground">Simulation Lab</span>
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
            {/* Header */}
            <div>
              <h1 className="text-xl font-semibold text-foreground">Collateral Stress Simulation Engine</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Model portfolio resilience under dynamic market conditions.</p>
            </div>

            {/* Section 1 — Guarantee Selector */}
            <Card className="border-border shadow-none bg-white">
              <CardContent className="p-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Select Guarantee</label>
                    <Select value={selectedGuarantee} onValueChange={setSelectedGuarantee}>
                      <SelectTrigger className="h-10 border-border bg-white text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-border z-50">
                        {guarantees.map((g) => (
                          <SelectItem key={g.id} value={g.id}>{g.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Current Ratio</p>
                      <p className="text-lg font-semibold text-foreground tabular-nums">{guarantee.ratio}%</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Margin Trigger</p>
                      <p className="text-lg font-semibold text-amber-600 tabular-nums">120%</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Liquidation Trigger</p>
                      <p className="text-lg font-semibold text-red-600 tabular-nums">110%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left — Controls */}
              <div className="space-y-6">
                {/* Section 2 — Market Shock Controls */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Simulate Market Scenario</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 space-y-6">
                    {/* Market Drop */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Market Drop</label>
                        <span className="text-sm font-semibold text-foreground tabular-nums">{marketDrop}%</span>
                      </div>
                      <Slider
                        value={[Math.abs(marketDrop)]}
                        onValueChange={([v]) => setMarketDrop(-v)}
                        max={40}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                        <span>0%</span>
                        <span>-40%</span>
                      </div>
                    </div>

                    {/* Volatility Spike */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Volatility Spike</label>
                        <span className="text-sm font-semibold text-foreground tabular-nums">+{volSpike}%</span>
                      </div>
                      <Slider
                        value={[volSpike]}
                        onValueChange={([v]) => setVolSpike(v)}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                        <span>0%</span>
                        <span>+100%</span>
                      </div>
                    </div>

                    <div className="h-px bg-border" />

                    {/* Single Asset Shock */}
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">Single Asset Shock</label>
                      <Select value={shockAsset} onValueChange={setShockAsset}>
                        <SelectTrigger className="h-9 border-border bg-white text-sm mb-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-border z-50">
                          {baseAssets.map((a) => (
                            <SelectItem key={a.ticker} value={a.ticker}>{a.ticker}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-muted-foreground">Asset shock</span>
                        <span className="text-sm font-semibold text-foreground tabular-nums">{assetShock > 0 ? "+" : ""}{assetShock}%</span>
                      </div>
                      <Slider
                        value={[assetShock + 50]}
                        onValueChange={([v]) => setAssetShock(v - 50)}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                        <span>-50%</span>
                        <span>+50%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right — Impact + Gauge */}
              <div className="lg:col-span-2 space-y-6">
                {/* Section 3 — Projected Impact */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Projected Collateral Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Portfolio Value</p>
                        <p className="text-xl font-semibold text-foreground tabular-nums">€{projectedPortfolio.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Collateral Ratio</p>
                        <p className={cn("text-xl font-semibold tabular-nums", liquidationTriggered ? "text-red-600" : marginTriggered ? "text-amber-600" : "text-emerald-600")}>
                          {projectedRatio}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Margin Call</p>
                        <p className={cn("text-xl font-semibold", marginTriggered ? "text-red-600" : "text-emerald-600")}>
                          {marginTriggered ? "Yes" : "No"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Capital Needed</p>
                        <p className="text-xl font-semibold text-foreground tabular-nums">€{additionalCapital.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Liquidation</p>
                        <p className={cn("text-xl font-semibold", liquidationTriggered ? "text-red-600" : "text-emerald-600")}>
                          {liquidationTriggered ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Section 4 — Visual Risk Zone */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Collateral Risk Zone</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="relative">
                      {/* Zone bar */}
                      <div className="flex h-8 w-full rounded-sm overflow-hidden">
                        {/* 80-110 = red (30 of 120 range = 25%) */}
                        <div className="bg-red-400 flex-[25]" />
                        {/* 110-120 = amber (10 of 120 = ~8.3%) */}
                        <div className="bg-amber-400 flex-[8]" />
                        {/* 120-140 = light amber (20 of 120 = ~16.7%) */}
                        <div className="bg-amber-300 flex-[17]" />
                        {/* 140-200 = green (60 of 120 = 50%) */}
                        <div className="bg-emerald-500 flex-[50]" />
                      </div>

                      {/* Labels */}
                      <div className="flex text-[10px] font-medium text-muted-foreground mt-1.5">
                        <div className="flex-[25]">
                          <span>Liquidation</span>
                        </div>
                        <div className="flex-[25] text-center">Margin</div>
                        <div className="flex-[50] text-right">Safe</div>
                      </div>

                      {/* Threshold labels */}
                      <div className="flex text-[10px] text-muted-foreground mt-0.5">
                        <div className="flex-[25] text-right pr-1">110%</div>
                        <div className="flex-[8] text-right pr-1">120%</div>
                        <div className="flex-[17] text-right pr-1">140%</div>
                        <div className="flex-[50] text-right">200%</div>
                      </div>

                      {/* Dynamic marker */}
                      <div
                        className="absolute top-0 transition-all duration-300 ease-out"
                        style={{ left: `${gaugePos}%`, transform: "translateX(-50%)" }}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-8 bg-foreground" />
                          <div className="mt-1 px-2 py-0.5 bg-foreground text-background text-xs font-semibold rounded tabular-nums">
                            {projectedRatio}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Section 5 — Breakdown Table */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Quantitative Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-b border-border">
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10">Asset</TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10 text-right">Current Value</TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10 text-right">Simulated Value</TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10">Risk</TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10 text-right">Haircut</TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10 text-right">Adjusted Collateral</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {simulatedAssets.map((a) => (
                          <TableRow key={a.ticker} className="border-b border-[hsl(220,13%,93%)] hover:bg-[hsl(220,20%,98%)]">
                            <TableCell className="text-sm font-medium text-foreground">{a.ticker}</TableCell>
                            <TableCell className="text-sm text-muted-foreground text-right tabular-nums">€{a.value.toLocaleString()}</TableCell>
                            <TableCell className={cn("text-sm font-medium text-right tabular-nums", a.simValue < a.value ? "text-red-600" : "text-foreground")}>
                              €{a.simValue.toLocaleString()}
                            </TableCell>
                            <TableCell><Badge variant="outline" className={`text-xs font-medium ${riskColor(a.risk)}`}>{a.risk}</Badge></TableCell>
                            <TableCell className="text-sm text-muted-foreground text-right tabular-nums">{a.dynamicHaircut}%</TableCell>
                            <TableCell className="text-sm font-medium text-foreground text-right tabular-nums">€{a.adjusted.toLocaleString()}</TableCell>
                          </TableRow>
                        ))}
                        <TableRow className="hover:bg-transparent">
                          <TableCell colSpan={5} className="text-sm font-semibold text-foreground text-right">Total Adjusted Collateral</TableCell>
                          <TableCell className="text-sm font-semibold text-foreground text-right tabular-nums">€{projectedCollateral.toLocaleString()}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="text-xs text-muted-foreground px-5 py-3 border-t border-border">
                      Risk projections incorporate historical volatility bands and predefined collateral haircut logic.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex items-center justify-between pt-2">
              <Button variant="outline" className="h-10 px-5 text-sm border-border text-muted-foreground hover:text-foreground">
                <Download className="h-4 w-4 mr-2" />
                Export Stress Report
              </Button>
              <Button className="h-10 px-6 text-sm bg-foreground text-background hover:bg-[hsl(220,20%,20%)] font-medium">
                Run Structured Rebalancing Simulation
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SimulationLab;
