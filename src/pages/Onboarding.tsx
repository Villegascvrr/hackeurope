import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-xl space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">
            Welcome to Collateral Core
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            AI credit infrastructure for Solana wallets. Connect your wallet to generate a trust score and credit decision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { step: "01", label: "Connect Wallet", desc: "Link your Solana wallet via Helius RPC" },
            { step: "02", label: "Behavioral Analysis", desc: "We analyze on-chain transaction patterns" },
            { step: "03", label: "Identity Signals", desc: "Optional GitHub / LinkedIn verification" },
            { step: "04", label: "Credit Decision", desc: "AI generates Trust Score and loan eligibility" },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card"
            >
              <span className="text-xs font-bold text-primary mt-0.5">{item.step}</span>
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button
            onClick={() => navigate("/product/web3-credit/onboarding")}
            className="h-11 px-8"
          >
            <Cpu className="mr-2 h-4 w-4" />
            Launch Credit Engine
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="ghost" className="h-11 text-muted-foreground" onClick={() => navigate("/")}>
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
