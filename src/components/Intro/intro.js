import React from "react";
import "./intro.css";
import rv from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="text">I'm <span className="myName">Rohit</span><br />Software Engineer.</span>
            <p className="description">I am a Java, Python and React Based Full Stack developer<br /> with a knack for building clean, intuitive websites that are <br />not only functional, but also visually appealing and easy<br /> to use.</p>
            <Link><button className="btn"><img src={btnImg} alt="" className="btnImg" />Hire Me.</button></Link>
        </div>
        <img src={rv} alt="" className="rv" />
    </section>
  )
}

export default Intro;