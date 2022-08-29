import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/header.svg";

const InfoWorkshop = () => {
  const handleCategoryClick1 = () => {};
  return (
    <section className="info">
      <div className="info_left">
        <h1 className="info_left_title">Düşen Yumurtayı Kurtarma Etkinliği</h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p className="info_left_text">
          Takımın zaman baskısı altında hareket etmesi ve tepki vermesi gereken
          bir etkinlik.
          <br /> <br />
          <b>Malzemeler: </b> Çiğ yumurta; ip; bant; kronometre(yumurtaların
          ziyan olmaması için yumurta eşdeğer ağırlıkta, erik vb. meyveler de
          kullanılabilir.)
          <br /> <br />
          <b>Hazırlık: </b> İp yüksek bir dalın üzerinden atılır; sabitlenir.
          Diğer ucuna ise yumurta yapıştırılıp 3-4m ( yaş gurubuna göre daha
          kısa tutulabilir.) yukarıya çekilir.
          <br />
          <br />
          <b>Süreç: </b> Takıma yumurtanın 5 dakika sonra yere düşeceği
          açıklanarak, takımdaki çocukların sadece ormanda buldukları doğal
          malzemeleri kullanarak yumurtayı kırılmaktan kurtaracak yöntemler
          geliştirmeleri istenir.
          <br /> <br />
          <b>KURAL: </b> Yumurta elle yakalanamaz, ip veya kordona dokunulamaz
        </p>
        <div className="social_media_icons_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/tanisma-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/tanisma-oyunu">
              <h5>Tanışma Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/taksi-yolcu-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/taksici-yolcu-oyunu">
              <h5>Taksici Yolcu Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/sismograf-yapimi">
              <img src={Img} alt="" />
            </Link>
            <Link to="/sismograf-yapimi">
              <h5>Sismograf Yapımı</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/kutuphanemiz">
              <img src={Img} alt="" />
            </Link>
            <Link to="/kutuphanemiz">
              <h5>Sağlık ve Beslenme</h5>
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

export default InfoWorkshop;
