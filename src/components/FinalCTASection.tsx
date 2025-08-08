import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Shield, Star, Gift, Zap } from "lucide-react";

const FinalCTASection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const urgencyFactors = [
  ];

  return (
    <section id="final-cta" className="section-padding bg-gradient-hero relative overflow-hidden lg:min-h-[500px]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="w-full relative z-10 pt-50 pb-50 px-[5px] sm:px-0">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[25px] sm:text-4xl md:text-6xl font-bold text-white mb-6">
            지금도 늦지 않았습니다!<div style={{ height: '16px' }}></div>
            <span className="text-accent">얼리버드 할인</span>
          </h2>
          <p className="text-[19px] text-white/90 max-w-3xl mx-auto">
            더 이상 미루지 마세요. 10시간 투자로 평생 써먹을 수 있는 스킬을 얻어가세요.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="p-12 py-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4 animate-pulse">
                  <Clock className="w-4 h-4 mr-2" />
                  얼리버드 할인 진행중
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-1 sm:mb-2" style={{ marginBottom: '5px' }}>
                    <span className="text-2xl text-muted-foreground line-through">162,000원</span>
                    <span className="text-5xl font-bold text-gradient-primary">98,000원</span>
                  </div>
                  <div className="text-accent font-bold text-lg">
                    <div className="block sm:inline">얼리버드 40% 할인가</div>
                    <div className="block sm:hidden" style={{ height: '2px' }}></div>
                    <div className="block sm:inline sm:ml-1">(64,000원 절약!)</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {urgencyFactors.map((factor, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-center space-x-2 ${
                        factor.highlight ? 'text-accent font-bold' : 'text-muted-foreground'
                      }`}
                    >
                      {factor.icon}
                      <span>{factor.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Options */}
              <div className="space-y-4">
                <Button 
                  className="w-full btn-hero text-xl py-6 glow-accent"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => window.open('https://b-creator.com/step/ai-vibe', '_blank')}
                >
                  지금 바로 배우러 가기
                  <ArrowRight className={`w-6 h-6 ml-2 transition-transform ${isHovered ? 'translate-x-2' : ''}`} />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full text-lg py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.open('https://b-creator.com/sign-up', '_blank')}
                >
                  회원가입하고 할인쿠폰 받기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;