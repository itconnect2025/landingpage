import { CheckCircle, X, ArrowRight, Star, Target } from "lucide-react";

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
      vibe: "10만원 + AI 사용료",
      highlight: true
    },
    {
      category: "학습 방식",
      traditional: "이론 중심",
      vibe: "실전 프로젝트",
      highlight: false
    },
    {
      category: "결과물",
      traditional: "ToDo 앱",
      vibe: "스타트업 MVP",
      highlight: true
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
      value: "수천만원 → 98,000원",
      icon: "💰"
    },
    {
      title: "실용성",
      description: "바로 사업에 활용 가능",
      value: "MVP 테스트 가능",
      icon: "🚀"
    }
  ];

  return (
    <section className="section-padding bg-white lg:min-h-[500px]">
      <div className="w-full pt-50 pb-50 px-[12px] sm:px-0">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[25px] sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            다른 강의와 <span className="text-primary">뭐가 다른가요?</span>
          </h2>
          <p className="text-[19px] text-muted-foreground max-w-3xl mx-auto">
            <span className="sm:hidden">기존 코딩 교육의 한계를 뛰어넘는<br/>혁신적인 학습 경험을 제공합니다</span>
            <span className="hidden sm:inline">기존 코딩 교육의 한계를 뛰어넘는 혁신적인 학습 경험을 제공합니다</span>
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="grid grid-cols-3 gap-0">
              <div className="p-6 bg-[#f8fafc] text-center border-r border-gray-200">
                <h3 className="text-lg font-bold text-[#475569]">비교 항목</h3>
              </div>
              <div className="p-6 bg-[#fce7f3] text-center border-r border-gray-200">
                <h3 className="text-lg font-bold text-[#6b7280] flex items-center justify-center">
                  <X className="w-5 h-5 mr-2 text-[#dc2626]" />
                  기존 코딩 교육
                </h3>
              </div>
              <div className="p-6 bg-[#dcfce7] text-center">
                <h3 className="text-lg font-bold text-[#374151] flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-[#059669]" />
                  AI 바이브 코딩
                </h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-0 border-t border-gray-200">
                <div className={`p-6 bg-[#f8fafc] flex items-center justify-center border-r border-gray-200 ${item.highlight ? 'font-semibold' : ''}`}>
                  <span className="text-[#475569] text-center">{item.category}</span>
                </div>
                <div className="p-6 bg-[#fdf2f8] flex items-center justify-center border-r border-gray-200">
                  <div className="flex items-center text-[#6b7280]">
                    <X className="w-5 h-5 mr-3 text-[#dc2626]" />
                    <span className="text-center">{item.traditional}</span>
                  </div>
                </div>
                <div className="p-6 bg-[#f0fdf4] flex items-center justify-center">
                  <div className="flex items-center text-[#374151] font-semibold">
                    <CheckCircle className="w-6 h-6 mr-3 text-[#059669]" />
                    <span className="text-center text-lg">{item.vibe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisons.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-4 bg-[#f8fafc] border-b border-gray-200">
                  <h3 className="text-base font-bold text-[#475569] text-center">{item.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-0">
                  <div className="p-4 bg-[#fdf2f8] flex flex-col items-center justify-center">
                    <div className="flex items-center text-[#6b7280] mb-2">
                      <X className="w-4 h-4 mr-2 text-[#dc2626]" />
                      <span className="text-xs text-[#6b7280]">기존 코딩 교육</span>
                    </div>
                    <span className="text-sm text-center">{item.traditional}</span>
                  </div>
                  <div className="p-4 bg-[#f0fdf4] flex flex-col items-center justify-center">
                    <div className="flex items-center text-[#374151] mb-2">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#059669]" />
                      <span className="text-xs text-[#374151] font-semibold">AI 바이브 코딩</span>
                    </div>
                    <span className="text-sm font-semibold text-center">{item.vibe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Benefits */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-elevated text-center hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-primary">{benefit.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Highlights */}
        <div className="max-w-7xl mx-auto">
          <div className="card-gradient glow-primary">
            <h3 className="text-2xl font-bold text-primary mb-6">이 강의로 얻는 것</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "실제 창업 아이템 기반 프로젝트 경험",
                "AI 도구를 활용한 효율적인 개발 프로세스",
                "평생 사용 가능한 소스코드와 템플릿",
                "지속적인 기술 업데이트와 커뮤니티 지원",
                "개발 외주 없이도 자립할 수 있는 능력",
                "창업 아이템 빠르게 검증하는 스킬"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;