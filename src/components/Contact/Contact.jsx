import React from "react";
import "./Contact.scss";
import ContactForm from "./ContactFrom";

const Contact = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="contact-left">
          <ContactForm />
        </div>
        <div className="contact-right"></div>
      </div>
    </div>
  );
};

export default Contact;
