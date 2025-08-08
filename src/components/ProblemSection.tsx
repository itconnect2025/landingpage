import { HelpCircle, Users, DollarSign, Clock, Brain } from "lucide-react";
import problemImage from "../assets/Problem_image.png";

const ProblemSection = () => {
  const problems = [
    {
      text: "창업에 도전하고 싶은데 아는 개발자가 없어요",
      textMobile: "창업 도전하는데 개발자가 없어요",
      icon: <Users className="w-6 h-6 text-red-500" />
    },
    {
      text: "MVP를 개발해보고 싶었는데 비용이 너무 비싸요",
      textMobile: "MVP 개발 비용이 너무 비싸요",
      icon: <DollarSign className="w-6 h-6 text-red-500" />
    },
    {
      text: "직접 개발을 배우기엔 너무 오래걸릴거 같아요",
      textMobile: "개발 배우기엔 너무 오래걸릴거 같아요",
      icon: <Clock className="w-6 h-6 text-red-500" />
    },
    {
      text: "AI가 해준다는데, 방법이 없을까요?",
      textMobile: "AI가 해준다는데 방법이 없을까요?",
      icon: <Brain className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden lg:min-h-[500px]">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      
      <div className="w-full pt-50 pb-50 px-[12px] sm:px-0">
        {/* Problem Section */}
        <div className="text-center mb-20 pt-25 pb-25">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[25px] sm:text-4xl md:text-6xl font-bold text-foreground mb-16">
            혹시, 지금 <span className="text-primary">이런 고민</span> 하고 계신가요?
          </h2>
          
          {/* New Layout: Left 50% - Right 50% */}
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto mt-12">
            {/* Left Side - 50% - Problem Image */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <img 
                  src={problemImage} 
                  alt="AI 코딩 부트캠프 - 비전공자도 개발을 배우고 싶어하는 사람들의 고민과 해결책" 
                  className="w-full h-auto max-w-md object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            {/* Right Side - 50% - Problems List */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div 
                    key={index}
                    className="card-elevated hover:scale-105 transition-transform duration-300 group p-3 sm:p-6"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-2 sm:mr-4 group-hover:bg-red-200 transition-colors flex-shrink-0">
                        {problem.icon}
                      </div>
                      <p className="text-base sm:text-xl font-medium text-foreground leading-relaxed">
                        <span className="block sm:hidden">{problem.textMobile}</span>
                        <span className="hidden sm:block">{problem.text}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 