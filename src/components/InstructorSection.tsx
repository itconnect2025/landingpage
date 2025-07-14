import { Award, BookOpen, Users, TrendingUp } from "lucide-react";
import instructorProfile from "@/assets/instructor-profile.jpg";

const InstructorSection = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "15년차 경력",
      description: "제품 기획 및 개발 분야"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "500+ 수강생",
      description: "성공적인 교육 경험"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "10+ 프로젝트",
      description: "실무 런칭 경험"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "95% 만족도",
      description: "수강생 평가 기준"
    }
  ];

  const experiences = [
    "네이버 블로그 플랫폼 기획 (MAU 3000만+)",
    "카카오 메신저 서비스 개발 참여",
    "스타트업 CTO로 3년간 팀 리딩",
    "AI 스타트업 제품 기획 및 개발",
    "온라인 교육 플랫폼 구축 경험"
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">15년차 제품 기획자</span>가<br />
            직접 알려드립니다
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            이론보다 실전, 암기보다 활용에 집중한 현직 개발자의 생생한 노하우
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Instructor Photo & Basic Info */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <img 
                src={instructorProfile} 
                alt="강사 프로필" 
                className="w-80 h-80 rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                15년
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4">김테크 (Kim Tech)</h3>
            <p className="text-xl text-primary font-semibold mb-4">시니어 제품 기획자 / 풀스택 개발자</p>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0">
              "복잡한 기술을 쉽게 전달하는 것이 제 강점입니다. 
              실무에서 바로 써먹을 수 있는 실전 노하우를 공유합니다."
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="card-elevated text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                    {achievement.icon}
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Philosophy */}
          <div className="space-y-8">
            {/* Experience Section */}
            <div className="card-elevated">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3" />
                주요 경력 사항
              </h3>
              <ul className="space-y-4">
                {experiences.map((experience, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{experience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teaching Philosophy */}
            <div className="card-gradient glow-primary">
              <h3 className="text-2xl font-bold text-gradient-primary mb-6">교육 철학</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">실전 중심 학습</h4>
                    <p className="text-sm text-muted-foreground">이론보다는 실제 프로젝트를 만들면서 자연스럽게 학습</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">AI 도구 활용</h4>
                    <p className="text-sm text-muted-foreground">최신 AI 도구를 활용해서 효율성과 퀄리티 모두 확보</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">즉시 활용 가능</h4>
                    <p className="text-sm text-muted-foreground">수강 당일부터 실제 비즈니스에 적용할 수 있는 결과물</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20">
              <blockquote className="text-lg font-medium text-foreground mb-4 italic">
                "기술은 도구일 뿐입니다. 중요한 것은 그 도구로 무엇을 만들어낼 수 있는지에 대한 상상력입니다."
              </blockquote>
              <cite className="text-muted-foreground">- 김테크 강사</cite>
            </div>
          </div>
        </div>

        {/* Support System */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">완벽한 학습 지원 시스템</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-elevated">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-foreground mb-2">1:1 질문 채널</h4>
              <p className="text-sm text-muted-foreground">강의 중 막히는 부분은 언제든지 개별 문의</p>
            </div>
            
            <div className="card-elevated">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-foreground mb-2">수강생 커뮤니티</h4>
              <p className="text-sm text-muted-foreground">동료 수강생들과 정보 공유 및 네트워킹</p>
            </div>
            
            <div className="card-elevated">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-foreground mb-2">평생 업데이트</h4>
              <p className="text-sm text-muted-foreground">새로운 AI 도구와 기술 트렌드 지속 제공</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;