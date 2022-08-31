import React from "react";
import "./Categories.css";
import { FaTaxi } from "react-icons/fa";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import {
  GiHumanEar,
  GiShakingHands,
  GiEasterEgg,
  GiHand,
  GiNoseSide,
} from "react-icons/gi";
import { WiEarthquake } from "react-icons/wi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Categories = () => {
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

  const handleCategoryClick5 = () => {
    navigate("/tanisma-oyunu");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick6 = () => {
    navigate("/taksici-yolcu-oyunu");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick7 = () => {
    navigate("/sismograf-yapimi");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick8 = () => {
    navigate("/yaz-etkinlikleri");
    window.scrollTo(0, 0);
  };

  return (
    <section className="categories">
      <div className="container categories_container">
        <div className="categories_left">
          <h1>Etkinliklerimiz</h1>
          <p>
            Çocuklar özellikle büyük şehirlerde doğadan uzakta, hareketsiz ve
            ekranlara bakarak büyüyorlar. Oysa ki çocukların sağlıklı gelişimi
            için, içinde bulundukları çevreyle temas halinde olmaları, doğanın
            içinde vakit geçirmeleri, özgürce oyun oynayabilmeleri çok önemli.
          </p>
          <Link to="/" className="btn">
            Daha Fazla
          </Link>
        </div>

        <div className="categories_right">
          <article className="category" onClick={handleCategoryClick1}>
            <span className="category_icon">
              <i>
                <GiNoseSide></GiNoseSide>
              </i>
            </span>
            <h5>Koku ve Hafıza Oyunu</h5>
            <p>
              Film kutularına kokulu bir bitki, yapraklar, meyve veya benzerleri
              ile doldurulup, ağzı bir parça...
            </p>
          </article>

          <article className="category" onClick={handleCategoryClick2}>
            <span className="category_icon">
              <i>
                <GiHumanEar></GiHumanEar>
              </i>
            </span>
            <h5>Duyu Oyunu</h5>
            <p>
              Bu oyun için tahtadan yapılmış kutular kullanılır. Tahta kutular
              mevcut değilse Kolayca bir karton kutudan...
            </p>
          </article>

          <article className="category" onClick={handleCategoryClick3}>
            <span className="category_icon">
              <i>
                <GiHand></GiHand>
              </i>
            </span>
            <h5>Doğadaki Nesneleri Dokunarak Tanıma Oyunu</h5>
            <p>
              Oyuna hazırlanmak için oyunu yöneten kişi tarafından farklı
              yapraklar...
            </p>
          </article>

          <article className="category" onClick={handleCategoryClick4}>
            <span className="category_icon">
              <i>
                <GiEasterEgg></GiEasterEgg>
              </i>
            </span>
            <h5>Düşen Yumurtayı Kurtarma Etkinliği</h5>
            <p>
              Takımın zaman baskısı altında hareket etmesi ve tepki vermesi
              gereken bir etkinlik...
            </p>
          </article>

          <article className="category" onClick={handleCategoryClick5}>
            <span className="category_icon">
              <i>
                <GiShakingHands></GiShakingHands>
              </i>
            </span>
            <h5>Tanışma Oyunu</h5>
            <p>
              Büyük çam kozalakları veya küçük toplar Öğretmen grubu karşılar,
              kendini tanıtır ve çocuklara...
            </p>
          </article>

          <article className="category" onClick={handleCategoryClick6}>
            <span className="category_icon">
              <i>
                <FaTaxi></FaTaxi>
              </i>
            </span>
            <h5>Taksici Yolcu Oyunu</h5>
            <p>
              Bir çocuk yolcunun rolünü üstlenir ve taksinin hangi iki nokta
              arasında hareket edeceğini...
            </p>
          </article>

          <article className="category" onClick={handleCategoryClick7}>
            <span className="category_icon">
              <i>
                <WiEarthquake></WiEarthquake>
              </i>
            </span>
            <h5>Sismograf Yapımı</h5>
            <p>
              Sadece sivri uçlu bir kurşunkalem ve birkaç malzeme sismografın
              yapımı bir için yeterli olacaktır...
            </p>
          </article>

          <article className="category" onClick={handleCategoryClick8}>
            <span className="category_icon">
              <i>
                <BsFillEmojiSunglassesFill></BsFillEmojiSunglassesFill>
              </i>
            </span>
            <h5>Yaz Etknilikleri</h5>
            <p>
              Doğada güvenli ve sakin bir yere oturup çevrenizdeki sesleri
              dinleyin: Hangi hayvanların seslerini duyuyorsunuz?
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Categories;
