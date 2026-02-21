import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { useWeb3Credit } from "@/contexts/Web3CreditContext";
import ProductLayout from "@/components/ProductLayout";

const mockHistory = [
  { date: "Feb 21", score: 742 },
  { date: "Feb 14", score: 738 },
  { date: "Feb 07", score: 735 },
  { date: "Jan 31", score: 720 },
  { date: "Jan 24", score: 710 },
  { date: "Jan 17", score: 698 },
];

const riskAlerts = [
  { message: "Wallet inactivity detected — no transactions in 48h", level: "warn" },
  { message: "High volatility transaction pattern identified", level: "warn" },
  { message: "Protocol interaction spike — 3x above baseline", level: "info" },
];

const Monitoring = () => {
  const { profile } = useWeb3Credit();

  return (
    <ProductLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Monitoring</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Trust score tracking, risk alerts, and projected loan risk
          </p>
        </div>

        {/* KPI */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border-border shadow-none bg-white">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Current Trust Score
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
              <span className="text-2xl font-semibold text-primary">
                {profile ? `${profile.trustScore}` : "—"}
              </span>
            </CardContent>
          </Card>
          <Card className="border-border shadow-none bg-white">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Score Trend (30d)
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
              <span className="text-2xl font-semibold text-emerald-600">+44</span>
            </CardContent>
          </Card>
          <Card className="border-border shadow-none bg-white">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Projected Loan Risk
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
              <span className="text-2xl font-semibold text-emerald-600">Low</span>
            </CardContent>
          </Card>
        </div>

        {/* Trust Score History */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">Trust Score History</CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <div className="space-y-0">
              {/* Simple bar chart */}
              <div className="flex items-end gap-3 h-40">
                {mockHistory.map((point) => {
                  const pct = ((point.score - 650) / 200) * 100;
                  return (
                    <div key={point.date} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs font-medium text-foreground tabular-nums">{point.score}</span>
                      <div
                        className="w-full rounded-sm bg-primary/20 relative"
                        style={{ height: `${Math.max(pct, 10)}%` }}
                      >
                        <div
                          className="absolute bottom-0 w-full rounded-sm bg-primary transition-all"
                          style={{ height: "100%" }}
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground">{point.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Alerts */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">Risk Alerts</CardTitle>
          </CardHeader>
          <CardContent className="p-5 space-y-3">
            {riskAlerts.map((alert) => (
              <div
                key={alert.message}
                className={`flex items-start gap-3 p-3 rounded-md border ${
                  alert.level === "warn"
                    ? "border-amber-200 bg-amber-50"
                    : "border-border bg-muted/50"
                }`}
              >
                <AlertTriangle className={`h-4 w-4 shrink-0 mt-0.5 ${
                  alert.level === "warn" ? "text-amber-600" : "text-muted-foreground"
                }`} />
                <span className={`text-sm ${
                  alert.level === "warn" ? "text-amber-800" : "text-muted-foreground"
                }`}>
                  {alert.message}
                </span>
                <Badge variant="outline" className={`ml-auto text-[10px] shrink-0 ${
                  alert.level === "warn"
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {alert.level === "warn" ? "Warning" : "Info"}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Technical note */}
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Monitoring data refreshes based on on-chain activity detection. Risk alerts are generated
            when wallet behavioral patterns deviate from established baselines.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
};

export default Monitoring;
