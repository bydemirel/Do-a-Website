import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/header.svg";
import "./Info.css";

const InfoForrest = () => {
  return (
    <section className="info">
      <div className="info_left">
        <h1 className="info_left_title">Koku ve Hafıza Oyunu</h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p className="info_left_text">
          <b>Hedef kitle: </b>Anaokulu, ilkokul öğrencileri
          <br />
          <br />
          <b>Malzeme: </b>5-7 film kutusu, kokan otlar, yapraklar vb. (nane,
          lavanta, kekik.) , küçük pamuklu kumaş parçaları veya ince çorap, ince
          lastik
          <br />
          <br />
          <b>Yapılışı: </b> Film kutularına kokulu bir bitki, yapraklar, meyve
          veya benzerleri ile doldurulup, ağzı bir parça pamuklu kumaş veya ince
          çorap ile örtülüp lastik takılır. Daha sonra kutu çemberdeki
          çocukların elinde sırayla dolaştırılır. Çocuklar kokunun ait olduğu
          bitkiyi veya otu o bölgede bulunan bitki veya yapraklarda elleriyle
          biraz ovuşturarak bulmaya çalışırlar. Daha büyük çocukların bitkinin
          adı da tahmin edilmesi istenebilir.
          <br />
          <br />
          <b>Varyasyon: </b> Film kutuları yerine, bitkinin parçaları ince bez
          kumaş parçalarına veya çocuk çoraplarına, konulup bağlanarak da
          oynanabilir. Küçük yaştaki çocuklar gözlerini kapatamayabilir onlarla
          bu oyunu oynarken gözler bir bezle veya uyku gözlükleriyle
          kapatılabilir.
        </p>
        <div className="social_media_icons_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info_article">
            <img src={Img} alt="" />
            <Link to="/duyu-oyunu">
              <h5>Duyu Oyunu</h5>
            </Link>
          </article>

          <article className="info_article">
            <img src={Img} alt="" />
            <Link to="/dogadaki-nesneleri-dokunarak-tanima-oyunu">
              <h5>Doğadaki Nesneleri Tanıma Oyunu</h5>
            </Link>
          </article>

          <article className="info_article">
            <img src={Img} alt="" />
            <Link to="/dusen-yumurtayi-kurtarma-etkinligi">
              <h5>Düşen Yumurtayı Kurtarma Etkinliği</h5>
            </Link>
          </article>

          <article className="info_article">
            <img src={Img} alt="" />
            <Link to="/tanisma-oyunu">
              <h5>Tanışma Oyunu</h5>
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

export default InfoForrest;
