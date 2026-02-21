import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import ProductLayout from "@/components/ProductLayout";

const SettingsPage = () => {
  const [scoreAlerts, setScoreAlerts] = useState(true);
  const [dailyReport, setDailyReport] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  return (
    <ProductLayout>
      <div className="max-w-[800px] mx-auto space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Protocol configuration and preferences.</p>
        </div>

        {/* Protocol Info */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">Protocol Configuration</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">Network and underwriting parameters.</CardDescription>
          </CardHeader>
          <CardContent className="p-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Network</Label>
                <Select defaultValue="devnet">
                  <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="devnet">Solana Devnet</SelectItem>
                    <SelectItem value="mainnet" disabled>Solana Mainnet (Coming Soon)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">RPC Provider</Label>
                <Input defaultValue="Helius" className="h-10" readOnly />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Trust Score Range</Label>
                <Input defaultValue="300 – 850" className="h-10" readOnly />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Loan Currency</Label>
                <Input defaultValue="USDC (Devnet)" className="h-10" readOnly />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Parameters */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">Risk Parameters</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">Default thresholds for underwriting decisions.</CardDescription>
          </CardHeader>
          <CardContent className="p-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Min Trust Score for Loan</Label>
                <Select defaultValue="500">
                  <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="400">400</SelectItem>
                    <SelectItem value="500">500</SelectItem>
                    <SelectItem value="600">600</SelectItem>
                    <SelectItem value="700">700</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">On-Chain Weight</Label>
                <Select defaultValue="65">
                  <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="65">65%</SelectItem>
                    <SelectItem value="80">80%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Identity Weight</Label>
                <Select defaultValue="35">
                  <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20%</SelectItem>
                    <SelectItem value="35">35%</SelectItem>
                    <SelectItem value="50">50%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Max Loan Cap</Label>
                <Select defaultValue="50000">
                  <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25000">$25,000 USDC</SelectItem>
                    <SelectItem value="50000">$50,000 USDC</SelectItem>
                    <SelectItem value="100000">$100,000 USDC</SelectItem>
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
              { label: "Trust Score Alerts", desc: "Notify when a wallet's score changes significantly.", checked: scoreAlerts, onChange: setScoreAlerts },
              { label: "Daily Risk Report", desc: "Automated daily summary of monitored wallet risk signals.", checked: dailyReport, onChange: setDailyReport },
              { label: "Auto-Refresh Scores", desc: "Automatically re-evaluate scores when new on-chain activity is detected.", checked: autoRefresh, onChange: setAutoRefresh },
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

        {/* API */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">API & Integrations</CardTitle>
          </CardHeader>
          <CardContent className="p-5 space-y-4">
            <div className="space-y-2">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">API Key</Label>
              <div className="flex gap-2">
                <Input defaultValue="ts_dev_••••••••••••••••" className="h-10 font-mono text-sm" readOnly />
                <Button variant="outline" className="h-10 px-4 text-sm">Regenerate</Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Webhook URL</Label>
              <Input placeholder="https://your-protocol.com/webhook" className="h-10" />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button className="bg-foreground text-background hover:bg-foreground/90 h-10 px-6 text-sm font-medium">
            Save Changes
          </Button>
        </div>
      </div>
    </ProductLayout>
  );
};

export default SettingsPage;
