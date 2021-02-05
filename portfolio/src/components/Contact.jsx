import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { formSchema } from "../formSchemas/formSchema";
import * as yup from "yup";

function Contact() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
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
  const inputHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
  };
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setDisabled(!valid);
    });
  }, [formState]);

  return (
    <div className="contact-container" id="contact">
      <div className="contactForm">
        <form onSubmit={sendEmail}>
          <img src="https://i.imgur.com/Q2XbCOG.png" alt="" />
          <p>Want to get in touch?</p>
          <p>Let's Talk!</p>
          <p className="labelTitles">
            Reach out if you think I would be a great fit for your company or if
            you just want to chat.
          </p>

          <div className="nameAndEmail" style={{ position: "relative" }}>
            {" "}
            <p className="errorName"> {errors.name} </p>
            <label htmlFor="name">
              <p className="labelTitles">Name:</p>

              <input
                type="text"
                name="name"
                className="contactInput"
                placeholder="name"
                onChange={inputHandler}
                value={formState.name}
              />
            </label>
            <p className="errorEmail"> {errors.email} </p>
            <p className="errorMessage"> {errors.message} </p>
            <label htmlFor="email">
              <p className="labelTitles">Email:</p>

              <input
                type="text"
                name="email"
                className="contactInput"
                placeholder="email"
                onChange={inputHandler}
                value={formState.email}
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
              onChange={inputHandler}
              value={formState.message}
            />
            <br />
          </label>
          {successMessage === true ? <h3>Message Successfully Sent!</h3> : ""}
          <button
            disabled={disabled}
            style={
              disabled
                ? { background: "lightgrey", cursor: "auto", color: "darkgrey" }
                : { background: "black" }
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
