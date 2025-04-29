import "./Footer.css";
import Logo from "../../Data/Logo";
import { FooterContacts } from "../../Data/FooterContacts";
import { FooterSocialMedia } from "../../Data/FooterSocialMedia";
export default function Footer() {
  return (
    <>
      <section className="footer-section" id="f">
        <div className="footer-container">
          <div className="top-section">
            <div className="first-column">
              <div className="logo-paragraph">
                <Logo />
                <p>
                  We believe in the power of play to foster creativity,
                  problem-solving skills, and imagination.
                </p>
              </div>
              <div className="father-contacts">
                {FooterContacts.map((item, index) => (
                  <div className="contacts-container">
                    <div className="contacts" key={index}>
                      {item.cont}
                    </div>
                    <p>{item.MainInfo}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="right-sec">
                <div className="home-about">
                <div className="second-column">
                <h5>Home</h5>
                <div className="links">
                  <a href="#">Features</a>
                  <a href="#ourtestimation">Our Testimonials</a>
                  <a href="#frequently ask question">FAQ</a>
                </div>
              </div>
              <div className="second-column">
                <h5>About Us</h5>
                <div className="links">
                  <a href="#">Our Mission</a>
                  <a href="#">Our Vission</a>
                  <a href="#">Awards and Recognitions</a>
                  <a href="#">History</a>
                  <a href="#">Teachers</a>
                </div>
              </div>
                </div>
              <div className="home-about">
              <div className="second-column">
                <h5>Academics</h5>
                <div className="links">
                  <a href="#">Special Features</a>
                  <a href="#">Gallery</a>
                </div>
              </div>
              <div className="second-column">
                <h5>Contact Us</h5>
                <div className="links">
                  <a href="#">Information</a>
                  <a href="#">Map & Direction</a>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="top-border"></div>
          <div className="middle-section">
            <div className="privacy-sec">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="social-icon">
            {FooterSocialMedia.map((item, index) => (
                 <div className="social-container">
                 <a key={index} href="#">{item.social}</a> 
                </div>
                ))}
            </div>
          </div>
          <div className="top-border"></div>
          <p className="copy-right">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
