import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo"/>
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass="active" to="client" spy={true} smooth={true} duration={500} className="desktopMenuListItem">Clients</Link>
      </div>
      <button className="contactMe" onClick={ () => {
        document.getElementById("contact").scrollIntoView({behavior: "smooth"});
      }}>
        <img src={contactImg} alt="Contact Me" className="contactMeImg" />Contact Me
      </button>
      <img src={menu} alt="Menu" className="mobMenu"/>
      <div className="navMenu" style={{display: showMenu? "flex" : "none"}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="mobMenuListItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-55} duration={500} className="mobMenuListItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-55} duration={500} className="mobMenuListItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="client" spy={true} smooth={true} duration={500} className="mobMenuListItem" onClick={() => setShowMenu(false)}>Clients</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="mobMenuListItem" onClick={() => setShowMenu(false)}>Contacts</Link>
      </div>
    </nav>
  )
}

export default Navbar;