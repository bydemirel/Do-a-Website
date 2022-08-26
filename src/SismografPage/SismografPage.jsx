import React from "react";
import Footer from "../Components/Footer/Footer";
import ImageCarousel from '../Components/Swiper2/ImageCarousel'
import InfoSismograf from "./Info/InfoSismograf";
const WorkshopPage = () => {
  return (
    <div>
      <ImageCarousel></ImageCarousel>
      <InfoSismograf></InfoSismograf>
      <Footer></Footer>
    </div>
  );
};

export default WorkshopPage;
