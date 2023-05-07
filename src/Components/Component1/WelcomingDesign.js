import React from "react";
import welcomingImg from "./../../imgs/hero-6-cover.jpg";
import "./welcomingDesign.css";
function WelcomingDesign() {
  return (
    <div className="welcomingParent">
      <div className="WecomingImg">
        <div className="parentImg">
          <div className="row d-flex justify-content-center px-2">
            <div className="col-md-7 align-self-center px-5">
              <div className="contentImg">
                <h5 className="summerImg">SUMMER 2020</h5>
                <h1 className="titleImg">Professional Medical Care</h1>
                <h3 className="descriptionImg">
                  We Know how large objects will act, but things on a small
                  scale.
                </h3>
                <button type="button" class="buttonImg">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WelcomingDesign;
