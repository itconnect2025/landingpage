import { Button } from "@/components/ui/button";

const FixedFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl">
      {/* 흐르는 배경 애니메이션 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-blue-600 bg-[length:300%_100%] animate-gradient-flow"></div>
      
      {/* 오버레이로 약간의 투명도 추가 */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* 콘텐츠 영역 */}
      <div className="relative min-h-[200px] sm:min-h-[180px] lg:h-[150px] flex items-center justify-center py-3 sm:py-4">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-3 sm:gap-4 lg:gap-8 text-center lg:text-left">
            {/* 텍스트 영역 */}
            <div className="flex-1 text-white">
              <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed">
                <p>
                  <span className="font-bold text-yellow-300">"이 페이지는 코딩없이 100% AI로 만들어졌습니다"</span>
                  <br />
                  <span className="block mt-1">복잡한 코딩 대신 AI와 대화만으로 개발! 궁금하다면 클릭하세요 →</span>
                </p>
              </div>
            </div>
            
            {/* 버튼 영역 */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Button
                asChild
                className="w-full sm:w-auto mx-auto lg:mx-0 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-slate-950 hover:text-slate-900 font-extrabold text-base sm:text-lg lg:text-xl px-5 sm:px-7 lg:px-10 py-3 sm:py-4 lg:py-6 min-h-12 sm:min-h-14 rounded-2xl shadow-2xl transition-all duration-500 md:hover:scale-110 hover:shadow-[0_0_30px_rgba(255,193,7,0.6)] border-2 border-yellow-300 hover:border-yellow-200 relative overflow-hidden group"
              >
                <a
                  href="https://b-creator.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap relative z-10 flex items-center justify-center gap-2 animate-luxury-glow-slow"
                  style={{ animationDuration: '8s' }}
                >
                  <span className="hidden sm:inline">🚀 지금 바로 AI로 홈페이지 만들기</span>
                  <span className="sm:hidden">🚀 AI 홈페이지 제작</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedFooter; 