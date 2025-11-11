import React from "react";

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

// Data
import { coursesData } from "./data/coursesData";
import { statsData } from "./data/statsData";
import { featuresData } from "./data/featuresData";
import { portfoliosData } from "./data/portfoliosData";
import { reviewsData, partnersData } from "./data/reviewsData";
import { processCoursesData } from "./data/processData";
import { supportsData } from "./data/supportData";
import { faqsData } from "./data/faqsData";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CoursesSection courses={coursesData} />
      <StatsSection stats={statsData} />
      <FeatureSections features={featuresData} />
      <FullWidthBannerSection />
      <PortfolioSection portfolios={portfoliosData} />
      <RatingSection reviews={reviewsData} partners={partnersData} />
      <ProcessSection courses={processCoursesData} />
      <SupportSection supports={supportsData} />
      <FAQSection faqs={faqsData} />
      <InquirySection />
      <Footer />
    </div>
  );
};

export default App;
