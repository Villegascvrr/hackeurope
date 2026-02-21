import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, ArrowRight } from "lucide-react";
import { useWeb3Credit } from "@/contexts/Web3CreditContext";
import ProductLayout from "@/components/ProductLayout";

const ActiveLoan = () => {
  const navigate = useNavigate();
  const { profile } = useWeb3Credit();

  // Mock: loan exists if profile exists and trustScore > 600
  const hasLoan = !!profile && profile.trustScore >= 600;

  const loanData = hasLoan
    ? {
        amount: `$${profile!.maxLoan.toLocaleString()} USDC`,
        interestRate: profile!.interestRate,
        dueDate: "2026-08-15",
        remainingBalance: `$${Math.round(profile!.maxLoan * 0.82).toLocaleString()} USDC`,
        txHash: "5xKj9...m4Rz7pW2qN",
        network: "Solana Devnet",
      }
    : null;

  return (
    <ProductLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Active Loan</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Current loan position and repayment status
          </p>
        </div>

        {loanData ? (
          <Card className="border-border shadow-none bg-white">
            <CardHeader className="px-5 py-4 border-b border-border">
              <CardTitle className="text-sm font-semibold text-foreground">Loan Details</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {[
                { label: "Loan Amount", value: loanData.amount },
                { label: "Interest Rate", value: loanData.interestRate },
                { label: "Due Date", value: loanData.dueDate },
                { label: "Remaining Balance", value: loanData.remainingBalance },
                { label: "Transaction Hash", value: loanData.txHash, mono: true },
                { label: "Network", value: loanData.network },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{row.label}</span>
                  <span className={`text-sm font-medium text-foreground ${row.mono ? "font-mono" : ""}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
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
              <Button
                onClick={() => navigate("/product/credit-engine")}
                className="h-10 px-6"
              >
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
