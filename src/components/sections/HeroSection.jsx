import React from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-10 px-4 overflow-hidden -mt-20">
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-transparent"
        style={{ height: "60%" }}
      ></div>

      <div
        className="absolute top-0 inset-x-0 opacity-10"
        style={{ height: "50%" }}
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
        <p className="text-2xl md:text-2xl text-orange-500 font-bold mb-6 text-sm uppercase tracking-wide">
          비전공자도 시작할 수 있다!
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          "기초부터 취업까지, 맞춤형 IT 전문 교육의 시작"
        </h2>
        <h1 className="text-5xl md:text-5xl font-black mb-12">
          <span className="text-gray-800">영진직업전문학교 IT교육관</span>
        </h1>

        <div className="mt-40 flex flex-col items-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-300" />
          <ChevronDown className="w-8 h-8 text-gray-300 -mt-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
