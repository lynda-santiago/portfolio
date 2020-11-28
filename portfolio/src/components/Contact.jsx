import React, { useState } from "react";
import emailjs from "emailjs-com";

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
      <div className="contactForm">
        <form onSubmit={sendEmail}>
          <img src="https://i.imgur.com/Q2XbCOG.png" alt="" />
          <p>Want to get in touch?</p>
          <p>Let's Talk!</p>
          <p className="labelTitles">
            Reach out if you think I would be a great fit for your company or if
            you just want to chat.
          </p>

          <div className="nameAndEmail">
            {" "}
            <label htmlFor="name">
              <p className="labelTitles">Name:</p>

              <input
                type="text"
                name="name"
                className="contactInput"
                placeholder="name"
              />
            </label>
            <label htmlFor="email">
              <p className="labelTitles">Email:</p>

              <input
                type="text"
                name="email"
                className="contactInput"
                placeholder="email"
              />
            </label>
          </div>

          <label htmlFor="message">
            <p className="labelTitles">Message:</p>

            <textarea
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
