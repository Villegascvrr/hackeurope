import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check, Wallet, Globe } from "lucide-react";
import { useWeb3Credit } from "@/contexts/Web3CreditContext";

const STEPS = [
  "Connect Wallet",
  "Identity Signals",
  "AI Underwriting",
  "Credit Decision",
] as const;

const Web3Onboarding = () => {
  const navigate = useNavigate();
  const { setProfile } = useWeb3Credit();
  const [currentStep, setCurrentStep] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [underwritingComplete, setUnderwritingComplete] = useState(false);

  // Simulated profile data
  const walletAddress = "7xKXtR4p...9f3Qp";
  const walletAge = 14;
  const transactionVolume = 182400;
  const hasLiquidations = false;
  const trustScore = 742;
  const maxLoan = 25000;
  const interestRate = "4.2% APR";

  const next = () => {
    setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo(0, 0);
  };
  const prev = () => {
    setCurrentStep((s) => Math.max(s - 1, 0));
    window.scrollTo(0, 0);
  };

  const connectWallet = () => {
    setWalletConnected(true);
  };

  const runUnderwriting = () => {
    next();
    setTimeout(() => {
      setProfile({
        walletAddress,
        walletAge,
        transactionVolume,
        hasLiquidations,
        githubUrl,
        linkedinUrl,
        trustScore,
        maxLoan,
        interestRate,
      });
      setUnderwritingComplete(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              On-Chain Credit Underwriting
            </span>
            <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-card">
              <Globe className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">Solana</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center gap-1 flex-1">
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                      i < currentStep
                        ? "bg-primary text-primary-foreground"
                        : i === currentStep
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < currentStep ? <Check className="w-3.5 h-3.5" /> : i + 1}
                  </div>
                  <span
                    className={`text-xs font-medium truncate hidden sm:block ${
                      i === currentStep
                        ? "text-foreground"
                        : i < currentStep
                        ? "text-muted-foreground"
                        : "text-muted-foreground/60"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-2 ${
                      i < currentStep ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl">
          {/* Step 1 — Connect Wallet */}
          {currentStep === 0 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  Connect Your Solana Wallet
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Link your on-chain activity for credit evaluation.
                </p>
              </div>

              {!walletConnected ? (
                <div className="flex items-center gap-3 pt-2">
                  <Button onClick={connectWallet} className="h-11 px-8">
                    <Wallet className="h-4 w-4 mr-2" />
                    Connect Phantom Wallet
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-11 text-muted-foreground"
                    onClick={() => navigate("/")}
                  >
                    ← Back to Home
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {[
                      { label: "Wallet Address", value: walletAddress },
                      { label: "Wallet Age", value: `${walletAge} months` },
                      { label: "Total Transaction Volume", value: `$${transactionVolume.toLocaleString()}` },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between p-4 rounded-lg border border-border bg-card"
                      >
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className="text-sm font-medium text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Button onClick={next} className="h-11 px-8">
                      Continue <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 2 — Identity Signals */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  Enhance Your Trust Profile
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Optional identity signals may increase your credit eligibility.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    GitHub URL
                  </Label>
                  <Input
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    LinkedIn URL{" "}
                    <span className="text-muted-foreground/60 normal-case tracking-normal">(optional)</span>
                  </Label>
                  <Input
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Adding identity signals may increase your credit eligibility. These are evaluated alongside on-chain data for a comprehensive credit profile.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Button onClick={runUnderwriting} className="h-11 px-8">
                  Run AI Underwriting <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="ghost" className="h-11 text-muted-foreground" onClick={prev}>
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 3 — AI Underwriting */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  AI Underwriting
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Analyzing on-chain behavioral signals and identity attestations.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Fetching On-Chain History",
                  "Evaluating Transaction Volume",
                  "Checking Liquidation Events",
                  "Analyzing Identity Signals",
                  "Calculating Trust Score",
                ].map((label, i) => {
                  const done = underwritingComplete;
                  return (
                    <div key={label} className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                          done
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {done ? <Check className="w-3.5 h-3.5" /> : i + 1}
                      </div>
                      <span className={`text-sm font-medium ${done ? "text-foreground" : "text-muted-foreground"}`}>
                        {label}
                      </span>
                      <span className={`ml-auto text-xs font-medium ${done ? "text-emerald-600" : "text-muted-foreground"}`}>
                        {done ? "Complete" : "Processing..."}
                      </span>
                    </div>
                  );
                })}
              </div>

              {underwritingComplete && (
                <div className="flex items-center gap-3 pt-2">
                  <Button onClick={next} className="h-11 px-8">
                    View Credit Decision <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Step 4 — Credit Decision */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  Credit Decision
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Based on the AI underwriting analysis, the following credit parameters have been determined.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Trust Score", value: `${trustScore} / 1000`, highlight: true },
                  { label: "Risk Category", value: "Low" },
                  { label: "Max Eligible Loan", value: `$${maxLoan.toLocaleString()} USDC` },
                  { label: "Suggested Interest Rate", value: interestRate },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-lg border border-border bg-card"
                  >
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {metric.label}
                    </p>
                    <p className={`text-xl font-semibold ${metric.highlight ? "text-primary" : "text-foreground"}`}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-border bg-muted/50 p-5">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Underwriting Summary
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This wallet demonstrates consistent transaction history, diversified token holdings,
                  and no high-risk behavioral patterns. The credit model assigns a Trust Score in the
                  upper quartile, qualifying for standard lending terms.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Button
                  onClick={() => navigate("/product/web3-credit/dashboard")}
                  className="h-11 px-8"
                >
                  Go to Credit Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="h-11 text-muted-foreground"
                  onClick={() => navigate("/product")}
                >
                  Return to Dashboard
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Web3Onboarding;
