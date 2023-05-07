import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "./AddProduct.css";

function AddProduct({ PanelState, onPanel }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [filldFlag, setfillFlag] = useState(false);
  function removePanel() {
    onPanel(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      title: title,
      img: "will be checked later",
      type: type,
      price: price,
    };
    console.log(product);
    if (product.title == "" || product.type == "") {
      setfillFlag(true);
      return;
    }

    // Send a POST request to the Firebase Realtime Database REST API
    fetch(
      "https://react-medical-care-default-rtdb.firebaseio.com/product.json",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        // Handle the response from the server
        if (response.ok) {
          console.log("Message posted successfully!");
          setTitle("");
          setType("");
          setPrice("");
          setfillFlag(false);
        } else {
          console.error("Error posting message:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error posting message:", error);
      });
    removePanel();
  };

  // async function addProductHandler(product) {
  //   const respose = await fetch(
  //     "https://react-medical-care-default-rtdb.firebaseio.com/",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(product),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     }
  //   );
  //   console.log("batata");
  //   const data = await respose.json();
  //   console.log(data);
  // }

  return (
    <div className="modal ">
      <div className="modal-content">
        <span className="close" onClick={() => removePanel()}>
          &times;
        </span>
        <h5 className="hello-create-item">
          Hello! You can create new item from here{" "}
        </h5>
        <div className="container d-flex justify-content-center mt-5">
          <div className="row d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label className="label-form-panel">Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Title Here!"
                  key="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <label className="label-form-panel">Type</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Type Here!"
                  key="type"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                />
                <label className="label-form-panel">Price</label>
                <input
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Price Here!"
                  id="price-input"
                  type="number"
                  step="1"
                  min="0"
                  key="price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
                {filldFlag && (
                  <small className="smallMsg">Please fill al fields!</small>
                )}
              </div>

              <div>
                <div>
                  <div className="btns-part">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                          <button
                            type="submit"
                            className="panel-btn"
                            // onClick={() => addProductHandler}
                          >
                            Add New Product
                          </button>
                          <button
                            type="button"
                            className="panel-btn"
                            onClick={() => removePanel()}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
