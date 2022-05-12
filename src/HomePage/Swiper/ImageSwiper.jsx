import React from 'react'
import "./ImageSwiper.css";
import Img from "../../images/avatar1.jpg";


const ImageSwiper = () => {

  return (
    <section className="container swiper_container">
      <h2>Alternatif Eğitim Yaklaşımlarını MEB Müfredatı ile Harmanlayan Okul</h2>
      <div className='slider'>
        <article className='swiper'>
          <div className='image_container'>
            <img src={Img} alt="" />
          </div>
        </article>

        <article className='swiper'>
          <div className='image_container'>
            <img src={Img} alt="" />
          </div>
        </article>

        <article className='swiper'>
          <div className='image_container'>
            <img src={Img} alt="" />
          </div>
        </article>
      </div> 
    </section>
  )
}

export default ImageSwiper