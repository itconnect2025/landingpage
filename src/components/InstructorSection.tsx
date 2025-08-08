import { Award, BookOpen, Users, TrendingUp, User, ExternalLink, Youtube } from "lucide-react";
import instructorProfile from "@/assets/person.jpg";
import { Button } from "@/components/ui/button";

const InstructorSection = () => {
  const experiences = [
    "현) 아이티커넥트(주) CEO",
    "현) 청년창업사관학교 15기",
    "현) 인프런 강사",
    "현) 비크리에이터 대표 강사",
    "현) (주)언더독스 창업퍼실리테이터",
    "현) 아이티커넥트 유튜브 채널 운영",
    "전) (주)엔코아 IT교육 전략기획실장",
    "전) (주)코코로톡 COO",
    "전) (주)L&CA CEO"
  ];

  const handleWebsiteClick = () => {
    window.open('https://itconnect.dev', '_blank');
  };

  const handleYoutubeClick = () => {
    window.open('https://www.youtube.com/@itconnect_dev', '_blank');
  };

  return (
    <section className="section-padding bg-white lg:min-h-[500px]">
      <div className="w-full pt-50 pb-50 px-[12px] sm:px-0">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[25px] sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            비개발자 출신의 IT 개발 대표가<br/> 직접 알려드립니다.
          </h2>
          <p className="text-[19px] sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            <span className="sm:hidden">개발자가 아닌 사람도 충분히 따라할 수 있도록<br/>바이브코딩 노하우 전수</span>
            <span className="hidden sm:inline">개발자가 아닌 사람도 충분히 따라할 수 있도록 바이브코딩 노하우 전수</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Instructor Photo & Basic Info */}
            <div className="text-center lg:text-right">
              <div className="relative inline-block mb-8">
                <img 
                  src={instructorProfile} 
                  alt="최원재 강사 프로필 - 아이티커넥트 대표, AI 코딩 부트캠프 강사" 
                  className="w-auto h-auto max-w-sm rounded-3xl object-contain shadow-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">최원재</h3>
              <p className="text-xl text-primary font-semibold mb-4">아이티커넥트 대표</p>
              <p className="text-muted-foreground max-w-md mx-auto lg:ml-auto lg:mr-0">
                "AI가 발전할 수록 이제 프로그래밍 영역도 Excel을 다루듯 누구나 해야 하는 영역이 될 것입니다. 그 시작이 바이브코딩입니다. 비개발자의 시선에서 최대한 친근하게 접근할 수 있도록 강의를 준비했습니다."
              </p>
            </div>

            {/* Experience & Buttons */}
            <div className="space-y-8 h-full flex flex-col">
              {/* Experience Section */}
              <div className="card-elevated flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3" />
                  주요 경력 사항
                </h3>
                <ul className="space-y-4">
                  {experiences.map((experience, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">{experience}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <Button 
                  onClick={handleWebsiteClick}
                  variant="outline" 
                  className="w-full text-lg py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white group"
                >
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  아이티커넥트 공식 홈페이지 방문하기
                </Button>
                
                <Button 
                  onClick={handleYoutubeClick}
                  variant="outline" 
                  className="w-full text-lg py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white group"
                >
                  <Youtube className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  아이티커넥트 유튜브 채널 구경하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;