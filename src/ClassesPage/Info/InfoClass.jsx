import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/header.svg";

const InfoClass = () => {
  const handleCategoryClick1 = () => {};
  return (
    <section className="info">
      <div className="info_left">
        <h1 className="info_left_title">Duyu Oyunu</h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p className="info_left_text">
          Bu oyun için tahtadan yapılmış kutular kullanılır. Tahta kutular
          mevcut değilse Kolayca bir karton kutudan (ayakkabı kutusundan)
          oluşturulabilir. Çocukların elinin giriş yeri elleri içeri girecek
          büyüklükte kesilir, örtmek için ise siyah kumaş yapıştırılır. Grubun
          büyüklüğüne göre farklı sayıda kutular hazırlanır. Her kutuda farklı
          ağacın Yaprakları, meyveleri, ağaç kabukları koyulur. Yeni başlayanlar
          için ceviz veya meşe gibi ağaçların meyveleri, dalları, yaprakları
          seçilebilir. Algılayıcı kutusundaki ağaca ait birden fazla ürün
          kullanılabilir. Biraz daha zor olması istenirse fındık, üvez veya
          ıhlamur ağacının ürünleri, konulabilir. Daha zor bir seviyede ise
          kutuya ağacın sadece bir parçası, örneğin yalnızca Yaprağı veya dalı
          konulabilir.
        </p>
        <div className="social_media_icons_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <Link to="/dogadaki-nesneleri-dokunarak-tanima-oyunu">
              <h5>Doğadaki Nesneleri Tanıma Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <Link to="/dusen-yumurtayi-kurtarma-etkinligi">
              <h5>Düşen Yumurtayı Kurtarma Etkinliği</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <Link to="/tanisma-oyunu">
              <h5>Tanışma Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <img src={Img} alt="" />
            <Link to="/taksici-yolcu-oyunu">
              <h5>Taksici Yolcu Oyunu</h5>
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

export default InfoClass;
