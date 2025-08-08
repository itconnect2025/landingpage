import { CheckCircle, X, Rocket } from "lucide-react";

const SolutionSection = () => {
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

  return (
    <section className="section-padding bg-white relative overflow-hidden lg:min-h-[500px]">
      <div className="w-full pt-50 pb-50 px-[12px] sm:px-0">
        {/* Solution Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[25px] sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">AI 바이브 코딩이</span><br className="block sm:hidden" />
            <span className="sm:inline">해답입니다</span>
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto">
            전통적인 코딩 교육의 한계를 뛰어넘어, AI와 함께하는 새로운 학습 경험을 제공합니다
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
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
      </div>
    </section>
  );
};

export default SolutionSection; 