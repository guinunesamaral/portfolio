import React from "react";
import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <div className="contact">
      <h3 className="contact__title">Text me</h3>
      <div className="contact__form">
        <form action="">
          <input
            type="text"
            placeholder="Name:"
            className="contact__input-name input"
          />
          <input
            type="email"
            placeholder="Email:"
            className="contact__input-email input"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message:"
            className="contact__input-message input"
          ></textarea>
        </form>
      </div>
    </div>
  );
};
