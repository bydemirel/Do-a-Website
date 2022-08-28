import React from 'react'
import "../../AboutUsPage/Achievements/Achievements";
import AchievementsImage from "../../images/about achievements.svg";

const DevelopmentAreas = () => {
  return (
    <section className="about_achievements">
    <div className="container about_achievements-container">
      <div className="about_achievements-left">
        <img src={AchievementsImage} alt="" />
        <p>
          <br /><br />
          Almanya’da uygulanan orman ve doğa Pedagojisini, Türk Milli Eğitim
          Müfredatına uygun bir şekilde okul öncesi ve ilkokullarda görev
          yapan eğitimci ve öğretmenlere bireysel eğitim sağlamayı, özel
          kurumlara kurum içi eğitimlerle orman okulunda yapılacak yıllık
          planların hazırlanmasında, projelerin yürütülmesinde, kıyafet,
          ekipman, alan seçimi, güvenlik önlemleri alanında bilgilendirerek
          destek olmayı amaçlıyoruz.
          <br />
          <br />
          Diğer bir hedefimiz de devlet anaokulu ve ilkokullarında görev yapan
          öğretmenlere orman günü planlamalarında etkinlik hazırlama, etkinlik
          ve proje yürütmede destek olmak.
        </p>
      </div>

      <div className="about_achievements-right">
        <h1>Neden Doğa</h1>
        <p>
          Özellikle son birkaç yıldır, çocukların daha fazla doğanın içinde
          vakit geçirmelerini sağlayacak projeler önem kazanmaya başladı. Doğa
          eğitiminin yanı sıra orman okulları alanında da yeni girişimler
          görülmekte. Anne babalar ve eğitmeler çocukların doğayla temas
          kurmasının ve hayatı doğanın içinde deneyimlemesinin önemini fark
          etti.
          <br />
          <br />
          Biz de doğaya yabancılaşan hatta doğanın farkında olmayan çocukların
          öğretmen ya da anne babaları olarak bu kopukluğu gidermek ve bu bağı
          yeniden inşa etmek istiyoruz. Misyonumuz, çeşitli etkinlikler
          sayesinde çocuklarımızın doğanın içinde kendilerinden başka
          canlıları gözlemlemesini, onları koruyup kollamasını öğrenmeleri,
          sorumluluk almaları ve doğanın öğreticiliğini fark etmelerini
          sağlamak. 3-5 yaş grubu çocukların öğretmenlerine, doğada tek başına
          ve hafta sonu geçiren ailelere etkinliklerimizle destek olmayı
          amaçlıyoruz.
        </p>
        <img src={AchievementsImage} alt="" />
      </div>
    </div>
  </section>
  )
}

export default DevelopmentAreas