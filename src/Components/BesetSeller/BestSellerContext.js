import React, { useState, createContext } from "react";
import Navbar from "../Component1/Navbar";
import BestSeller from "./BestSeller";
import BestSellerImg1 from "../../imgs/BestSellerImg/BestSeller1.png";
import BestSellerImg2 from "../../imgs/BestSellerImg/BestSeller2.png";
import BestSellerImg3 from "../../imgs/BestSellerImg/BestSeller3.png";
import BestSellerImg4 from "../../imgs/BestSellerImg/BestSeller4.png";
import BestSellerImg5 from "../../imgs/BestSellerImg/BestSeller5.png";
import BestSellerImg6 from "../../imgs/BestSellerImg/BestSeller6.png";
import BestSellerImg7 from "../../imgs/BestSellerImg/BestSeller7.png";
import BestSellerImg8 from "../../imgs/BestSellerImg/BestSeller8.png";

export const BestSellerContext = createContext();

export const BestSellerProvider = (props) => {
  const [cart, setcart] = useState([]);

  return (
    <BestSellerContext.Provider value={[cart, setcart]}>
      {props.children}
    </BestSellerContext.Provider>
  );
};
