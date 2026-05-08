import React from "react";

const PortfolioCard = ({ image, url, index = 0 }) => {
  const handleCardClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full max-w-[500px] bg-[#999999] aspect-[4/3] transition-all duration-300 cursor-pointer overflow-hidden m-1 rounded-lg"
    >
      <img
        src={image}
        alt={`Portfolio ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default PortfolioCard;
