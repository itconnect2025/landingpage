import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Zap } from "lucide-react";
import bgImage from "@/assets/bg.jpg";

const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://b-creator.com', '_blank');
  };

  const handleFreeMaterials = () => {
    const curriculumSection = document.getElementById('curriculum');
    curriculumSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden w-full h-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={bgImage} 
          alt="AI 코딩 부트캠프 배경 이미지 - 비전공자도 AI와 함께 웹개발을 배울 수 있는 현대적인 코딩 환경" 
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="w-full px-0 sm:px-4 md:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-8 animate-slide-up">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">런칭 기념 할인 진행중</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="text-white">AI 바이브코딩</span><br />
            <span className="text-accent">초단기 부트캠프</span>
          </h1>

          {/* Sub Headline */}
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/90 mb-16 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            비전공자도 AI와 함께하는 바이브 코딩으로<br />
            <span className="text-accent font-semibold">MVP부터 포트폴리오까지</span>
          </p>

          {/* Key Values */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 sm:px-3 md:px-6 py-2 sm:py-3 rounded-2xl text-white">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1 sm:mr-2 md:mr-3" />
              <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">단 10시간</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 sm:px-3 md:px-6 py-2 sm:py-3 rounded-2xl text-white">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1 sm:mr-2 md:mr-3" />
              <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">비전공자 OK</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 sm:px-3 md:px-6 py-2 sm:py-3 rounded-2xl text-white">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1 sm:mr-2 md:mr-3" />
              <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">실전 프로젝트 5개</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center animate-slide-up max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 sm:py-6 md:py-7 px-16 sm:px-20 md:px-24 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group text-lg sm:text-xl md:text-2xl h-auto relative overflow-hidden w-full sm:w-auto min-h-[70px] sm:min-h-[80px] md:min-h-[90px] flex-shrink-0 animate-glowPulse"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
              <span className="relative z-10">지금 바로 시작하기</span>
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ml-3 sm:ml-4 md:ml-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
            <Button 
              onClick={handleFreeMaterials}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 sm:py-5 md:py-6 px-8 sm:px-10 md:px-12 rounded-xl border-2 border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg md:text-xl h-auto w-full sm:w-auto min-h-[60px] sm:min-h-[70px] md:min-h-[80px]"
            >
              커리큘럼 자세히 보기
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;