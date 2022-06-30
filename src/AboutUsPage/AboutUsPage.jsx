import React from "react";
import Footer from "../Components/Footer/Footer";
import ImageCarousel from "../Components/Swiper2/ImageCarousel";
import Achievements from "./Achievements/Achievements";


const AboutUsPage = () => {
  return (
    <div>
      <Achievements></Achievements>
      <ImageCarousel></ImageCarousel>
      <Footer></Footer>
    </div>
  );
};

export default AboutUsPage;
