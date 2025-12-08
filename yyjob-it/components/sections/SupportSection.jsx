import React from "react";
import { ChevronRight } from "lucide-react";

const SupportSection = ({ supports }) => {
  return (
    <section id="support" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          영진 IT교육과정 수강신청 절차
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-4">
          {supports.map((support, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-28 h-28 bg-gradient-to-br from-orange-100 to-blue-200 rounded-full flex items-center justify-center text-orange-600 mb-5 group-hover:scale-103 group-hover:shadow-md transition-all duration-300">
                  {support.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-orange-500 transition-colors">
                  {support.title}
                </h3>
                <p className="text-sm text-gray-600 text-center whitespace-pre-line">
                  {support.description}
                </p>
              </div>

              {index < supports.length - 1 && (
                <ChevronRight className="w-8 h-8 text-orange-400 hidden lg:block flex-shrink-0 mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
