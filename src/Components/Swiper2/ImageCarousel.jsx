import React from "react";
import "./ImageCarousel.css";
import Img from "../../images/avatar1.jpg";
import Img2 from "../../images/avatar2.jpg";
import Img3 from "../../images/avatar3.jpg";
import Img4 from "../../images/avatar4.jpg";
import Img5 from "../../images/avatar5.jpg";
import Img6 from "../../images/avatar6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="image_slider">
         <Slider {...settings}>
          <div>
            <img src={Img} />
          </div>
          <div>
          <img src={Img2} />
          </div>
          <div>
          <img src={Img3} />
          </div>
          <div>
          <img src={Img4} />
          </div>
          <div>
          <img src={Img5} />
          </div>
          <div>
          <img src={Img6} />
          </div>
        </Slider>
    </div>
  );
};

export default ImageCarousel;
