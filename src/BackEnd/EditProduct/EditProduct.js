import React, { useState } from "react";

function EditProduct({ PanelState, onPanel, itemId, titlee, typee, pricee }) {
  console.log("Inside EditItem Component with item id :" + itemId);
  const [title, setTitle] = useState(titlee);
  const [type, setType] = useState(typee);
  const [price, setPrice] = useState(pricee);
  function removePanel() {
    onPanel(false);
  }
  const MyItemId = itemId;

  const handleEdit = (event) => {
    event.preventDefault();
    const product = {
      title: title,
      img: "will be checked later",
      type: type,
      price: price,
    };
    console.log(product);

    // Send a POST request to the Firebase Realtime Database REST API
    fetch(
      `https://react-medical-care-default-rtdb.firebaseio.com/product/${MyItemId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to edit item");
        }
      })
      .catch((error) => {
        console.error("Error editing item:", error);
      });
    removePanel();
  };

  return (
    <div className="modal ">
      <div className="modal-content">
        <span className="close" onClick={() => removePanel()}>
          &times;
        </span>
        <h5 className="hello-create-item">
          Feel free to update yur product from here!
        </h5>
        <div className="container d-flex justify-content-center mt-5">
          <div className="row d-flex justify-content-center">
            <form onSubmit={handleEdit}>
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
              </div>

              <div>
                <div>
                  <div className="btns-part">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                          <button type="submit" className="panel-btn">
                            Update Your Product
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
export default EditProduct;
