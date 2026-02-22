import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, ArrowRight } from "lucide-react";
import { useWeb3Credit } from "@/contexts/Web3CreditContext";
import ProductLayout from "@/components/ProductLayout";

const Product = () => {
  const navigate = useNavigate();
  const { profile } = useWeb3Credit();

  const hasProfile = !!profile;

  const riskTier = hasProfile
    ? profile.trustScore >= 700
      ? "Prime"
      : profile.trustScore >= 500
        ? "Medium"
        : "High Risk"
    : "—";

  return (
    <ProductLayout>
      <div className="space-y-6">
        {/* AI Banner */}
        <div className="rounded-lg border border-accent bg-accent p-4">
          <p className="text-sm font-medium text-accent-foreground">AI-Generated Credit Profile</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            This score is generated from on-chain wallet behavior and identity signals.
          </p>
        </div>

        {/* Page Header */}
        <div>
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-0.5 mb-2">
            Solana wallet credit overview and underwriting status
          </p>
          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
            Tax-Efficient Advance (No capital gains triggered)
          </span>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="border-border shadow-none bg-white">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Wallet Status
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
              <span className={`text-2xl font-semibold ${hasProfile ? "text-emerald-600" : "text-muted-foreground"}`}>
                {hasProfile ? "Connected" : "Not Connected"}
              </span>
            </CardContent>
          </Card>

          <Card className="border-border shadow-none bg-white">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Trust Score
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
              <span className={`text-2xl font-semibold ${hasProfile ? "text-primary" : "text-muted-foreground"}`}>
                {hasProfile ? `${profile.trustScore} / 850` : "Not Generated"}
              </span>
            </CardContent>
          </Card>

          <Card className="border-border shadow-none bg-white">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Max Liquidity Advance
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
              <span className="text-2xl font-semibold text-foreground">
                {hasProfile ? `$${profile.maxLoan.toLocaleString()} USDC` : "—"}
              </span>
              {hasProfile && (
                <p className="text-[10px] text-muted-foreground mt-1">Target LTV: 70% | Liquidation at 85%</p>
              )}
            </CardContent>
          </Card>

          <Card className="border-border shadow-none bg-white">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-emerald-600 uppercase tracking-wider">
                Estimated Tax Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
              <span className="text-2xl font-semibold text-emerald-600">
                {hasProfile ? `$${(profile.maxLoan * 0.25).toLocaleString()} USDC` : "—"}
              </span>
              {hasProfile && (
                <p className="text-[10px] text-muted-foreground mt-1">Savings based on unrealized capital gains (MiCA 2026 framework)</p>
              )}
            </CardContent>
          </Card>

          <Card className="border-border shadow-none bg-white">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Risk Tier
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
              <span className={`text-2xl font-semibold ${riskTier === "Prime" ? "text-emerald-600" : riskTier === "Medium" ? "text-amber-600" : riskTier === "High Risk" ? "text-red-600" : "text-muted-foreground"
                }`}>
                {riskTier}
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Credit Summary or Empty State */}
        {hasProfile ? (
          <Card className="border-border shadow-none bg-white">
            <CardHeader className="px-5 py-4 border-b border-border">
              <CardTitle className="text-sm font-semibold text-foreground">Credit Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {[
                { label: "Wallet Address", value: profile.walletAddress },
                { label: "Wallet Age", value: `${profile.walletAge} months` },
                { label: "Total On-Chain Volume", value: `$${profile.transactionVolume.toLocaleString()}` },
                { label: "Liquidation History", value: profile.hasLiquidations ? "Yes" : "No" },
                { label: "Interest Rate", value: profile.interestRate },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{row.label}</span>
                  <span className="text-sm font-medium text-foreground">{row.value}</span>
                </div>
              ))}
              <div className="p-5 flex justify-end">
                <Button>
                  Execute Pignoration Advance <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-border shadow-none bg-white">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                No Credit Profile Found
              </h3>
              <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
                Run the Credit Engine to generate your AI Trust Score and loan eligibility based on on-chain wallet behavior.
              </p>
              <Button
                onClick={() => navigate("/product/credit-engine")}
                className="h-10 px-6"
              >
                <Cpu className="h-4 w-4 mr-2" />
                Launch Credit Engine
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </ProductLayout>
  );
};

export default Product;
