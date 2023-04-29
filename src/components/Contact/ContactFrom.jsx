import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

const ContactForm = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_dgofmb7",
        "template_ump60ou",
        formRef.current,
        "TbrvovdHHanITUGK5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);

          setSuccess(false);
          setIsLoading(false);
        }
      );
  };

  return (
    <form
      className="contact-form"
      enctype="multipart/form-data"
      ref={formRef}
      onSubmit={handleSubmit}
      onsubmit="return false;"
    >
      <div className="title">Contact Us</div>

      <input placeholder="Name" type="text" name="name" required />

      <input placeholder="Email" type="email" name="email" required />

      <textarea
        placeholder="Write your message"
        name="message"
        rows={10}
        required
      ></textarea>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send"}
      </button>
      {success && (
        <div className="success-message">
          Your message has been sent. We'll get back to you soon :)
        </div>
      )}
    </form>
  );
};

export default ContactForm;
