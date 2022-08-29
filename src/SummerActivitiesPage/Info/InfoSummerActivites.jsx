import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/header.svg";
import Img2 from "../../images/children-running.jpg";

const InfoSummerActivites = () => {
  const handleCategoryClick1 = () => {};
  return (
    <section className="info">
      <div className="info_left">
        <h1 className="info_left_title">
          ÇOCUKLARLA DOĞADA YAPABİLECEĞİNİZ YAZ ETKİNLİKLERİ
        </h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p className="info_left_text">
          1. Doğada güvenli ve sakin bir yere oturup çevrenizdeki sesleri
          dinleyin: Hangi hayvanların seslerini duyuyorsunuz? Arılar,
          sivrisinekler, kuşlar, köpekler?
          <br />
          2. İşitme duyunuzu geliştirin: Bahçede, şehirde hangi kuş seslerini
          ayırt edebilirsiniz? (örneğin karatavuk, serçe, baştankara, çalıkuşu).
          Kuş gözlemlerine katılın.
          <br />
          <br />
          <img src={Img2} alt="" style={{ width: 200, heigth: 200 }} />
          <br />
          3. İşitme duyunuzu geliştirin: Bahçede, şehirde hangi kuş seslerini
          ayırt edebilirsiniz? (örneğin karatavuk, serçe, baştankara, çalıkuşu).
          Kuş gözlemlerine katılın.
          <br />
          4. İşitme duyunuzu geliştirin: Bahçede, şehirde hangi kuş seslerini
          ayırt edebilirsiniz? (örneğin karatavuk, serçe, baştankara, çalıkuşu).
          Kuş gözlemlerine katılın.
          <br />
          <br />
          <img src={Img2} alt="" style={{ width: 200, heigth: 200 }} />
          <br />
          5. İşitme duyunuzu geliştirin: Bahçede, şehirde hangi kuş seslerini
          ayırt edebilirsiniz? (örneğin karatavuk, serçe, baştankara, çalıkuşu).
          Kuş gözlemlerine katılın.
          <br />
          6. İşitme duyunuzu geliştirin: Bahçede, şehirde hangi kuş seslerini
          ayırt edebilirsiniz? (örneğin karatavuk, serçe, baştankara, çalıkuşu).
          Kuş gözlemlerine katılın.
          <br />
          <br />
          <img src={Img2} alt="" style={{ width: 200, heigth: 200 }} />
          <br />
          7. İşitme duyunuzu geliştirin: Bahçede, şehirde hangi kuş seslerini
          ayırt edebilirsiniz? (örneğin karatavuk, serçe, baştankara, çalıkuşu).
          Kuş gözlemlerine katılın.
          <br />
          8. İşitme duyunuzu geliştirin: Bahçede, şehirde hangi kuş seslerini
          ayırt edebilirsiniz? (örneğin karatavuk, serçe, baştankara, çalıkuşu).
          Kuş gözlemlerine katılın.
          <br />
          <br />
          <img src={Img2} alt="" style={{ width: 200, heigth: 200 }} />
          <br />
          9. İşitme duyunuzu geliştirin: Bahçede, şehirde hangi kuş seslerini
          ayırt edebilirsiniz? (örneğin karatavuk, serçe, baştankara, çalıkuşu).
          Kuş gözlemlerine katılın.
          <br />
          10. İşitme duyunuzu geliştirin: Bahçede, şehirde hangi kuş seslerini
          ayırt edebilirsiniz? (örneğin karatavuk, serçe, baştankara, çalıkuşu).
          Kuş gözlemlerine katılın.
        </p>
        <div className="social_media_icons_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/koku-ve-hafiza-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/koku-ve-hafiza-oyunu">
              <h5>Koku ve Hafıza Oyunu</h5>
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

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/dogadaki-nesneleri-dokunarak-tanima-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/dogadaki-nesneleri-dokunarak-tanima-oyunu">
              <h5>Doğadaki Nesneleri Dokunarak Tanıma Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/dusen-yumurtayi-kurtarma-etkinligi">
              <img src={Img} alt="" />
            </Link>
            <Link to="/dusen-yumurtayi-kurtarma-etkinligi">
              <h5>Düşen Yumurtayı Kurtarma Etkinliği</h5>
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

export default InfoSummerActivites;
