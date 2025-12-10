import React, { useState, useEffect } from "react";

const PortfolioSection = ({ portfolios }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const displayedPortfolios = isMobile ? portfolios : portfolios.slice(0, 9);

  return (
    <section id="portfolio" className="bg-gray-50 py-16 px-0">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 px-4">
          실력으로 완성한 수강생 작품
        </h2>
        <p className="text-center text-gray-600 mb-12 px-4">
          "실무 프로젝트로 완성한 포트폴리오를 직접 확인하세요"
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
          {displayedPortfolios.map((portfolio, index) => (
            <div
              onClick={() => handleCardClick(portfolio.url)}
              key={index}
              className="bg-[#999999] aspect-[4/3] shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300 cursor-pointer overflow-hidden"
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

export default PortfolioSection;
