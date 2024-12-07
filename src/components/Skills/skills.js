import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="description">I aspire to be a skilled professional who is passionate about Java, Python, and full-stack development. With expertise in both backend and frontend technologies, I focus on building scalable, efficient, and user-friendly applications. My experience spans from developing robust systems in Java to leveraging Python for data-driven solutions, while also creating seamless user interfaces with modern frameworks. Committed to continuous growth, I aim to deliver high-quality software that meets both user needs and business goals.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo Text, you can write your own content here.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This demo text can be changed while making the production ready website.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>You can write text related to mobile app development.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;