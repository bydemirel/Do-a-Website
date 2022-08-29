import React from 'react'
import "./ImageSwiper.css";
import Img from "../../images/forrest1.jpg";
import Img2 from "../../images/children-running.jpg";
import Img3 from "../../images/forrest2.jpg";


const ImageSwiper = () => {

  return (
    <section className="container swiper_container">
      <h2>Alternatif Eğitim Yaklaşımlarını MEB Müfredatı ile Harmanlayan Okul</h2>
      <div className='slider'>
        <article className='swiper'>
          <div className='image_container'>
            <img className="constant_image" src={Img} />
          </div>
        </article>

        <article className='swiper'>
          <div className='image_container'>
            <img  className="constant_image"  src={Img2} />
          </div>
        </article>

        <article className='swiper'>
          <div className='image_container'>
            <img  className="constant_image" src={Img3} />
          </div>
        </article>
      </div> 
    </section>
  )
}

export default ImageSwiper