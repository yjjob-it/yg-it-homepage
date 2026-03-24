import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Section Components
import HeroSection from "./components/sections/HeroSection";
import CoursesSection from "./components/sections/CoursesSection";
import StatsSection from "./components/sections/StatsSection";
import FeatureSections from "./components/sections/FeatureSections";
import FullWidthBannerSection from "./components/sections/FullWidthBannerSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import RatingSection from "./components/sections/RatingSection";
import ProcessSection from "./components/sections/ProcessSection";
import SupportSection from "./components/sections/SupportSection";
import FAQSection from "./components/sections/FAQSection";
import InquirySection from "./components/sections/InquirySection";
//import InfoSection from "./components/sections/InfoSection";
// import BoardPage from "./pages/BoardPage";

// Data

import { statsData } from "./data/statsData";
import { featuresData } from "./data/featuresData";
import { portfoliosData } from "./data/portfoliosData";
import { reviewsData, partnersData } from "./data/reviewsData";
import { processCoursesData } from "./data/processData";
import { supportsData } from "./data/supportData";
import { faqsData } from "./data/faqsData";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      {/* <StatsSection stats={statsData} />
      <FeatureSections features={featuresData} /> */}
      {/* <FullWidthBannerSection /> */}
      <PortfolioSection portfolios={portfoliosData} />
      <RatingSection reviews={reviewsData} partners={partnersData} />
      {/* <ProcessSection courses={processCoursesData} /> */}
      <SupportSection supports={supportsData} />
      {/* <FAQSection faqs={faqsData} /> */}
      <InquirySection />
    </>
  );
};

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");
    const timerId = window.setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) {
        return;
      }

      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 50);

    return () => window.clearTimeout(timerId);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/board" element={<BoardPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
