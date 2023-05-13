import React from "react";

import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe-container mt-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-5">
            <h1 className="subscribe-title">Subscribe For Latest News</h1>
            <p className="subscribe-description">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
          </div>
          <div className="col-md-7 text-center  my-auto">
            <button
              type="button"
              class="btn btn-primary"
              className="get-started-btn"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subscribe;
