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
  ArrowLeft,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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

const custodians = [
  { id: "ib", name: "Interactive Brokers" },
  { id: "degiro", name: "Degiro" },
  { id: "saxo", name: "Saxo Bank" },
  { id: "manual", name: "Manual Portfolio Upload" },
];

interface AssetRow {
  id: string;
  ticker: string;
  type: string;
  quantity: number;
  price: number;
  marketValue: number;
  risk: string;
}

const mockAssets: AssetRow[] = [
  { id: "1", ticker: "TSLA", type: "Equity", quantity: 200, price: 210, marketValue: 42000, risk: "High" },
  { id: "2", ticker: "SPY", type: "ETF", quantity: 300, price: 450, marketValue: 135000, risk: "Low" },
  { id: "3", ticker: "EUNA", type: "Bond ETF", quantity: 500, price: 24, marketValue: 12000, risk: "Low" },
];

const riskColor = (risk: string) => {
  if (risk === "Low") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (risk === "Medium") return "bg-amber-50 text-amber-700 border-amber-200";
  if (risk === "High") return "bg-red-50 text-red-600 border-red-200";
  return "bg-slate-100 text-slate-600 border-slate-200";
};

const SelectAssets = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCustodian, setSelectedCustodian] = useState<string | null>(null);
  const [selectedAssets, setSelectedAssets] = useState<Set<string>>(new Set());

  const toggleAsset = (id: string) => {
    setSelectedAssets((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedTotal = mockAssets
    .filter((a) => selectedAssets.has(a.id))
    .reduce((sum, a) => sum + a.marketValue, 0);

  const selectedRisks = mockAssets
    .filter((a) => selectedAssets.has(a.id))
    .map((a) => a.risk);
  const riskLevel =
    selectedRisks.length === 0
      ? "—"
      : new Set(selectedRisks).size > 1
      ? "Mixed"
      : selectedRisks[0];

  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-60" : "w-0 overflow-hidden"
        } shrink-0 border-r border-border bg-white transition-all duration-200 flex flex-col`}
      >
        <div className="h-14 px-5 flex items-center border-b border-border">
          <span className="text-foreground font-semibold text-sm tracking-tight">
            Collateral Core
          </span>
        </div>
        <nav className="flex-1 py-3 px-3 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.label === "Dashboard") navigate("/product");
              }}
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
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
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
              <div className="h-7 w-7 rounded-full bg-[hsl(220,20%,90%)] flex items-center justify-center text-xs font-medium text-[hsl(220,20%,30%)]">
                CC
              </div>
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
                        step.number < 2
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : step.number === 2
                          ? "bg-foreground text-background border-foreground"
                          : "bg-white text-muted-foreground border-border"
                      )}
                    >
                      {step.number < 2 ? <Check className="h-4 w-4" /> : step.number}
                    </div>
                    <span
                      className={cn(
                        "text-sm whitespace-nowrap",
                        step.number <= 2
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={cn(
                        "w-12 lg:w-20 h-px mx-3",
                        step.number < 2 ? "bg-emerald-400" : "bg-border"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-xl font-semibold text-foreground">
                Select Assets to Pledge as Collateral
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Choose the financial assets that will back this structured guarantee.
              </p>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Custodian Selection */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">
                      Asset Custodian
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {custodians.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedCustodian(c.id)}
                          className={cn(
                            "border rounded-md px-3 py-3 text-left text-sm transition-colors",
                            selectedCustodian === c.id
                              ? "border-foreground bg-[hsl(220,20%,95%)] text-foreground font-medium"
                              : "border-border text-muted-foreground hover:border-[hsl(220,10%,70%)] hover:text-foreground"
                          )}
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>

                    {selectedCustodian && (
                      <div className="mt-4 p-4 border border-border rounded-md bg-[hsl(220,20%,98%)]">
                        <div className="flex items-center gap-6 text-sm">
                          <div>
                            <span className="text-muted-foreground">Connection Status: </span>
                            <span className="text-emerald-600 font-medium">Connected</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Portfolio Value: </span>
                            <span className="text-foreground font-medium">€2,450,000</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-muted-foreground mt-4">
                      Assets remain client-owned and are pledged under structured terms.
                    </p>
                  </CardContent>
                </Card>

                {/* Portfolio Table */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">
                      Available Assets
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-b border-border">
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10 w-10" />
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10">
                            Ticker
                          </TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10">
                            Asset Type
                          </TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10 text-right">
                            Quantity
                          </TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10 text-right">
                            Current Price
                          </TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10 text-right">
                            Market Value
                          </TableHead>
                          <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10">
                            Risk
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockAssets.map((asset) => (
                          <TableRow
                            key={asset.id}
                            className={cn(
                              "border-b border-[hsl(220,13%,93%)] cursor-pointer transition-colors",
                              selectedAssets.has(asset.id)
                                ? "bg-[hsl(220,20%,96%)]"
                                : "hover:bg-[hsl(220,20%,98%)]"
                            )}
                            onClick={() => toggleAsset(asset.id)}
                          >
                            <TableCell className="pl-4">
                              <Checkbox
                                checked={selectedAssets.has(asset.id)}
                                onCheckedChange={() => toggleAsset(asset.id)}
                                className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground"
                              />
                            </TableCell>
                            <TableCell className="text-sm font-medium text-foreground">
                              {asset.ticker}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {asset.type}
                            </TableCell>
                            <TableCell className="text-sm text-foreground text-right tabular-nums">
                              {asset.quantity.toLocaleString()}
                            </TableCell>
                            <TableCell className="text-sm text-foreground text-right tabular-nums">
                              €{asset.price.toLocaleString()}
                            </TableCell>
                            <TableCell className="text-sm font-medium text-foreground text-right tabular-nums">
                              €{asset.marketValue.toLocaleString()}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={`text-xs font-medium ${riskColor(asset.risk)}`}
                              >
                                {asset.risk}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Bottom Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate("/product/new-guarantee")}
                    className="h-10 px-5 text-sm border-border text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Deposit Details
                  </Button>
                  <Button className="h-10 px-6 text-sm bg-foreground text-background hover:bg-[hsl(220,20%,20%)] font-medium">
                    Run Risk Assessment
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Right Panel — Collateral Pool Summary */}
              <div className="lg:col-span-1">
                <Card className="border-border shadow-none bg-white sticky top-6">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">
                      Collateral Pool
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Selected Market Value
                        </span>
                        <span className="text-sm font-medium text-foreground tabular-nums">
                          {selectedTotal > 0
                            ? `€${selectedTotal.toLocaleString()}`
                            : "—"}
                        </span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Est. Eligible Collateral
                        </span>
                        <span className="text-sm text-muted-foreground italic">
                          To be calculated
                        </span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Risk Level
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {riskLevel}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
                      Final collateral ratios will be determined after quantitative and qualitative risk analysis.
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

export default SelectAssets;
