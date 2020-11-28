import React, { useState } from "react";
import emailjs from "emailjs-com";
import { contactImg } from "../svgHelpers/svgVariables";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdGpsFixed } from "react-icons/md";

function Contact() {
  const [successMessage, setSuccessMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2lflx3r",
        "template_bvl7g5h",
        e.target,
        "user_MzlLzRVpByba5co48UHCP"
      )
      .then(
        (result) => {
          setSuccessMessage(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact-container">
      <div className="contactInfo">
        <div style={{ marginBottom: "20px" }}>
          <h3>Let's get in touch</h3>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
            I'm open for opportunities or just to have a chat.
          </p>
        </div>
        <p>
          <FaPhoneAlt style={{ fontSize: "18px", marginRight: "10px" }} />{" "}
          1.484.627.9598
        </p>
        <p>
          <HiOutlineMail style={{ fontSize: "18px", marginRight: "10px" }} />{" "}
          lyndasantiag@gmail.com
        </p>
        <p>
          <MdGpsFixed style={{ fontSize: "18px", marginRight: "10px" }} />
          EASTON, PENNSYLVANIA
        </p>
        <h3>Follow me on social media</h3>
        <a
          href="https://www.linkedin.com/in/lynda-santiago-7b58221b4/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/free-social-media-23/32/linkedin_social_media_logo-256.png"
            alt="linkedin logo"
          />
        </a>
        <a
          href="https://twitter.com/LyndaSa62252190"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/lumin-social-media-icons/512/Twitter-256.png"
            alt="twitter logo"
          />
        </a>

        <a href="https://github.com/lyntechi" target="_blank" rel="noreferrer">
          <img
            src="https://cdn3.iconfinder.com/data/icons/free-social-media-23/32/github_social_media_logo-256.png"
            alt="github logo"
          />
        </a>
      </div>
      <div className="contactForm">
        <form onSubmit={sendEmail}>
          {contactImg}
          <p>Contact Me</p>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              className="contactInput"
              placeholder="name"
            />
            <br />
          </label>

          <label htmlFor="email">
            <input
              type="text"
              name="email"
              className="contactInput"
              placeholder="email"
            />
            <br />
          </label>
          <label for="subject">
            <input
              type="text"
              name="subject"
              className="contactInput"
              placeholder="subject"
            />
            <br />
          </label>
          <label htmlFor="message">
            <input
              type="textarea"
              name="message"
              className="contactInput"
              placeholder="message"
            />
            <br />
          </label>
          {successMessage === true ? <h3>Message Successfully Sent!</h3> : ""}
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
