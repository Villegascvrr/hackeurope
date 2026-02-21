import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus,
  Briefcase,
  BarChart3,
  Shield,
  Activity,
  Settings,
  Bell,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  FlaskConical,
} from "lucide-react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/product" },
  { label: "New Guarantee", icon: FilePlus, active: true, path: "/product/new-guarantee" },
  { label: "Portfolio", icon: Briefcase, path: "/product/portfolio" },
  { label: "Risk Analysis", icon: BarChart3, path: "/product/risk-analysis" },
  { label: "Active Guarantees", icon: Shield, path: "/product/active-guarantees" },
  { label: "Monitoring", icon: Activity, path: "/product/monitoring" },
  { label: "Simulation Lab", icon: FlaskConical, path: "/product/simulation" },
  { label: "Settings", icon: Settings, path: "/product/settings" },
];

const steps = [
  { number: 1, label: "Deposit Details" },
  { number: 2, label: "Select Assets" },
  { number: 3, label: "Risk Assessment" },
  { number: 4, label: "Structured Output" },
];

const euCountries = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary",
  "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
  "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
  "Spain", "Sweden",
];

const NewGuarantee = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [depositAmount, setDepositAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [counterparty, setCounterparty] = useState("");
  const [depositType, setDepositType] = useState("");
  const [fundingDate, setFundingDate] = useState<Date>();
  const [jurisdiction, setJurisdiction] = useState("");
  const [notes, setNotes] = useState("");

  const formatAmount = (val: string) => {
    if (!val) return "—";
    const num = parseFloat(val.replace(/,/g, ""));
    if (isNaN(num)) return val;
    return `€${num.toLocaleString("en-US")}`;
  };

  return (
    <div className="min-h-screen bg-[hsl(220,20%,98%)] flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-60" : "w-0 overflow-hidden"
        } shrink-0 border-r border-border bg-white transition-all duration-200 flex flex-col`}
      >
        <div className="h-14 px-5 flex items-center border-b border-border">
          <span className="text-foreground font-semibold text-sm tracking-tight">
            Collateral Core
          </span>
        </div>
        <nav className="flex-1 py-3 px-3 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.label === "Dashboard") navigate("/product");
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                item.active
                  ? "bg-[hsl(220,20%,95%)] text-foreground font-medium"
                  : "text-muted-foreground hover:bg-[hsl(220,20%,96%)] hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-border flex items-center justify-between px-5 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <div className="h-5 w-px bg-border" />
            <span className="text-sm text-muted-foreground">New Guarantee Request</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md text-muted-foreground hover:bg-[hsl(220,20%,96%)] transition-colors">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>
            <div className="h-5 w-px bg-border" />
            <button className="flex items-center gap-2 text-sm text-foreground hover:bg-[hsl(220,20%,96%)] rounded-md px-2 py-1.5 transition-colors">
              <div className="h-7 w-7 rounded-full bg-[hsl(220,20%,90%)] flex items-center justify-center text-xs font-medium text-[hsl(220,20%,30%)]">
                CC
              </div>
              <span className="font-medium">Admin</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1100px] mx-auto">
            {/* Progress Indicator */}
            <div className="flex items-center mb-8">
              {steps.map((step, i) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium border transition-colors",
                        step.number === 1
                          ? "bg-foreground text-background border-foreground"
                          : "bg-white text-muted-foreground border-border"
                      )}
                    >
                      {step.number}
                    </div>
                    <span
                      className={cn(
                        "text-sm whitespace-nowrap",
                        step.number === 1
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-12 lg:w-20 h-px bg-border mx-3" />
                  )}
                </div>
              ))}
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-xl font-semibold text-foreground">
                Guarantee Request Details
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Provide the required deposit information for risk structuring.
              </p>
            </div>

            {/* Form + Summary Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Deposit Information */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">
                      Deposit Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Deposit Amount */}
                      <div className="space-y-1.5">
                        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Deposit Amount (€)
                        </Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                            €
                          </span>
                          <Input
                            type="text"
                            placeholder="0.00"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                            className="pl-7 h-10 border-border bg-white text-foreground text-sm"
                          />
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="space-y-1.5">
                        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Duration
                        </Label>
                        <Select value={duration} onValueChange={setDuration}>
                          <SelectTrigger className="h-10 border-border bg-white text-sm">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 month</SelectItem>
                            <SelectItem value="3">3 months</SelectItem>
                            <SelectItem value="6">6 months</SelectItem>
                            <SelectItem value="12">12 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Counterparty Name */}
                      <div className="space-y-1.5">
                        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Counterparty Name
                        </Label>
                        <Input
                          type="text"
                          placeholder="Enter counterparty name"
                          value={counterparty}
                          onChange={(e) => setCounterparty(e.target.value)}
                          className="h-10 border-border bg-white text-foreground text-sm"
                        />
                      </div>

                      {/* Deposit Type */}
                      <div className="space-y-1.5">
                        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Deposit Type
                        </Label>
                        <Select value={depositType} onValueChange={setDepositType}>
                          <SelectTrigger className="h-10 border-border bg-white text-sm">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lease">Lease Deposit</SelectItem>
                            <SelectItem value="performance">Performance Bond</SelectItem>
                            <SelectItem value="event">Event Guarantee</SelectItem>
                            <SelectItem value="equipment">Equipment Rental</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Capital Requirements */}
                <Card className="border-border shadow-none bg-white">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">
                      Capital Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Funding Date */}
                      <div className="space-y-1.5">
                        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Required Funding Date
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full h-10 justify-start text-left font-normal border-border bg-white text-sm",
                                !fundingDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {fundingDate ? format(fundingDate, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={fundingDate}
                              onSelect={setFundingDate}
                              initialFocus
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Jurisdiction */}
                      <div className="space-y-1.5">
                        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Jurisdiction
                        </Label>
                        <Select value={jurisdiction} onValueChange={setJurisdiction}>
                          <SelectTrigger className="h-10 border-border bg-white text-sm">
                            <SelectValue placeholder="Select jurisdiction" />
                          </SelectTrigger>
                          <SelectContent>
                            {euCountries.map((country) => (
                              <SelectItem key={country} value={country.toLowerCase()}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-1.5">
                      <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Notes <span className="normal-case tracking-normal font-normal">(optional)</span>
                      </Label>
                      <Textarea
                        placeholder="Additional context or requirements..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="min-h-[100px] border-border bg-white text-foreground text-sm resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Bottom Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate("/product")}
                    className="h-10 px-5 text-sm border-border text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Dashboard
                  </Button>
                  <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="h-10 px-5 text-sm border-border text-muted-foreground hover:text-foreground"
                  >
                    Save Draft
                  </Button>
                  <Button
                    onClick={() => navigate("/product/new-guarantee/select-assets")}
                    className="h-10 px-6 text-sm bg-foreground text-background hover:bg-[hsl(220,20%,20%)] font-medium"
                  >
                    Continue to Asset Selection
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  </div>
                </div>
              </div>

              {/* Summary Panel */}
              <div className="lg:col-span-1">
                <Card className="border-border shadow-none bg-white sticky top-6">
                  <CardHeader className="px-5 py-4 border-b border-border">
                    <CardTitle className="text-sm font-semibold text-foreground">
                      Deposit Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Requested Amount
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {depositAmount ? formatAmount(depositAmount) : "—"}
                        </span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Duration
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {duration ? `${duration} month${duration === "1" ? "" : "s"}` : "—"}
                        </span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Est. Collateral Required
                        </span>
                        <span className="text-sm text-muted-foreground italic">
                          To be calculated
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
                      Collateral ratios will be calculated after asset risk evaluation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewGuarantee;
