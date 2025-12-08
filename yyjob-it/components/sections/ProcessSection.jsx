"use client";
import React, { useState } from "react";

const ProcessSection = ({ courses }) => {
  const [hoveredCard, setHoveredCard] = useState(0);

  const handleArrowClick = (link) => {
    window.location.href = link;
  };

  return (
    <section id="process" className="py-12 md:py-20 bg-[#1a2847]">
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

export default ProcessSection;
