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
import Monitoring from "./pages/Monitoring";
import Onboarding from "./pages/Onboarding";
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
            <Route path="/product/monitoring" element={<Monitoring />} />
            <Route path="/product/settings" element={<SettingsPage />} />
            <Route path="/product/web3-credit" element={<Web3CreditPage />} />
            <Route path="/product/web3-credit/dashboard" element={<Web3CreditPage />} />
            <Route path="/product/web3-credit/onboarding" element={<Web3Onboarding />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </Web3CreditProvider>
  </QueryClientProvider>
);

export default App;
