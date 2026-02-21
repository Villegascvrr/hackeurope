import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ICPSection from "@/components/ICPSection";
import SolutionSection from "@/components/SolutionSection";
import TechArchitectureSection from "@/components/TechArchitectureSection";
import SecuritySection from "@/components/SecuritySection";
import CapitalEfficiencySection from "@/components/CapitalEfficiencySection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ICPSection />
      <SolutionSection />
      <TechArchitectureSection />
      <SecuritySection />
      <CapitalEfficiencySection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
