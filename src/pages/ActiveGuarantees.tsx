import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard, FilePlus, Briefcase, BarChart3, Shield, Activity, Settings,
  Bell, ChevronDown, Menu, X, FlaskConical, ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "New Guarantee", icon: FilePlus, path: "/product/new-guarantee" },
  { label: "Portfolio", icon: Briefcase, path: "/product/portfolio" },
  { label: "Risk Analysis", icon: BarChart3, path: "/product/risk-analysis" },
  { label: "Active Guarantees", icon: Shield, active: true, path: "/product/active-guarantees" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
  { label: "Simulation Lab", icon: FlaskConical, path: "/product/simulation" },
  { label: "Settings", icon: Settings, path: "/product/settings" },
];

const guarantees = [
  { id: "GRT-2024-001", counterparty: "ABC Construction Ltd", amount: "€100,000", collateral: "€140,000", ratio: "140%", term: "6 Months", issued: "2024-01-15", expiry: "2024-07-15", status: "Active" },
  { id: "GRT-2024-002", counterparty: "Event Production Ltd", amount: "€75,000", collateral: "€105,000", ratio: "140%", term: "3 Months", issued: "2024-02-01", expiry: "2024-05-01", status: "Active" },
  { id: "GRT-2024-003", counterparty: "Nordic Supply Chain AG", amount: "€250,000", collateral: "€350,000", ratio: "140%", term: "12 Months", issued: "2024-01-20", expiry: "2025-01-20", status: "Active" },
  { id: "GRT-2024-004", counterparty: "Urban Development Corp", amount: "€180,000", collateral: "€252,000", ratio: "140%", term: "6 Months", issued: "2023-12-01", expiry: "2024-06-01", status: "Expiring Soon" },
  { id: "GRT-2023-012", counterparty: "Maritime Logistics SA", amount: "€120,000", collateral: "€168,000", ratio: "140%", term: "6 Months", issued: "2023-09-15", expiry: "2024-03-15", status: "Released" },
];

const statusStyle = (s: string) => {
  if (s === "Active") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (s === "Expiring Soon") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-slate-100 text-slate-600 border-slate-200";
};

const ActiveGuarantees = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeCount = guarantees.filter(g => g.status === "Active").length;
  const totalAmount = guarantees.filter(g => g.status !== "Released").reduce((s, g) => s + parseInt(g.amount.replace(/[€,]/g, "")), 0);
  const totalCollateral = guarantees.filter(g => g.status !== "Released").reduce((s, g) => s + parseInt(g.collateral.replace(/[€,]/g, "")), 0);

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
            <span className="text-sm text-muted-foreground">Active Guarantees</span>
            <span className="text-sm font-semibold text-foreground">{activeCount}</span>
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-foreground">Active Guarantees</h1>
                <p className="text-sm text-muted-foreground mt-0.5">Issued guarantee instruments and collateral status.</p>
              </div>
              <Button onClick={() => navigate("/product/new-guarantee")}
                className="rounded-md bg-foreground text-background hover:bg-foreground/90 text-sm font-medium h-9 px-4">
                <FilePlus className="h-4 w-4 mr-2" />
                New Guarantee
              </Button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Active Guarantees", value: activeCount.toString() },
                { title: "Total Guaranteed Amount", value: `€${totalAmount.toLocaleString()}` },
                { title: "Total Collateral Locked", value: `€${totalCollateral.toLocaleString()}` },
                { title: "Avg Collateral Ratio", value: "140%" },
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

            {/* Guarantees Table */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Guarantee Register</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-border">
                      {["ID", "Counterparty", "Amount", "Collateral", "Ratio", "Term", "Expiry", "Status"].map(h => (
                        <TableHead key={h} className="text-xs font-medium text-muted-foreground uppercase tracking-wider h-10">{h}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {guarantees.map(g => (
                      <TableRow key={g.id} className="border-b border-border/50 hover:bg-secondary/30">
                        <TableCell className="text-sm font-mono text-foreground">{g.id}</TableCell>
                        <TableCell className="text-sm font-medium text-foreground">{g.counterparty}</TableCell>
                        <TableCell className="text-sm text-foreground">{g.amount}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{g.collateral}</TableCell>
                        <TableCell className="text-sm font-medium text-emerald-600">{g.ratio}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{g.term}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{g.expiry}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`text-xs font-medium ${statusStyle(g.status)}`}>{g.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                {[
                  { date: "Mar 15, 2024", event: "GRT-2023-012 — Collateral Release", type: "Release" },
                  { date: "May 01, 2024", event: "GRT-2024-002 — Guarantee Expiry", type: "Expiry" },
                  { date: "Jun 01, 2024", event: "GRT-2024-004 — Guarantee Expiry", type: "Expiry" },
                  { date: "Jul 15, 2024", event: "GRT-2024-001 — Guarantee Expiry", type: "Expiry" },
                ].map((e, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                    <span className="text-xs font-medium text-muted-foreground w-28">{e.date}</span>
                    <span className="text-sm text-foreground">{e.event}</span>
                    <Badge variant="outline" className="text-xs ml-auto">{e.type}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActiveGuarantees;
