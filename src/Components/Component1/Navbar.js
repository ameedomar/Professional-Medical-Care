import React, { useState, useContext, useEffect } from "react";
import serach2 from "./../../imgs/btn-32.png";
import serach1 from "./../../imgs/btn-32 (1).png";
import serach from "./../../imgs/search.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import itemImg from "./../../imgs/BestSellerImg/BestSeller8.png";

import { BestSellerContext } from "../BesetSeller/BestSellerContext";

import Table from "./../../BackEnd/Table";
import "./navbar.css";
import App from "../../App";
import BestSeller from "../BesetSeller/BestSeller";
import { Link } from "react-router-dom";

// function displayCartItems() {
//   return (
//     <div className="container">
//       <div className="row">
//         <h1> Hello World</h1>
//       </div>
//     </div>
//   );
// }

function Navbar() {
  const [cart, setCart] = useContext(BestSellerContext);
  const [showPopup, setShowPopup] = useState(false);

  const [modelHeader, setModelHeader] = useState("");
  const [modelHeaderSmall, setModelHeaderSmall] = useState("");

  function handleIconClick() {
    setShowPopup(true);
    if (cart.length == 0) {
      setModelHeader("Your Cart Is Empty");
      setModelHeaderSmall("Feel free to have shopping time");
    } else {
      setModelHeader("Here Your Cart Products");
      setModelHeaderSmall("Hope you enjoyed shopping!");
    }
  }

  function handlePopupClose() {
    setShowPopup(false);
  }
  function removeFromCart(index) {
    const updatedItems = [...cart];
    updatedItems.splice(index, 1);
    if (updatedItems.length == 0) {
      setModelHeader("Your Cart Is Empty");
      setModelHeaderSmall("Feel free to have shopping time");
    }
    setCart(updatedItems);
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="row navbar-nav flex-fill">
          <div className="col-md-2 d-flex justify-content-start ">
            <a class="navbar-brand" href="#">
              MEDSONO
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="col-md-6">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="d-flex navbar-nav mr-auto align-items-center">
                <li class="nav-item active">
                  <Link className="home-nav-bar-btn" to={"/"}>
                    Home
                  </Link>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Website Shop
                    </a>
                    <a class="dropdown-item" href="#">
                      Application action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Phisicaly Shop
                    </a>
                  </div>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <Link className="home-nav-bar-btn" to={"products"}>
                    products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            {" "}
            <div class="form-inline my-2 my-lg-0">
              <h4
                class=" my-2 my-sm-0"
                type="submit"
                className="login-register-style"
              >
                Login / Register &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faSearch} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  onClick={handleIconClick}
                />
                &nbsp;
                {cart.length}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={farHeart} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h4>
            </div>
            {showPopup && (
              <div className="modal ">
                <div className="modal-content">
                  <span className="close" onClick={handlePopupClose}>
                    &times;
                  </span>
                  <h5 className="card-content-text">{modelHeader}</h5>
                  <small className="card-content-small">
                    {" "}
                    {modelHeaderSmall}
                  </small>
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-6">
                        {cart.map((item, index) => (
                          <div>
                            {" "}
                            <div className="col-md-12 d-flex justify-content-center">
                              <div className="product-card">
                                <h5 className="productSpeciality">
                                  {item.title}
                                </h5>
                                <p className="productType">{item.type}</p>
                                <img src={itemImg} />
                                <p> {item.img}</p>
                                <div className="price-part">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-4 d-flex pt-2">
                                        <p className="product-price ">
                                          ${item.price}
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
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

// function Navbar() {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <div class="container-fluid">
//         <div className="row">
//           <div className="col-md-2">
//             <a class="navbar-brand" href="#">
//               Mesedo
//             </a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//               <div class="navbar-nav"></div>
//             </button>
//           </div>
//           <div className="col-md-10  d-flex justify-content-around">
//             <div
//               class="collapse navbar-collapse  d-flex justify-content-around"
//               id="navbarNav"
//             >
//               <div class="navbar-nav">
//                 <ul class="navbar-nav mr-auto">
//                   <li class="nav-item active">
//                     <a class="nav-link" href="#">
//                       Home
//                     </a>
//                   </li>
//                   <li class="nav-item dropdown">
//                     <a
//                       class="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdown"
//                       role="button"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Shop
//                     </a>
//                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                       <a class="dropdown-item" href="#">
//                         Website Shop
//                       </a>
//                       <a class="dropdown-item" href="#">
//                         Application action
//                       </a>
//                       <a class="dropdown-item" href="#">
//                         Phisicaly Shop
//                       </a>
//                     </div>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       About
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link " href="#">
//                       Blog
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link " href="#">
//                       Contact
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link " href="#">
//                       Pages
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div class="navbar-nav">
//                 <ul class="navbar-nav mr-auto">
//                   <li>
//                     <h4
//                       class=" my-2 my-sm-0"
//                       type="submit"
//                       className="login-register-style"
//                     >
//                       Login / Register &nbsp;
//                       <FontAwesomeIcon icon={faSearch} />
//                       <FontAwesomeIcon icon={faShoppingCart} />
//                       <FontAwesomeIcon icon={farHeart} />
//                     </h4>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function Navbar() {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <div class="container-fluid">
//         <div class="row navbar-nav flex-fill">
//           <div class="col-md-2 d-flex justify-content-start">
//             <a class="navbar-brand" href="#">
//               MEDSONO
//             </a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//           </div>

//           <div class="col-md-6">
//             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul class="navbar-nav mr-auto">
//                 <li class="nav-item active">
//                   <a class="nav-link" href="#">
//                     Home
//                   </a>
//                 </li>

//                 <li class="nav-item dropdown">
//                   <a
//                     class="nav-link dropdown-toggle"
//                     href="#"
//                     id="navbarDropdown"
//                     role="button"
//                     data-toggle="dropdown"
//                     aria-haspopup="true"
//                     aria-expanded="false"
//                   >
//                     Shop
//                   </a>
//                   <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a class="dropdown-item" href="#">
//                       Website Shop
//                     </a>
//                     <a class="dropdown-item" href="#">
//                       Application action
//                     </a>
//                     <div class="dropdown-divider"></div>
//                     <a class="dropdown-item" href="#">
//                       Phisicaly Shop
//                     </a>
//                   </div>
//                 </li>

//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     About
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     Blog
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     Contact
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     Pages
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div class="col-md-4 d-flex justify-content-end">
//             <div class="row">
//               <div class="form-inline my-2 my-lg-0">
//                 <h4 class="my-2 my-sm-0 login-register-style">
//                   Login / Register &nbsp;
//                   <FontAwesomeIcon icon={faSearch} />
//                   <FontAwesomeIcon icon={faShoppingCart} />
//                   <FontAwesomeIcon icon={farHeart} />
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
