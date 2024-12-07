import React from "react";
import "./works.css";
import portfolioImg1 from "../../assets/portfolio-1.png";
import portfolioImg2 from "../../assets/portfolio-2.png";
import portfolioImg3 from "../../assets/portfolio-3.png";
import portfolioImg4 from "../../assets/portfolio-4.png";
import portfolioImg5 from "../../assets/portfolio-5.png";
import portfolioImg6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="description">"I take pride in paying attention to the smallest details and making sure that my work is pixel <br />perfect. I am excited to bring my skills and experience to help businesses achieve their goals<br /> and create a strong online presence."</span>
        <div className="worksImgs">
            <img src={portfolioImg1} alt="" className="worksImg" />
            <img src={portfolioImg2} alt="" className="worksImg" />
            <img src={portfolioImg3} alt="" className="worksImg" />
            <img src={portfolioImg4} alt="" className="worksImg" />
            <img src={portfolioImg5} alt="" className="worksImg" />
            <img src={portfolioImg6} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;