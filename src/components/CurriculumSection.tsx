import { CheckCircle, Clock, ArrowRight, BookOpen, Target, Code, Wrench, User, Brain, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CurriculumSection = () => {
  const handleGetStarted = () => {
    window.open('https://b-creator.com', '_blank');
  };

  const chapters = [
    {
      chapterNumber: 1,
      title: "AI 시대에 살아남기 위한 전략",
      description: "AI 시대의 필수 역량과 전략적 사고방식",
      lessonCount: 3,
      color: "from-blue-500 to-purple-600",
      lessons: [
        "창업가·기획자·마케터 모두 개발자가 되는 시대",
        "단 한줄의 문장으로 만들어지는 프로급 웹 페이지",
        "AI 활용도 300% 올리는 실전 프롬프트 작성 비법"
      ]
    },
    {
      chapterNumber: 2,
      title: "비개발자의 바이브코딩 완전정복",
      description: "코딩 몰라도 가능한 바이브코딩의 모든 것",
      lessonCount: 3,
      color: "from-green-500 to-teal-600",
      lessons: [
        "코딩 몰라도 따라하면 되는 5단계 바이브코딩 공식",
        "이제 나도 개발팀과 소통 가능! 핵심 IT 기초 지식",
        "비개발자가 바이브코딩 성공을 위해 알아야 할 3가지"
      ]
    },
    {
      chapterNumber: 3,
      title: "고객을 사로잡는 랜딩페이지 제작",
      description: "클릭률 폭발시키는 전문가급 랜딩페이지",
      lessonCount: 4,
      color: "from-orange-500 to-red-600",
      lessons: [
        "AI와 함께하는 전문 기획자급 페이지 구상 실습",
        "클릭률을 폭발시키는 AI 콘텐츠 기획 노하우",
        "Lovable로 10분 만에 완성하는 눈길 끄는 웹사이트",
        "코딩 1도 몰라도 가능한 상세페이지 수정 방법"
      ]
    },
    {
      chapterNumber: 4,
      title: "바이브코딩 필수 도구 준비하기",
      description: "개발 속도 10배 올리는 AI 도구 마스터",
      lessonCount: 6,
      color: "from-purple-500 to-pink-600",
      lessons: [
        "개발 속도 10배 올려주는 Cursor AI 알아보기",
        "내 손발처럼 움직이는 AI 전문 개발자 만들기",
        "항상 최신 트렌드로 코딩하는 AI 설정 가이드",
        "오류 걱정 없는 AI 자동 수정 시스템 구축",
        "전문가처럼 개발 계획을 세우는 방법",
        "작업 효율 극대화하는 필수 Extension 완벽 세팅"
      ]
    },
    {
      chapterNumber: 5,
      title: "나만의 포트폴리오 페이지 만들기",
      description: "인사팀 마음을 사로잡는 차별화된 포트폴리오",
      lessonCount: 5,
      color: "from-indigo-500 to-blue-600",
      lessons: [
        "인사팀 마음을 사로잡는 AI PRD & 콘텐츠 작성법",
        "경쟁자를 압도하는 차별화된 포트폴리오 콘텐츠 기획",
        "개성 넘치는 나만의 포트폴리오 사이트 바이브코딩",
        "합격률 높이는 입사지원용 포트폴리오 실전 제작 1편",
        "합격률 높이는 입사지원용 포트폴리오 실전 제작 2편"
      ]
    },
    {
      chapterNumber: 6,
      title: "메시지 감정 분석 서비스 만들기",
      description: "AI 기반 감정 분석 웹 서비스 개발",
      lessonCount: 3,
      color: "from-pink-500 to-rose-600",
      lessons: [
        "프로젝트 분석 및 기획서 작성 실습",
        "바이브 코딩으로 감정 분석 웹 개발하기 - 1편",
        "바이브 코딩으로 감정 분석 웹 개발하기 - 2편"
      ]
    },
    {
      chapterNumber: 7,
      title: "명함 인식 모바일 앱 만들기",
      description: "체크리스트 기반 완벽한 앱 개발",
      lessonCount: 3,
      color: "from-yellow-500 to-orange-600",
      lessons: [
        "쉽게 만드는 프로젝트 기획 및 문서화 과정",
        "빠뜨리지 않고 완성하는 체크리스트 기반 기능 개발",
        "프로젝트 완성도 검증하기"
      ]
    },
    {
      chapterNumber: 8,
      title: "창업 아이템급 카페 입지 분석 SaaS",
      description: "실제 수익 가능한 SaaS 개발 완성",
      lessonCount: 3,
      color: "from-emerald-500 to-green-600",
      lessons: [
        "실제 수익 가능한 SaaS 아이디어 분석",
        "수준 있는 PRD & TRD 작성 완전 가이드",
        "Claude Code로 완성하는 SaaS 웹 개발"
      ]
    },
    {
      chapterNumber: 9,
      title: "바이브코딩으로 랜딩페이지 런칭",
      description: "실제 서비스 런칭과 마케팅까지",
      lessonCount: 7,
      color: "from-red-500 to-pink-600",
      lessons: [
        "Lovable Project를 Cursor로 가져오기",
        "사용자 경험을 업그레이드하는 디자인 디테일 완성",
        "검색엔진 최적화 (SEO) 설정 및 등록하기",
        "데이터 기반 의사결정을 위한 Google Analytics 설정",
        "광고 성과 극대화하는 Facebook Pixel 완벽 설정",
        "네이버·메타·구글 광고 진짜로 돌려보기",
        "고객 행동 데이터로 서비스 개선하는 Hotjar 활용법"
      ]
    }
  ];

  const totalLessons = chapters.reduce((sum, chapter) => sum + chapter.lessonCount, 0);

  return (
    <section id="curriculum" className="section-padding bg-gradient-subtle lg:min-h-[500px]">
      <div className="w-full pt-50 pb-50 px-2.5 sm:px-0">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[25px] sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">9개 챕터</span>로 완성하는<div style={{ height: '16px' }}></div>
            실전 바이브코딩 여정
          </h2>
          <p className="text-[19px] text-muted-foreground max-w-3xl mx-auto mb-8">
            체계적인 단계별 학습으로 초보자도 전문가 수준의 결과물을 만들 수 있습니다
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-2xl">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-bold">총 {totalLessons}개 강의 완주</span>
          </div>
        </div>

        {/* Curriculum Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <div 
                key={chapter.chapterNumber}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                {/* Chapter Number Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${chapter.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {chapter.chapterNumber}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 pt-20 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-foreground leading-tight text-left">
                      {chapter.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">
                    {chapter.description}
                  </p>

                  {/* Lessons List */}
                  <div className="flex-1">
                    <div className="space-y-3">
                      {chapter.lessons.map((lesson, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Count */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm text-muted-foreground">
                      {chapter.lessonCount}개 강의
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            onClick={handleGetStarted}
            className="btn-hero glow-accent group text-xl px-12 py-6 h-auto relative overflow-hidden"
            style={{
              animation: 'glowPulse 2s infinite'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
            <span className="relative z-10">지금 바로 시작하기</span>
            <ArrowRight className="w-7 h-7 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;