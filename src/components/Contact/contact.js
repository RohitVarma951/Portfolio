import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_axmo20r', 'template_epplxs9', form.current, { publicKey: 'iauYor0VwGHf_Y1QW' })
      .then( () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        }, (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
        <div id="contacts">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="description">Find my details here for reaching out to me.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="user_name" />
                <input type="email" className="email" placeholder="Your Mail ID" name="user_email" />
                <textarea className="msg" name="message" rows="5" placeholder="message"></textarea><br/>
                <button type="submit" value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;