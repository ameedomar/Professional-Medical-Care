import React from "react";
import twitter from "./../../imgs/social media icons footer/twitter.png";
import facebook from "./../../imgs/social media icons footer/facebook.png";
import instagram from "./../../imgs/social media icons footer/instagram.png";
import hr from "./../../imgs/social media icons footer/hr.png";

import "./Footer.css";

function Footer() {
  const FooterData = [
    {
      title: "Company Info",
      t1: "About Us",
      t2: "Carrier",
      t3: "We are hiring",
      t4: "Blog",
    },
    {
      title: "Legal",
      t1: "About Us",
      t2: "Carrier",
      t3: "We are hiring",
      t4: "Blog",
    },
    {
      title: "Features",
      t1: "Business Marketing",
      t2: "User Analytic",
      t3: "Live Chat",
      t4: "Unlimited Support",
    },
    {
      title: "Resources",
      t1: "IOS & Android",
      t2: "Watch a Demo",
      t3: "Customers",
      t4: "API",
    },
  ];

  return (
    <div className="footer mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-start">
            <h2 className="footer-logo-title">MEDSONO</h2>
          </div>
          <div className="col-md-6 d-flex justify-content-center  ">
            <img
              src={facebook}
              alt="social media icon"
              className="social-media-icon"
            />
            <img
              src={instagram}
              alt="social media icon"
              className="social-media-icon"
            />
            <img
              src={twitter}
              alt="social media icon"
              className="social-media-icon"
            />
          </div>
        </div>
        <img src={hr} alt="Line" className="hr-line" />
      </div>

      <div className="container mt-5">
        <div className="row">
          {FooterData.map((item) => (
            <div className="col-md-2">
              <h2 className="title-footer-text">{item.title}</h2>
              <h4 className="normal-text">{item.t1}</h4>
              <h4 className="normal-text">{item.t2}</h4>
              <h4 className="normal-text">{item.t3}</h4>
              <h4 className="normal-text">{item.t4}</h4>
            </div>
          ))}

          <div className="col-md-3">
            <h2 className="title-footer-text">Get In Toutch</h2>
            <p>Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>
      <div className="footer-of-footer">
        <h5 className="text-of-footer-of-footer">
          Made With Love By Finland All Right Reserved{" "}
        </h5>
      </div>
    </div>
  );
}
export default Footer;
