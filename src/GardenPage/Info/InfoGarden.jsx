import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/header.svg";
import { useNavigate } from "react-router-dom";

const InfoGarden = () => {
  const navigate = useNavigate();
  const handleCategoryClick1 = () => {
    navigate("/dusen-yumurtayi-kurtarma-etkinligi");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick2 = () => {
    navigate("/tanisma-oyunu");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick3 = () => {
    navigate("/taksici-yolcu-oyunu");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick4 = () => {
    navigate("/sismograf-yapimi");
    window.scrollTo(0, 0);
  };
  return (
    <section className="info">
      <div className="info_left">
        <h1 className="info_left_title">
          Doğadaki Nesneleri Dokunarak Tanıma Oyunu
        </h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p className="info_left_text">
          <b>Çalışma süresi: </b> 10- 20 dk.
          <br />
          <br />
          <b>Oyuncu sayısı: </b> Küçükten büyüğe tüm gruplar
          <br />
          <br />
          <b>Açıklama: </b> Oyuna hazırlanmak için oyunu yöneten kişi tarafından
          farklı yapraklar, meyveler veya kabukları toplanır. Başlangıçta grup
          bir çember oluşturur. Çocuklar çemberin merkezine bakarken ellerini
          arkasında bağlı tutar. Oyun iki farklı varyasyonda oynanabilir
          <br />
          <br />
          <b>1. Varyasyon: </b> Oyunu yöneten her çocuğa elinde ne olduğunu
          göstermeden bir yaprak, bir meyve veya bir ağaç kabuğu koyar. Sonra
          oyunu yöneten çocuklara materyallerini dikkatlice hissetmeleri ve ne
          olabileceğini tahmin etmeleri için zaman verir ‘’Ne tür bir ağaç veya
          bitki olduğunu hissedin. ‘’ Elindeki nesneyi tanıyan çocuğu bunu
          bildirir ve tam olarak tarif eder adını açıklamaz. Ama bunu elindeki
          nesneyi kimseye göstermeden yapar. Tarif edilen nesneyi ellerinde
          tuttuklarına inanan çocuklar, ellerindekini çemberin ortasına
          yerleştirirler. Şimdi karşılaştırılır nesnelerin hepsi aynı, farklı
          türden mi veya tam olarak ne türdür incelenir. Daha sonra diğer
          çocukların ellerindeki nesnelerin tarif edilmesiyle devam edilir.
          <br />
          <br />
          <b>2. Varyasyon: </b> Bu yalnızca daha küçük gruplar için uygundur.
          Oyun yönetimi toplanan doğal malzemelerden birini rastgele seçilen bir
          çocuğun eline verir. Çocuk doğal malzemenin türünü hissederek tahmin
          etmeye çalışır. Bir tahmini varsa Bunu yüksek sesle söyleyebilir. Bu
          doğruysa oyunu yöneten bir sonraki nesneyi eline verilir. Her doğru
          tahmin edilen nesne için bir puan verilir. Ancak, tahmin yanlışsa,
          çocuk nesneyi çemberdeki diğer arkadaşının diğer eline verir. Fakat
          çocuk elindeki nesnenin ne olduğunu tahin etmek istemez ise yanındaki
          arkadaşına verebilir.
        </p>
        <div className="social_media_icons_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/dusen-yumurtayi-kurtarma-etkinligi">
              <img src={Img} alt="" />
            </Link>
            <Link to="/dusen-yumurtayi-kurtarma-etkinligi">
              <h5>Düşen Yumurtayı Kurtarma Etkinliği</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick2}>
            <Link to="/tanisma-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/tanisma-oyunu">
              <h5>Tanışma Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick3}>
            <Link to="/taksici-yolcu-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/taksici-yolcu-oyunu">
              <h5>Taksici Yolcu Oyunu</h5>
            </Link>
          </article>

          <article className="info_article" onClick={handleCategoryClick4}>
            <Link to="/sismograf-yapimi">
              <img src={Img} alt="" />
            </Link>
            <Link to="/sismograf-yapimi">
              <h5>Sismograf Yapımı</h5>
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

export default InfoGarden;
