import React from "react";
import AnimatedCounter from "../ui/AnimatedCounter";

const StatsSection = ({ stats }) => {
  return (
    <section id="stats" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          "IT 전문가로 가는 길, 왜 영진이어야 할까요?"
        </h2>

        <div className="flex justify-center items-start gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center relative group flex-1 min-w-0"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
                <div className="relative">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-help flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-40 sm:w-48 bg-gray-800 text-white text-xs rounded-lg py-2 px-3 z-10 whitespace-normal">
                    {stat.tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <p
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold ${stat.gradient}`}
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={index === 1 ? 2000 : 1000}
                    decimals={index === 1 ? 1 : 0}
                  />
                </p>
                {stat.showArrow && (
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4L4 12h5v8h6v-8h5L12 4z" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
