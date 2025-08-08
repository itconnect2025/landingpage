import { BookOpen, Users, TrendingUp, MessageCircle, Network, Youtube } from "lucide-react";

const StudySupportSystem = () => {
  const supportFeatures = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24시간 열려있는<br />커뮤니티 시스템",
      description: "막히는 부분이 있으면 언제든지 질문하세요! 먼저 경험을 해본 바이브코더 분들이 명쾌한 답변을 드립니다!",
      color: "bg-gradient-primary"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "비슷한 목표를 가진<br />동료들과의 네트워킹",
      description: "기획자, 마케터 출신 직장인, 창업을 준비중인 예비창업자까지 다양한 프로젝트로 함께 성장해요!",
      color: "bg-gradient-secondary"
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "수강생 독점<br />성장 프로그램",
      description: "Youtube를 통해 다양한 꿀팁과 수강생 전용 온라인 라이브 세미나로 바이브 코딩 정보를 전수합니다!",
      color: "bg-gradient-accent"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle lg:min-h-[500px]">
      <div className="w-full pt-50 pb-50 px-[12px] sm:px-0">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[25px] sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">혼자서도 충분히 학습할 수 있도록</span><br className="hidden sm:block" /> 다양한 지원을 약속합니다
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            혼자서도 충분히 학습할 수 있도록 다양한 지원 시스템을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {supportFeatures.map((feature, index) => (
            <div 
              key={index}
              className="card-elevated hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg text-center" dangerouslySetInnerHTML={{ __html: feature.title }}>
              </h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudySupportSystem; 