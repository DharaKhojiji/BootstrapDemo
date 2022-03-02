import React from "react";
import "./ReservationTable.css";
function ReservationTable() {
  return (
    <section id="res_table">
      <div className="table-descs">
        <h4>Reservation</h4>
        <h1>Book A Table</h1>
      </div>
      <div className="table-form">
        <div className="row">
          <div className="col-md-4">
            <input type="text" placeholder="Your Name"></input>
          </div>
          <div className="col-md-4">
            <input type="email" placeholder="Your Email"></input>
          </div>
          <div className="col-md-4">
            <input type="text" placeholder="Your Phone"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <input type="text" placeholder="Date"></input>
          </div>
          <div className="col-md-4">
            <input type="text" placeholder="Time"></input>
          </div>
          <div className="col-md-4">
            <input type="text" placeholder="# Of People"></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <textarea placeholder="Message" />
          </div>
        </div>
        <div className="row">
          <button type="submit">Book A Table</button>
        </div>
      </div>
    </section>
  );
}

export default ReservationTable;
