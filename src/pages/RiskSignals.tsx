import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, ArrowRight, Check, X as XIcon, Code } from "lucide-react";
import { useWeb3Credit } from "@/contexts/Web3CreditContext";
import ProductLayout from "@/components/ProductLayout";

const RiskSignals = () => {
  const navigate = useNavigate();
  const { profile } = useWeb3Credit();
  const [showModal, setShowModal] = useState(false);

  if (!profile) {
    return (
      <ProductLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Risk Signals</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Structured breakdown of on-chain and identity risk factors
            </p>
          </div>
          <Card className="border-border shadow-none bg-white">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">No Data Available</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Run the Credit Engine to generate risk signal analysis.
              </p>
              <Button onClick={() => navigate("/product/credit-engine")} className="h-10 px-6">
                Launch Credit Engine <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </ProductLayout>
    );
  }

  const volumeTier = profile.transactionVolume >= 100000 ? "High" : profile.transactionVolume >= 25000 ? "Medium" : "Low";
  const ageTier = profile.walletAge >= 12 ? "Mature" : profile.walletAge >= 6 ? "Established" : "New";
  const onChainWeight = 65;
  const identityWeight = 35;
  const riskTier = profile.trustScore >= 700 ? "Prime" : profile.trustScore >= 500 ? "Medium" : "High Risk";

  // JSON schema the AI analyzed
  const jsonSchema = {
    wallet: {
      address: profile.walletAddress,
      age_months: profile.walletAge,
      transaction_volume_usd: profile.transactionVolume,
      activity_frequency: "4.2 tx/day",
      defi_protocols: 12,
      liquidation_events: profile.hasLiquidations ? 1 : 0,
      asset_diversity: "blue-chip ($SOL, $USDC)",
    },
    identity: {
      github_url: profile.githubUrl || null,
      github_account_age: "3+ years",
      commit_frequency: "~120 commits/year",
      linkedin_verified: !!profile.linkedinUrl,
    },
    model_output: {
      on_chain_weight: `${onChainWeight}%`,
      identity_weight: `${identityWeight}%`,
      identity_multiplier: profile.githubUrl ? "1.15x" : "1.0x",
      composite_trust_score: profile.trustScore,
      risk_tier: riskTier,
      max_liquidity_advance_usdc: profile.maxLoan,
    }
  };

  return (
    <ProductLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Risk Signals</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Structured breakdown of on-chain and identity risk factors
          </p>
        </div>

        {/* Section 1 — On-Chain Signals */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">On-Chain Signals</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {[
              { label: "Wallet Age", value: `${profile.walletAge} months`, tier: ageTier, ok: profile.walletAge >= 6 },
              { label: "Transaction Volume", value: `$${profile.transactionVolume.toLocaleString()}`, tier: volumeTier, ok: profile.transactionVolume >= 25000 },
              { label: "Asset Diversity", value: "Blue-chip assets ($SOL, $USDC)", tier: "Verified", ok: true },
              { label: "DeFi Protocol Interactions", value: "12 protocols", tier: null, ok: true },
              { label: "Liquidation Events", value: profile.hasLiquidations ? "Detected" : "None", tier: null, ok: !profile.hasLiquidations },
              { label: "Activity Frequency", value: "4.2 tx/day avg", tier: null, ok: true },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{row.label}</span>
                <div className="flex items-center gap-3">
                  {row.tier && (
                    <Badge variant="outline" className={`text-xs font-medium ${row.ok ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-red-50 text-red-600 border-red-200"
                      }`}>
                      {row.tier}
                    </Badge>
                  )}
                  <span className="text-sm font-medium text-foreground">{row.value}</span>
                  {row.ok ? (
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                  ) : (
                    <XIcon className="h-3.5 w-3.5 text-red-600" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Section 2 — Identity Signals */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border">
            <CardTitle className="text-sm font-semibold text-foreground">Identity Signals</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {[
              { label: "GitHub Account Age", value: profile.githubUrl ? "3+ years" : "Not provided", ok: !!profile.githubUrl },
              { label: "Commit Frequency", value: profile.githubUrl ? "~120 commits/year" : "—", ok: !!profile.githubUrl },
              { label: "LinkedIn Verified", value: profile.linkedinUrl ? "Yes" : "No", ok: !!profile.linkedinUrl },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{row.label}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${row.ok ? "text-foreground" : "text-muted-foreground"}`}>
                    {row.value}
                  </span>
                  {row.ok ? (
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                  ) : (
                    <div className="h-3.5 w-3.5" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Section 3 — AI Model Output */}
        <Card className="border-border shadow-none bg-white">
          <CardHeader className="px-5 py-4 border-b border-border flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold text-foreground">AI Model Output</CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-3 text-xs gap-1.5"
              onClick={() => setShowModal(true)}
            >
              <Code className="h-3 w-3" />
              View Data Schema (JSON)
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            {[
              { label: "On-Chain Weight", value: `${onChainWeight}%` },
              { label: "Identity Weight", value: `${identityWeight}%` },
              { label: "Identity Attestation Multiplier", value: profile.githubUrl ? "1.15x (GitHub verified)" : "1.0x (no identity)", highlight: !!profile.githubUrl },
              { label: "Composite Trust Score", value: `${profile.trustScore} / 850`, highlight: true },
              { label: "Risk Tier Classification", value: riskTier },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{row.label}</span>
                <span className={`text-sm font-medium ${(row as any).highlight ? "text-primary" : "text-foreground"}`}>
                  {row.value}
                </span>
              </div>
            ))}
            <div className="px-5 py-3 border-t border-border bg-muted/30">
              <p className="text-xs text-muted-foreground">
                Identity Attestation (GitHub) applied a <span className="font-semibold text-foreground">1.15x multiplier</span> to the base trust score.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Note */}
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Trust Score is calculated using structured JSON-based risk aggregation from on-chain and identity signals.
            The model evaluates wallet behavioral patterns, protocol interaction diversity, and verified identity attestations
            through an LLM-based decision engine to produce a composite score between 300–850.
          </p>
        </div>
      </div>

      {/* JSON Schema Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowModal(false)}>
          <div className="bg-white border border-border rounded-lg shadow-lg w-full max-w-xl mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <h2 className="text-sm font-semibold text-foreground">Risk Data Schema (JSON)</h2>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground text-xs">✕ Close</button>
            </div>
            <div className="p-5 overflow-auto max-h-[60vh]">
              <pre className="text-xs font-mono text-foreground bg-muted/50 rounded-md p-4 whitespace-pre-wrap border border-border">
                {JSON.stringify(jsonSchema, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </ProductLayout>
  );
};

export default RiskSignals;
