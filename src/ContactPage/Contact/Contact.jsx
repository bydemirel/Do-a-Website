import React from "react";
import "./Contact.css";
import {AiFillPhone, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {IoLocationSharp} from "react-icons/io5";
import contactImg from "../../images/contact.svg";
const Contact = () => {
  return (
    <section className="contact">
      <div className="container contact_container">
        <aside className="contact_aside">
          <div className="aside_image">
            <img src={contactImg} alt="" />
          </div>
          <h2>Bize Ulaşın</h2>
          <p>
            Asperiores veniam vel doloribus asseumenda soluta blanditiis dolores
            qui voluptates, conseqatur vitae
          </p>
          <ul className="contact_details">
              <li>
                  <i><AiFillPhone></AiFillPhone></i>
                  <h5> 0850 225 90 92</h5>
              </li>

              <li>
                  <i><AiFillMail></AiFillMail></i>
                  <h5>doga@doga.com.tr</h5>
              </li>

              <li>
                  <i><IoLocationSharp></IoLocationSharp></i>
                  <h5>Bayraklı, İzmir</h5>
              </li>
          </ul>

          <ul className="contact_socials">
              <li><a href="https://www.facebook.com" rel="noreferrer" target="_blank"><i className="facebook_icon"><AiFillFacebook></AiFillFacebook></i></a></li>
              <li><a href="https://www.instagram.com" rel="noreferrer" target="_blank"><i className="insta_icon"><AiFillInstagram></AiFillInstagram></i></a></li>
              <li><a href="https://www.linkedin.com" rel="noreferrer" target="_blank"><i className="linkedin_icon"><AiFillLinkedin></AiFillLinkedin></i></a></li>
          </ul>
        </aside>

        <form className="contact_form">
            <div className="form_name">
                <input type="text" name="First Name" placeholder="Adınız" required/>
                <input type="text" name="Last Name" placeholder="Soyadınız" required/>
            </div>
            <input type="email" name="Email" placeholder="Email" required/>
            <textarea name="Message" rows="7" placeholder="Mesajınız" required/>
            <button type="submit" className="btn btn-primary">Gönder</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
