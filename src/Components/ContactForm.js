import { Button } from "bootstrap";
import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <div className="contact-add">
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="contact-add">
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="contact-add">
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="contact-add">
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="col-md-8">
            <form className="form-contact">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" placeholder="Your Name"></input>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" placeholder="Your Email"></input>
                </div>
              </div>

              <div className="form-group">
                <input type="text" placeholder="Subject"></input>
              </div>
              <div className="form-group">
                <textarea type="text" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
