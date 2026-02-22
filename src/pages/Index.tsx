import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FiscalEfficiencySection from "@/components/FiscalEfficiencySection";
import SecuritySection from "@/components/SecuritySection";
import TechStackSection from "@/components/TechStackSection";
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
      <FiscalEfficiencySection />
      <HowItWorksSection />
      <SecuritySection />
      <TechStackSection />
      <VisionSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
