import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleOffDisplay = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-logo">
          <div className="left-logo1"></div>
          <div className="left-logo2"></div>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="" className="jua-regular-large">
              여행 정보 공유
            </Link>
          </li>
          <li>
            <Link to="" className="jua-regular-large">
              나의 여행 정보
            </Link>
          </li>
          <li>
            <Link to="" className="jua-regular-large">
              핫플 자랑하기
            </Link>
          </li>
          <li>
            <Link to="http://www.naver.com" className="jua-regular-large">
              핫플 자랑하기
            </Link>
          </li>
        </ul>
        <div className="flodedNav">
          <div className="flodedNav-btn" onClick={toggleOffDisplay}></div>
        </div>
        <div className="navbar-icons">
          <div className="navbar-icons-wrapper">
            <FontAwesomeIcon className="icon" id="navbar-search-btn" icon={faMagnifyingGlass} />
          </div>
          <div className="navbar-icons-wrapper" id="bulb-wrapper">
            <FontAwesomeIcon className="icon" icon={faLightbulb} id="navbar-bulb" />
          </div>
          <div className="navbar-icons-wrapper">
            <FontAwesomeIcon className="icon" icon={faCartShopping} id="navbar-cart" />
          </div>
          <div className="navbar-icons-wrapper">
            <FontAwesomeIcon className="icon" icon={faUser} id="navbar-user" />
          </div>
        </div>
        <div className="search-menu">{/* 검색 기능 추가 */}</div>
      </div>
      <ul className={`burger-menu ${displayMenu ? "" : "off-display"}`}>
        <li>
          <Link to="" className="jua-regular">
            여행 정보 공유
          </Link>
        </li>
        <hr />
        <li>
          <Link to="" className="jua-regular">
            나의 여행 정보
          </Link>
        </li>
        <hr />
        <li>
          <Link to="" className="jua-regular">
            핫플 자랑하기
          </Link>
        </li>
        <hr />
        <li>
          <Link to="" className="jua-regular">
            핫플 자랑하기
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
