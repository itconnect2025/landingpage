import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "정말 비전공자도 가능한가요?",
      answer: "네. AI가 코딩을 도와주기 때문에 간단한 회사 소개용 홈페이지나 MVP 수준의 서비스 개발은 충분히 가능합니다."
    },
    {
      question: "AI 도구 구독비가 부담스러워요",
      answer: "충분히 이해합니다. 하지만, 월 3~4만원으로 수 백, 수 천만원의 가치를 만들어낼 수 있는 도구를 사용할 수 있습니다. 앞으로는 AI를 활용하지 못하면 성장하지 못하거나 경쟁에서 뒤쳐질 수 있습니다. 그러니 이 정도는 꼭 투자하시라고 추천드립니다."
    },
    {
      question: "10시간이면 정말 개발자가 될 수 있나요?",
      answer: "10시간은 5개의 실전 프로젝트를 완성하는 시간입니다. '완벽한 개발자'가 되는 것이 아니라, AI와 함께 개발할 수 있는 사람'이 되는 것이 목표입니다. 이후 지속적인 연습과 커뮤니티 활동을 통해 실력을 키워나가시면 됩니다."
    },
    {
      question: "다른 AI 코딩 강의와 뭐가 다른가요?",
      answer: "대부분의 바이브코딩 강의는 어떻게 AI가 개발을 해주는지에 초점을 맞춥니다. 하지만, 이 강의는 비개발자가 실무에 최대한 활용할 수 있도록 기획, 개발, 그리고 사이트 론칭까지 모두 경험해볼 수 있도록 제작하였습니다."
    },
    {
      question: "수강 후에도 계속 지원받을 수 있나요?",
      answer: "물론입니다! 수강 후에도 언제든지 커뮤니티를 통해 지속적으로 질문을 하실 수 있습니다. 또한, 유튜브를 통해 새로운 정보가 나올 때 마다 업데이트 하고, 라이브 특강 등을 통해 계속해서 소통할 예정입니다."
    },
    {
      question: "구매 후 언제부터 수강이 가능한가요?",
      answer: "결제가 완료되면 곧바로 수강 가능합니다. 구매하신 강의는 학습 규정 및 환불 규정에 따라 수강기간이 정해지므로, 꼭 하단에 기재된 규정을 확인해주시기 바랍니다."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-subtle lg:min-h-[500px]">
      <div className="w-full pt-50 pb-50 px-2.5 sm:px-0">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            자주 묻는 <span className="text-primary">질문들</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
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
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4 sm:pr-8">
                    Q. {faq.question}
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
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-slide-up">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed text-left">
                        A. {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;