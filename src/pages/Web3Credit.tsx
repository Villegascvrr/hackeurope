import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Wallet, Globe, Check } from "lucide-react";

const STEPS = [
  "Connect Wallet",
  "Identity Signals",
  "AI Underwriting",
  "Credit Decision",
] as const;

const Web3Credit = () => {
  const navigate = useNavigate();
  const [walletConnected, setWalletConnected] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1); // -1 = landing

  const next = () => setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => {
    if (currentStep <= 0) {
      setCurrentStep(-1);
      setWalletConnected(false);
    } else {
      setCurrentStep((s) => s - 1);
    }
  };

  const startFlow = () => {
    setWalletConnected(true);
    setCurrentStep(0);
  };

  // Landing screen
  if (currentStep === -1) {
    return (
      <div className="space-y-8">
        {/* Solana network indicator */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[hsl(220,20%,10%)]">
              On-Chain AI Credit Underwriting
            </h1>
            <p className="text-sm text-[hsl(220,10%,46%)] mt-1">
              Evaluate wallet-level creditworthiness using on-chain behavior and identity signals.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[hsl(220,13%,91%)] bg-white">
            <Globe className="h-3.5 w-3.5 text-[hsl(220,10%,46%)]" />
            <span className="text-xs font-medium text-[hsl(220,10%,46%)]">Solana</span>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Wallet Status", value: "Not Connected" },
            { label: "Trust Score", value: "—" },
            { label: "Max Eligible Loan", value: "—" },
            { label: "Network", value: "Solana" },
          ].map((card) => (
            <Card key={card.label} className="border-[hsl(220,13%,91%)] shadow-none bg-white">
              <CardContent className="p-4">
                <p className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider mb-1">
                  {card.label}
                </p>
                <p className="text-lg font-semibold text-[hsl(220,20%,10%)]">
                  {card.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Button
            onClick={startFlow}
            className="h-11 px-8 rounded-md bg-[hsl(220,20%,10%)] text-white hover:bg-[hsl(220,20%,20%)] text-sm font-medium"
          >
            <Wallet className="h-4 w-4 mr-2" />
            Connect Phantom Wallet
          </Button>
          <Button
            variant="ghost"
            className="h-11 text-[hsl(220,10%,46%)]"
            onClick={() => {}}
          >
            Learn How It Works
          </Button>
        </div>

        {/* Info panel */}
        <Card className="border-[hsl(220,13%,91%)] shadow-none bg-[hsl(220,20%,98%)]">
          <CardContent className="p-5">
            <p className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider mb-2">
              Bridging Traditional and Digital Credit Infrastructure
            </p>
            <p className="text-sm text-[hsl(220,10%,46%)] leading-relaxed">
              Collateral Core extends its underwriting framework to digital-native capital markets
              by evaluating on-chain behavior and identity signals in real time.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Stepped onboarding flow
  return (
    <div className="space-y-8">
      {/* Solana indicator */}
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[hsl(220,13%,91%)] bg-white">
          <Globe className="h-3.5 w-3.5 text-[hsl(220,10%,46%)]" />
          <span className="text-xs font-medium text-[hsl(220,10%,46%)]">Solana</span>
        </div>
      </div>

      {/* Progress bar - same style as institutional onboarding */}
      <div className="border border-[hsl(220,13%,91%)] rounded-lg bg-white p-5">
        <div className="flex items-center gap-1">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-1 flex-1">
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                    i < currentStep
                      ? "bg-primary text-primary-foreground"
                      : i === currentStep
                      ? "bg-[hsl(220,20%,10%)] text-white"
                      : "bg-[hsl(220,20%,95%)] text-[hsl(220,10%,46%)]"
                  }`}
                >
                  {i < currentStep ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span
                  className={`text-xs font-medium truncate hidden sm:block ${
                    i === currentStep
                      ? "text-[hsl(220,20%,10%)]"
                      : i < currentStep
                      ? "text-[hsl(220,10%,46%)]"
                      : "text-[hsl(220,10%,46%)]/60"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-px mx-2 ${
                    i < currentStep ? "bg-primary" : "bg-[hsl(220,13%,91%)]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="max-w-xl">
        {currentStep === 0 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[hsl(220,20%,10%)] tracking-tight">
                Connect Wallet
              </h2>
              <p className="text-sm text-[hsl(220,10%,46%)] leading-relaxed">
                Link your Solana wallet to begin on-chain credit evaluation. Your wallet address will
                be used to analyze transaction history and behavioral patterns.
              </p>
            </div>
            <Card className="border-[hsl(220,13%,91%)] shadow-none bg-white">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-[hsl(220,20%,95%)] flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-[hsl(220,10%,46%)]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[hsl(220,20%,10%)]">Phantom Wallet</p>
                    <p className="text-xs text-emerald-600 mt-0.5">Connected</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
              </CardContent>
            </Card>
            <div className="flex items-center gap-3 pt-2">
              <Button onClick={next} className="h-11 px-8 rounded-md bg-[hsl(220,20%,10%)] text-white hover:bg-[hsl(220,20%,20%)]">
                Continue <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="ghost" className="h-11 text-[hsl(220,10%,46%)]" onClick={prev}>Back</Button>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[hsl(220,20%,10%)] tracking-tight">
                Add Identity Signals
              </h2>
              <p className="text-sm text-[hsl(220,10%,46%)] leading-relaxed">
                Optional identity attestations improve your Trust Score. These signals are evaluated
                alongside on-chain data for a comprehensive credit profile.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Civic Identity Verification", status: "Not linked" },
                { label: "SNS Domain (.sol)", status: "Not linked" },
                { label: "On-chain Transaction History", status: "Auto-detected" },
                { label: "Token Holdings Analysis", status: "Auto-detected" },
              ].map((signal) => (
                <Card key={signal.label} className="border-[hsl(220,13%,91%)] shadow-none bg-white">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-[hsl(220,20%,10%)]">{signal.label}</span>
                    <span className={`text-xs font-medium ${
                      signal.status === "Auto-detected" ? "text-emerald-600" : "text-[hsl(220,10%,46%)]"
                    }`}>
                      {signal.status}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Button onClick={next} className="h-11 px-8 rounded-md bg-[hsl(220,20%,10%)] text-white hover:bg-[hsl(220,20%,20%)]">
                Run AI Underwriting <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="ghost" className="h-11 text-[hsl(220,10%,46%)]" onClick={prev}>Back</Button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[hsl(220,20%,10%)] tracking-tight">
                AI Underwriting
              </h2>
              <p className="text-sm text-[hsl(220,10%,46%)] leading-relaxed">
                The AI credit engine is analyzing on-chain behavioral signals, transaction patterns,
                and identity attestations to generate a Trust Score.
              </p>
            </div>
            <Card className="border-[hsl(220,13%,91%)] shadow-none bg-white">
              <CardContent className="p-5 space-y-4">
                {[
                  { label: "Transaction Pattern Analysis", progress: 100 },
                  { label: "Behavioral Risk Scoring", progress: 100 },
                  { label: "Identity Signal Verification", progress: 100 },
                  { label: "Credit Model Computation", progress: 100 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-[hsl(220,20%,10%)]">{item.label}</span>
                      <span className="text-xs text-emerald-600">Complete</span>
                    </div>
                    <div className="h-1.5 w-full bg-[hsl(220,20%,95%)] rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <div className="flex items-center gap-3 pt-2">
              <Button onClick={next} className="h-11 px-8 rounded-md bg-[hsl(220,20%,10%)] text-white hover:bg-[hsl(220,20%,20%)]">
                View Credit Decision <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="ghost" className="h-11 text-[hsl(220,10%,46%)]" onClick={prev}>Back</Button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[hsl(220,20%,10%)] tracking-tight">
                Credit Decision
              </h2>
              <p className="text-sm text-[hsl(220,10%,46%)] leading-relaxed">
                Based on the AI underwriting analysis, the following credit parameters have been determined.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Trust Score", value: "742 / 1000", highlight: true },
                { label: "Risk Category", value: "Low" },
                { label: "Max Eligible Loan", value: "$25,000 USDC" },
                { label: "Suggested Interest Rate", value: "4.2% APR" },
              ].map((metric) => (
                <Card key={metric.label} className="border-[hsl(220,13%,91%)] shadow-none bg-white">
                  <CardContent className="p-4">
                    <p className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider mb-1">
                      {metric.label}
                    </p>
                    <p className={`text-xl font-semibold ${
                      metric.highlight ? "text-primary" : "text-[hsl(220,20%,10%)]"
                    }`}>
                      {metric.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="border-[hsl(220,13%,91%)] shadow-none bg-[hsl(220,20%,98%)]">
              <CardContent className="p-5">
                <p className="text-xs font-medium text-[hsl(220,10%,46%)] uppercase tracking-wider mb-2">
                  Underwriting Summary
                </p>
                <p className="text-sm text-[hsl(220,10%,46%)] leading-relaxed">
                  This wallet demonstrates consistent transaction history, diversified token holdings,
                  and no high-risk behavioral patterns. The credit model assigns a Trust Score in the
                  upper quartile, qualifying for standard lending terms.
                </p>
              </CardContent>
            </Card>
            <div className="flex items-center gap-3 pt-2">
              <Button
                onClick={() => navigate("/product/web3-credit")}
                className="h-11 px-8 rounded-md bg-[hsl(220,20%,10%)] text-white hover:bg-[hsl(220,20%,20%)]"
              >
                Back to Web3 Credit
              </Button>
              <Button
                variant="ghost"
                className="h-11 text-[hsl(220,10%,46%)]"
                onClick={() => navigate("/product")}
              >
                Return to Dashboard
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Web3Credit;
