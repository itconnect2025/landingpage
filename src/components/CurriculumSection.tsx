import { CheckCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CurriculumSection = () => {
  const chapters = [
    {
      id: 1,
      title: "AI 바이브 코딩 입문",
      duration: "30분",
      description: "AI 도구들의 기본 개념과 개발 환경 설정",
      topics: ["Cursor AI 설치 및 설정", "Claude & GPT 활용법", "프로젝트 구조 이해"],
      result: "개발 환경 완성"
    },
    {
      id: 2,
      title: "Lovable로 랜딩페이지 제작",
      duration: "2시간",
      description: "노코드 도구를 활용한 전문적인 웹사이트 제작",
      topics: ["Lovable 플랫폼 활용", "반응형 디자인 적용", "SEO 최적화"],
      result: "비즈니스 랜딩페이지 완성"
    },
    {
      id: 3,
      title: "Supabase 데이터베이스 연동",
      duration: "1시간",
      description: "백엔드 없이 데이터베이스 구축 및 연결",
      topics: ["Supabase 설정", "테이블 설계", "실시간 데이터 연동"],
      result: "데이터베이스 시스템 구축"
    },
    {
      id: 4,
      title: "21st.dev MCP 포트폴리오",
      duration: "2.5시간",
      description: "Magic MCP를 활용한 개인 브랜딩 사이트",
      topics: ["MCP 도구 활용", "포트폴리오 구조 설계", "개인 브랜딩 전략"],
      result: "프로페셔널 포트폴리오 사이트"
    },
    {
      id: 5,
      title: "AI API 연동 기초",
      duration: "1시간",
      description: "OpenAI API를 활용한 인공지능 기능 구현",
      topics: ["API 키 설정", "프롬프트 엔지니어링", "응답 처리"],
      result: "AI 기능 기본 구조"
    },
    {
      id: 6,
      title: "카카오톡 감정분석 앱",
      duration: "2시간",
      description: "AI를 활용한 텍스트 감정 분석 웹앱 개발",
      topics: ["파일 업로드 처리", "감정 분석 로직", "결과 시각화"],
      result: "감정분석 웹앱 완성"
    },
    {
      id: 7,
      title: "데이터 시각화 기초",
      duration: "30분",
      description: "Chart.js와 Mapbox를 활용한 데이터 표현",
      topics: ["차트 라이브러리 활용", "지도 API 연동", "인터랙티브 UI"],
      result: "시각화 컴포넌트 제작"
    },
    {
      id: 8,
      title: "카페 입지선정 SaaS",
      duration: "2시간",
      description: "비즈니스 분석 도구 완성하기",
      topics: ["지도 기반 분석", "데이터 통합", "리포트 생성"],
      result: "완전한 SaaS 애플리케이션"
    },
    {
      id: 9,
      title: "배포 및 운영",
      duration: "30분",
      description: "프로젝트 배포와 실제 서비스 운영",
      topics: ["도메인 연결", "성능 최적화", "모니터링 설정"],
      result: "실제 서비스 런칭"
    }
  ];

  const totalDuration = chapters.reduce((sum, chapter) => {
    const hours = parseFloat(chapter.duration.replace('시간', '').replace('분', '분').includes('분') 
      ? (parseFloat(chapter.duration.replace('분', '')) / 60).toString() 
      : chapter.duration.replace('시간', ''));
    return sum + hours;
  }, 0);

  return (
    <section id="curriculum" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">9개 챕터</span>로 완성하는<br />
            실전 코딩 여정
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            체계적인 단계별 학습으로 초보자도 전문가 수준의 결과물을 만들 수 있습니다
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-2xl">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-bold">총 {Math.round(totalDuration)}시간 완주</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {chapters.map((chapter, index) => (
              <div key={chapter.id} className="relative flex items-start mb-12">
                {/* Timeline Dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-primary rounded-full shadow-lg">
                  <span className="text-primary font-bold text-lg">{chapter.id}</span>
                </div>

                {/* Content Card */}
                <div className="ml-8 flex-1">
                  <div className="card-elevated hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {chapter.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">{chapter.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground font-medium">{chapter.duration}</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Topics */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                          학습 내용
                        </h4>
                        <ul className="space-y-2">
                          {chapter.topics.map((topic, i) => (
                            <li key={i} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Result */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2" />
                          완성 결과물
                        </h4>
                        <div className="p-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg border border-secondary/20">
                          <p className="text-sm font-medium text-foreground">{chapter.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block card-gradient glow-primary p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">학습 완료 후</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>✅ 4개의 완성된 프로젝트</p>
              <p>✅ 실무에서 바로 활용 가능한 스킬</p>
              <p>✅ AI 도구 마스터 인증서</p>
              <p>✅ 평생 업데이트 지원</p>
            </div>
            <Button className="btn-hero mt-6 w-full">
              이 모든 과정을 단 10시간에
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;