import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          end={{
            opacity: 1,
            transform: "translateY(0)",
          }}
        >
          <div className="contact__card">
            <div className="contact__card__image">
            <img src="/images/bakti.jpg" alt="" />
            </div>
            <div className="contact__card__info">
              <table className="contact__card__table">
                <tbody>
                  <tr>
                    <td className="contact__card__label">Name</td>
                    <td className="contact__card__value">Bakti Aulia Zikri</td>
                  </tr>
                  <tr>
                    <td className="contact__card__label">Email</td>
                    <td className="contact__card__value">
                      <a
                        href="mailto:baktiauliaz@com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        baktiauliaz@com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="contact__card__label">LinkedIn</td>
                    <td className="contact__card__value">
                      <a
                        href="https://www.linkedin.com/in/bakti-aulia-zikri/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.linkedin.com/in/bakti-aulia-zikri/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="contact__card__label">Github</td>
                    <td className="contact__card__value">
                      <a
                        href="https://github.com/baktiauliazikri"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://github.com/baktiauliazikri
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
