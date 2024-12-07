import React from "react";
import "./clients.css";
import infosys from "../../assets/Infosys_logo.svg.png";

const Clients = () => {
  return(
    <section id="client">
        <div className="clients">
            <h1 className="clientPageTitle">My Experience</h1>
        </div>
        <div className="clientImgs">
            <img src={infosys} alt="Client" className="clientImg" />
            <p className="description">Systems Engineer Trainee.<br/>
              Digital Specialist Engineer.
            </p>
        </div>
    </section>
  )
}

export default Clients;