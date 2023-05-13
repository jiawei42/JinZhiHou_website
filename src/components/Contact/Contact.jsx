import React from "react";
import "./Contact.scss";
import ContactForm from "./ContactFrom";

const Contact = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const confirmed = window.confirm("即將前往此連結，是否確定要跳轉？");
    if (confirmed) {
      window.location.href = event.currentTarget.href;
    }
  };

  const handleCopyEmail = (event) => {
    event.preventDefault();
    const email = "houjinzhi@example.com";
    navigator.clipboard.writeText(email);
    window.alert(`已複製信箱 ${email} 到剪貼簿中`);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="contact-left">
          <ContactForm />
        </div>
        <div className="contact-right">
          <h2 className="title">聯絡方式</h2>
          <div className="row">
            <div className="col">
              <a
                href="https://www.instagram.com/_houjinzhi_/"
                target="_blank"
                rel="noopener noreferrer"
                className="iconLink"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="col">
              <a href="#!" className="iconLink" onClick={handleCopyEmail}>
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>
            <div className="col">
              <a href="https://www.facebook.com/" className="iconLink">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="qrcode">
            <a
              href="https://portaly.cc/AUGANG.HJZ"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <img
                src={process.env.PUBLIC_URL + "/QR code.png"}
                alt="QR code"
              />
            </a>
            <div className="hint">點擊QRcode直接跳轉頁面</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
