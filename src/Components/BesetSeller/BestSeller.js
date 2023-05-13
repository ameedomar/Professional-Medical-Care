import React, { useState, useContext, useEffect } from "react";
import BestSellerImg1 from "../../imgs/BestSellerImg/BestSeller1.png";
import BestSellerImg2 from "../../imgs/BestSellerImg/BestSeller2.png";
import BestSellerImg3 from "../../imgs/BestSellerImg/BestSeller3.png";
import BestSellerImg4 from "../../imgs/BestSellerImg/BestSeller4.png";
import BestSellerImg5 from "../../imgs/BestSellerImg/BestSeller5.png";
import BestSellerImg6 from "../../imgs/BestSellerImg/BestSeller6.png";
import BestSellerImg7 from "../../imgs/BestSellerImg/BestSeller7.png";
import BestSellerImg8 from "../../imgs/BestSellerImg/BestSeller8.png";
import "./bestSeller.css";
import { BestSellerContext } from "./BestSellerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
function BestSeller() {
  const [cart, setCart] = useContext(BestSellerContext);
  const [BestSellerProducts, setBestSellerProdcuts] = useState([
    {
      productSpeciality: "Nutritional support",
      productType: "Technology",
      productImg: BestSellerImg1,
      productPrice: 6.48,
    },
    {
      productSpeciality: "Nutritional support",
      productType: "Technology",
      productImg: BestSellerImg2,
      productPrice: 6.48,
    },
    {
      productSpeciality: "Orthopedics",
      productType: "Technology",
      productImg: BestSellerImg3,
      productPrice: 6.48,
    },
    {
      productSpeciality: "Cancer center",
      productType: "Technology",
      productImg: BestSellerImg4,
      productPrice: 6.48,
    },
    {
      productSpeciality: "Orthopedics",
      productType: "Technology",
      productImg: BestSellerImg5,
      productPrice: 6.48,
    },
    {
      productSpeciality: "Cancer center",
      productType: "Technology",
      productImg: BestSellerImg6,
      productPrice: 6.48,
    },
    {
      productSpeciality: "Cancer center",
      productType: "Technology",
      productImg: BestSellerImg7,
      productPrice: 6.48,
    },
    {
      productSpeciality: "Prenatal care",
      productType: "Technology",
      productImg: BestSellerImg8,
      productPrice: 6.48,
    },
  ]);

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
        setBestSellerProdcuts(productArray);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);
  // const [cart, setCart] = useState([]);
  function addToCart(prop) {
    console.log("this is the index " + prop);
    console.log(BestSellerProducts[prop]);
    setCart((oldArray) => [...oldArray, BestSellerProducts[prop]]);
  }
  function removeFromCart(index) {
    console.log("this is the index " + index);
    console.log(BestSellerProducts[index]);
    const newArray = [...cart]; // create a copy of the original array
    newArray.splice(index, 1); // remove the item at the specified index
    setCart(newArray); // update the state with the new array
  }
  const [showPopup, setShowPopup] = useState(false);

  function handleIconClick() {
    setShowPopup(true);
    console.log("Inside handleIconClick ");
  }

  function handlePopupClose() {
    setShowPopup(false);
    console.log("Inside handlePopupClose ");
  }
  return (
    <div className="parent-best-seller d-flex mt-5">
      <div className="container d-flex justify-content-center mt-5">
        <div className="row">
          <h3 className="featured-products-text">Featured Products</h3>
          <h3 className="bestseller-products">BESTSELLER PRODUCTS</h3>
          {BestSellerProducts.map((item, index) => (
            <div className="col-md-3">
              <div className="product-card">
                <h5 className="productSpeciality">{item.title}</h5>
                <p className="productType">{item.type}</p>
                <img src={item.img} className="img-beset-seller" />
                <div className="price-part">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-3 d-flex pt-2 align-items-center">
                        <p className="product-price ">${item.price}</p>
                      </div>
                      <div className="col-md-7 d-flex justify-content-end">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => addToCart(index)}
                        >
                          Add To Cart
                        </button>
                      </div>
                      <div className="col-md-2 d-flex justify-content-end">
                        {/* <FontAwesomeIcon
                          className="empty-love"
                          icon={farHeart}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <button onClick={handleIconClick}>Display Catrs</button>
          {showPopup && (
            <div className="row popup">
              <div className="popup-content">
                <span className="close" onClick={handlePopupClose}>
                  &times;
                </span>
                <h2>This is the popup content</h2>
                <div className="container d-flex justify-content-center mt-5">
                  <div className="row d-flex justify-content-center">
                    <div>
                      {cart.map((item, index) => (
                        <div>
                          {" "}
                          <div className="col-md-3 d-flex justify-content-center">
                            <div className="product-card">
                              <h5 className="productSpeciality">
                                {item.productSpeciality}
                              </h5>
                              <p className="productType">{item.productType}</p>
                              <img src={item.productImg} />
                              <div className="price-part">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-4 d-flex pt-2">
                                      <p className="product-price ">
                                        ${item.productPrice}
                                      </p>
                                    </div>
                                    <div className="col-md-8 d-flex justify-content-end">
                                      <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => removeFromCart(index)}
                                      >
                                        Remove From Cart
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
export default BestSeller;
