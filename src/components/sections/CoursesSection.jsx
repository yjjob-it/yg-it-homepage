import React, { useState } from "react";
import CourseCard from "../ui/CourseCard";

const CoursesSection = ({ courses }) => {
  const [activeTab, setActiveTab] = useState("모집중");
  const [showAll, setShowAll] = useState(false);

  const filters = [
    "모집중",
    // "모집예정",
    "전체보기",
  ];

  const totalCourses = courses[activeTab]?.length || 0;

  return (
    <section id="courses" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        실력과 경험을 동시에 쌓는{" "}
        <span className="text-orange-500">영진 IT</span> 교육과정
      </h2>

      {/* 필터 버튼 */}
      <div className="flex flex-wrap gap-3 mb-12 mt-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveTab(filter);
              setShowAll(false);
            }}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === filter
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 그리드 레이아웃 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses[activeTab]?.map((course, index) => {
          const isHiddenMobile =
            !showAll && index >= 3 ? "hidden sm:block" : "";
          const isHiddenTablet =
            !showAll && index >= 6 ? "hidden lg:block" : isHiddenMobile;
          const isHiddenDesktopMd =
            !showAll && index >= 9 ? "hidden xl:block" : isHiddenTablet;
          const isHiddenDesktopLg =
            !showAll && index >= 12 ? "hidden" : isHiddenDesktopMd;

          return (
            <div key={index} className={isHiddenDesktopLg}>
              <CourseCard {...course} />
            </div>
          );
        })}
      </div>

      {/* 더보기 버튼 표기 조건 */}
      <div className="flex justify-center mt-8">
        {/* 모바일 */}
        {totalCourses > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="block sm:hidden text-gray-700 font-medium py-3 px-6 hover:text-orange-500 transition-colors duration-300"
          >
            {showAll ? "접기 ▲" : "더보기 ▼"}
          </button>
        )}

        {/* 태블릿 */}
        {totalCourses > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="hidden sm:block lg:hidden text-gray-700 font-medium py-3 px-6 hover:text-orange-500 transition-colors duration-300"
          >
            {showAll ? "접기 ▲" : "더보기 ▼"}
          </button>
        )}

        {/* 데스크톱1*/}
        {totalCourses > 9 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="hidden lg:block xl:hidden text-gray-700 font-medium py-3 px-6 hover:text-orange-500 transition-colors duration-300"
          >
            {showAll ? "접기 ▲" : "더보기 ▼"}
          </button>
        )}

        {/* 데스크톱2 */}
        {totalCourses > 12 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="hidden xl:block text-gray-700 font-medium py-3 px-6 hover:text-orange-500 transition-colors duration-300"
          >
            {showAll ? "접기 ▲" : "더보기 ▼"}
          </button>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
