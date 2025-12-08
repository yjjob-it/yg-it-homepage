import React from "react";

const InquirySection = () => {
  const handleInquiryClick = () => {
    // window.location.href = "DB/링크연결";
  };

  return (
    <section className="bg-gray-40 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-700 mb-3">
          영진직업전문학교에 대해
        </h2>
        <h2 className="text-2xl md:text-2xl font-bold text-gray-700 mb-6">
          더 궁금하다면?
        </h2>

        <button
          onClick={handleInquiryClick}
          className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 rounded-lg text-gray-600 font-medium hover:border-orange-500 hover:text-orange-500 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          1:1 채팅 문의하기
        </button>
      </div>
    </section>
  );
};

export default InquirySection;
