import React from "react";
import Footer from "../Components/Footer/Footer";
import ImageCarousel from '../Components/Swiper2/ImageCarousel'
import InfoGarden from "./Info/InfoGarden";

const GardenPage = () => {
  return (
    <div>
      <ImageCarousel></ImageCarousel>
      <InfoGarden></InfoGarden>
      <Footer></Footer>
    </div>
  );
};

export default GardenPage;
