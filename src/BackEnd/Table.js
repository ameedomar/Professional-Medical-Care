import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./table.css";
import AddProduct from "./AddProduct/AddProduct";
import EditProduct from "./EditProduct/EditProduct";

function Table() {
  const [fillTable, setFillTable] = useState([
    {
      i1: "ameed",
      i2: "Omar",
      i3: "a",
      i4: "a",
      i5: "10",
    },
  ]);
  const [panelState, setPanelState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [titlee, setTitle] = useState(false);
  const [typee, setType] = useState(false);
  const [pricee, setPrice] = useState(false);
  const [itemId, setItemId] = useState("");
  const [itemIdDelete, setItemIdDelete] = useState("");
  const [ensureDelete, setEnsureDelete] = useState(false);
  function handleEditOpen(itemId, itemTitle, itemType, itemPrice) {
    setEditState(true);
    console.log("inside handleEditOpen ");
    console.log("this is ide reach to hadleEditOpe" + itemId);
    setItemId(itemId);
    setTitle(itemTitle);
    setType(itemType);
    setPrice(itemPrice);
  }
  function handleEditClose() {
    setEditState(false);
  }
  function displayDeletePanel(itemId) {
    setEnsureDelete(true);
    setItemIdDelete(itemId);
  }
  function removeDeletePanel() {
    setEnsureDelete(false);
  }

  function displayPanel() {
    setPanelState(true);
  }

  useEffect(() => {
    // Fetch the data from the Firebase Realtime Database using the REST API
    fetch("https://react-medical-care-default-rtdb.firebaseio.com/product.json")
      .then((response) => response.json())
      .then((data) => {
        // Convert the data from an object to an array
        const productArray = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: key,
          };
        });
        setFillTable(productArray);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  function handleDelete(itemId) {
    console.log(itemId);
    fetch(
      `https://react-medical-care-default-rtdb.firebaseio.com/product/${itemId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete item");
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  }

  return (
    <div className="container">
      <button
        type="button"
        className="btn-add-new-item"
        onClick={() => displayPanel()}
      >
        Add new Item
      </button>
      {panelState && (
        <AddProduct panelState={panelState} onPanel={setPanelState} />
      )}

      {editState && (
        <EditProduct
          panelState={editState}
          onPanel={setEditState}
          itemId={itemId}
          titlee={titlee}
          typee={typee}
          pricee={pricee}
        />
      )}
      {ensureDelete && (
        <div className="modal ">
          <div className="modal-content">
            <span className="close" onClick={() => removeDeletePanel()}>
              &times;
            </span>
            <h5 className="hello-create-item">
              are you sure you want delete item?{" "}
            </h5>
            <div className="container d-flex justify-content-center mt-5">
              <div className="row d-flex justify-content-center">
                <form onSubmit={handleDelete(itemIdDelete)}>
                  <div class="form-group">
                    <button type="submit" className="panel-btn">
                      sure
                    </button>
                    <button
                      type="button"
                      className="panel-btn"
                      onClick={() => removeDeletePanel()}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        <table>
          <thead className="black-background">
            <tr>
              <th>Item #</th>
              <th>Image</th>
              <th>Title</th>
              <th>Type </th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fillTable.map((item, index) => (
              <tr className="automatic-row">
                <td className="test">{index}</td>
                <td>{item.img}</td>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
                <td
                  className="d-flex justify-content-around"
                  style={{ padding: "4px 4px" }}
                >
                  <button>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{
                        color: "darkcyan",
                        padding: "3px 3px",
                      }}
                      onClick={() =>
                        handleEditOpen(
                          item.id,
                          item.title,
                          item.type,
                          item.price
                        )
                      }
                    />
                  </button>
                  <button>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{
                        color: "darkcyan",
                        padding: "3px 3px",
                      }}
                      onClick={() => displayDeletePanel(item.id)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
