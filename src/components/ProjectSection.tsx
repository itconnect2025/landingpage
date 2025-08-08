import { ExternalLink, Code, Database, Brain, BarChart3, FileText, Heart, User, MapPin, Users, ArrowRight } from "lucide-react";
import businessCardImage from "../assets/business-card.png";
import emotionAnalysisImage from "../assets/emotion-analysis.png";
import portfolioImage from "../assets/portpolio.png";
import cafeLocationImage from "../assets/cafe-location.png";
import landingPageImage from "../assets/lading-page.png";

const ProjectSection = () => {
  const projects = [
    {
      id: 0,
      title: "📄 명함 인식 추출 프로그램",
      description: "PDF나 이미지 파일로 된 명함에서 전화번호, 이름, 회사명 등을 자동으로 인식하여 추출하는 AI 기반 프로그램입니다.",
      color: "from-blue-500 to-purple-500",
      difficulty: "초급",
      time: "2시간",
      image: businessCardImage
    },
    {
      id: 1,
      title: "💝 한국어 감정 자동 분석기",
      description: "한국어 텍스트에 담긴 감정을 AI가 분석하여 긍정, 부정, 중립의 감정을 자동으로 분류하는 웹 애플리케이션입니다.",
      color: "from-green-500 to-teal-500",
      difficulty: "중급",
      time: "2시간",
      image: emotionAnalysisImage
    },
    {
      id: 2,
      title: "👨‍💻 개발자 포트폴리오 페이지",
      description: "취업과 이직을 위한 개인 브랜딩이 가능한 전문적인 포트폴리오 웹사이트를 제작하는 프로젝트입니다.",
      color: "from-orange-500 to-red-500",
      difficulty: "초급",
      time: "2시간",
      image: portfolioImage
    },
    {
      id: 3,
      title: "📍 카페 입지 자동 분석기",
      description: "카페 창업을 원하는 분들을 위해 위치 정보를 입력하면 AI가 유동인구, 경쟁사, 수익성을 분석해주는 도구입니다.",
      color: "from-cyan-500 to-blue-500",
      difficulty: "고급",
      time: "2시간",
      image: cafeLocationImage
    },
    {
      id: 4,
      title: "🎯 고객 유치 랜딩페이지",
      description: "서비스를 효과적으로 홍보하고 고객을 유치할 수 있는 현대적이고 매력적인 랜딩페이지를 제작합니다.",
      color: "from-purple-500 to-pink-500",
      difficulty: "초급",
      time: "2시간",
      image: landingPageImage
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden lg:min-h-[500px]">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      
      <div className="w-full relative z-10 pt-50 pb-50 px-[12px] sm:px-0">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[25px] sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="sm:hidden">10시간으로 이 <span className="text-primary">5가지 프로젝트</span>를<br/>모두 완성합니다.</span>
            <span className="hidden sm:inline">10시간으로 이 <span className="text-primary">5가지 프로젝트</span>를 모두 완성합니다</span>
          </h2>
          <p className="text-[19px] text-muted-foreground max-w-3xl mx-auto">
            <span className="sm:hidden">각 프로젝트는 실제 비즈니스에 적용 가능한<br/> 완성도 높은 결과물입니다.</span>
            <span className="hidden sm:inline">각 프로젝트는 실제 비즈니스에 바로 활용할 수 있는 완성도 높은 결과물입니다</span>
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="card-elevated p-6 hover:scale-105 transition-transform duration-300 h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} 프로젝트 미리보기 - AI 코딩 부트캠프 ${project.difficulty} 난이도 ${project.time} 소요`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col text-left">
                  <div className="mb-3 pt-2.5">
                    <h3 className="text-2xl font-bold text-foreground line-clamp-1">{project.title}</h3>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.difficulty === '초급' ? 'bg-green-100 text-green-600' :
                      project.difficulty === '중급' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">{project.time}</span>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center card-gradient">
              <div className="text-3xl font-bold text-primary mb-2">5개</div>
              <div className="text-muted-foreground">완성 프로젝트</div>
            </div>
            <div className="text-center card-gradient">
              <div className="text-3xl font-bold text-primary mb-2">10시간</div>
              <div className="text-muted-foreground">총 학습 시간</div>
            </div>
            <div className="text-center card-gradient">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">실무 활용 가능</div>
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="mt-20 text-center">
          <div className="inline-block card-gradient glow-primary p-8 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-primary mb-6">🚀 압도적 비용 절감 효과</h3>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-[24px] sm:text-3xl font-bold text-red-500 line-through">외주 개발 수천만원</span>
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
              <span className="text-[28px] sm:text-4xl font-bold text-primary">강의 수강 98,000원</span>
            </div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-accent">최대 99% 비용 절감!</span>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-[20px] sm:text-xl text-muted-foreground">
                MVP 제작에 들어가는<br />
                수백 ~ 수천만원 외주비용 대신<br />
                12만원 정도로 해결하세요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection; 