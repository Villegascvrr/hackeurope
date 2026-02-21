import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import NewGuarantee from "./pages/NewGuarantee";
import SelectAssets from "./pages/SelectAssets";
import RiskAssessment from "./pages/RiskAssessment";
import StructuredOutput from "./pages/StructuredOutput";
import Monitoring from "./pages/Monitoring";
import SimulationLab from "./pages/SimulationLab";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
