import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProjectSection from "@/components/ProjectSection";
import CurriculumSection from "@/components/CurriculumSection";
import ToolsSection from "@/components/ToolsSection";
import InstructorSection from "@/components/InstructorSection";
import StudySupportSystem from "@/components/StudySupportSystem";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProjectSection />
      <CurriculumSection />
      <ToolsSection />
      <InstructorSection />
      <StudySupportSystem />
      <ValuePropositionSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
