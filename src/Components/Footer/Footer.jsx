import React from "react";
import "./Footer.css";
import { AiFillPhone } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_1">
          <a href="/" className="footer_logo">
            <h4>Doğa Okul Öncesi Eğitim Kurumu</h4>
          </a>
          <p>Alternatif Eğitim Yaklaşımlarını MEB Müfredatı ile Harmanlayan Okul</p>
        </div>

        <div className="footer_2">
          <h4>Hızlı Erişim</h4>
          <ul className="permalinks">
            <li>
              <Link to="/" onClick={()=>{
                window.scrollTo(0,0);
              }}>Anasayfa</Link>
            </li>
            <li>
              <Link to="/hakkimizda" onClick={()=>{
                window.scrollTo(0,0);
              }}>Hakkımızda</Link>
            </li>
            <li>
              <Link to="/iletisim" onClick={()=>{
                  window.scrollTo(0,0);
              }}>İletişim</Link>
            </li>
          </ul>
        </div>

        <div className="footer_3">
          <h4>İletişim</h4>
          <div>
            <p>Kabaoğlu, 41000 Tüysüzler, İzmir / Bayraklı</p>
            <p>
              <i>
                <AiFillPhone></AiFillPhone>
              </i>{" "}
              0850 225 90 92
            </p>
            <p>
              <i>
                <IoIosMail></IoIosMail>
              </i>{" "}
              doga@doga.com.tr
            </p>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <small>Copyright &copy; DOĞA Doğa ve Orman Pedagogu</small>
      </div>
    </footer>
  );
};

export default Footer;
