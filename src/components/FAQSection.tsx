import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "정말 비전공자도 가능한가요?",
      answer: "네, 가능합니다! 이 강의는 코딩 경험이 전혀 없는 분들을 위해 설계되었습니다. AI 도구들이 복잡한 부분을 대신 처리해주기 때문에, 여러분은 아이디어와 기획에만 집중하시면 됩니다. 실제로 수강생의 70%가 완전 비전공자였고, 모두 성공적으로 프로젝트를 완성했습니다."
    },
    {
      question: "10시간 만에 퀄리티 있는 결과물이 나올까요?",
      answer: "AI 도구의 도움으로 충분히 가능합니다. 전통적인 코딩에서는 몇 주가 걸리는 작업도 Cursor AI와 Lovable 같은 도구를 사용하면 몇 시간 만에 완성할 수 있습니다. 강의에서 만드는 4개 프로젝트는 모두 실제 비즈니스에서 사용할 수 있는 수준의 퀄리티를 보장합니다."
    },
    {
      question: "수강 후 지속적인 지원이 있나요?",
      answer: "평생 지원을 제공합니다. 1:1 질문 채널은 언제든지 이용 가능하고, 수강생 전용 커뮤니티에서 동료들과 정보를 공유할 수 있습니다. 또한 새로운 AI 도구나 기술이 나올 때마다 업데이트 내용을 무료로 제공합니다."
    },
    {
      question: "다른 코딩 강의와 뭐가 다른가요?",
      answer: "기존 강의들은 이론 중심이고 오래된 방법론을 가르치지만, AI 바이브 코딩은 최신 AI 도구를 활용한 실전 중심 교육입니다. 시간은 95% 단축되고, 비용은 97% 절약되며, 결과물의 퀄리티는 더 높습니다. 무엇보다 실제 사업에 바로 활용할 수 있는 프로젝트를 완성한다는 점이 가장 큰 차이입니다."
    },
    {
      question: "만든 웹사이트를 실제 사업에 쓸 수 있나요?",
      answer: "물론입니다! 강의에서 제작하는 모든 프로젝트는 상용 서비스 수준으로 제작됩니다. 실제로 수강생의 87%가 강의에서 만든 프로젝트를 실제 사업에 활용하고 있고, 평균 2주 내에 첫 수익을 창출하고 있습니다. 소스코드도 평생 소유할 수 있어 자유롭게 수정하고 확장할 수 있습니다."
    },
    {
      question: "AI 도구 사용법을 배워야 하나요?",
      answer: "기본적인 사용법은 강의에서 모두 다룹니다. Cursor AI, Claude, Lovable, Supabase 등 모든 도구의 설치부터 활용까지 단계별로 설명드립니다. 또한 각 도구의 프롬프트 템플릿과 사용 가이드를 제공해서 수강 후에도 혼자서 충분히 활용할 수 있습니다."
    },
    {
      question: "환불 정책은 어떻게 되나요?",
      answer: "30일 무조건 환불 보장정책을 제공합니다. 강의를 수강해보시고 만족하지 않으시면 어떤 이유든 30일 내에 100% 환불해드립니다. 우리는 강의의 퀄리티에 절대적인 자신감을 가지고 있기 때문입니다."
    },
    {
      question: "강의는 어떤 형태로 제공되나요?",
      answer: "온라인 동영상 강의로 제공되며, 각 챕터별로 실습 파일과 완성 코드를 함께 제공합니다. 수강 기간 제한 없이 평생 시청 가능하고, 모바일에서도 학습할 수 있습니다. 또한 자막과 배속 조절 기능을 지원해서 개인 학습 속도에 맞춰 수강할 수 있습니다."
    },
    {
      question: "프로그래밍 경험이 전혀 없어도 괜찮나요?",
      answer: "전혀 문제없습니다! 오히려 기존 프로그래밍 경험이 없는 분들이 더 빠르게 적응하는 경우가 많습니다. AI 도구들은 전통적인 코딩 문법을 몰라도 자연어로 소통할 수 있기 때문입니다. 강의에서는 필요한 모든 개념을 쉬운 용어로 설명하고, 실습 위주로 진행됩니다."
    },
    {
      question: "다음 수강 기회는 언제인가요?",
      answer: "현재 런칭 기념 할인가로 수강 신청을 받고 있습니다. 정원이 한정되어 있어 조기 마감될 수 있으니 빠른 신청을 권장드립니다. 다음 기수는 3개월 후에 열릴 예정이며, 그때는 정가로 진행될 예정입니다."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            자주 묻는 <span className="text-gradient-primary">질문들</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            수강을 고민하시는 분들이 가장 궁금해하시는 질문들을 모았습니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="card-elevated hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-slide-up">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="card-gradient glow-primary max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">
              다른 궁금한 점이 있으신가요?
            </h3>
            <p className="text-muted-foreground mb-6">
              언제든지 1:1 상담을 통해 자세한 답변을 받아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@aivibecoding.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                이메일 문의하기
              </a>
              <a 
                href="tel:010-1234-5678"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                전화 상담하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;