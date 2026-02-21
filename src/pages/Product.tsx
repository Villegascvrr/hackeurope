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
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true, path: "/product" },
  { label: "New Guarantee", icon: FilePlus, path: "/product/new-guarantee" },
  { label: "Portfolio", icon: Briefcase },
  { label: "Risk Analysis", icon: BarChart3 },
  { label: "Active Guarantees", icon: Shield },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
  { label: "Settings", icon: Settings },
];

const overviewCards = [
  {
    title: "Total Portfolio Value",
    value: "€124,850,000",
    change: "+2.4%",
    positive: true,
  },
  {
    title: "Eligible Collateral Value",
    value: "€98,320,000",
    change: "+1.1%",
    positive: true,
  },
  {
    title: "Active Guarantees",
    value: "17",
    change: "+3",
    positive: true,
  },
  {
    title: "Risk Status",
    value: "Low",
    change: "Stable",
    positive: true,
    isStatus: true,
  },
];

const recentActivity = [
  {
    asset: "EU Gov Bond 2028",
    riskCategory: "Low",
    ltv: "62%",
    guaranteeAmount: "€4,200,000",
    status: "Active",
  },
  {
    asset: "Corp Bond A-Rated",
    riskCategory: "Medium",
    ltv: "71%",
    guaranteeAmount: "€2,800,000",
    status: "Pending",
  },
  {
    asset: "Structured Note Q2",
    riskCategory: "Low",
    ltv: "55%",
    guaranteeAmount: "€6,100,000",
    status: "Active",
  },
  {
    asset: "Real Estate Fund III",
    riskCategory: "Elevated",
    ltv: "78%",
    guaranteeAmount: "€3,500,000",
    status: "Under Review",
  },
  {
    asset: "Green Bond 2030",
    riskCategory: "Low",
    ltv: "58%",
    guaranteeAmount: "€5,000,000",
    status: "Active",
  },
];

const riskCategoryColor = (cat: string) => {
  if (cat === "Low") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (cat === "Medium") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-700 border-red-200";
};

const statusColor = (status: string) => {
  if (status === "Active") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (status === "Pending") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-slate-100 text-slate-600 border-slate-200";
};

const Product = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.path && navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                item.active
                  ? "bg-[hsl(220,20%,95%)] text-[hsl(220,20%,10%)] font-medium"
                  : "text-[hsl(220,10%,46%)] hover:bg-[hsl(220,20%,96%)] hover:text-[hsl(220,20%,10%)]"
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
              Current Portfolio Value
            </span>
            <span className="text-sm font-semibold text-[hsl(220,20%,10%)]">
              €124,850,000
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md text-[hsl(220,10%,46%)] hover:bg-[hsl(220,20%,96%)] transition-colors">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>
            <div className="h-5 w-px bg-[hsl(220,13%,91%)]" />
            <button className="flex items-center gap-2 text-sm text-[hsl(220,20%,10%)] hover:bg-[hsl(220,20%,96%)] rounded-md px-2 py-1.5 transition-colors">
              <div className="h-7 w-7 rounded-full bg-[hsl(220,20%,90%)] flex items-center justify-center text-xs font-medium text-[hsl(220,20%,30%)]">
                CC
              </div>
              <span className="font-medium">Admin</span>
              <ChevronDown className="h-3 w-3 text-[hsl(220,10%,46%)]" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1200px] mx-auto space-y-6">
            {/* Page header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-[hsl(220,20%,10%)]">
                  Dashboard
                </h1>
                <p className="text-sm text-[hsl(220,10%,46%)] mt-0.5">
                  Portfolio overview and risk monitoring
                </p>
              </div>
              <Button
                onClick={() => navigate("/product/new-guarantee")}
                className="rounded-md bg-[hsl(220,20%,10%)] text-white hover:bg-[hsl(220,20%,20%)] text-sm font-medium h-9 px-4"
              >
                <FilePlus className="h-4 w-4 mr-2" />
                Create New Guarantee Request
              </Button>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {overviewCards.map((card) => (
                <Card
                  key={card.title}
                  className="border-[hsl(220,13%,91%)] shadow-none bg-white"
                >
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardTitle className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <div className="flex items-end justify-between">
                      <span
                        className={`text-2xl font-semibold ${
                          card.isStatus
                            ? "text-emerald-600"
                            : "text-[hsl(220,20%,10%)]"
                        }`}
                      >
                        {card.value}
                      </span>
                      <span
                        className={`flex items-center gap-0.5 text-xs font-medium ${
                          card.positive
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      >
                        {card.positive ? (
                          <ArrowUpRight className="h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        {card.change}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity Table */}
            <Card className="border-[hsl(220,13%,91%)] shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-[hsl(220,13%,91%)]">
                <CardTitle className="text-sm font-semibold text-[hsl(220,20%,10%)]">
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-[hsl(220,13%,91%)]">
                      <TableHead className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider h-10">
                        Asset
                      </TableHead>
                      <TableHead className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider h-10">
                        Risk Category
                      </TableHead>
                      <TableHead className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider h-10">
                        Current LTV
                      </TableHead>
                      <TableHead className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider h-10">
                        Guarantee Amount
                      </TableHead>
                      <TableHead className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider h-10">
                        Status
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentActivity.map((row) => (
                      <TableRow
                        key={row.asset}
                        className="border-b border-[hsl(220,13%,93%)] hover:bg-[hsl(220,20%,98%)]"
                      >
                        <TableCell className="text-sm font-medium text-[hsl(220,20%,10%)]">
                          {row.asset}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`text-xs font-medium ${riskCategoryColor(row.riskCategory)}`}
                          >
                            {row.riskCategory}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-[hsl(220,10%,46%)]">
                          {row.ltv}
                        </TableCell>
                        <TableCell className="text-sm text-[hsl(220,20%,10%)]">
                          {row.guaranteeAmount}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`text-xs font-medium ${statusColor(row.status)}`}
                          >
                            {row.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Risk Engine Summary */}
            <Card className="border-[hsl(220,13%,91%)] shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-[hsl(220,13%,91%)]">
                <CardTitle className="text-sm font-semibold text-[hsl(220,20%,10%)]">
                  Quantitative Risk Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider mb-1">
                      Avg Portfolio Volatility
                    </p>
                    <p className="text-2xl font-semibold text-[hsl(220,20%,10%)]">
                      4.2%
                    </p>
                    <p className="text-xs text-[hsl(220,10%,46%)] mt-0.5">
                      30-day rolling
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider mb-1">
                      Highest Drawdown Asset
                    </p>
                    <p className="text-2xl font-semibold text-[hsl(220,20%,10%)]">
                      Real Estate Fund III
                    </p>
                    <p className="text-xs text-red-600 mt-0.5">
                      -8.3% max drawdown
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider mb-1">
                      Aggregate Collateral Ratio
                    </p>
                    <p className="text-2xl font-semibold text-emerald-600">
                      142%
                    </p>
                    <p className="text-xs text-[hsl(220,10%,46%)] mt-0.5">
                      Above 130% threshold
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Product;
