import { useState, useEffect } from "react";
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
  ArrowLeft,
  Check,
  CheckCircle2,
  FlaskConical,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "New Guarantee", icon: FilePlus, active: true, path: "/product/new-guarantee" },
  { label: "Portfolio", icon: Briefcase, path: "/product/portfolio" },
  { label: "Risk Analysis", icon: BarChart3, path: "/product/risk-analysis" },
  { label: "Active Guarantees", icon: Shield, path: "/product/active-guarantees" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
  { label: "Simulation Lab", icon: FlaskConical, path: "/product/simulation" },
  { label: "Settings", icon: Settings, path: "/product/settings" },
];

const steps = [
  { number: 1, label: "Deposit Details" },
  { number: 2, label: "Select Assets" },
  { number: 3, label: "Risk Assessment" },
  { number: 4, label: "Structured Output" },
];

const RiskAssessment = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [agent3Status, setAgent3Status] = useState<"processing" | "completed">("processing");

  useEffect(() => {
    const timer = setTimeout(() => setAgent3Status("completed"), 3000);
    return () => clearTimeout(timer);
  }, []);

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
                        step.number < 3
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : step.number === 3
                          ? "bg-foreground text-background border-foreground"
                          : "bg-white text-muted-foreground border-border"
                      )}
                    >
                      {step.number < 3 ? <Check className="h-4 w-4" /> : step.number}
                    </div>
                    <span className={cn("text-sm whitespace-nowrap", step.number <= 3 ? "text-foreground font-medium" : "text-muted-foreground")}>
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={cn("w-12 lg:w-20 h-px mx-3", step.number < 3 ? "bg-emerald-400" : "bg-border")} />
                  )}
                </div>
              ))}
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-xl font-semibold text-foreground">Collateral Risk Assessment</h1>
              <p className="text-sm text-muted-foreground mt-1">Automated quantitative underwriting in progress.</p>
            </div>

            {/* Section 1 — Engine Status */}
            <Card className="border-border shadow-none bg-white mb-6">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Underwriting Engine Status</CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
                  {/* Agent 1 */}
                  <div className="bg-white p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Agent 1</span>
                      <Badge variant="outline" className="text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-foreground mb-3">Quantitative Risk Engine</p>
                    <div className="space-y-1.5">
                      {["Historical Volatility", "Maximum Drawdown", "Beta", "Liquidity Score"].map((m) => (
                        <div key={m} className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-emerald-500" />
                          <span className="text-xs text-muted-foreground">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Agent 2 */}
                  <div className="bg-white p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Agent 2</span>
                      <Badge variant="outline" className="text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-foreground mb-3">Qualitative Risk Analyzer</p>
                    <div className="space-y-1.5">
                      {["Sentiment Risk Score (1–10)", "Regulatory / Legal Flags", "Event Risk Indicators"].map((m) => (
                        <div key={m} className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-emerald-500" />
                          <span className="text-xs text-muted-foreground">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Agent 3 */}
                  <div className="bg-white p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Agent 3</span>
                      {agent3Status === "processing" ? (
                        <Badge variant="outline" className="text-xs font-medium bg-amber-50 text-amber-700 border-amber-200">
                          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                          Processing
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm font-medium text-foreground mb-3">Collateral Structuring Engine</p>
                    <div className="space-y-1.5">
                      {["Dynamic LTV Calculation", "Margin Threshold Determination", "Liquidation Trigger Modeling"].map((m) => (
                        <div key={m} className="flex items-center gap-2">
                          <div className={cn("h-1 w-1 rounded-full", agent3Status === "completed" ? "bg-emerald-500" : "bg-amber-400")} />
                          <span className="text-xs text-muted-foreground">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Section 2 — Portfolio Risk Summary */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Portfolio Risk Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Aggregate Volatility</p>
                        <p className="text-2xl font-semibold text-foreground tabular-nums">18.4%</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Highest Drawdown</p>
                        <p className="text-2xl font-semibold text-red-600 tabular-nums">-32%</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Liquidity Score</p>
                        <p className="text-2xl font-semibold text-foreground">High</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Risk Classification</p>
                        <Badge variant="outline" className="text-sm font-medium bg-amber-50 text-amber-700 border-amber-200 mt-1">Medium</Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
                      Risk metrics are derived from historical price data and structured qualitative analysis.
                    </p>
                  </CardContent>
                </Card>

                {/* Section 3 — Collateral Risk Zones */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Collateral Risk Zones</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="space-y-4">
                      {/* Lending Zone */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
                            <span className="text-sm font-medium text-foreground">Lending Zone</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Max LTV: 58%</span>
                        </div>
                        <div className="w-full h-3 bg-[hsl(220,20%,95%)] rounded-sm overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-sm" style={{ width: "58%" }} />
                        </div>
                      </div>

                      {/* Margin Call Zone */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-sm bg-amber-500" />
                            <span className="text-sm font-medium text-foreground">Margin Call Zone</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Triggered at -15% portfolio drop</span>
                        </div>
                        <div className="w-full h-3 bg-[hsl(220,20%,95%)] rounded-sm overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-sm" style={{ width: "73%" }} />
                        </div>
                      </div>

                      {/* Liquidation Zone */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-sm bg-red-500" />
                            <span className="text-sm font-medium text-foreground">Liquidation Zone</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Triggered at -25% portfolio drop</span>
                        </div>
                        <div className="w-full h-3 bg-[hsl(220,20%,95%)] rounded-sm overflow-hidden">
                          <div className="h-full bg-red-500 rounded-sm" style={{ width: "88%" }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bottom Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate("/product/new-guarantee/select-assets")}
                    className="h-10 px-5 text-sm border-border text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Asset Selection
                  </Button>
                  <Button
                    disabled={agent3Status === "processing"}
                    onClick={() => navigate("/product/new-guarantee/structured-output")}
                    className="h-10 px-6 text-sm bg-foreground text-background hover:bg-[hsl(220,20%,20%)] font-medium disabled:opacity-50"
                  >
                    Generate Structured Guarantee
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Right Panel — Structured Terms */}
              <div className="lg:col-span-1">
                <Card className="border-border shadow-none bg-white sticky top-6">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">Preliminary Collateral Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="space-y-4">
                      {[
                        { label: "Eligible Collateral Value", value: "€182,000" },
                        { label: "Approved Guarantee Amount", value: "€105,000" },
                        { label: "Required Overcollateralization", value: "140%" },
                        { label: "Monitoring Frequency", value: "Daily" },
                        { label: "Margin Buffer", value: "12%" },
                      ].map((item, i, arr) => (
                        <div key={item.label}>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</span>
                            <span className="text-sm font-medium text-foreground tabular-nums">{item.value}</span>
                          </div>
                          {i < arr.length - 1 && <div className="h-px bg-border mt-4" />}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
                      Final terms subject to contractual confirmation.
                    </p>
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

export default RiskAssessment;
