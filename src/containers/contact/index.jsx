import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdEmail, MdPerson, MdSend } from "react-icons/md";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  const contactList = [
    {
      icon: <MdPerson size={22} />,
      label: "Name",
      value: "Bakti Aulia Zikri",
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      value: "baktiauliazikri@gmail.com",
      link: "mailto:baktiauliazikri@gmail.com",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/bakti-aulia-zikri",
      link: "https://www.linkedin.com/in/bakti-aulia-zikri/",
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      value: "github.com/baktiauliazikri",
      link: "https://github.com/baktiauliazikri",
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Location",
      value: "Sumatera Barat, Indonesia",
    },
  ];

  return (
    <section id="contact" className="contact">
      <PageHeaderContent headerText="Contact Me" icon={<MdEmail size={32} />} />

      <div className="contact__container">
        <Animate
          play
          duration={0.8}
          delay={0.1}
          start={{ opacity: 0, transform: "translateX(-30px)" }}
          end={{ opacity: 1, transform: "translateX(0px)" }}
        >
          <div className="contact__info-card">
            <div className="contact__avatar-wrapper">
              <img
                src="/images/bakti.jpg"
                alt="Bakti Aulia Zikri"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://ui-avatars.com/api/?name=Bakti+Aulia+Zikri&background=60d86e&color=121214&size=200";
                }}
              />
            </div>
            <h3 className="contact__name">Bakti Aulia Zikri</h3>
            <p className="contact__role">Fullstack Web Developer</p>

            <div className="contact__details-list">
              {contactList.map((item, index) => (
                <div key={index} className="contact__detail-item">
                  <span className="contact__detail-icon">{item.icon}</span>
                  <div className="contact__detail-text">
                    <span className="contact__detail-label">{item.label}</span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__detail-value link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__detail-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Animate>

        <Animate
          play
          duration={0.8}
          delay={0.3}
          start={{ opacity: 0, transform: "translateX(30px)" }}
          end={{ opacity: 1, transform: "translateX(0px)" }}
        >
          <div className="contact__form-card">
            <h3 className="form-title">Send a Message</h3>
            <p className="form-subtitle">
              Have a project in mind or want to collaborate? Feel free to leave a message!
            </p>

            {submitted ? (
              <div className="form-success-alert">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <MdSend size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
