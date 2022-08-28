import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/header.svg";

const InfoWorkshop = () => {
  const handleCategoryClick1 = () => {};
  return (
    <section className="info">
      <div className="info_left">
        <h1 className="info_left_title">Sismograf Yapımı</h1>

        <div className="info_left_image">
          <img src={Img} alt="" />
        </div>
        <p className="info_left_text">
          Sadece sivri uçlu bir kurşunkalem ve birkaç malzeme sismografın yapımı
          bir için yeterli olacaktır Sismologlar (deprem bilimcisi) depremin
          şiddetini böyle bir aletle ölçüyorlar.
          <br />
          <br />
          <b>MALZEMELER: </b>
          Ayakkabı kutusu, Ayakkabı kutusu kapağı, İp ,Silgili kurşun kalem,
          Bant, 2 tane ataç, Şeritler halinde kesilmiş beyaz kâğıt, Ağırlık,
          Toplu iğne, Oyun hamuru veya çamur.
          <br /> <br />
          <b>ETKİNLİĞE GİRİŞ: </b>
          Son günlerde İzmir’de meydana gelen depremlerden bahsederek, zaman
          zaman yer kabuğunda meydana gelen dalgalanmalar sonrası depremlerin
          meydana geldiğini anlatan resimler ve filmlerle gösterilebilir . Yer
          kabuğunun hareketlerini inceleyen yer bilimcilerin sismograf denilen
          aletlerle bu hareketleri görebildikleri açıklanır .’’Siz de yer
          bilimcisinin aletini yapıp yer hareketlerinin çizgilerini incelemek
          ister misiniz ?’’diyerek çizimi gösterilip, gerekli malzemeler ve
          nasıl yapılacağı anlatılır .Çalışma bir öğretmen eşliğinde gruplar
          halinde yapılabilir.
          <br />
          <br />
          <b>YAPIM AŞAMALARI: </b>
          Ayakkabı kutusunun kapağını kutuyla iç içe geçerek, L oluşturacak
          şekilde bantlanır. Boş olan ayakkabı kutusu dik duracak şekilde koyup
          ,içine ağırlık yerleştirilir.(Kartonun boş tarafının öne veya arkaya
          bakması fark etmiyor.)
          <br />
          <br />
          Kurşun kalemin sivri ucuna ağırlık yapacak şekilde oyun hamuru veya
          çamur yapıştırıp ,toplu iğneleri de hamurun üstüne tutturabilirsiniz .
          Kalemin ucundaki toplu iğnelerden oluşturulan ağırlık ne kadar çok
          olursa kalemin bırakacağı çizgiler o kadar görünür olur.
          <br />
          <br />
          Kalemin silgili ucuna ataç ,silgi delinerek geçirilir. Kuş gözü gibi
          kıvrılan ataca ip bağlanarak , kutunun kapağına başka ataç yardımıyla,
          kalem yere değecek şekilde ayarlanarak, bağlanır.
          <br />
          <br />
          Sonra kutu bir masa veya sehpanın üstüne konularak, üç parça halinde
          kesilen kağıtlar , şerit haline gelecek şekilde yapıştırıp kalemin
          altına yerleştirilir. Kâğıt şerit önce düz bir şekilde çekilerek
          çizginin ne kadar düzgün olduğu görülür. Daha sonra masa ( depremi,
          yer hareketlerini temsilen )önce yatay, sonra dikey olarak hareket
          ettirilir ve kalemin çizdiği çizgiler önceki çizgilerle
          karşılaştırılır. Yatay sallanmalarda oluşan çizgiler ile dikey
          sallanmalarda oluşan çizgileri karşılaştırılır.
          <br />
          <br />
          Deprem kuşağında yer alan Türkiye’deki okullarda bilgilendirme ve
          etkinliklerler yapıldıktan sonra da ,en az ayda bir kez olmak şartıyla
          deprem tatbikatı yapılmalıdır.
        </p>
        <div className="social_media_icons_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container1">
          <h3>Diğer Doğa'da Yaşamlar</h3>

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/bahcemiz">
              <img src={Img} alt="" />
            </Link>
            <Link to="/bahcemiz">
              <h5>Bahçemiz</h5>
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

          <article className="info_article" onClick={handleCategoryClick1}>
            <Link to="/dogadaki-nesneleri-dokunarak-tanima-oyunu">
              <img src={Img} alt="" />
            </Link>
            <Link to="/dogadaki-nesneleri-dokunarak-tanima-oyunu">
              <h5>Doğadaki Nesneleri Tanıma Oyunu</h5>
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
