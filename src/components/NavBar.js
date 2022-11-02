import "./NavBarStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={require('../imgs/favicon.ico.png')}></img>
        <h1>Camiloop.</h1>
      </Link>  

        <ul className="header__menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

    </div>
  );
};

export default NavBar;
