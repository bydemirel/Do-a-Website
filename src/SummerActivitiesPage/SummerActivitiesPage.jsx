import React from 'react'
import Footer from "../Components/Footer/Footer";
import ImageCarousel from '../Components/Swiper2/ImageCarousel'
import InfoSummerActivites from './Info/InfoSummerActivites';

const SummerActivitiesPage = () => {
  return (
    <div>
    <ImageCarousel></ImageCarousel>
    <InfoSummerActivites></InfoSummerActivites>
    <Footer></Footer>
  </div>
  )
}

export default SummerActivitiesPage