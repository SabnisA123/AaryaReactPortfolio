import React from "react";
import "./ContactSection.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const ContactSection = () => {
  return (
    <>
      <h1 className="contact-title">Contact Me</h1>
      <div id="contact">
        <div className="contact-container">
          <div className="row">
            <div className="contact-left">
              <p>
                <MdEmail />
                aaryasabnis02@gmail.com
              </p>
              <p>
                <FaPhoneAlt />
                9307523728
              </p>
              <div className="social-icons">
                <a href="https://instagram.com/" target="/">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/aarya-sabnis-6b2440257"
                  target="/"
                >
                  <FaLinkedinIn />
                </a>
                <a href="https://whatsapp.com/" target="/">
                  <FaWhatsapp />
                </a>
                <a href="https://github.com/SabnisA123" target="/">
                  <FaGithub />
                </a>
              </div>
              <a href="./AaryaSabnisResume3.pdf" className="btn btn2" target="/">
                Download RESUME
              </a>
            </div>
            <div className="contact-right">
              <form>
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright @ aaryasabnis</p>
        </div>
      </div>
    </>
  );
};
export default ContactSection;
