import React from "react";
import Footer from "../Components/Footer/Footer";
import ImageCarousel from '../Components/Swiper2/ImageCarousel'
import InfoLibrary from "./Info/InfoLibrary";
const LibraryPage = () => {
  return (
    <div>
      <ImageCarousel></ImageCarousel>
      <InfoLibrary></InfoLibrary>
      <Footer></Footer>
    </div>
  );
};

export default LibraryPage;
