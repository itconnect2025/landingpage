import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProjectPreviewSection from "@/components/ProjectPreviewSection";
import CurriculumSection from "@/components/CurriculumSection";
import ToolsSection from "@/components/ToolsSection";
import InstructorSection from "@/components/InstructorSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <ProjectPreviewSection />
      <CurriculumSection />
      <ToolsSection />
      <InstructorSection />
      <ValuePropositionSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
