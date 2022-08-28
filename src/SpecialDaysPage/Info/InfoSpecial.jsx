import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/header.svg";

const InfoSpecial = () => {
  const handleCategoryClick1 = () => {};
  return (
    <section className="info">
      <div className="info_left">
        <h1 className="info_left_title">Taksici Yolcu Oyunu</h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p className="info_left_text">
          <b>Katılımcılar: </b> 3 ila 4 çocuk
          <br />
          <br />
          <b>Yaş Seviyesi: </b> İlkokul veya Anaokul öğrencileri seviyesi
          <br />
          <br />
          <b>Malzeme: </b> Şehir haritası veya bölge planı (her çocuk için),
          çocuk başına 1 uzun ip ve 9 adet taş.
          <br />
          <br />
          <b>Oyunun seyri: </b> Bir çocuk yolcunun rolünü üstlenir ve taksinin
          hangi iki nokta arasında hareket edeceğini söyler.(Örneğin otobüs
          durağından, evden okula veya ormana). Dier çocuklar taksi şoförünün
          rolünü üstlenirler. Haritada taksicinin izlemesi gereken rotayı bir
          iplik ve taşlar yardımıyla işaretlerler. Amaç en kosa rotayı
          bulmaktır. Yolcuçocuk, ipliklerin seçilen rotanın, doğru yol güzergahı
          üzerinden taksiyle gidilebileceğini kontrol eder.(Çıkmaz sokak, taşıt
          giriş yasağı vb.).Bulunan uzunluklar karşılaştırılır. En kısa yolu
          bulan çocuk ilan edilir.(Anaokulu çocukları için daha basit haritalar
          oluşturulabilir.)
        </p>
        <div className="social_media_icons_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/sismograf-yapimi">
              <img src={Img} alt="" />
            </Link>
            <Link to="/sismograf-yapimi">
              <h5>Sismograf Yapımı</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/sismograf-yapimi">
              <img src={Img} alt="" />
            </Link>
            <Link to="/sismograf-yapimi">
              <h5>Sağlık ve Beslenme</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/koku-ve-hafiza-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/koku-ve-hafiza-oyunu">
              <h5>Koku Ve Hafıza Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/duyu-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/duyu-oyunu">
              <h5>Duyu Oyunu</h5>
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

export default InfoSpecial;
