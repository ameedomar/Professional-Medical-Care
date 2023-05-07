import React from "react";
import i1 from "./../../imgs/comp2/item (1).jpg";
import i2 from "./../../imgs/comp2/item (2).jpg";
import i4 from "./../../imgs/comp2/item (3).png";
import i3 from "./../../imgs/comp2/item (2).png";
import i5 from "./../../imgs/comp2/item (1).png";
import "./component2.css";
function Component2() {
  const data = [
    { img: "i1", title: "Orthopedics", itemsNubmer: 8 },
    { img: "i2", title: "Prenatal care", itemsNubmer: 5 },
    { img: "i3", title: "Outpatient care", itemsNubmer: 5 },
    { img: "i4", title: "Neurosurgery", itemsNubmer: 5 },
    { img: "i5", title: "Cancer center", itemsNumber: 5 },
  ];
  return (
    <div className="comp2Parent">
      <div className="container">
        <div className="row">
          {data.map((item, index) =>
            index == 3 ? (
              <div className="col-md-8 mt-3">
                <div className={item.img}>
                  <div className="card-text-content">
                    <p className="card-text">{item.title}</p>
                    <p className="item-nubmer-text">
                      {item.itemsNubmer} Items{" "}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-md-4 mt-3">
                <div className={item.img}>
                  <div className="card-text-content">
                    <p className="card-text">{item.title}</p>
                    <p className="item-nubmer-text">
                      {item.itemsNubmer} Items{" "}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
export default Component2;
