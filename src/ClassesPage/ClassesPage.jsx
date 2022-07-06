import React from "react";
import Footer from "../Components/Footer/Footer";
import ImageCarousel from '../Components/Swiper2/ImageCarousel'
import InfoClass from "./Info/InfoClass";
const ClassesPage = () => {
  return (
    <div>
      <ImageCarousel></ImageCarousel>
      <InfoClass></InfoClass>
      <Footer></Footer>
    </div>
  );
};

export default ClassesPage;
