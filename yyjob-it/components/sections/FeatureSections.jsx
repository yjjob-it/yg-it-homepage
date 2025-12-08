"use client";
import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const FeatureSection = ({
  title,
  subtitle,
  description,
  subDescription,
  image,
  imagePosition = "right",
  backgroundColor = "bg-gray-100",
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className={`${backgroundColor} py-12 md:py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-8 md:gap-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000`}
        >
          <div className="flex-1 w-full">
            <p className="text-orange-500 font-semibold mb-2 text-sm md:text-base">
              {subtitle}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              {description}
            </p>
            {subDescription && (
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {subDescription}
              </p>
            )}
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl">{image}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSections = ({ features }) => {
  return (
    <>
      {features.map((feature, index) => (
        <FeatureSection
          key={index}
          {...feature}
          image={
            <img
              src={feature.imageSrc}
              alt={feature.title}
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="bg-gradient-to-br from-gray-400 to-gray-500 w-full h-64 md:h-80 flex items-center justify-center"><span class="text-white text-sm md:text-base">이미지 준비중</span></div>';
              }}
            />
          }
        />
      ))}
    </>
  );
};

export default FeatureSections;
