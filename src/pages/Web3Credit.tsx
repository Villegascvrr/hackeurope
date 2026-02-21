import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Check, X as XIcon, ArrowRight } from "lucide-react";
import { useWeb3Credit } from "@/contexts/Web3CreditContext";

const Web3Credit = () => {
  const navigate = useNavigate();
  const { profile } = useWeb3Credit();

  useEffect(() => {
    if (!profile) {
      navigate("/product/credit-engine", { replace: true });
    }
  }, [profile, navigate]);

  if (!profile) return null;

  const volumeTier = profile.transactionVolume >= 100000 ? "High" : profile.transactionVolume >= 25000 ? "Medium" : "Low";
  const ageTier = profile.walletAge >= 12 ? "Mature" : profile.walletAge >= 6 ? "Established" : "New";

  return (
    <div className="space-y-6">
      {/* Status Banner */}
      <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground">Credit Profile Generated</p>
          <p className="text-xs text-muted-foreground">Your on-chain and identity signals have been evaluated.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-border">
          <Globe className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">Solana</span>
        </div>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-foreground">On-Chain Credit Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Wallet-level credit profile and risk assessment
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border shadow-none">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Wallet Status</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 pt-0">
            <span className="text-2xl font-semibold text-emerald-600">Connected</span>
          </CardContent>
        </Card>
        <Card className="border-border shadow-none">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Trust Score</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 pt-0">
            <span className="text-2xl font-semibold text-primary">{profile.trustScore} / 850</span>
          </CardContent>
        </Card>
        <Card className="border-border shadow-none">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Max Eligible Loan</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 pt-0">
            <span className="text-2xl font-semibold text-foreground">${profile.maxLoan.toLocaleString()} USDC</span>
          </CardContent>
        </Card>
        <Card className="border-border shadow-none">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Network</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 pt-0">
            <span className="text-2xl font-semibold text-foreground">Solana</span>
          </CardContent>
        </Card>
      </div>

      {/* Detail Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="border-border shadow-none">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">Wallet Details</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {[
              { label: "Address", value: profile.walletAddress },
              { label: "Wallet Age", value: `${profile.walletAge} months` },
              { label: "Transaction Volume", value: `$${profile.transactionVolume.toLocaleString()}` },
              { label: "Interest Rate", value: profile.interestRate },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{row.label}</span>
                <span className="text-sm font-medium text-foreground">{row.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border shadow-none">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">Risk Flags</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {[
              { label: "Liquidation History", value: profile.hasLiquidations ? "Detected" : "None", ok: !profile.hasLiquidations },
              { label: "Wallet Age Tier", value: ageTier, ok: profile.walletAge >= 6 },
              { label: "Volume Tier", value: volumeTier, ok: profile.transactionVolume >= 25000 },
            ].map((flag) => (
              <div key={flag.label} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{flag.label}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${flag.ok ? "text-emerald-600" : "text-red-600"}`}>{flag.value}</span>
                  {flag.ok ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <XIcon className="h-3.5 w-3.5 text-red-600" />}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border shadow-none">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">Identity Signals</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {[
              { label: "GitHub", value: profile.githubUrl || "Not provided", verified: !!profile.githubUrl },
              { label: "LinkedIn", value: profile.linkedinUrl || "Not provided", verified: !!profile.linkedinUrl },
            ].map((signal) => (
              <div key={signal.label} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{signal.label}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${signal.verified ? "text-foreground" : "text-muted-foreground"}`}>
                    {signal.verified ? "Verified" : "Not provided"}
                  </span>
                  {signal.verified ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <div className="h-3.5 w-3.5" />}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border shadow-none bg-muted/50">
          <CardContent className="p-5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              AI Credit Infrastructure
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              TrustScore.sol evaluates on-chain behavior and identity signals in real time
              to generate dynamic trust scores and credit eligibility for Solana wallets.
            </p>
            <Button
              variant="ghost"
              className="mt-4 text-sm font-medium text-foreground px-0"
              onClick={() => navigate("/product/credit-engine")}
            >
              Run New Assessment <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Web3Credit;
