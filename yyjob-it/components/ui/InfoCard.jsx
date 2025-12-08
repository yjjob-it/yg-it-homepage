import React from "react";
import { ChevronRight } from "lucide-react";

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
          {category === "BUSINESS" ? "img1" : "img2"}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
