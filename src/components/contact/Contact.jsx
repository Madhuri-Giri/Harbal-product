import "./Contact.css";
import React from "react";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import contact_img from "../../assets/images/contact_us.png";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-con">
        <div className="banner_img">
         
          <img
            src="https://e0.pxfuel.com/wallpapers/6/293/desktop-wallpaper-big-leaves-cool-temperature-resolution-cool-leaf.jpg"
            alt="banner_img"
          />
        </div>

        <Container>
          <div className="contact_box">
            <div className="con_head">
              <h3>Contact Us</h3>
            </div>
            <Row>
              <Col>
                <h4>Wilson Drugs & Pharmaceuticals Private Limited</h4>
                <h5>ADDRESS</h5>
                <p>
                  Vijay Nagar , District Indore - 173229, Madhya Pradesh, India
                </p>
                <h5>CALL US</h5>
                <p>9876545675</p>
                <h5>EMAIL ID</h5>
                <p>test123@gmail.com</p>
              </Col>
              <Col>
                <div className="contact_map">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092877!2d144.95565131531645!3d-37.81732397975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f685ceddfe6f!2sMelbourne%20CBD%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1636873567890!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Col>
            </Row>
            <div></div>
          </div>
        </Container>
        <Row>
          <Col lg={4}>
            <div className="contact_container">
              <img src={contact_img} alt="contact_img" />
            </div>
          </Col>

          <Col lg={8}>
            <div className="Contact-main">
              <div className="contact-page">
                {/* ------------------------------------------------------------ */}
                <div className="contact-top">
                  {/* <h5>Contact Us</h5>
                <p>
                  Need help? Want to give your feedback? Feel free to reach out
                  to us.
                </p> */}
                </div>
                <div className="contact-btm">
                  {/* <p>
                  Please contact us for any assistance by filling up the form
                  below. We will get back to you within 24 hours.
                </p> */}
                  <div className="form-page">
                    <h5>Send Us A Message</h5>
                    <form>
                      <div className="ipt">
                        <input type="text" placeholder="Full Name" required />
                      </div>
                      <div className="ipt">
                        <input type="email" placeholder="Email" required />
                      </div>
                      <div className="ipt">
                        <input type="text" placeholder="GST Number" required />
                      </div>
                      <div className="ipt">
                        <input type="text" placeholder="Subject" required />
                      </div>
                      <div className="ipt">
                        <textarea
                          name="message"
                          placeholder="Message*"
                          id=""
                          required
                        ></textarea>
                      </div>
                      <div className="btn-cont">
                        <button type="submit">SEND MESSAGE</button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* ------------------------------------------------------------ */}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
