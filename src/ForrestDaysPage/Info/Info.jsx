import React from "react";
import Img from "../../images/header.svg";

const Info = () => {
  const handleCategoryClick1 = () => {};
  return (
    <section className="info">
      <div className="info_left">
        <h1>Categories</h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quas volupta,
          ab in corporis.Voluptatem cum harum ipsum, facilis ducimus varitatis
          optio.
        </p>
        <div className="social_media_icons_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info" onClick={handleCategoryClick1}>
            <img src="" alt="" />
            <h5>Orman Günleri</h5>
          </article>
        </div>

        <div className="container info_container2">
          <h3>Doğa Okul Öncesi Eğitim Kurumu</h3>

          <p className="address_info">
            <h5>Adres: </h5>
            <h5>Kabaoğlu, 41000 Tüysüzler, İzmir / Atakent</h5>
          </p>

          <p className="tel_info">
            <h5>Telefon: </h5>
            <h5>+90 555 666 17 58</h5>
          </p>

          <p className="email_info">
            <h5>E-Posta: </h5>
            <h5>doga@doga.com.tr</h5>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
