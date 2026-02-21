import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Layers,
  BarChart3,
  Eye,
  ArrowRight,
  Check,
  Building2,
  Link2,
  PenLine,
  Landmark,
  Cpu,
} from "lucide-react";

const STEPS = [
  "Credit Framework",
  "Welcome",
  "How It Works",
  "What You'll Need",
  "Company Setup",
  "Portfolio Setup",
  "First Guarantee",
] as const;

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [treasurySize, setTreasurySize] = useState("");
  const [financeContact, setFinanceContact] = useState("");
  const navigate = useNavigate();

  const next = () => {
    setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo(0, 0);
  };
  const prev = () => {
    setCurrentStep((s) => Math.max(s - 1, 0));
    window.scrollTo(0, 0);
  };

  const handleFrameworkSelect = (framework: string) => {
    setSelectedFramework(framework);
    if (framework === "onchain") {
      navigate("/product/web3-credit");
    } else {
      next();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-5">
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
          {/* Step 0 — Select Credit Framework */}
          {currentStep === 0 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  Select Credit Framework
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Choose the capital environment you want to evaluate.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleFrameworkSelect("institutional")}
                  className="flex flex-col items-start gap-4 p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-sm font-medium text-foreground">
                      Institutional Asset-Backed Credit
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Structured collateral underwriting for treasury-managed portfolios.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => handleFrameworkSelect("onchain")}
                  className="flex flex-col items-start gap-4 p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-sm font-medium text-foreground">
                      On-Chain AI Credit
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Wallet-level credit scoring powered by behavioral and identity analysis.
                    </p>
                  </div>
                </button>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Both frameworks operate under the same risk architecture and monitoring principles.
              </p>
            </div>
          )}

          {/* Step 1 — Welcome */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  Welcome to Collateral Core
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Structured collateral infrastructure for capital-efficient guarantees.
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                Collateral Core enables companies to use invested financial assets as
                structured collateral for temporary guarantees, without liquidating
                capital.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Button onClick={next} className="h-11 px-8">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="ghost" className="h-11 text-muted-foreground" onClick={prev}>
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 2 — How It Works */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  How Collateral Core Works
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FileText, label: "Define Guarantee Requirement" },
                  { icon: Layers, label: "Select Assets to Pledge" },
                  { icon: BarChart3, label: "Automated Risk Structuring" },
                  { icon: Eye, label: "Ongoing Monitoring & Enforcement" },
                ].map(({ icon: Icon, label }, i) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-md bg-muted flex items-center justify-center">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-medium">
                        Step {i + 1}
                      </span>
                      <p className="text-sm font-medium text-foreground mt-0.5">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Quantitative underwriting determines dynamic collateral ratios and
                margin thresholds.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Button onClick={next} className="h-11 px-8">
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="ghost" className="h-11 text-muted-foreground" onClick={prev}>
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 3 — What You'll Need */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  Before You Begin
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To structure a guarantee, you will need:
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Deposit amount and duration",
                  "Counterparty information",
                  "Access to invested financial assets",
                  "Broker or custodian information",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Assets remain client-owned and pledged under structured terms.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button onClick={next} className="h-11 px-8">
                  Set Up Company
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="ghost" className="h-11 text-muted-foreground" onClick={prev}>
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 4 — Company Setup */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  Company Profile
                </h1>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Company Name
                  </Label>
                  <Input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter company name"
                    className="h-11"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Industry
                    </Label>
                    <Input
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g. Construction"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Jurisdiction
                    </Label>
                    <Input
                      value={jurisdiction}
                      onChange={(e) => setJurisdiction(e.target.value)}
                      placeholder="e.g. Germany"
                      className="h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Estimated Treasury Size
                  </Label>
                  <Select value={treasurySize} onValueChange={setTreasurySize}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<500k">Under €500,000</SelectItem>
                      <SelectItem value="500k-2m">€500,000 – €2,000,000</SelectItem>
                      <SelectItem value="2m-10m">€2,000,000 – €10,000,000</SelectItem>
                      <SelectItem value="10m+">Over €10,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Primary Finance Contact{" "}
                    <span className="text-muted-foreground/60 normal-case tracking-normal">(optional)</span>
                  </Label>
                  <Input
                    value={financeContact}
                    onChange={(e) => setFinanceContact(e.target.value)}
                    placeholder="Name or email"
                    className="h-11"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button onClick={next} className="h-11 px-8">
                  Continue to Portfolio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="ghost" className="h-11 text-muted-foreground" onClick={prev}>
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 5 — Portfolio Setup */}
          {currentStep === 5 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  Connect or Define Portfolio
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors text-center">
                  <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                    <Link2 className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Connect Broker
                  </span>
                </button>
                <button className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors text-center">
                  <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                    <PenLine className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Manual Asset Entry
                  </span>
                </button>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Collateral eligibility and risk metrics will be calculated after asset
                selection.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Button onClick={next} className="h-11 px-8">
                  Proceed to First Guarantee
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="ghost" className="h-11 text-muted-foreground" onClick={prev}>
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 6 — First Guarantee */}
          {currentStep === 6 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-foreground tracking-tight">
                  Ready to Structure Your First Guarantee
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You will now define:
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Deposit requirement",
                  "Asset selection",
                  "Risk evaluation",
                  "Structured collateral output",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 pt-2">
                <Button
                  onClick={() => navigate("/product/new-guarantee")}
                  className="h-11 px-8"
                >
                  Create Guarantee
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="h-11 text-muted-foreground"
                  onClick={() => navigate("/product")}
                >
                  Go to Dashboard
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
