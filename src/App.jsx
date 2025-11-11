import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowUp,
} from "lucide-react";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-gradient-to-b from-blue-50/80 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* 왼쪽: 로고 + 제목 */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <a
                href="/"
                className="flex items-center space-x-2 cursor-pointer group"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/img/minilogo.png"
                    alt="영진직업전문학교 로고"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[#001f5b] transition-colors">
                  <span className="text-base sm:text-xl font-extrabold whitespace-nowrap">
                    영진직업전문학교
                  </span>
                  <span className="text-xs sm:text-base font-medium ml-1 hidden sm:inline whitespace-nowrap">
                    IT분야 전문교육기관
                  </span>
                </span>
              </a>
            </div>

            {/* 중앙: 네비게이션 (데스크톱만) */}
            <nav className="hidden lg:flex space-x-4 xl:space-x-6">
              {[
                ["courses", "모집과정"],
                ["AnimatedCounter", "지원소개"],
                ["allPortfolios", "포트폴리오"],
                ["ProcessSection", "운영과정"],
                ["SupportSection", "선발절차"],
                ["faqs", "FAQ"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors font-medium whitespace-nowrap text-sm xl:text-base ${
                    isScrolled
                      ? "text-[#1a2847] hover:text-orange-500"
                      : "text-[#2d3e5f] hover:text-orange-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* 오른쪽: 로그인/회원가입 + 햄버거 메뉴 */}
            <div className="flex items-center space-x-4">
              {/* 데스크톱 로그인/회원가입 버튼 */}
              <button
                className={`transition-all duration-300 font-medium hidden lg:block px-5 py-2 rounded-lg border-2 ${
                  isScrolled
                    ? "text-[#1a2847] border-[#1a2847] hover:bg-[#1a2847] hover:text-white"
                    : "text-[#2d3e5f] border-[#2d3e5f] hover:bg-[#2d3e5f] hover:text-white"
                }`}
              >
                로그인
              </button>
              <button
                className={`transition-all duration-300 font-medium hidden lg:block px-5 py-2 rounded-lg ${
                  isScrolled
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-orange-400 text-white hover:bg-orange-500"
                }`}
              >
                회원가입
              </button>

              {/* 모바일 햄버거 메뉴 */}
              <button
                className={`lg:hidden ${
                  isScrolled ? "text-gray-700" : "text-[#2d3e5f]"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isMenuOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* 사이드 메뉴 */}
      <div
        className={`lg:hidden fixed right-0 top-0 z-50 w-64 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* 메뉴 헤더 */}
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold text-[#001f5b]">메뉴</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={28} className="text-gray-700" />
            </button>
          </div>

          {/* 메뉴 항목 */}
          <nav className="flex-1 overflow-y-auto">
            <div className="flex flex-col p-4 space-y-4">
              {[
                ["courses", "모집과정"],
                ["process", "지원소개"],
                ["portfolio", "포트폴리오"],
                ["reviews", "운영과정"],
                ["event", "선발절차"],
                ["faq", "FAQ"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-lg font-medium text-gray-800 hover:text-orange-500 py-3 border-b"
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>

          {/* 하단 버튼 */}
          <div className="p-4 border-t space-y-3">
            <button className="w-full text-[#1a2847] border-2 border-[#1a2847] hover:bg-[#1a2847] hover:text-white py-3 rounded-lg font-medium transition-all">
              로그인
            </button>
            <button className="w-full bg-orange-500 text-white hover:bg-orange-600 py-3 rounded-lg font-medium transition-all">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-10 px-4 overflow-hidden -mt-20">
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-transparent"
        style={{ height: "60%" }}
      ></div>

      <div
        className="absolute top-0 inset-x-0 opacity-10"
        style={{ height: "50%" }}
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
        <p className="text-2xl md:text-2xl text-orange-500 font-bold mb-6 text-sm uppercase tracking-wide">
          비전공자도 시작할 수 있다!
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          "기초부터 취업까지, 맞춤형 IT 전문 교육의 시작"
        </h2>
        <h1 className="text-5xl md:text-5xl font-black mb-12">
          <span className="text-gray-800">영진직업전문학교 IT교육관</span>
        </h1>

        <div className="mt-40 flex flex-col items-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-300" />
          <ChevronDown className="w-8 h-8 text-gray-300 -mt-4" />
        </div>
      </div>
    </section>
  );
};

// Course Card Component
const CourseCard = ({
  title,
  subtitle,
  tags,
  image,
  recruitStatus = "모집중", // "모집중" 또는 "모집종료"
  recruitPeriod = "", // "~ 25.11.11"
  educationPeriod = "", // "25.11.05 ~ 26.04.06"
  link = "", // 링크 URL
}) => {
  const isRecruiting = recruitStatus === "모집중";

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 group ${
        link ? "cursor-pointer hover:shadow-lg" : "cursor-default"
      }`}
      onClick={handleClick}
    >
      {/* 이미지 영역 */}
      <div className="relative h-48 overflow-hidden">
        {/* 모집 상태 배지 */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`px-3 py-1 rounded-md text-xs font-bold ${
              isRecruiting
                ? "bg-orange-500 text-white"
                : "bg-gray-400 text-white"
            }`}
          >
            {recruitStatus}
          </span>
        </div>

        {/* 이미지 */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.querySelector(
                ".fallback-bg"
              ).style.display = "flex";
            }}
          />
        ) : null}

        {/* 이미지 로드 실패시 폴백 배경 */}
        <div className="fallback-bg hidden w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 items-center justify-center">
          <div className="text-center p-6">
            <p className="text-sm text-gray-500">이미지 준비중</p>
          </div>
        </div>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="p-5">
        {/* 작은 설명 */}
        <p className="text-xs text-gray-500 mb-2">{subtitle}</p>

        {/* 큰 설명 */}
        <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>

        {/* 모집기간 */}
        {recruitPeriod && (
          <p className="text-xs text-gray-600 mb-1">
            <span className="font-semibold">모집기간</span> {recruitPeriod}
          </p>
        )}

        {/* 교육기간 */}
        {educationPeriod && (
          <p className="text-xs text-gray-600 mb-3">
            <span className="font-semibold">교육기간</span> {educationPeriod}
          </p>
        )}

        {/* 태그 */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
// Courses Section Component\
const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("모집중");
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const courses = [
    {
      title: "웹퍼블리셔, UI/UX, 웹디자인, 영상 (5개월)",
      subtitle: "웹퍼블리셔, UI/UX, 웹디자인, 영상",
      tags: ["웹퍼블리셔", "UI/UX", "웹디자인", "영상"],
      image: "/img/cell1.png",
      recruitStatus: "모집중",
      recruitPeriod: "",
      educationPeriod: "2025.11.17 ~ 2026.04.16",
      link: "http://www.yjjob.or.kr/p/?j=58&edu_code=VmtaYVUxWnRWbkpQVlVwUlZrUkJPUT09K00=",
    },
    {
      title: "(출판)디지털 편집디자인 (인디자인,포트폴리오) (5개월)",
      subtitle: "인디자인, 포토폴리오",
      tags: ["인디자인", "포토폴리오"],
      image: "/img/cell2.png",
      recruitStatus: "모집중",
      recruitPeriod: "",
      educationPeriod: "2025.12.01 ~ 2026.04.30",
      link: "http://www.yjjob.or.kr/p/?j=58&edu_code=VmtaYVUxWnRWbkpPVnpWUlZrUkJPUT09K00=",
    },
    {
      title: "생성형 AI 기반 UI/UX디자인 & 웹앱 콘텐츠 개발 (6개월)",
      subtitle: "React, Node.js, MongoDB",
      tags: ["React", "Node.js", "개발"],
      image: "/img/cell3.png",
      recruitStatus: "모집종료",
      recruitPeriod: "",
      educationPeriod: "2025.08.12 ~ 2026.03.06",
    },
    {
      title: "게임그래픽(3D캐릭터/배경/웹툰)제작 전문가 양성과정 (6개월)",
      subtitle: "3D캐릭터, 배경, 웹툰",
      tags: ["3D캐릭터", "배경", "웹툰"],
      image: "/img/cell4.png",
      recruitStatus: "모집종료",
      recruitPeriod: "",
      educationPeriod: "2025.08.12 ~ 2026.02.12",
    },
    {
      title:
        "생성형 AI를 활용한 디지털 영상 편집(프리미어, 애프터이펙트) 및 콘텐츠 제작 과정 (6개월)",
      subtitle: "프리미어, 애프터이펙트",
      tags: ["프리미어", "애프터이펙트", "영상편집"],
      image: "/img/cell5.png",
      recruitStatus: "모집종료",
      recruitPeriod: "",
      educationPeriod: "2025.08.19 ~ 2026.02.19",
    },
    {
      title: "자바&스프링부트 기반 웹개발자 과정 (6개월)",
      subtitle: "자바, 스프링부트",
      tags: ["자바", "스프링부트", "웹개발"],
      image: "/img/cell6.png",
      recruitStatus: "모집종료",
      recruitPeriod: "",
      educationPeriod: "2025.07.22 ~ 2026.01.23",
    },
  ];

  const filters = ["모집중", "전체과정"];

  const filteredCourses = useMemo(() => {
    if (activeTab === "모집중") {
      return courses.filter((course) => course.recruitStatus === "모집중");
    }
    return courses;
  }, [activeTab]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="courses" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        실력과 경험을 동시에 쌓는{" "}
        <span className="text-orange-500">영진 IT</span> 교육과정
      </h2>

      <div className="flex flex-wrap gap-3 mb-8 mt-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveTab(filter)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === filter
                ? "bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg scale-105"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-8 pt-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {filteredCourses.map((course, index) => (
          <div key={index} className="flex-shrink-0 w-80 md:w-96">
            <CourseCard {...course} />
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

// Animated Counter Component

const AnimatedCounter = ({ end, duration = 800, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasAnimated.current = false;
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true;
    let startTime;
    let animationFrame;

    // easeOutQuad 함수로 더 빠르게 느껴지도록
    const easeOutQuad = (t) => t * (2 - t);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      if (progress < 1) {
        setCount(Math.floor(end * easedProgress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

// Stats Section Component
const StatsSection = () => {
  return (
    <section id="AnimatedCounter" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          "IT 전문가로 가는 길, 왜 영진이어야 할까요?"
        </h2>

        <div className="flex justify-center items-start gap-4 sm:gap-6 md:gap-8">
          {/* IT분야 취업률 */}
          <div className="text-center relative group flex-1 min-w-0">
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                IT분야 취업률
              </p>
              <div className="relative">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-help flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-40 sm:w-48 bg-gray-800 text-white text-xs rounded-lg py-2 px-3 z-10 whitespace-normal">
                  IT 관련 분야
                  <br />
                  취업 성공률을 나타냅니다
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                <AnimatedCounter end={85} suffix="%" duration={1000} />
              </p>
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4L4 12h5v8h6v-8h5L12 4z" />
              </svg>
            </div>
          </div>

          {/* 수강생 만족도 */}
          <div className="text-center relative group flex-1 min-w-0">
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                수강생 만족도
              </p>
              <div className="relative">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-help flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-40 sm:w-48 bg-gray-800 text-white text-xs rounded-lg py-2 px-3 z-10 whitespace-normal">
                  수강생들의
                  <br />
                  교육 만족도 평균입니다
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                <AnimatedCounter end={96} suffix="%" duration={1000} />
              </p>
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4L4 12h5v8h6v-8h5L12 4z" />
              </svg>
            </div>
          </div>

          {/* 포트폴리오 완성 */}
          <div className="text-center relative group flex-1 min-w-0">
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                포트폴리오 완성
              </p>
              <div className="relative">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-help flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-40 sm:w-48 bg-gray-800 text-white text-xs rounded-lg py-2 px-3 z-10 whitespace-normal">
                  평균 포트폴리오 완성 기간입니다
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              <AnimatedCounter end={5} suffix="개월" duration={1000} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
// Scroll Animation Hook
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};
// Feature Section Component
const FeatureSection = ({
  title,
  subtitle,
  description,
  subDescription,
  image,
  imagePosition = "right",
  backgroundColor = "bg-gray-100",
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className={`${backgroundColor} py-12 md:py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-8 md:gap-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000`}
        >
          <div className="flex-1 w-full">
            <p className="text-orange-500 font-semibold mb-2 text-sm md:text-base">
              {subtitle}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              {description}
            </p>
            {subDescription && (
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {subDescription}
              </p>
            )}
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl">{image}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Sections Component
const FeatureSections = () => {
  return (
    <>
      <FeatureSection
        subtitle="개인별 맞춤케어"
        title="체계적인 학습 관리와 취업 지원 시스템"
        description="영진 IT교육은 학생 개개인의 학습 진도와 수준을 꼼꼼히 관리하는 맞춤형 학습 관리 시스템을 제공합니다."
        subDescription="또한 포트폴리오 준비부터 면접 대비까지 현업 멘토의 1:1 맞춤 지도를 통해 취업 지원 프로그램을 운영합니다."
        image={
          <img
            src="/img/img (1).jpg"
            alt="학습 관리 시스템"
            className="w-full h-64 md:h-80 object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<div class="bg-gradient-to-br from-gray-400 to-gray-500 w-full h-64 md:h-80 flex items-center justify-center"><span class="text-white text-sm md:text-base">이미지 준비중</span></div>';
            }}
          />
        }
        imagePosition="right"
        backgroundColor="bg-gray-100"
      />

      <FeatureSection
        subtitle="실무 현장 중심"
        title="업계 트렌드를 반영한 실무 중심 커리큘럼"
        description="영진 IT교육의 커리큘럼은 최신 업계 트렌드를 실시 반영한 실무 기술을 바탕으로 현장에서 통하는 실무 역량을 기를 수 있습니다."
        subDescription="또한 프로젝트 중심 학습으로 실무에서의 역량을 체크해 취업 성공률을 높입니다."
        image={
          <img
            src="/img/img (2).jpg"
            alt="실무 커리큘럼"
            className="w-full h-64 md:h-80 object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<div class="bg-gradient-to-br from-gray-400 to-gray-500 w-full h-64 md:h-80 flex items-center justify-center"><span class="text-white text-sm md:text-base">이미지 준비중</span></div>';
            }}
          />
        }
        imagePosition="left"
        backgroundColor="bg-gray-100"
      />

      <FeatureSection
        subtitle="국비지원 100%"
        title="교육비 ZERO! 월 최대 70만원 지원"
        description="국비 전액 지원으로 교육비 부담 없이 누구나 양질의 교육을 학습할 수 있습니다."
        subDescription="또한 훈련 장려금으로 월 최대 70만원까지 지급되어 학업과 생활을 동시에 이어갈 수 있습니다."
        image={
          <img
            src="/img/img (3).jpg"
            alt="국비지원"
            className="w-full h-64 md:h-80 object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<div class="bg-gradient-to-br from-gray-400 to-gray-500 w-full h-64 md:h-80 flex items-center justify-center"><span class="text-white text-sm md:text-base">이미지 준비중</span></div>';
            }}
          />
        }
        imagePosition="right"
        backgroundColor="bg-gray-100"
      />
    </>
  );
};
//FullWidthBannerSection
const FullWidthBannerSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[500px] overflow-hidden bg-gradient-to-br from-[#1a2847] via-[#243450] to-[#2d3e5f]">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 md:w-40 md:h-40 bg-indigo-300 rounded-full blur-2xl"></div>
      </div>

      {/* 별무늬 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-orange-400 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 10}px`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-8 md:py-0">
        {/* 왼쪽 텍스트 영역 */}
        <div className="text-white text-center md:text-left mb-6 md:mb-0">
          <p className="text-orange-400 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase">
            Special Offer
          </p>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
            2025년 신규 과정
            <br />
            <span className="text-orange-400">특별 할인</span> 진행중
          </h2>
          <p className="text-blue-100 text-xs md:text-base mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
            IT 전문가로의 첫 걸음, 지금 시작하세요.
            <br />
            국비지원으로 부담없이 배우는 실무 중심 교육
          </p>
          <button className="bg-white text-[#1a2847] px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-base hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            자세히 보기
          </button>
        </div>

        {/* 오른쪽 이미지/카드 영역 */}
        <div className="relative">
          <div className="w-48 h-56 md:w-80 md:h-96 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 overflow-hidden">
            {/* 카드 내용 */}
            <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-2 md:mb-4">
                  <h3 className="text-2xl md:text-4xl font-bold text-orange-500">
                    2025
                  </h3>
                </div>
                <p className="text-gray-600 text-[10px] md:text-sm font-semibold mb-1 md:mb-2">
                  YOUNGJIN IT EDUCATION
                </p>
                <h4 className="text-lg md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                  NEW YEAR
                  <br />
                  SPECIAL
                </h4>
              </div>

              <div className="space-y-1 md:space-y-2">
                <div className="flex items-center text-[10px] md:text-sm text-gray-700">
                  <span className="font-semibold mr-1 md:mr-2">✓</span>
                  <span>100% 국비지원</span>
                </div>
                <div className="flex items-center text-[10px] md:text-sm text-gray-700">
                  <span className="font-semibold mr-1 md:mr-2">✓</span>
                  <span>월 최대 70만원 지급</span>
                </div>
                <div className="flex items-center text-[10px] md:text-sm text-gray-700">
                  <span className="font-semibold mr-1 md:mr-2">✓</span>
                  <span>실무 프로젝트 포함</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 물결무늬 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
};

// Portfolio Section Component
const PortfolioSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const allPortfolios = [
    { image: "/img/portfolio1.jpg" },
    { image: "/img/portfolio2.jpg" },
    { image: "/img/portfolio3.jpg" },
    { image: "/img/portfolio4.jpg" },
    { image: "/img/portfolio5.jpg" },
    { image: "/img/portfolio6.jpg" },
    { image: "/img/portfolio7.jpg" },
    { image: "/img/portfolio8.jpg" },
    { image: "/img/portfolio9.jpg" },
    { image: "/img/portfolio10.jpg" },
  ];

  // 모바일(2열)일 때는 10개, 데스크톱(3열)일 때는 9개
  const portfolios = isMobile ? allPortfolios : allPortfolios.slice(0, 9);

  return (
    <section className="bg-gray-50 py-16 px-0">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 px-4">
          실력으로 완성한 수강생 작품
        </h2>
        <p className="text-center text-gray-600 mb-12 px-4">
          "실무 프로젝트로 완성한 포트폴리오를 직접 확인하세요"
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className="bg-[#999999] aspect-[4/3] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <img
                src={portfolio.image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// Rating Section Component
const RatingSection = () => {
  const reviews = [
    {
      badge: "스마트웹앱 앱 개발자 양성과정",
      rating: 5,
      text: "처음에는 부족한 기초 때문에 걱정이 많았지만, 체계적인 커리큘럼과 실습 중심 교육 덕분에 자신감을 얻을 수 있었습니다. 이제 프론트엔드 경험을 통해 실무 감각을 익혔으며, 취업하려는 목표에 한 걸음 더 다가갈 수 있었습니다.",
    },
    {
      badge: "UI/UX 웹디자인 퍼블리셔",
      rating: 5,
      text: "실습 중심의 교육과 구체적인 피드백 덕분에 자신감을 얻고, 실제 현장에서 바로 활용할 수 있는 역량을 기를 수 있었습니다. 무엇보다 '결과물 피드백'에서 자세가 취업 성공의 큰 힘이 되었습니다.",
    },
    {
      badge: "콘텐츠 제작, UI/UX, 퍼블리싱",
      rating: 5,
      text: "디자인 기초부터 포트폴리오 완성까지 꼼꼼히 배우며 실력을 쌓을 수 있었고 교수님의 세심한 피드백과 다양한 실습이 큰 힘이 되어서 수준급 노력 끝에 자신감을 얻어 취업에 성공하며 만족하고 성장하고 있습니다.",
    },
  ];

  const partners = [
    {
      company: "소프트팀",
      logo: "/img/bannerlogo1.png",
      personName: "김*호",
      course: "웹퍼블리셔",
    },
    {
      company: "벡토라",
      logo: "/img/bannerlogo2.png",
      personName: "박*린",
      course: "IT보안담당자",
    },
    {
      company: "넥시움",
      logo: "/img/bannerlogo3.png",
      personName: "유*인",
      course: "백앤드개발자",
    },
    {
      company: "SYNXA",
      logo: "/img/bannerlogo4.png",
      personName: "안*희",
      course: "UI/UX 편집디자인",
    },
    {
      company: "퀸틸",
      logo: "/img/bannerlogo5.png",
      personName: "양*양",
      course: "프론트앤드개발자",
    },
    {
      company: "INFOSYS",
      logo: "/img/bannerlogo6.png",
      personName: "이*민",
      course: "웹개발자",
    },
    {
      company: "테크니오",
      logo: "/img/bannerlogo7.png",
      personName: "허*은",
      course: "백앤드개발자",
    },
    {
      company: "BRIXO",
      logo: "/img/bannerlogo8.png",
      personName: "김*지",
      course: "프론트앤드개발자",
    },
    {
      company: "넷웨어",
      logo: "/img/bannerlogo9.png",
      personName: "동*래",
      course: "UI/UX 편집디자인",
    },
  ];

  return (
    <section id="reviews" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            수료생들의 리얼 수강후기
          </h2>
          <p className="text-gray-600">
            "영진 교육과정의 후기 및 수료생 취업스토리"
          </p>
        </div>

        {/* 리뷰그리드 */}
        <div className="hidden md:flex md:flex-col md:gap-0 mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border-b-2 border-gray-200 last:border-b-0 p-8 hover:bg-gray-50 transition-all duration-300"
            >
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-100 text-gray-700 text-xs px-4 py-2 rounded-full font-medium">
                    {review.badge}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-blue-500 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 모바일용 카드 */}
        <div className="grid grid-cols-1 gap-6 mb-16 md:hidden">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
            >
              <div className="inline-block bg-gray-100 text-gray-700 text-xs px-4 py-2 rounded-full mb-4 font-medium">
                {review.badge}
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-blue-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 mb-12"></div>

        {/*파트너로고*/}
        <div className="overflow-hidden relative w-screen left-1/2 right-1/2 -mx-[50vw]">
          <div className="flex animate-scroll">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-60 h-40 mx-5 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.company} 로고`}
                  className="w-20 h-10 object-contain mb-3"
                />
                <p className="text-xs font-reguler text-gray-900 text-center">
                  {partner.company}
                </p>
                <p className="text-xl font-bold text-gray-800 text-center mt-1">
                  {partner.personName}
                </p>
                <p className="text-xs text-gray-500 text-center px-3 mt-1 leading-tight">
                  {partner.course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />
    </section>
  );
};

// // Bootcamp Card Component
// const BootcampCard = ({ title, subtitle, duration, badge, color }) => {
//   return (
//     <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
//       <div
//         className={`${color} h-56 flex items-center justify-center p-6 relative overflow-hidden`}
//       >
//         {badge && (
//           <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-4 py-2 rounded-full shadow-lg font-medium z-10">
//             {badge}
//           </span>
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all"></div>
//         <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
//           {color.includes("gray-800")
//             ? ""
//             : color.includes("orange")
//             ? ""
//             : color.includes("gray-900")
//             ? ""
//             : ""}
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-orange-500 transition-colors">
//           {title}
//         </h3>
//         <p className="text-sm text-gray-600 mb-3">{subtitle}</p>
//         <p className="text-xs text-gray-500 mb-4">{duration}</p>
//         <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium shadow-md hover:shadow-lg">
//           바로가기
//         </button>
//       </div>
//     </div>
//   );
// };

// // Bootcamp Section Component
// const BootcampSection = () => {
//   const bootcamps = [
//     {
//       title: "UX/UI 디자인 부트캠프",
//       subtitle: "실무 프로젝트 기반 - 6주 완성",
//       duration: "모집기간 12.16 ~ 24.12.20",
//       badge: "모집마감",
//       color: "bg-gradient-to-br from-gray-800 to-gray-900",
//     },
//     {
//       title: "게임 개발과정",
//       subtitle: "유니티 게임 개발 - 취업까지",
//       duration: "모집기간 12.16 ~ 25.01.31",
//       badge: "온라인",
//       color: "bg-gradient-to-br from-orange-400 to-orange-500",
//     },
//     {
//       title: "프론트엔드 부트캠프",
//       subtitle: "실무 중심의 React - 취업까지",
//       duration: "모집기간 12.19 ~ 25.01.02",
//       badge: "온라인",
//       color: "bg-gradient-to-br from-gray-900 to-black",
//     },
//     {
//       title: "Python 부트캠프",
//       subtitle: "기초부터 실습까지",
//       duration: "모집기간 12.19 ~ 25.01.16",
//       badge: "온라인",
//       color: "bg-gradient-to-br from-blue-900 to-indigo-900",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-white py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               국비지원 부트캠프
//             </h2>
//             <p className="text-gray-600">
//               주석처리해두기
//             </p>
//           </div>
//           <button className="mt-4 md:mt-0 text-orange-500 hover:text-orange-600 flex items-center font-medium group">
//             지원제 보기
//             <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {bootcamps.map((bootcamp, index) => (
//             <BootcampCard key={index} {...bootcamp} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Process Section Component
const ProcessSection = () => {
  const [hoveredCard, setHoveredCard] = useState(0);

  const courses = [
    {
      number: "01",
      title: "디지털디자인과정",
      description: (
        <p>
          웹퍼블리싱, UI/UX, 웹디자인 등 디자인 응용에 필요한 기술을 배우고,
          <br />
          실제 프로젝트 실무를 통해 기획부터 구현까지 전 과정을 경험할 수 있는
          교육 과정입니다.
        </p>
      ),
      image: "img/img (1).jpg",
      link: "/course/digital-design",
    },
    {
      number: "02",
      title: "스마트웹앱과정",
      description: (
        <p>
          모바일 웹과 앱 개발에 필요한 최신 기술을 배우고
          <br />
          실무 프로젝트를 통해 경험을 쌓을 수 있습니다.
        </p>
      ),
      image: "img/img (2).jpg",
      link: "/course/smart-web",
    },
    {
      number: "03",
      title: "자바웹개발과정",
      description: (
        <p>
          자바 기반의 웹 개발 기술을 배우고 실무 프로젝트를 통해
          <br />
          백엔드 개발 역량을 키울 수 있습니다.
        </p>
      ),
      image: "img/img (3).jpg",
      link: "/course/java-web",
    },
    {
      number: "04",
      title: "디지털영상과정",
      description: (
        <p>
          영상 편집, 모션 그래픽 등<br />
          디지털 영상 제작에 필요한 기술을 배울 수 있습니다.
        </p>
      ),
      image: "img/img (4).jpg",
      link: "/course/digital-video",
    },
    {
      number: "05",
      title: "프론트엔드과정",
      description: (
        <p>
          React, Vue 등 최신 프론트엔드 프레임워크를 활용한
          <br />
          실무 중심의 웹 개발 기술을 배울 수 있습니다.
        </p>
      ),
      image: "/img/img (1).jpg",
      link: "/course/frontend",
    },
  ];

  const handleArrowClick = (link) => {
    window.location.href = link;
  };

  return (
    <section className="py-12 md:py-20 bg-[#1a2847]">
      {/* 데스크탑 버전*/}
      <div className="hidden min-[1400px]:flex h-[500px]">
        {/*좌측영역*/}
        <div
          className="px-10 py-12 bg-[#243450] flex flex-col justify-start flex-shrink-0"
          style={{ width: "380px" }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">COURSE</h2>
          <p className="text-white text-sm leading-relaxed">
            "창의적인 발상과 기술을 함께 배우는 배움의
            <br />
            여정, 기초부터 실무까지, 성장의 모든 단계를
            <br />
            담았습니다."
          </p>
        </div>

        {/*우측영역*/}
        <div className="flex-1 flex gap-0 min-w-0">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 ease-in-out overflow-hidden ${
                hoveredCard === index ? "flex-[4]" : "flex-[1]"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              style={{
                backgroundColor: hoveredCard === index ? "#2d3e5f" : "#1a2847",
                borderRight:
                  index < courses.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
                minWidth: hoveredCard === index ? "400px" : "80px",
              }}
            >
              <div className="p-6 h-full flex flex-col">
                {/*대번호*/}
                <h3 className="text-4xl font-bold mb-3 text-white italic">
                  {course.number}
                </h3>

                {/*제목*/}
                <h4
                  className={`font-bold text-white mb-4 ${
                    hoveredCard === index ? "text-lg" : "text-sm"
                  } transition-all duration-300`}
                >
                  {course.title}
                </h4>

                {/*확장영역*/}
                {hoveredCard === index && (
                  <div className="flex-1 flex flex-col justify-between">
                    {/*이미지*/}
                    <div className="mb-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full max-w-md h-40 object-cover rounded-lg"
                        style={{
                          filter: "grayscale(0%)",
                          backgroundColor: "#cccccc",
                        }}
                      />
                    </div>

                    {/*설명*/}
                    <p className="text-white text-sm leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Arrow Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleArrowClick(course.link);
                      }}
                      className="self-start text-white hover:text-orange-300 transition-colors"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform hover:translate-x-2 transition-transform"
                      >
                        <path
                          d="M8 20H32M32 20L22 10M32 20L22 30"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 태블릿/모바일 */}
      <div className="min-[1400px]:hidden px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            COURSE
          </h2>
          <p className="text-white text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            "창의적인 발상과 기술을 함께 배우는 배움의 여정, 기초부터 실무까지,
            성장의 모든 단계를 담았습니다."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#2d3e5f] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl md:text-4xl font-bold text-white italic">
                    {course.number}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {course.title}
                  </h3>
                </div>

                <div className="mb-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-32 md:h-40 object-cover rounded-lg"
                  />
                </div>

                <p className="text-white text-xs md:text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                <button
                  onClick={() => handleArrowClick(course.link)}
                  className="text-white hover:text-orange-300 transition-colors flex items-center text-sm font-medium"
                >
                  자세히 보기
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M8 20H32M32 20L22 10M32 20L22 30"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// Support Section Component
const SupportSection = () => {
  const supports = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "수강신청",
      description: "홈페이지 온라인접수\n전화접수, 방문접수로 신청",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
      title: "입학상담",
      description: "입학 및 등록절차를\n안내해드려요!",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "예비소집",
      description: "과정소개, 담임교사 소개\n설문조사, 소양평가 등 시행",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "합격자발표",
      description: "합격하신 분들께\n문자로 연락드립니다!",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "개강시작",
      description: "새로운 도전,\n지금부터 함께 해요",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          영진 IT교육과정 수강신청 절차
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-4">
          {supports.map((support, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-28 h-28 bg-gradient-to-br from-orange-100 to-blue-200 rounded-full flex items-center justify-center text-orange-600 mb-5 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  {support.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-orange-500 transition-colors">
                  {support.title}
                </h3>
                <p className="text-sm text-gray-600 text-center whitespace-pre-line">
                  {support.description}
                </p>
              </div>

              {/* 마지막 요소가 아닐 때만 화살표 표시 */}
              {index < supports.length - 1 && (
                <ChevronRight className="w-8 h-8 text-orange-400 hidden lg:block flex-shrink-0 mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
// FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "합격자 선발 기준은 어떻게 되나요?",
      answer:
        "수강신청과 입학상담을 마친 분을 기준으로 수강 목적이 뚜렷한 분, 국비지원 자격이 있으신 분을 선발하고 있습니다.",
    },
    {
      question: "과정 모집 시기는 어떻게 되나요?",
      answer:
        "홈페이지에서 모집중인 과정 중 원하는 것을 선택 후 온라인으로 신청하시면 됩니다.",
    },
    {
      question: "훈련장려금 지급기준은 어떻게 되나요?",
      answer:
        "출석률 80%이상을 완료한 경우 매 달 기본금 20만원씩을 지급하고 있습니다.",
    },
    {
      question: "국민내일배움카드는 무엇인가요?",
      answer: "정부가 훈련비를 지원해주는 직업훈련 지원카드입니다.",
    },
    {
      question: "이미 국비지원을 받은 적이 있는 경우 재참여가 가능한가요?",
      answer: "일정 기간이 지나면 재발급 및 재참여가 가능합니다.",
    },
    {
      question: "자영업자 혹은 개인사업자도 수업참여가 가능한가요?",
      answer: "연소득 기준을 충족하면 자영업자도 참여할 수 있습니다.",
    },
    {
      question: "직업훈련 도중에 취업을 하면 어떻게 되나요?",
      answer: "취업 시 훈련 중단 또는 전환 수강으로 조정이 가능합니다.",
    },
    {
      question: "수료 후 취업지원 도움을 받을 수 있나요?",
      answer: "고용센터를 통해 취업알선 및 사후지원 서비스를 받을 수 있습니다.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          자주하는 질문 FAQ
        </h2>
        {/* <p className="text-center text-gray-600 mb-12">
          궁금하신 내용을 확인해보세요
        </p> */}

        <div className="space-y-3 py-5 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 text-sm border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Info Card Component
const InfoCard = ({ category, title, description, bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-2xl p-8 flex items-center justify-between cursor-pointer hover:shadow-2xl transition-all duration-300 group overflow-hidden relative`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className="flex-1 relative z-10">
        <p className="text-sm text-gray-600 mb-2 font-medium">{category}</p>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <button className="text-gray-700 hover:text-orange-600 flex items-center text-sm font-medium group">
          자세히 보기
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
      <div className="ml-6 group-hover:scale-110 transition-transform duration-300">
        <div className="w-40 h-40 bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl shadow-lg flex items-center justify-center text-6xl">
          {category === "BUSINESS" ? "" : ""}
        </div>
      </div>
    </div>
  );
};

// Info Section Component
const InfoSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          category="BUSINESS"
          title="비즈니스 선택하기"
          description=""
          bgColor="bg-gradient-to-br from-orange-50 to-orange-100"
        />
        <InfoCard
          category="EVENT"
          title="다양하고 특별한 맞춤 이벤트 참여하기"
          description=""
          bgColor="bg-gradient-to-br from-yellow-50 to-orange-100"
        />
      </div>
    </section>
  );
};
// Footer Component
const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/*학교소개*/}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
              영진직업전문학교
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-110 shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/*고객지원*/}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {["공지 사항", "자주하는 질문", "이용약관", "기업 문의"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/*서비스*/}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {["교직원 확인하기", "채용팀 가이드라인", "채용"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors flex items-center group"
                    >
                      {item}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/*파트너(광고를 싣는다거나 할때 첨부하는 협력체)*/}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">협력체</h4>
            <div className="flex flex-wrap gap-3">
              {["A", "B", "C"].map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white px-3 py-2 rounded-lg shadow-sm text-xs font-medium text-gray-700 hover:shadow-md transition-shadow"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*하단정보*/}
        <div className="border-t border-gray-300 pt-8 text-xs text-gray-500">
          <p className="mb-2">
            <span className="font-semibold text-gray-700">대표자:</span> 곽승호,
            차영숙 |{" "}
            <span className="font-semibold text-gray-700">사업자등록번호:</span>{" "}
            502-95-07029
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">주소:</span> 41166
            대구 동구 화랑로 525 (용계동) |
            <span className="font-semibold text-gray-700"> 전화:</span>{" "}
            053-983-8877 |
            <span className="font-semibold text-gray-700"> Fax:</span>{" "}
            053-722-2423
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">통신판매업신고:</span>{" "}
            제2022-서울강남-1234호
          </p>
          <p className="mb-4 text-gray-400">
            Copyright © 영진직업전문학교-대구직업전문학교 | 대구국비교육. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CoursesSection />
      <StatsSection />
      <FeatureSections />
      <FullWidthBannerSection />
      <PortfolioSection />
      <RatingSection />
      {/* <BootcampSection /> */}
      <ProcessSection />
      <SupportSection />
      <FAQSection />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default App;
