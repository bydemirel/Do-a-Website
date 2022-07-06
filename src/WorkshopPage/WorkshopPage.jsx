import React from "react";
import Footer from "../Components/Footer/Footer";
import ImageCarousel from '../Components/Swiper2/ImageCarousel'
import InfoWorkshop from "./Info/InfoWorkshop";
const WorkshopPage = () => {
  return (
    <div>
      <ImageCarousel></ImageCarousel>
      <InfoWorkshop></InfoWorkshop>
      <Footer></Footer>
    </div>
  );
};

export default WorkshopPage;
