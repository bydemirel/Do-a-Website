import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/header.svg";

const InfoLibrary = () => {
  const handleCategoryClick1 = () => {};
  return (
    <section className="info">
      <div className="info_left">
        <h1 className="info_left_title">Tanışma Oyunu</h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p className="info_left_text">
          <b>Hedef kitle: </b>Yaklaşık 6 yaşından büyük çocuklar 
          <br /><br />
          <b>Malzeme: </b>büyük çam
          kozalakları veya küçük toplar Öğretmen grubu karşılar, kendini tanıtır
          ve çocuklara Bir daire içinde sıralanmak için. Bir çocuğa çam kozalağı
          veya top atar ve sorar kısaca kendinizi tanıtmak. Daha sonra Bu çocuk
          kozalakları atmaya devam ediyor. Her çocuk tanıtıldıktan sonra kozalak
          öğretmene geri gelir. İkinci tur işe yarıyor geriye. Yani son çocuk
          hayal etmişti Kendisinden olduğu çocuğa sabitle ve onun adını verir.
          Ondan sonra bu çocuk fırlatır Kozalak daha ileriye. Sonra kozalak
          kendini tanıtan ilk çocuğa ulaştığında öğretmen onu geri alır. Üçüncü
          geçiş, orada olduğu için artan bir zorluk seviyesine sahiptir. iki çam
          kozalağı gel veya toplar oyuna girdi. Önce bir aynı sırayla koniler
          oyunun ilk turundaki gibi, atıcının adı olduğu yerde yakalayıcı
          çağrıları. Hemen ardından gönderir öğretmen başka bir tıkaç koydu
          yolculuktaki diğer emir, yani en son gelen çocuk hayal etmişti, zıvana
          atıyor sondan bir önceki çocuğa vb. ve ayrıca burada atıcı,
          yakalayıcı. Son olarak öğretmene atılan koniler. ŞekilVaryasyon: Oyunu
          üç veya dört kozalakla oynayarak daha zor hale getirebilirsiniz.
        </p>
        <div className="social_media_icons_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <Link to="/taksici-yolcu-oyunu">
              <h5>Taksici Yolcu Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <Link to="/sismograf-yapimi">
              <h5>Sismograf Yapımı</h5>
            </Link>
          </article>
Link
          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <h5>Sağlık ve Beslenme</h5>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <Link to="/koku-ve-hafiza-oyunu">
              <h5>Koku Ve Hafıza Oyunu</h5>
            </Link>
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
            <Link
              to="/iletisim"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="btn btn-primary-color"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoLibrary;
