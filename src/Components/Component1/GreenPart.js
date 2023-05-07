import React from "react";

import "./GreenPart.css";
import phone from "./../../imgs/phone.png";
import mail from "./../../imgs/mail.png";
import socialmedia from "./../../imgs/social media.png";

function GreenPart() {
  return (
    <div className="greenPart">
      <div className="container-fluid">
        <div className="row py-1">
          <div className="col-md-4 d-flex justify-content-between px-5">
            <a>
              <img src={phone} alt="Call Icon" />
              &nbsp;&nbsp;
              <span className="span-green-part-text"> (225) 555-0118 </span>
            </a>
            <a>
              <img src={mail} alt="Mail Icon" />
              &nbsp;&nbsp;&nbsp;
              <span className="span-green-part-text">
                michelle.rivera@example.com
              </span>
            </a>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <p className="span-green-part-text">
              Follow Us and get a chance to win 80% off
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <a>
              <span className="span-green-part-text">Follow Us: </span>
              <img src={socialmedia} alt="Social media icons" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GreenPart;
