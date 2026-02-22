import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, ArrowRight, ExternalLink } from "lucide-react";
import { useWeb3Credit } from "@/contexts/Web3CreditContext";
import ProductLayout from "@/components/ProductLayout";

const ActiveLoan = () => {
  const navigate = useNavigate();
  const { profile, setProfile } = useWeb3Credit();
  const [repaid, setRepaid] = useState(false);
  const [isRepaying, setIsRepaying] = useState(false);

  const hasLoan = !!profile && profile.trustScore >= 600;

  const loanData = hasLoan
    ? {
      amount: `$${profile!.maxLoan.toLocaleString()} USDC`,
      interestRate: profile!.interestRate,
      dueDate: "2026-08-15",
      remainingBalance: `$${Math.round(profile!.maxLoan * 0.82).toLocaleString()} USDC`,
      txHash: "5xKj9mPqR...m4Rz7pW2qN",
      network: "Solana Devnet",
    }
    : null;

  const healthFactor = profile ? Math.min(Math.round((profile.trustScore / 850) * 100), 100) : 0;

  const handleRepay = () => {
    setIsRepaying(true);
    setTimeout(() => {
      setIsRepaying(false);
      setRepaid(true);
      if (profile) {
        setProfile({ ...profile, trustScore: profile.trustScore + 10 });
      }
    }, 2000);
  };

  return (
    <ProductLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Active Loan</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Current pignoration advance position and repayment status
          </p>
        </div>

        {loanData ? (
          <>
            {/* Health Factor */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">
                  Health Factor Meter
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Distance to Liquidation Threshold (85% LTV)</span>
                  <span className={`text-sm font-semibold ${healthFactor >= 80 ? "text-emerald-600" : healthFactor >= 60 ? "text-amber-600" : "text-red-600"}`}>
                    {healthFactor}%
                  </span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${healthFactor >= 80 ? "bg-emerald-500" : healthFactor >= 60 ? "bg-amber-500" : "bg-red-500"}`}
                    style={{ width: `${healthFactor}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[10px] text-muted-foreground">0% — Liquidation</span>
                  <span className="text-[10px] text-muted-foreground">100% — Safe</span>
                </div>
              </CardContent>
            </Card>

            {/* Loan Details */}
            <Card className="border-border shadow-none bg-white">
              <CardHeader className="px-5 py-4 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">Pignoration Advance Details</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {[
                  { label: "Advance Amount", value: loanData.amount },
                  { label: "Interest Rate", value: loanData.interestRate },
                  { label: "Due Date", value: loanData.dueDate },
                  { label: "Remaining Balance", value: loanData.remainingBalance },
                  { label: "Network", value: loanData.network },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{row.label}</span>
                    <span className="text-sm font-medium text-foreground">{row.value}</span>
                  </div>
                ))}

                {/* TX Hash with Explorer link */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">Transaction Hash</span>
                  <a
                    href={`https://explorer.solana.com/tx/${loanData.txHash}?cluster=devnet`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline font-mono"
                  >
                    {loanData.txHash}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Repay section */}
                <div className="px-5 py-4">
                  {repaid ? (
                    <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3">
                      <p className="text-sm font-medium text-emerald-700">
                        ✓ Repayment successful. Trust Score increased by <strong>+10 points.</strong>
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Button onClick={handleRepay} disabled={isRepaying} className="h-10 px-6">
                        {isRepaying ? "Processing..." : "Repay Advance"}
                      </Button>
                      <span className="text-xs text-muted-foreground">Repaying early boosts your Trust Score.</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="border-border shadow-none bg-white">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                No Active Loan
              </h3>
              <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
                Generate a credit score to become eligible for on-chain lending.
              </p>
              <Button onClick={() => navigate("/product/credit-engine")} className="h-10 px-6">
                Generate Credit Score
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </ProductLayout>
  );
};

export default ActiveLoan;
