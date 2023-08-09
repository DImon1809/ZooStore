import basket from "../images/basket.png";
import menu__unactive from "../images/menu__unactive.png";
import menu__active from "../images/menu__active.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header__div">
      <nav className={`NavBar__nav ${isOpen ? "active" : ""}`}>
        <ul className="NavBar__ul">
          <li className="nav__item">
            <Link to="../Pages/Page__one">Главная</Link>
          </li>
          <li className="nav__item">
            <Link to="../Pages/Page__two">О нас</Link>
          </li>
          <li className="nav__item">
            <Link to="../Pages/Page__three">Выбрать друга</Link>
          </li>
          <li className="nav__item">Наши контакты</li>
        </ul>
        <Link to="../Pages/Page__basket">
          <img src={basket} alt="basket" className="img__basket" />
        </Link>
      </nav>
      <div className="burger__menu">
        {isOpen ? (
          <img
            src={menu__active}
            alt="menu__active"
            className="img__nemu__active"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <img
            src={menu__unactive}
            alt="menu__unactive"
            className="img__nemu__unactive"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </header>
  );
};

export default NavBar;
