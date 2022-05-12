import React, { useState } from "react";
import "./FAQs.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQs = () => {
  const [iconName1, setIconName1] = useState("plus_icon");
  const [iconName2, setIconName2] = useState("plus_icon");
  const [iconName3, setIconName3] = useState("plus_icon");
  const [iconName4, setIconName4] = useState("plus_icon");

  const handleClick1 = () => {
    if (iconName1 === "plus_icon") {
      setIconName1("minus_icon");
    } else {
      setIconName1("plus_icon");
    }
  };

  const handleClick2 = () => {
    if (iconName2 === "plus_icon") {
      setIconName2("minus_icon");
    } else {
      setIconName2("plus_icon");
    }
  };

  const handleClick3 = () => {
    if (iconName3 === "plus_icon") {
      setIconName3("minus_icon");
    } else {
      setIconName3("plus_icon");
    }
  };

  const handleClick4 = () => {
    if (iconName4 === "plus_icon") {
      setIconName4("minus_icon");
    } else {
      setIconName4("plus_icon");
    }
  };

  return (
    <section className="faqs">
      <h2>Sıkça Sorunlan Sorular</h2>
      <div className="container faqs_container">
        <article className={iconName1 === "plus_icon" ? "faq":"faq open"} onClick={handleClick1}>
          <div className="faq_icon">
            <i className={iconName1}>
              {iconName1 === "plus_icon" ? (
                <AiOutlinePlus></AiOutlinePlus>
              ) : (
                <AiOutlineMinus></AiOutlineMinus>
              )}
            </i>
          </div>
          <div className="question_answer">
            <h4>Kaç ay/yaş itibari ile eğitim vermektesiniz?</h4>
            <p>24 ay/2 yaş itibariyle çocuklarımıza eğitim vermekteyiz.</p>
          </div>
        </article>

        <article className={iconName2 === "plus_icon"  ? "faq":"faq open"} onClick={handleClick2}>
          <div className="faq_icon">
            <i className={iconName2}>
              {iconName2 === "plus_icon" ? (
                <AiOutlinePlus></AiOutlinePlus>
              ) : (
                <AiOutlineMinus></AiOutlineMinus>
              )}
            </i>
          </div>
          <div className="question_answer">
            <h4>Eğitim süreciniz ne kadar sürmektedir?</h4>
            <p>Eğitim dönemimiz Eylül ayında başlar Haziran ayında biter. </p>
          </div>
        </article>

        <article className={iconName3 === "plus_icon" ? "faq":"faq open"} onClick={handleClick3}>
          <div className="faq_icon">
            <i className={iconName3}>
              {iconName3 === "plus_icon" ? (
                <AiOutlinePlus></AiOutlinePlus>
              ) : (
                <AiOutlineMinus></AiOutlineMinus>
              )}
            </i>
          </div>
          <div className="question_answer">
            <h4>Yaz okulunuz var mı?</h4>
            <p>Evet, yaz okulumuz vardır.</p>
          </div>
        </article>

        <article className={iconName4 === "plus_icon" ? "faq":"faq open"} onClick={handleClick4}>
          <div className="faq_icon">
            <i className={iconName4}>
              {iconName4 === "plus_icon" ? (
                <AiOutlinePlus></AiOutlinePlus>
              ) : (
                <AiOutlineMinus></AiOutlineMinus>
              )}
            </i>
          </div>
          <div className="question_answer">
            <h4>Ulaşım için servis hizmetiniz var mı?</h4>
            <p>Servis hizmetimiz yoktur, velilerimiz ulaşımı kendileri sağlamaktadır.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FAQs;
