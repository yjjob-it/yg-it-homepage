import React from "react";
import InfoCard from "../ui/InfoCard";

const InfoSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          category="BUSINESS"
          title="비즈니스 선택하기"
          description=""
          bgColor="bg-gradient-to-br from-orange-50 to-orange-100"
        />
        <InfoCard
          category="EVENT"
          title="다양하고 특별한 맞춤 이벤트 참여하기"
          description=""
          bgColor="bg-gradient-to-br from-yellow-50 to-orange-100"
        />
      </div>
    </section>
  );
};

export default InfoSection;
