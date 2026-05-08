import React from "react";
import { Manipulation, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard from "../ui/PortfolioCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PortfolioSection = ({ portfolios }) => {
  const displayedPortfolios = portfolios;

  return (
    <section id="portfolio" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          실력으로 완성한 수강생 작품
        </h2>
        <p className="text-center text-gray-600 mb-12">
          "실무 프로젝트로 완성한 포트폴리오를 직접 확인하세요"
        </p>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Manipulation, Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides
            speed={500}
            navigation
            pagination={{ clickable: true }}
            className="portfolio-swiper pb-10"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {displayedPortfolios.map((portfolio, index) => (
              <SwiperSlide key={`${portfolio.image}-${index}`}>
                <div className="portfolio-slide-inner mx-auto flex justify-center">
                  <PortfolioCard
                    image={portfolio.image}
                    url={portfolio.url}
                    index={index}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
