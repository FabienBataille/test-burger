import React from "react";
import "./nav.css";
import {useState} from "react";

function Nav() {
const [showLinks, setShowLinks] = useState(false);
const handleShowLinks= () => {
    setShowLinks(!showLinks)
}
  return (
    <nav className={`navbar ${showLinks? "show-nav" : "hide-nav"}`}>
      <div className="navbar_title">Logo</div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="/" className="href navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="href navbar_link">
            Historique
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="href navbar_link">
            Travaux
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
