import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Web3CreditProvider } from "@/contexts/Web3CreditContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
import Index from "./pages/Index";
import Product from "./pages/Product";
import NewGuarantee from "./pages/NewGuarantee";
import SelectAssets from "./pages/SelectAssets";
import RiskAssessment from "./pages/RiskAssessment";
import StructuredOutput from "./pages/StructuredOutput";
import Monitoring from "./pages/Monitoring";
import SimulationLab from "./pages/SimulationLab";
import Onboarding from "./pages/Onboarding";
import Portfolio from "./pages/Portfolio";
import RiskAnalysis from "./pages/RiskAnalysis";
import ActiveGuarantees from "./pages/ActiveGuarantees";
import SettingsPage from "./pages/SettingsPage";
import Web3CreditPage from "./pages/Web3CreditPage";
import Web3Onboarding from "./pages/Web3Onboarding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Web3CreditProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/new-guarantee" element={<NewGuarantee />} />
            <Route path="/product/new-guarantee/select-assets" element={<SelectAssets />} />
            <Route path="/product/new-guarantee/risk-assessment" element={<RiskAssessment />} />
            <Route path="/product/new-guarantee/structured-output" element={<StructuredOutput />} />
            <Route path="/product/monitoring" element={<Monitoring />} />
            <Route path="/product/simulation" element={<SimulationLab />} />
            <Route path="/product/portfolio" element={<Portfolio />} />
            <Route path="/product/risk-analysis" element={<RiskAnalysis />} />
            <Route path="/product/active-guarantees" element={<ActiveGuarantees />} />
            <Route path="/product/settings" element={<SettingsPage />} />
            <Route path="/product/web3-credit" element={<Web3CreditPage />} />
            <Route path="/product/web3-credit/dashboard" element={<Web3CreditPage />} />
            <Route path="/product/web3-credit/onboarding" element={<Web3Onboarding />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </Web3CreditProvider>
  </QueryClientProvider>
);

export default App;
