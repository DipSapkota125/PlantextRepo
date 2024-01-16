import React, { useRef } from "react";
import PlantSteps from "../plantSteps/PlantSteps";
import Contact from "../contact/Contact";
import CommonQuestion from "../commonQuestion/CommonQuestion";
import ProductList from "../productList/ProductList";
import About from "../about/About";
import BannerPage from "../bannerPage/BannerPage";

const Home = () => {
  const aboutSectionRef = useRef(null);
  const productsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const faqsSectionRef = useRef(null);

  const handleExploreClick = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <BannerPage handleExploreClick={handleExploreClick} />
      <About sectionRef={aboutSectionRef} />
      <PlantSteps />
      <ProductList sectionRef={productsSectionRef} />
      <CommonQuestion sectionRef={faqsSectionRef} />
      <Contact sectionRef={contactSectionRef} />
    </>
  );
};

export default Home;
