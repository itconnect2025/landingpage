import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Shield, Star, Gift } from "lucide-react";

const FinalCTASection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    "4개 실전 프로젝트 완성",
    "평생 소스코드 소유권",
    "1:1 무제한 질문 지원",
    "AI 도구 완전 정복",
    "30일 환불 보장",
    "수강생 전용 커뮤니티"
  ];

  const urgencyFactors = [
    { icon: <Gift className="w-5 h-5" />, text: "런칭 기념 50% 할인", highlight: true },
    { icon: <Clock className="w-5 h-5" />, text: "선착순 100명 한정", highlight: true },
    { icon: <Star className="w-5 h-5" />, text: "조기등록 보너스 제공", highlight: false }
  ];

  return (
    <section id="final-cta" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            지금 시작하면<br />
            <span className="text-accent">내일 아침에 새로운 당신</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            더 이상 미루지 마세요. 10시간 투자로 평생 써먹을 수 있는 스킬을 얻어가세요.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Pricing Info */}
              <div className="p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    런칭 기념 할인 진행중
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-4 mb-2">
                      <span className="text-2xl text-muted-foreground line-through">200,000원</span>
                      <span className="text-5xl font-bold text-gradient-primary">100,000원</span>
                    </div>
                    <p className="text-accent font-bold text-lg">50% 할인가 (100,000원 절약!)</p>
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
                  >
                    일시불 결제 (100,000원)
                    <ArrowRight className={`w-6 h-6 ml-2 transition-transform ${isHovered ? 'translate-x-2' : ''}`} />
                  </Button>
                  
                  <Button variant="outline" className="w-full text-lg py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                    2개월 분할 (월 50,000원)
                  </Button>
                </div>

                {/* Guarantee */}
                <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center justify-center text-green-700">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="font-semibold">30일 무조건 환불 보장</span>
                  </div>
                </div>
              </div>

              {/* Right: What You Get */}
              <div className="p-12 bg-gradient-subtle">
                <h3 className="text-2xl font-bold text-foreground mb-6">수강료에 포함된 모든 것</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                  <h4 className="font-bold text-foreground mb-3">📚 추가 보너스 (런칭 기념)</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• AI 프롬프트 템플릿 모음집 (가치 30,000원)</li>
                    <li>• 웹디자인 체크리스트 (가치 20,000원)</li>
                    <li>• 1:1 사업 아이디어 컨설팅 (가치 50,000원)</li>
                    <li>• 프리미엄 AI 도구 1개월 무료 이용권</li>
                  </ul>
                  <p className="text-accent font-bold mt-3">총 100,000원 상당의 보너스!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center text-white">
          <p className="text-lg mb-6">이미 <span className="text-accent font-bold">500+</span>명이 성공했습니다</p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">87%</div>
              <div className="text-sm">실제 사업 활용</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">95%</div>
              <div className="text-sm">강의 완주율</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4.9/5</div>
              <div className="text-sm">만족도 평점</div>
            </div>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-white text-lg mb-2">
              ⏰ <span className="font-bold text-accent">선착순 100명</span> 한정 모집
            </p>
            <p className="text-white/80">
              다음 기수는 3개월 후, 정가(200,000원)로 진행됩니다
            </p>
          </div>
        </div>

        {/* Alternative CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/80 mb-4">아직 고민이 되시나요?</p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            무료 샘플 강의 먼저 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;