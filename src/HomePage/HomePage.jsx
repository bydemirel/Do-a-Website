import React from 'react'
import Categories from "./Categories/Categories";
import FAQs from "./FAQ's/FAQs";
import Footer from "../Components/Footer/Footer";
import Header from "./Header/Header";
import ImageSwiper from "../Components/Swiper/ImageSwiper";
import ImageCarousel from '../Components/Swiper2/ImageCarousel';


const HomePage = () => {
  return (
    <div>
          <Header></Header>
          <Categories></Categories>
          <ImageSwiper></ImageSwiper>
          <FAQs></FAQs>
          <ImageCarousel></ImageCarousel>
          <Footer></Footer>
    </div>
  )
}

export default HomePage