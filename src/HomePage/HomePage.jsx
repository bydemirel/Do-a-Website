import React from 'react'
import Categories from "./Categories/Categories";
import FAQs from "./FAQ's/FAQs";
import Footer from "../Components/Footer/Footer";
import Header from "./Header/Header";
import ImageSwiper from "../Components/Swiper/ImageSwiper";


const HomePage = () => {
  return (
    <div>
          <Header></Header>
          <Categories></Categories>
          <ImageSwiper></ImageSwiper>
          <FAQs></FAQs>
          <Footer></Footer>
    </div>
  )
}

export default HomePage