import { CheckCircle, X, ArrowRight } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    "개발자 구할 돈도 시간도 없어서...",
    "아이디어 검증할 MVP 만드는데 수 천만원?",
    "코딩 학원 다닐 여유 없는데...",
    "기술 문서만 봐도 머리가 아픈데..."
  ];

  const comparisons = [
    {
      category: "학습 기간",
      traditional: "3-6개월",
      vibe: "단 10시간",
      traditionIcon: <X className="w-5 h-5 text-red-500" />,
      vibeIcon: <CheckCircle className="w-5 h-5 text-secondary" />
    },
    {
      category: "필요 비용",
      traditional: "300-500만원",
      vibe: "10만원",
      traditionIcon: <X className="w-5 h-5 text-red-500" />,
      vibeIcon: <CheckCircle className="w-5 h-5 text-secondary" />
    },
    {
      category: "학습 방식",
      traditional: "이론 중심",
      vibe: "실전 프로젝트",
      traditionIcon: <X className="w-5 h-5 text-red-500" />,
      vibeIcon: <CheckCircle className="w-5 h-5 text-secondary" />
    },
    {
      category: "결과물",
      traditional: "ToDo 앱",
      vibe: "실제 사업용 웹사이트",
      traditionIcon: <X className="w-5 h-5 text-red-500" />,
      vibeIcon: <CheckCircle className="w-5 h-5 text-secondary" />
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        {/* Problem Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            이런 고민 있으셨죠?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="card-elevated hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{problem}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">AI 바이브 코딩</span>이 해답입니다
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            전통적인 코딩 교육의 한계를 뛰어넘어, AI와 함께하는 새로운 학습 경험을 제공합니다
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Header */}
              <div className="p-8 bg-muted">
                <h3 className="text-xl font-bold text-center">비교 항목</h3>
              </div>
              <div className="p-8 bg-red-50">
                <h3 className="text-xl font-bold text-center text-red-600">기존 코딩 교육</h3>
              </div>
              <div className="p-8 bg-gradient-primary">
                <h3 className="text-xl font-bold text-center text-white">AI 바이브 코딩</h3>
              </div>

              {/* Comparison Rows */}
              {comparisons.map((item, index) => (
                <div key={index} className="contents">
                  <div className="p-6 border-t border-border bg-muted/30">
                    <p className="font-semibold text-center">{item.category}</p>
                  </div>
                  <div className="p-6 border-t border-border">
                    <div className="flex items-center justify-center">
                      {item.traditionIcon}
                      <span className="ml-2 text-gray-600">{item.traditional}</span>
                    </div>
                  </div>
                  <div className="p-6 border-t border-border bg-primary/5">
                    <div className="flex items-center justify-center">
                      {item.vibeIcon}
                      <span className="ml-2 font-semibold text-primary">{item.vibe}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block card-gradient glow-primary p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">투자 대비 수익률</h3>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-3xl font-bold text-red-500 line-through">수천만원</span>
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
              <span className="text-4xl font-bold text-gradient-primary">98,000원</span>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground mb-3">
                MVP 하나 제작하는데 보통 <span className="font-bold text-red-500">수백~수천만원</span>이 드는 외주 개발비를
              </p>
              <p className="text-lg text-muted-foreground">
                단 <span className="text-accent font-bold">98,000원</span>의 강의료로 직접 만들어 
                <span className="text-accent font-bold"> 비용을 크게 절감</span>할 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;