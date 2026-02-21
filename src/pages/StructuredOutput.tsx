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
  ArrowRight,
  Check,
  Download,
  Pencil,
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
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "New Guarantee", icon: FilePlus, active: true },
  { label: "Portfolio", icon: Briefcase },
  { label: "Risk Analysis", icon: BarChart3 },
  { label: "Active Guarantees", icon: Shield },
  { label: "Monitoring", icon: Activity },
  { label: "Settings", icon: Settings },
];

const steps = [
  { number: 1, label: "Deposit Details" },
  { number: 2, label: "Select Assets" },
  { number: 3, label: "Risk Assessment" },
  { number: 4, label: "Structured Output" },
];

const pledgedAssets = [
  { ticker: "SPY", marketValue: 135000, risk: "Low", haircut: 20, adjusted: 108000 },
  { ticker: "TSLA", marketValue: 42000, risk: "High", haircut: 40, adjusted: 25200 },
];

const riskColor = (risk: string) => {
  if (risk === "Low") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (risk === "High") return "bg-red-50 text-red-600 border-red-200";
  return "bg-amber-50 text-amber-700 border-amber-200";
};

const timeline = [
  { day: "Day 0", label: "Collateral Locked" },
  { day: "Day 30", label: "Monitoring Review" },
  { day: "Day 90", label: "Mid-Term Evaluation" },
  { day: "Day 180", label: "Collateral Released" },
];

