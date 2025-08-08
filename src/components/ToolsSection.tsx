import { Brain, Code, Database, Zap, Wrench, Search } from "lucide-react";
import chatgptImage from "../assets/chatgpt.png";
import claudeImage from "../assets/Claude.png";
import cursorAIImage from "../assets/Cursor-AI.png";
import lovableImage from "../assets/Lovable.png";
import netlifyImage from "../assets/netlify_logo.png";
import gensparkImage from "../assets/Genspark.jpg";

const ToolsSection = () => {
  const tools = [
    {
      name: "ChatGPT",
      fullName: "OpenAI의 대화형 AI",
      description: "질문답변, 텍스트 생성, 번역 등 다양한 작업을 수행",
      color: "from-green-500 to-emerald-600",
      icon: "🤖",
      image: chatgptImage
    },
    {
      name: "Claude",
      fullName: "Anthropic의 대화형 AI",
      description: "분석, 창작, 코딩 등에 강점이며, 다양한 작업을 수행",
      color: "from-orange-500 to-amber-600",
      icon: "🧠",
      image: claudeImage
    },
    {
      name: "Cursor AI",
      fullName: "AI 기반 코드 에디터",
      description: "자연어 명령어와 예측 편집으로 개발 생산성을 높임",
      color: "from-blue-500 to-cyan-600",
      icon: "⚡",
      image: cursorAIImage
    },
    {
      name: "Lovable",
      fullName: "AI 기반 개발 플랫폼",
      description: "자연어 채팅만으로 코딩 없이 웹 애플리케이션 개발",
      color: "from-purple-500 to-pink-600",
      icon: "💝",
      image: lovableImage
    },
    {
      name: "Netlify",
      fullName: "프론트엔드 플랫폼",
      description: "웹/앱을 빌드, 배포, 확장하는 서비스 플랫폼",
      color: "from-emerald-500 to-green-600",
      icon: "🗄️",
      image: netlifyImage
    },
    {
      name: "Genspark",
      fullName: "AI 실시간 검색",
      description: "실시간 자료 조사 등 다양한 AI Agent 기능 제공",
      color: "from-indigo-500 to-blue-600",
      icon: "🔍",
      image: gensparkImage
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle lg:min-h-[500px]">
      <div className="w-full pt-50 pb-50">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
            <Wrench className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">최신 AI 도구</span>를 활용해<div style={{ height: '16px' }}></div>
            개발자처럼 만드는 프로젝트 강의
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            기획부터 개발까지, 모든 단계에서 AI가 도와주니까 비전공자도 할 수 있습니다
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                {/* Logo Image Area */}
                <div className="w-full h-32 flex items-center justify-center relative overflow-hidden bg-white pt-4 pb-0">
                  {/* Actual logo image */}
                  <img 
                    src={tool.image} 
                    alt={`${tool.name} ${tool.fullName} 로고 - AI 코딩 부트캠프에서 사용하는 ${tool.name} 도구`}
                    className="w-20 h-20 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content */}
                <div className="px-6 pb-6 pt-0">
                  <div className="mb-3">
                    <h3 className="text-3xl font-bold text-foreground mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-xl text-muted-foreground font-semibold">
                      {tool.fullName}
                    </p>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;