import "./App.css";
import BestSeller from "./Components/BesetSeller/BestSeller";
import BestServices from "./Components/BestServices/BestServices";
import ClientReview from "./Components/ClientReview/ClientReview";
import GreenPart from "./Components/Component1/GreenPart";
import Home from "./Components/Component1/Home";
import Navbar from "./Components/Component1/Navbar";
import WelcomingDesign from "./Components/Component1/WelcomingDesign";
import Component2 from "./Components/Component2/Component2";
import ContactUs from "./Components/ContactUs/ContactUs";
import Post from "./Components/FeaturedPosts/Post";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import { BestSellerProvider } from "./Components/BesetSeller/BestSellerContext";
import Table from "./BackEnd/Table";
import React, { useState } from "react";

function App() {
  return (
    <div>
      <BestSellerProvider>
        <div className="App">
          <Home />
          <Component2 />
          <BestSeller />
          <BestServices />
          <Post />
          <ClientReview />
          <ContactUs />
          <Subscribe />
          <Footer />
        </div>
      </BestSellerProvider>
      <Table />
    </div>
  );
}

export default App;
