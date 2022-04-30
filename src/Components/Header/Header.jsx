import React from 'react'
import "./Header.css"
import HeaderImg from '../../images/header.svg';

const Header = () => {
  return (
      <header>
          <div className="continer header_container">
              <div className="header_left">
                  <h1>Doğa ve Orman Pedagogu</h1>
                  <p>
                  Her Çocuk benzersizdir ve kendi gelişiminin kahramanıdır.
                  </p>
                  <a href="" className='btn btn-primary'>İletişim</a>
              </div>
              <div className="header_right">
                  <div className="header_right-image">
                      <img src={HeaderImg} alt="" />
                  </div>
              </div>
          </div>
      </header>
  )
}

export default Header