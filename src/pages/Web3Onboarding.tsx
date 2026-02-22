import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Wallet, Globe, RefreshCw } from "lucide-react";
import { useWeb3Credit } from "@/contexts/Web3CreditContext";
import ProductLayout from "@/components/ProductLayout";

const STEPS = [
  "Protocol Intake",
  "Reputation Multipliers",
  "AI Underwriting",
  "Credit Attestation",
] as const;

// ─── Engine Results View (shown when onboarding is already done) ────────────
const EngineResultsView = ({ onReset }: { onReset: () => void }) => {
  const { profile } = useWeb3Credit();

  const trustScore = profile?.trustScore ?? 742;
  const maxLoan = profile?.maxLoan ?? 25000;
  const walletAge = profile?.walletAge ?? 14;
  const volume = profile?.transactionVolume ?? 182400;
  const hasLiquidations = profile?.hasLiquidations ?? false;
  const walletAddress = profile?.walletAddress ?? "7xKXtR4p...9f3Qp";
  const interestRate = profile?.interestRate ?? "4.2% APR";
  const riskTier = trustScore >= 700 ? "Prime" : trustScore >= 500 ? "Medium" : "High Risk";

  return (
    <ProductLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Credit Engine</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            AI-generated risk profile — last computed on-chain
          </p>
        </div>

        {/* Trust Score summary */}
        <div className="rounded-lg border border-accent bg-accent p-4">
          <p className="text-sm font-medium text-accent-foreground">AI Underwriting Complete</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Trust Score <span className="font-semibold text-foreground">{trustScore} / 850</span> · Risk Tier:{" "}
            <span className="font-semibold text-foreground">{riskTier}</span> · Max Liquidity Advance:{" "}
            <span className="font-semibold text-foreground">${maxLoan.toLocaleString()} USDC</span>
          </p>
        </div>

        {/* Helius Data breakdown */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">Helius Data — Wallet Analysis</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {[
              { label: "Wallet Address", value: walletAddress },
              { label: "Wallet Age", value: `${walletAge} months` },
              { label: "Total On-Chain Volume", value: `$${volume.toLocaleString()} USD` },
              { label: "Liquidation Events", value: hasLiquidations ? "Detected" : "None" },
              { label: "DeFi Protocol Interactions", value: "12 protocols" },
              { label: "Asset Diversity", value: "Blue-chip ($SOL, $USDC)" },
              { label: "Activity Frequency", value: "4.2 tx/day avg" },
              { label: "Interest Rate Assigned", value: interestRate },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0"
              >
                <span className="text-sm text-muted-foreground">{row.label}</span>
                <span className="text-sm font-medium text-foreground">{row.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI model output */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">AI Model Output</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {[
              { label: "On-Chain Weight", value: "65%" },
              { label: "Identity Weight", value: "35%" },
              { label: "Identity Attestation Multiplier", value: profile?.githubUrl ? "1.15x (GitHub verified)" : "1.0x (no identity)" },
              { label: "Composite Trust Score", value: `${trustScore} / 850`, highlight: true },
              { label: "Risk Tier", value: riskTier },
              { label: "Max Liquidity Advance", value: `$${maxLoan.toLocaleString()} USDC` },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0"
              >
                <span className="text-sm text-muted-foreground">{row.label}</span>
                <span className={`text-sm font-medium ${(row as any).highlight ? "text-primary" : "text-foreground"}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recalculate */}
        <div className="rounded-lg border border-border bg-muted/50 p-4 flex items-start gap-3">
          <div className="flex-1">
            <p className="text-xs font-medium text-foreground mb-0.5">Recalculate Score</p>
            <p className="text-xs text-muted-foreground">
              Run the full underwriting protocol again to refresh your on-chain data and update your Trust Score.
            </p>
          </div>
          <Button variant="outline" size="sm" className="h-9 px-4 shrink-0 gap-1.5" onClick={onReset}>
            <RefreshCw className="h-3.5 w-3.5" />
            Recalculate & Refresh Score
          </Button>
        </div>
      </div>
    </ProductLayout>
  );
};

// ─── Onboarding Stepper (shown when not yet completed) ─────────────────────
const Web3Onboarding = () => {
  const { setProfile } = useWeb3Credit();
  const [isComplete, setIsComplete] = useState(
    localStorage.getItem("collateral_core_onboarding_complete") === "true"
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
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
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setWalletConnected(true);
    }, 2500);
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

  const handleComplete = () => {
    localStorage.setItem("collateral_core_onboarding_complete", "true");
    setIsComplete(true);
  };

  const handleReset = () => {
    localStorage.removeItem("collateral_core_onboarding_complete");
    setIsComplete(false);
    setCurrentStep(0);
    setWalletConnected(false);
    setUnderwritingComplete(false);
    setGithubUrl("");
    setLinkedinUrl("");
    window.scrollTo(0, 0);
  };

  // ── Conditional render ───────────────────────────────────────────────────
  if (isComplete) {
    return <EngineResultsView onReset={handleReset} />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress Stepper */}
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
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${i < currentStep
                        ? "bg-primary text-primary-foreground"
                        : i === currentStep
                          ? "bg-foreground text-background"
                          : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {i < currentStep ? <Check className="w-3.5 h-3.5" /> : i + 1}
                  </div>
                  <span
                    className={`text-xs font-medium truncate hidden sm:block ${i === currentStep
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
                  <div className={`flex-1 h-px mx-2 ${i < currentStep ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl">

          {/* ── Step 1: Protocol Intake ── */}
          {currentStep === 0 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">Protocol Intake</h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Connect your Solana wallet to initiate the on-chain credit assessment.
                </p>
              </div>

              {!walletConnected && !isConnecting && (
                <div className="flex items-center gap-3 pt-2">
                  <Button onClick={connectWallet} className="h-11 px-8">
                    <Wallet className="h-4 w-4 mr-2" />
                    Connect Solana Wallet
                  </Button>
                </div>
              )}

              {isConnecting && (
                <div className="rounded-lg border border-border bg-card p-5 font-mono text-xs text-foreground shadow-sm">
                  <div className="space-y-2 opacity-90">
                    <p className="animate-pulse">
                      <span className="text-primary font-medium">[FETCH]</span> Indexing Helius RPC signatures...
                    </p>
                    <p className="animate-pulse">
                      <span className="text-primary font-medium">[INFO]</span> Analyzing transaction velocity...
                    </p>
                  </div>
                </div>
              )}

              {walletConnected && (
                <>
                  <div className="rounded-lg border border-border bg-card p-5 font-mono text-xs text-foreground shadow-sm">
                    <div className="space-y-2 opacity-90">
                      <p><span className="text-primary font-medium">[FETCH]</span> Indexing Helius RPC signatures...</p>
                      <p><span className="text-primary font-medium">[INFO]</span> Analyzing transaction velocity...</p>
                      <p className="text-emerald-600 font-semibold">
                        <span className="font-normal text-muted-foreground">[OK]</span> Wallet age and volume verified.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Wallet Address", value: walletAddress },
                      { label: "Wallet Age", value: `${walletAge} months` },
                      { label: "Total Transaction Volume", value: `$${transactionVolume.toLocaleString()}` },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
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

          {/* ── Step 2: Reputation Multipliers ── */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">Reputation Multipliers</h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Apply identity signals to mitigate risk and unlock lower LTV thresholds under MiCA 2026 guidelines.
                </p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">GitHub URL</Label>
                  <Input value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} placeholder="https://github.com/username" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    LinkedIn URL <span className="text-muted-foreground/60 normal-case tracking-normal">(optional)</span>
                  </Label>
                  <Input value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} placeholder="https://linkedin.com/in/username" className="h-11" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Identity signals reduce over-collateralization requirements under the MiCA 2026 framework.
                  Verified developer seniority signals are weighted at 35% of the final risk score.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button onClick={runUnderwriting} className="h-11 px-8">
                  Run AI Underwriting <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="ghost" className="h-11 text-muted-foreground" onClick={prev}>Back</Button>
              </div>
            </div>
          )}

          {/* ── Step 3: AI Underwriting ── */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">AI Underwriting</h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  The AI Engine is aggregating on-chain behavior and identity signals into a structured JSON risk profile.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 font-mono text-xs text-foreground shadow-sm">
                <div className="space-y-3 opacity-90">
                  <p><span className="text-muted-foreground mr-2">00:00:01</span><span className="text-primary font-medium">[INFO]</span> Initiating Programmatic Pignoration Assessment...</p>
                  <p><span className="text-muted-foreground mr-2">00:00:01</span><span className="text-primary font-medium">[API:HELIUS]</span> Fetching DAS API for wallet {walletAddress}</p>
                  <p><span className="text-muted-foreground mr-2">00:00:02</span><span className="text-primary font-medium">[API:GITHUB]</span> Analyzing repositories & commit history...</p>
                  <p><span className="text-muted-foreground mr-2">00:00:02</span><span className="text-primary font-medium">[MODEL]</span> Computing behavioral weightings (On-Chain: 65%, Identity: 35%)</p>
                  <p><span className="text-muted-foreground mr-2">00:00:02</span><span className="text-primary font-medium">[SYSTEM]</span> Processing JSON Risk Aggregation...</p>
                  {!underwritingComplete ? (
                    <p className="animate-pulse"><span className="text-muted-foreground mr-2">00:00:03</span><span className="text-primary font-medium">[LLM]</span> Generating credit attestation score...</p>
                  ) : (
                    <>
                      <p><span className="text-muted-foreground mr-2">00:00:03</span><span className="text-primary font-medium">[LLM]</span> Generating credit attestation score...</p>
                      <p className="text-emerald-600 font-semibold"><span className="text-muted-foreground mr-2 font-normal">00:00:04</span>[SUCCESS] Trust Score {trustScore} synchronized on-chain.</p>
                    </>
                  )}
                </div>
              </div>
              {underwritingComplete && (
                <div className="flex items-center gap-3 pt-2">
                  <Button onClick={next} className="h-11 px-8">
                    View Credit Attestation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* ── Step 4: Credit Attestation ── */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">Credit Attestation</h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Decision justified by capital velocity and verified human identity signals.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Trust Score", value: `${trustScore} / 1000`, highlight: true },
                  { label: "Risk Tier", value: "Prime" },
                  { label: "Max Liquidity Advance", value: `$${maxLoan.toLocaleString()} USDC` },
                  { label: "Interest Rate (APR)", value: interestRate },
                ].map((metric) => (
                  <div key={metric.label} className="p-4 rounded-lg border border-border bg-card">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
                    <p className={`text-xl font-semibold ${metric.highlight ? "text-primary" : "text-foreground"}`}>{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-border bg-muted/50 p-5">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">AI Risk Justification</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  High capital velocity and verified developer seniority confirm Prime-Tier eligibility.
                  This wallet demonstrates consistent transaction history, diversified token holdings, and no high-risk behavioral patterns.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button onClick={handleComplete} className="h-11 px-8">
                  Execute Pignoration Agreement <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="ghost" className="h-11 text-muted-foreground" onClick={() => window.history.back()}>
                  View Risk Signals
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
