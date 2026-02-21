import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ICPSection from "@/components/ICPSection";
import SolutionSection from "@/components/SolutionSection";
import TechArchitectureSection from "@/components/TechArchitectureSection";
import TechComplexitySection from "@/components/TechComplexitySection";
import MVPScopeSection from "@/components/MVPScopeSection";
import SecuritySection from "@/components/SecuritySection";
import JudgingSection from "@/components/JudgingSection";
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
      <TechComplexitySection />
      <MVPScopeSection />
      <SecuritySection />
      <JudgingSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
