import React from 'react'
import "./Navbar.css"
import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
const Navbar = () => {
  return (
      <nav>
          <div className="container nav_container">
              <a href=""><h4>DOĞA</h4></a>
              <ul className='nav_menu'>
                  <li>
                      <a href="#">Ana Sayfa</a>
                  </li>

                  <li>
                      <a href="#">Hakkımızda</a>
                  </li>

                  <li>
                      <a href="#">İletişim</a>
                  </li>
              </ul>

              <button><i><AiOutlineMenu></AiOutlineMenu></i></button>
              <button><i><AiOutlineClose></AiOutlineClose></i></button>
          </div>
      </nav>
  )
}

export default Navbar