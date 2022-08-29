import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Img from "../../images/header.svg";
import Img2 from "../../images/children-running.jpg";

const InfoSummerActivites = () => {
  const navigate = useNavigate();
  const handleCategoryClick1 = () => {
    navigate("/koku-ve-hafiza-oyunu");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick2 = () => {
    navigate("/duyu-oyunu");
    window.scrollTo(0, 0);
   
  };

  const handleCategoryClick3 = () => {
    navigate("/dogadaki-nesneleri-dokunarak-tanima-oyunu");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick4 = () => {
    navigate("/dusen-yumurtayi-kurtarma-etkinligi");
    window.scrollTo(0, 0);
  };
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
          3. Ormanda hangikuş seslerini ayırt edebilirsiniz? Bir kereliğine
          birinin sesini dikkatli dinleyin ve tanımaya çalışın.
          <br />
          4. Ormanda sessizce oturun ve sesleri dinleyin: Kuş sesleri hangi
          yönden geliyor? İnsan sesleri, hışırtı, rüzgar ağaçkakan vuruşu vb.
          var mı?
          <br />
          <br />
          <img src={Img2} alt="" style={{ width: 200, heigth: 200 }} />
          <br />
          5. Bir göl veya gölet kenarında güvenli bir yer seçin. Dürbününüzü
          alın çevrenizi, gözlemleyin ve sesleri dinleyin. Kuş seslerini nereden
          geliyor? Dürbünle kuşun tüylerini seçebilir misin? Kuşu net görebilir
          misin? Başka hayvanları görebiliyor ve duyabiliyor musun?
          <br />
          6. Ormanda yosunlu bir alan bulun ve gözlem yapın: Yosun dünyasında
          hangi hayvanları keşfediyorsunuz?
          <br />
          <br />
          <img src={Img2} alt="" style={{ width: 200, heigth: 200 }} />
          <br />
          7. Kendinize bir su büyüteci yapın ve bir dere kenarında keşif turuna
          çıkın: Suyun altında ne görüyorsunuz? Suyun üstünde neler yüzebiliyor,
          neler batıyor?
          <br />
          8. Su kenarından büyük bir taşı dikkatlice kaldırın ve altına bakın.
          Altından hangi hayvanlar var? Taş kendini nasıl hissediyordur?
          <br />
          <br />
          <img src={Img2} alt="" style={{ width: 200, heigth: 200 }} />
          <br />
          9. Bir suda koşan böceğini gözlemleyin ve neden ve nasıl su üzerinde
          yürüyebildiğini öğrenin. Başka kimler, neler yüzebiliyor?
          <br />
          10. Bir yusufçuk gözlemleyin. Diğer böceklere kıyasla ne kadar hızlı
          uçabiliyor? Bir noktada sürekli uçabilir mi? Bu sana neyi
          hatırlatıyor? Diğer böcekler de aynı şeyi yapabilir mi?
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

          <article className="info_article" onClick={handleCategoryClick2}>
            <Link to="/duyu-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/duyu-oyunu">
              <h5>Duyu Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick3}>
            <Link to="/dogadaki-nesneleri-dokunarak-tanima-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/dogadaki-nesneleri-dokunarak-tanima-oyunu">
              <h5>Doğadaki Nesneleri Dokunarak Tanıma Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick4}>
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
