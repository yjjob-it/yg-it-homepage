import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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

  // 네비게이션 메뉴 아이템
  const navItems = [
    ["courses", "모집과정"],
    ["stats", "지원소개"],
    ["portfolio", "포트폴리오"],
    ["process", "운영과정"],
    ["support", "선발절차"],
    ["faqs", "FAQ"],
  ];

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
              {navItems.map(([id, label]) => (
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

      {/* 모바일 메뉴 오버레이 */}
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
              {navItems.map(([id, label]) => (
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

export default Header;
