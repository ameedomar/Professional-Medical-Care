import React from "react";
import line3 from "../../imgs/contact us/Line 3.png";
import map from "../../imgs/contact us/Rectangle.png";
import shape from "../../imgs/contact us/coolicon.png";
import circle from "../../imgs/contact us/circle.png";
import "./contactus.css";

function ContactUs() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={map} alt="Map image" />
        </div>
        <div className="col-md-6">
          <h1 className="work-with-us"> WORK WITH US</h1>
          <p className="work-with-us-des">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className="line">
            <img src={line3} alt="Separate Line" className="line3" />
          </div>
          <div className="contact-us">
            <h1 className="work-with-us"> CONTACT US</h1>
            <p className="work-with-us-des">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="4items">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-start mt-2">
                <img src={circle} alt="Cool icon" className="cool-icon" />
                <div className="my-auto mx-3">
                  <h2 className="text-shape-3 my-auto">
                    phone: <span className="span-text"> 987-654-321</span>
                  </h2>
                  <h2 className="text-shape-3 my-auto">
                    Email: <span className="span-text">email@gmail.com</span>
                  </h2>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-start mt-2">
                <img src={circle} alt="Cool icon" className="cool-icon" />
                <h2 className="text-shape-3 my-auto mx-3">
                  Support forum for over 24h
                </h2>
              </div>
              <div className="col-md-6 d-flex justify-content-start mt-4">
                <img src={circle} alt="Cool icon" className="cool-icon" />
                <h6 className="text-shape-3 my-auto mx-3">
                  Free standard shipping on all orders.
                </h6>
              </div>
              <div className="col-md-6 d-flex justify-content-around mt-4">
                <img src={circle} alt="Cool icon" className="cool-icon" />
                <h2 className="text-shape-3 my-auto mx-3">
                  Address: 8099 Trenton st.Miniapolis
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
