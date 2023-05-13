import React from "react";

import icon1 from "../../imgs/BestSevices/vector1.png";
import icon2 from "../../imgs/BestSevices/vector2.png";
import icon3 from "../../imgs/BestSevices/Vector3.png";
import "./bestServices.css";

function BestServices() {
  const BestServicesContent = [
    {
      feature: "Easy Wins",
      description: "Get your best looking smile now!",
      icon: icon1,
    },
    {
      feature: "Concrete",
      description:
        "Defalcate is most focused in helping you discover your most beautiful smile",
      icon: icon2,
    },
    {
      feature: "Hack Growth",
      description: "Overcame any hurdle or any other problem.",
      icon: icon3,
    },
  ];
  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="row">
        <p className="featured-products">Featured Products</p>
        <h2 className="best-services">The Best Services</h2>
        <p className="proplems-text">
          Problems trying to resolve the conflict between
        </p>

        {BestServicesContent.map((item) => (
          <div className="col-md-4 text-align-center">
            <div className="feature-card">
              <div className="icon-feature">
                <img
                  src={item.icon}
                  alt="icon"
                  className="icon-in-best-services"
                />
              </div>
              <h3 className="feature-name">{item.feature}</h3>
              <p className="description-feature">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestServices;
