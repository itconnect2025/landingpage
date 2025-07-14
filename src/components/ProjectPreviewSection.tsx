import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Database, Brain, BarChart3 } from "lucide-react";
import projectsPreview from "@/assets/projects-preview.jpg";

const ProjectPreviewSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "홍보용 랜딩페이지",
      description: "Lovable + Supabase를 활용한 현대적인 비즈니스 랜딩페이지",
      icon: <ExternalLink className="w-6 h-6" />,
      tech: ["Lovable", "Supabase", "React"],
      features: [
        "반응형 디자인",
        "SEO 최적화",
        "고객 문의 폼",
        "실시간 채팅"
      ],
      difficulty: "초급",
      time: "2시간",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 1,
      title: "포트폴리오 사이트",
      description: "21st.dev Magic MCP를 활용한 개인 브랜딩 웹사이트",
      icon: <Code className="w-6 h-6" />,
      tech: ["Next.js", "MCP", "Tailwind"],
      features: [
        "프로젝트 갤러리",
        "이력서 다운로드",
        "연락처 통합",
        "다크모드 지원"
      ],
      difficulty: "초급",
      time: "2.5시간",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 2,
      title: "카카오톡 감정분석 웹앱",
      description: "AI API 연동을 통한 실시간 감정 분석 애플리케이션",
      icon: <Brain className="w-6 h-6" />,
      tech: ["React", "OpenAI API", "Chart.js"],
      features: [
        "카톡 내역 업로드",
        "감정 분석 AI",
        "시각화 차트",
        "PDF 리포트"
      ],
      difficulty: "중급",
      time: "3시간",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "카페 입지선정 SaaS",
      description: "데이터 분석과 시각화를 통한 비즈니스 인텔리전스 도구",
      icon: <BarChart3 className="w-6 h-6" />,
      tech: ["React", "Mapbox", "D3.js"],
      features: [
        "지도 기반 분석",
        "유동인구 데이터",
        "경쟁사 분석",
        "수익성 예측"
      ],
      difficulty: "고급",
      time: "2.5시간",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            10시간으로 이 <span className="text-gradient-primary">4가지 프로젝트</span>를<br />
            모두 완성합니다
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            각 프로젝트는 실제 비즈니스에 바로 활용할 수 있는 완성도 높은 결과물입니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Preview Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={projectsPreview} 
                alt="프로젝트 미리보기" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold text-lg">4개</span>
            </div>
          </div>

          {/* Project Tabs */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`card-elevated cursor-pointer transition-all duration-300 ${
                  activeProject === index 
                    ? 'scale-105 shadow-xl border-primary' 
                    : 'hover:scale-102'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.difficulty === '초급' ? 'bg-green-100 text-green-600' :
                          project.difficulty === '중급' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {project.difficulty}
                        </span>
                        <span className="text-sm text-muted-foreground">{project.time}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    
                    {activeProject === index && (
                      <div className="animate-slide-up">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                          자세히 보기
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="text-center card-gradient">
            <div className="text-3xl font-bold text-gradient-primary mb-2">4개</div>
            <div className="text-muted-foreground">완성 프로젝트</div>
          </div>
          <div className="text-center card-gradient">
            <div className="text-3xl font-bold text-gradient-primary mb-2">10시간</div>
            <div className="text-muted-foreground">총 학습 시간</div>
          </div>
          <div className="text-center card-gradient">
            <div className="text-3xl font-bold text-gradient-primary mb-2">100%</div>
            <div className="text-muted-foreground">실무 활용 가능</div>
          </div>
          <div className="text-center card-gradient">
            <div className="text-3xl font-bold text-gradient-primary mb-2">평생</div>
            <div className="text-muted-foreground">소스코드 제공</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreviewSection;