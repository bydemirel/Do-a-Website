import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/header.svg";

const InfoSpecial = () => {
  const handleCategoryClick1 = () => {};
  return (
    <section className="info">
      <div className="info_left">
        <h1 className="info_left_title">Doğa'da Özel Günler</h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p className="info_left_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quas volupta,
          ab in corporis.Voluptatem cum harum ipsum, facilis ducimus varitatis
          optio.
        </p>
        <div className="social_media_icons_row"></div>
      </div>


      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <a href="/bahcemiz"><h5>Bahçemiz</h5></a>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <a href="/atolyemiz"><h5>Atölyemiz</h5></a>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <h5>Sağlık ve Beslenme</h5>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <a href="/siniflarimiz"><h5>Sınıflarımız</h5></a>
          </article>
        </div>

        <div className="container info_container2">
          <h3>Doğa Okul Öncesi Eğitim Kurumu</h3>

          <p className="contact_info">
            <h5 className="info_container2_subtitle">Adres: </h5>
            <h5>Kabaoğlu, 41000 Tüysüzler, İzmir / Atakent</h5>
          </p>

          <p className="contact_info">
            <h5 className="info_container2_subtitle">Telefon: </h5>
            <h5>+90 555 666 17 58</h5>
          </p>

          <p className="contact_info">
            <h5 className="info_container2_subtitle">E-Posta: </h5>
            <h5>doga@doga.com.tr</h5>
          </p>

          <div className="contact_button_div">
          <Link to="/iletisim" onClick={()=>{
                    window.scrollTo(0,0);
                  }} className='btn btn-primary-color'>İletişim</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSpecial;
