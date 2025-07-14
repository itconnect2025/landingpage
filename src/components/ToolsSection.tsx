import { Brain, Code, Database, Zap } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    {
      name: "Cursor AI",
      description: "AI 기반 코드 자동완성 및 리팩토링",
      icon: <Code className="w-8 h-8" />,
      features: [
        "실시간 코드 자동완성",
        "버그 자동 감지 및 수정",
        "코드 리팩토링 제안",
        "자연어로 코드 생성"
      ],
      color: "from-blue-500 to-purple-600",
      badge: "메인 에디터"
    },
    {
      name: "Claude & GPT",
      description: "기획서 작성 및 콘텐츠 생성",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "프로젝트 기획서 작성",
        "UI/UX 디자인 제안",
        "콘텐츠 자동 생성",
        "코드 설명 및 문서화"
      ],
      color: "from-green-500 to-teal-600",
      badge: "AI 어시스턴트"
    },
    {
      name: "Lovable",
      description: "노코드 웹사이트 제작 플랫폼",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "드래그 앤 드롭 빌더",
        "반응형 디자인 자동",
        "SEO 최적화 내장",
        "실시간 배포"
      ],
      color: "from-orange-500 to-red-600",
      badge: "노코드 플랫폼"
    },
    {
      name: "Supabase",
      description: "데이터베이스 및 백엔드 서비스",
      icon: <Database className="w-8 h-8" />,
      features: [
        "PostgreSQL 데이터베이스",
        "실시간 동기화",
        "사용자 인증 시스템",
        "파일 스토리지"
      ],
      color: "from-purple-500 to-pink-600",
      badge: "백엔드 서비스"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">최신 AI 도구</span>로<br />
            전문 개발자처럼
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            개발 과정의 모든 단계에서 AI가 도와주니까 비전공자도 프로 수준의 결과물을 만들 수 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="card-elevated hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shadow-lg`}>
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${tool.color} text-white`}>
                  {tool.badge}
                </span>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2" />
                  주요 기능
                </h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Integration Highlight */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto card-gradient glow-primary">
            <h3 className="text-2xl font-bold text-gradient-primary mb-6">완벽한 워크플로우</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <span className="font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">기획</h4>
                <p className="text-sm text-muted-foreground">Claude로 프로젝트 설계</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <span className="font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">개발</h4>
                <p className="text-sm text-muted-foreground">Cursor AI로 코딩</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <span className="font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">구축</h4>
                <p className="text-sm text-muted-foreground">Lovable로 빠른 제작</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <span className="font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">배포</h4>
                <p className="text-sm text-muted-foreground">Supabase로 런칭</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <p className="text-lg font-medium text-foreground mb-2">
                모든 도구가 완벽하게 연동되어
              </p>
              <p className="text-muted-foreground">
                복잡한 설정 없이도 전문적인 개발 환경을 구축할 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;