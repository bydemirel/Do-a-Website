import React from "react";
import "./Achievements.css";
import AchievementsImage from "../../images/about achievements.svg";
import projectImg from "../../images/project.png";
import abcImg from "../../images/abc.png";
import childrenImg from "../../images/children.png";

const Achievements = () => {
  return (
    <section className="about_achievements">
      <div className="container about_achievements-container">
        <div className="about_achievements-left">
          <img src={AchievementsImage} alt="" />
        </div>

        <div className="about_achievements-right">
          <h1>Neden Doğa</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam
            velit, assumenda, obcaecati molestiae voluptatem place alias iste ad
            modi sunt quidem veniam recusandae possimus consequuntur quisquam
            soluta vero sapiente
          </p>

          <div className="achievements_cards">
              <article className="achievement_card">
                  <span className="achievement_icon">
                      <img src={projectImg} alt="" />
                  </span>
                  <h3>8</h3>
                  <p>Projelerimiz</p>
              </article>

              <article className="achievement_card">
                  <span className="achievement_icon">
                      <img src={childrenImg} alt="" />
                  </span>
                  <h3>60</h3>
                  <p>Çocuklarımız</p>
              </article>
              
              <article className="achievement_card">
                  <span className="achievement_icon">
                      <img src={abcImg} alt="" />
                  </span>
                  <h3>20</h3>
                  <p>Etkinliklerimiz</p>
              </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
