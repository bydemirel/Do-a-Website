import React from "react";

const Info = () => {
  return (
    <section className="info">
      <div className="info_left">
        <h1>Categories</h1>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quas volupta,
          ab in corporis.Voluptatem cum harum ipsum, facilis ducimus varitatis
          optio.
        </p>
        <div className="social_media_row"></div>
      </div>

      <div className="info_right">
        <div className="container info_container">
            <h1>Diğer Doğa'da Yaşamlar</h1>

          <article className="info" onClick={handleCategoryClick1}>
            <h5>Orman Günleri</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.
            </p>
          </article>
          
        </div>
      </div>
    </section>
  );
};

export default Info;
