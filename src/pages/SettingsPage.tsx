import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard, FilePlus, Briefcase, BarChart3, Shield, Activity, Settings,
  Bell, ChevronDown, Menu, X, FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "New Guarantee", icon: FilePlus, path: "/product/new-guarantee" },
  { label: "Portfolio", icon: Briefcase, path: "/product/portfolio" },
  { label: "Risk Analysis", icon: BarChart3, path: "/product/risk-analysis" },
  { label: "Active Guarantees", icon: Shield, path: "/product/active-guarantees" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
  { label: "Simulation Lab", icon: FlaskConical, path: "/product/simulation" },
  { label: "Settings", icon: Settings, active: true, path: "/product/settings" },
];

const SettingsPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [marginAlerts, setMarginAlerts] = useState(true);
  const [dailyReport, setDailyReport] = useState(true);
  const [autoRebalance, setAutoRebalance] = useState(false);

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
            <span className="text-sm text-muted-foreground">Platform Settings</span>
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
          <div className="max-w-[800px] mx-auto space-y-6">
            <div>
              <h1 className="text-xl font-semibold text-foreground">Settings</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Platform configuration and preferences.</p>
            </div>

            {/* Company Info */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Company Information</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">Organization details used across guarantee documents.</CardDescription>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Company Name</Label>
                    <Input defaultValue="Collateral Core AG" className="h-10" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Jurisdiction</Label>
                    <Input defaultValue="Germany" className="h-10" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Industry</Label>
                    <Input defaultValue="Financial Infrastructure" className="h-10" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Primary Contact</Label>
                    <Input defaultValue="admin@collateralcore.com" className="h-10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Parameters */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Risk Parameters</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">Default thresholds for collateral structuring.</CardDescription>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Default Overcollateralization</Label>
                    <Select defaultValue="140">
                      <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="120">120%</SelectItem>
                        <SelectItem value="130">130%</SelectItem>
                        <SelectItem value="140">140%</SelectItem>
                        <SelectItem value="150">150%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Margin Call Trigger</Label>
                    <Select defaultValue="120">
                      <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="110">110%</SelectItem>
                        <SelectItem value="115">115%</SelectItem>
                        <SelectItem value="120">120%</SelectItem>
                        <SelectItem value="125">125%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Liquidation Trigger</Label>
                    <Select defaultValue="110">
                      <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100">100%</SelectItem>
                        <SelectItem value="105">105%</SelectItem>
                        <SelectItem value="110">110%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Valuation Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="daily">Daily Close</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Notifications & Automation</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-5">
                {[
                  { label: "Margin Call Alerts", desc: "Receive notifications when collateral ratio approaches threshold.", checked: marginAlerts, onChange: setMarginAlerts },
                  { label: "Daily Risk Report", desc: "Automated daily summary of portfolio risk and guarantee status.", checked: dailyReport, onChange: setDailyReport },
                  { label: "Auto-Rebalancing", desc: "Automatically trigger rebalancing proposals when thresholds are breached.", checked: autoRebalance, onChange: setAutoRebalance },
                ].map(n => (
                  <div key={n.label} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{n.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{n.desc}</p>
                    </div>
                    <Switch checked={n.checked} onCheckedChange={n.onChange} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* API & Integrations */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">API & Integrations</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">API Key</Label>
                  <div className="flex gap-2">
                    <Input defaultValue="cc_live_••••••••••••••••" className="h-10 font-mono text-sm" readOnly />
                    <Button variant="outline" className="h-10 px-4 text-sm">Regenerate</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Webhook URL</Label>
                  <Input placeholder="https://your-system.com/webhook" className="h-10" />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-foreground text-background hover:bg-foreground/90 h-10 px-6 text-sm font-medium">
                Save Changes
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
