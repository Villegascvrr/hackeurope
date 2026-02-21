import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TwoEnginesSection from "@/components/TwoEnginesSection";
import UnifiedArchitectureSection from "@/components/UnifiedArchitectureSection";
import ICPSection from "@/components/ICPSection";
import SecuritySection from "@/components/SecuritySection";
import CapitalEfficiencySection from "@/components/CapitalEfficiencySection";
import RiskFrameworkSection from "@/components/RiskFrameworkSection";
import VisionSection from "@/components/VisionSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TwoEnginesSection />
      <UnifiedArchitectureSection />
      <ICPSection />
      <SecuritySection />
      <CapitalEfficiencySection />
      <RiskFrameworkSection />
      <VisionSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
