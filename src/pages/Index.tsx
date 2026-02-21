import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TwoEnginesSection from "@/components/TwoEnginesSection";
import UnifiedArchitectureSection from "@/components/UnifiedArchitectureSection";
import ICPSection from "@/components/ICPSection";
import SecuritySection from "@/components/SecuritySection";
import CapitalEfficiencySection from "@/components/CapitalEfficiencySection";
import VisionSection from "@/components/VisionSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AmbientBackground />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TwoEnginesSection />
      <UnifiedArchitectureSection />
      <ICPSection />
      <SecuritySection />
      <CapitalEfficiencySection />
      <VisionSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
