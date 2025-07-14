import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Zap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://b-creator.com', '_blank');
  };

  const handleFreeMaterials = () => {
    const curriculumSection = document.getElementById('curriculum');
    curriculumSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroBanner} 
          alt="AI Coding Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-8 animate-slide-up">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">런칭 기념 할인 진행중</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            아이디어만 있다면,<br />
            <span className="text-gradient-accent">10시간 후</span> 당신만의<br />
            웹사이트가 완성됩니다
          </h1>

          {/* Sub Headline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            비전공자도 AI와 함께하는 바이브 코딩으로<br />
            <span className="text-accent font-semibold">MVP부터 포트폴리오까지</span>
          </p>

          {/* Key Values */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl text-white">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-semibold">단 10시간</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl text-white">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-semibold">비전공자 OK</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl text-white">
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-semibold">실전 프로젝트 5개</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={handleGetStarted}
              className="btn-hero glow-accent group"
            >
              지금 바로 시작하기
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={handleFreeMaterials}
              className="btn-hero-outline"
            >
              커리큘럼 자세히 보기
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-white/80 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm mb-4">이미 <span className="text-accent font-bold">500+</span>명이 성공했습니다</p>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-white/30 rounded-full" />
              ))}
              <span className="text-sm ml-2">+495명 더</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;