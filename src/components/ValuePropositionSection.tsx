import { CheckCircle, X, ArrowRight, Star } from "lucide-react";

const ValuePropositionSection = () => {
  const comparisons = [
    {
      category: "학습 기간",
      traditional: "3-6개월",
      vibe: "단 10시간",
      highlight: true
    },
    {
      category: "필요 비용",
      traditional: "300-500만원",
      vibe: "10만원",
      highlight: true
    },
    {
      category: "학습 방식",
      traditional: "이론 + 과제",
      vibe: "실전 프로젝트",
      highlight: false
    },
    {
      category: "강사 피드백",
      traditional: "주 1-2회",
      vibe: "실시간 1:1",
      highlight: false
    },
    {
      category: "완성 프로젝트",
      traditional: "1-2개 (연습용)",
      vibe: "4개 (실무용)",
      highlight: true
    },
    {
      category: "취업 지원",
      traditional: "이력서 첨삭",
      vibe: "포트폴리오 제작",
      highlight: false
    }
  ];

  const benefits = [
    {
      title: "시간 효율성",
      description: "기존 대비 95% 시간 단축",
      value: "3000시간 → 10시간",
      icon: "⏰"
    },
    {
      title: "비용 효율성",
      description: "개발 외주비 대비 97% 절약",
      value: "300만원 → 10만원",
      icon: "💰"
    },
    {
      title: "실용성",
      description: "바로 사업에 활용 가능",
      value: "즉시 런칭 가능",
      icon: "🚀"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            다른 강의와 <span className="text-gradient-primary">뭐가 다른가요?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            기존 코딩 교육의 한계를 뛰어넘는 혁신적인 학습 경험을 제공합니다
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
            {/* Header */}
            <div className="grid grid-cols-3 gap-0">
              <div className="p-6 bg-muted text-center">
                <h3 className="text-lg font-bold text-foreground">비교 항목</h3>
              </div>
              <div className="p-6 bg-red-50 text-center border-x border-border">
                <h3 className="text-lg font-bold text-red-600 flex items-center justify-center">
                  <X className="w-5 h-5 mr-2" />
                  기존 코딩 교육
                </h3>
              </div>
              <div className="p-6 bg-gradient-primary text-center">
                <h3 className="text-lg font-bold text-white flex items-center justify-center">
                  <Star className="w-5 h-5 mr-2" />
                  AI 바이브 코딩
                </h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-0 border-t border-border">
                <div className={`p-4 bg-muted/50 flex items-center justify-center ${item.highlight ? 'font-bold' : ''}`}>
                  <span className="text-foreground">{item.category}</span>
                </div>
                <div className="p-4 flex items-center justify-center border-x border-border">
                  <div className="flex items-center text-red-600">
                    <X className="w-4 h-4 mr-2" />
                    <span>{item.traditional}</span>
                  </div>
                </div>
                <div className="p-4 bg-primary/5 flex items-center justify-center">
                  <div className="flex items-center text-primary font-semibold">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>{item.vibe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-elevated text-center hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground mb-4">{benefit.description}</p>
              <div className="text-2xl font-bold text-gradient-primary">{benefit.value}</div>
            </div>
          ))}
        </div>

        {/* Value Highlights */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: What You Get */}
          <div className="card-gradient glow-primary">
            <h3 className="text-2xl font-bold text-gradient-primary mb-6">이 강의로 얻는 것</h3>
            <ul className="space-y-4">
              {[
                "실제 비즈니스에 사용할 수 있는 4개 프로젝트",
                "AI 도구를 활용한 효율적인 개발 프로세스",
                "평생 사용 가능한 소스코드와 템플릿",
                "지속적인 기술 업데이트와 커뮤니티 지원",
                "개발 외주 없이도 자립할 수 있는 능력",
                "창업 아이디어를 빠르게 검증할 수 있는 스킬"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Investment Calculator */}
          <div className="card-elevated">
            <h3 className="text-2xl font-bold text-foreground mb-6">투자 대비 수익 계산</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <span className="text-foreground">개발 외주 비용</span>
                <span className="text-2xl font-bold text-red-600">300만원</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                <span className="text-foreground">AI 바이브 코딩 강의</span>
                <span className="text-2xl font-bold text-primary">10만원</span>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg">
                  <span className="font-bold text-foreground">절약 금액</span>
                  <span className="text-3xl font-bold text-gradient-primary">290만원</span>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gradient-accent rounded-lg">
                <p className="text-white font-bold text-lg mb-2">
                  추가로 얻는 가치
                </p>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• 지속적인 수정/개선 능력</li>
                  <li>• 새로운 프로젝트 개발 능력</li>
                  <li>• 기술 트렌드 대응력</li>
                  <li>• 창업 아이디어 빠른 검증</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">실제 수강생 성과</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-elevated">
              <div className="text-3xl font-bold text-gradient-primary mb-2">87%</div>
              <div className="text-muted-foreground">수강 후 실제 사업 활용</div>
            </div>
            <div className="card-elevated">
              <div className="text-3xl font-bold text-gradient-primary mb-2">95%</div>
              <div className="text-muted-foreground">강의 완주율</div>
            </div>
            <div className="card-elevated">
              <div className="text-3xl font-bold text-gradient-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">수강생 만족도</div>
            </div>
            <div className="card-elevated">
              <div className="text-3xl font-bold text-gradient-primary mb-2">2주</div>
              <div className="text-muted-foreground">평균 첫 수익 창출</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;