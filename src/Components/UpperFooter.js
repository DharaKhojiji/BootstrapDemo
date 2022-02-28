import React from "react";
import "./UpperFooter.css";
const UpperFooter = () => {
  return (
    <div className="upper-footer">
      <div className="row">
        <div className="col-md-3">
          <h3>RESTAURANTLY</h3>
          <p>A108 Adam Street NY 535022, USA</p>
          <p>Phone: +1 5589 55488 55 </p>
          <p> Email :info@example.com</p>
        </div>
        <div className="col-md-3">
          <h5>Useful Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About us</a>
            </li>
            <li>
              <a href="#!">Services</a>
            </li>
            <li>
              <a href="#!">Terms of Services</a>
            </li>
            <li>
              <a href="#!">Privacy and policys</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Our Services</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Web Design</a>
            </li>
            <li>
              <a href="#!">Web Development</a>
            </li>
            <li>
              <a href="#!">Product Management</a>
            </li>
            <li>
              <a href="#!"> Marketing</a>
            </li>
            <li>
              <a href="#!">Graphic Designs</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5> Our Newsletters</h5>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form class="input-group">
            <input
              type="text"
              class="form-control form-control-sm"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-sm btn-outline-primary " type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
