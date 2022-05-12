import React,{useState} from 'react'
import "./Navbar.css"
import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import {
  Link
} from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [menuBar, setMenuBar] = useState(true);
    const [close, setClose] = useState(false);


    const handleClickOpen = () => {
        setShowMenu(true);
        setMenuBar(false);
        setClose(true);
    }

    const handleClickClose = () => {
        setShowMenu(false);
        setClose(false);
        setMenuBar(true);
    }

  return (
      <nav>
          <div className="container nav_container">
              <a href=""><h4>DOĞA</h4></a>
              <ul className={showMenu ? 'nav_menu':'nav_menu_open'}>
                  <li>
                    <Link to="/">Ana Sayfa</Link>
                  </li>

                  <li>
                      <Link to="/hakkimizda">Hakkımızda</Link>
                  </li>

                  <li>
                      <Link to="/iletisim">İletişim</Link>
                  </li>
              </ul>

              <button id={menuBar ? 'open-menu-btn':'open-menu-btn-close'} onClick={handleClickOpen}><i><AiOutlineMenu></AiOutlineMenu></i></button>
              <button id={close ? 'close-menu-btn':'close-menu-btn-close'} onClick={handleClickClose}><i><AiOutlineClose></AiOutlineClose></i></button>
          </div>
      </nav>
  )
}

export default Navbar