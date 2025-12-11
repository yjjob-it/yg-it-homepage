import React from "react";

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
            2026년 신규 과정
            <br />
            <span className="text-orange-400">Figma·미드저니</span> 무료 제공!
          </h2>
          <p className="text-blue-100 text-xs md:text-base mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
            {/* 지금 등록하면{" "}
            <span className="text-orange-400">Figma·미드저니</span> 무료 제공! */}
            <br />
            디자인부터 AI 이미지 생성까지, 프로젝트 완성도를 높이세요.
          </p>
          {/* <button className="bg-white text-[#1a2847] px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-base hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-102">
            자세히 보기
          </button> */}
        </div>

        {/* 오른쪽 이미지/카드 영역 */}
        <div className="relative">
          <div className="w-48 h-56 md:w-80 md:h-96 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 overflow-hidden">
            {/* 카드 내용 */}
            <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-2 md:mb-4">
                  <h3 className="text-2xl md:text-4xl font-bold text-orange-500">
                    2026
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
                {/* <div className="flex items-center text-[10px] md:text-sm text-gray-700">
                  <span className="font-semibold mr-1 md:mr-2">✓</span>
                  <span>100% 국비지원</span>
                </div> */}
                <div className="flex items-center text-[10px] md:text-sm text-gray-700">
                  <span className="font-semibold mr-1 md:mr-2">✓</span>
                  <span>Figma,미드저니 무료 제공</span>
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

export default FullWidthBannerSection;