const StructuredOutput = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-60" : "w-0 overflow-hidden"
        } shrink-0 border-r border-border bg-white transition-all duration-200 flex flex-col`}
      >
        <div className="h-14 px-5 flex items-center border-b border-border">
          <span className="text-foreground font-semibold text-sm tracking-tight">Collateral Core</span>
        </div>
        <nav className="flex-1 py-3 px-3 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { if (item.label === "Dashboard") navigate("/product"); }}
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

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-border flex items-center justify-between px-5 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-muted-foreground hover:text-foreground transition-colors">
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <div className="h-5 w-px bg-border" />
            <span className="text-sm text-muted-foreground">New Guarantee Request</span>
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

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1100px] mx-auto">
            {/* Progress Indicator */}
            <div className="flex items-center mb-8">
              {steps.map((step, i) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium border transition-colors",
                        step.number < 4
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-foreground text-background border-foreground"
                      )}
                    >
                      {step.number < 4 ? <Check className="h-4 w-4" /> : step.number}
                    </div>
                    <span className={cn("text-sm whitespace-nowrap", "text-foreground font-medium")}>
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={cn("w-12 lg:w-20 h-px mx-3", step.number < 4 ? "bg-emerald-400" : "bg-border")} />
                  )}
                </div>
              ))}
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-xl font-semibold text-foreground">Structured Collateral Guarantee</h1>
              <p className="text-sm text-muted-foreground mt-1">Risk-adjusted asset-backed guarantee terms.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Section 1 — Guarantee Overview */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-foreground">Guarantee Overview</CardTitle>
                      <Badge variant="outline" className="text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
                        Conditionally Approved
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-8">
                      {[
                        { label: "Guarantee Amount", value: "€100,000" },
                        { label: "Collateral Backing", value: "€140,000" },
                        { label: "Overcollateralization", value: "140%" },
                        { label: "Term Duration", value: "6 Months" },
                        { label: "Counterparty", value: "ABC Construction Ltd" },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                          <p className="text-lg font-semibold text-foreground">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Section 2 — Risk Zones */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Collateral Risk Structure</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="space-y-4 mb-6">
                      {/* Lending Zone */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
                            <span className="text-sm font-medium text-foreground">Lending Zone</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Approved LTV: 60%</span>
                        </div>
                        <div className="w-full h-3 bg-[hsl(220,20%,95%)] rounded-sm overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-sm" style={{ width: "60%" }} />
                        </div>
                      </div>
                      {/* Margin Zone */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-sm bg-amber-500" />
                            <span className="text-sm font-medium text-foreground">Margin Call Zone</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Trigger: -15% portfolio decline</span>
                        </div>
                        <div className="w-full h-3 bg-[hsl(220,20%,95%)] rounded-sm overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-sm" style={{ width: "75%" }} />
                        </div>
                      </div>
                      {/* Liquidation Zone */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-sm bg-red-500" />
                            <span className="text-sm font-medium text-foreground">Liquidation Zone</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Trigger: -25% decline · Rule-based asset sale</span>
                        </div>
                        <div className="w-full h-3 bg-[hsl(220,20%,95%)] rounded-sm overflow-hidden">
                          <div className="h-full bg-red-500 rounded-sm" style={{ width: "90%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-border mb-4" />

                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Margin Zone Action", value: "Restore to 140% ratio" },
                        { label: "Monitoring Frequency", value: "Daily" },
                        { label: "Valuation Source", value: "Market Close Data" },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">Rebalancing Logic: Automated</p>
                  </CardContent>
                </Card>

                {/* Section 3 — Asset Allocation */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Pledged Asset Structure</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-b border-border">
                          {["Ticker", "Market Value", "Risk Category", "Applied Haircut", "Adjusted Collateral"].map((h) => (
                            <TableHead key={h} className={cn(
                              "text-xs font-medium text-muted-foreground uppercase tracking-wider h-10",
                              h !== "Ticker" && h !== "Risk Category" && "text-right"
                            )}>
                              {h}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pledgedAssets.map((a) => (
                          <TableRow key={a.ticker} className="border-b border-[hsl(220,13%,93%)] hover:bg-[hsl(220,20%,98%)]">
                            <TableCell className="text-sm font-medium text-foreground">{a.ticker}</TableCell>
                            <TableCell className="text-sm text-foreground text-right tabular-nums">€{a.marketValue.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className={`text-xs font-medium ${riskColor(a.risk)}`}>{a.risk}</Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground text-right tabular-nums">{a.haircut}%</TableCell>
                            <TableCell className="text-sm font-medium text-foreground text-right tabular-nums">€{a.adjusted.toLocaleString()}</TableCell>
                          </TableRow>
                        ))}
                        <TableRow className="hover:bg-transparent">
                          <TableCell colSpan={4} className="text-sm font-semibold text-foreground text-right">Total Adjusted Collateral</TableCell>
                          <TableCell className="text-sm font-semibold text-foreground text-right tabular-nums">€133,200</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="text-xs text-muted-foreground px-5 py-3 border-t border-border">
                      Haircuts determined via volatility-adjusted risk modeling.
                    </p>
                  </CardContent>
                </Card>

                {/* Section 4 — Governance */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Execution Framework</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <ul className="space-y-2.5">
                      {[
                        "Assets remain client-owned under pledged structure",
                        "Daily valuation monitoring",
                        "Automated margin notifications",
                        "Rule-based liquidation triggers",
                        "Transparent collateral ratio computation",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      onClick={() => navigate("/product/new-guarantee/risk-assessment")}
                      className="h-10 px-5 text-sm border-border text-muted-foreground hover:text-foreground"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      Edit Structure
                    </Button>
                    <Button
                      variant="outline"
                      className="h-10 px-5 text-sm border-border text-muted-foreground hover:text-foreground"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Term Sheet
                    </Button>
                  </div>
                  <Button className="h-10 px-6 text-sm bg-foreground text-background hover:bg-[hsl(220,20%,20%)] font-medium">
                    Confirm & Issue Guarantee
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Right Panel — Timeline */}
              <div className="lg:col-span-1">
                <Card className="border-border shadow-none bg-white sticky top-6">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Guarantee Timeline</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="relative">
                      {/* Vertical line */}
                      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                      <div className="space-y-6">
                        {timeline.map((t, i) => (
                          <div key={t.day} className="flex items-start gap-4 relative">
                            <div className={cn(
                              "h-[15px] w-[15px] rounded-full border-2 shrink-0 z-10",
                              i === 0
                                ? "bg-foreground border-foreground"
                                : "bg-white border-border"
                            )} />
                            <div>
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.day}</p>
                              <p className="text-sm font-medium text-foreground mt-0.5">{t.label}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StructuredOutput;
