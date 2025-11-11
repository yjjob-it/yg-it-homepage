import React from "react";

const CourseCard = ({
  title,
  subtitle,
  tags,
  image,
  recruitStatus = "모집중",
  urgency = "", // 마감임박 D-X
  recruitPeriod = "",
  educationPeriod = "",
}) => {
  // urgency가 있으면 우선 표시, 없으면 recruitStatus 표시
  const displayStatus = urgency || recruitStatus;

  // 배지 색상 결정
  const getBadgeStyle = () => {
    // recruitStatus에 "마감임박"이 포함되어 있거나 "모집중"이면 주황색
    if (recruitStatus.includes("마감임박") || recruitStatus === "모집중") {
      return "bg-orange-500 text-white";
    }

    // 그 외 (모집예정, 모집종료)는 회색
    return "bg-gray-400 text-white";
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
      {/* 이미지 영역 */}
      <div className="relative h-48 overflow-hidden">
        {/* 모집 상태 배지 */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`px-3 py-1 rounded-md text-xs font-bold ${getBadgeStyle()}`}
          >
            {displayStatus}
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

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CourseCard;
