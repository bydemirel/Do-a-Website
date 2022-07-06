import React from "react";
import Footer from "../Components/Footer/Footer";
import ImageCarousel from '../Components/Swiper2/ImageCarousel'
import InfoSpecial from "./Info/InfoSpecial";
const SpecialDaysPage = () => {
  return (
    <div>
      <ImageCarousel></ImageCarousel>
      <InfoSpecial></InfoSpecial>
      <Footer></Footer>
    </div>
  );
};

export default SpecialDaysPage;
