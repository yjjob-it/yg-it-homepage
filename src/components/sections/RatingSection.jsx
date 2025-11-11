import React from "react";

const RatingSection = ({ reviews, partners }) => {
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

        {/* 리뷰그리드 - 데스크톱 */}
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

        {/* 리뷰 - 모바일 */}
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

        {/* 파트너 로고 */}
        <div className="overflow-hidden relative w-screen left-1/2 right-1/2 -mx-[50vw]">
          <div className="inline-flex animate-scroll">
            {/* 원본 */}
            {partners.map((partner, index) => (
              <div
                key={`original-${index}`}
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
            {/* 복제본 1 */}
            {partners.map((partner, index) => (
              <div
                key={`clone1-${index}`}
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

      <style>{`
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
      `}</style>
    </section>
  );
};

export default RatingSection;
