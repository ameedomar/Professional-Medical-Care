import React from "react";
import BestServices from "../Components/BestServices/BestServices";
import ClientReview from "../Components/ClientReview/ClientReview";
import Home from "../Components/Component1/Home";
import Component2 from "../Components/Component2/Component2";
import ContactUs from "../Components/ContactUs/ContactUs";
import Post from "../Components/FeaturedPosts/Post";
import Footer from "../Components/Footer/Footer";
import Subscribe from "../Components/Subscribe/Subscribe";
import { BestSellerProvider } from "../Components/BesetSeller/BestSellerContext";
import BestSeller from "../Components/BesetSeller/BestSeller";
function Medsono() {
  return (
    <div>
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
  );
}
export default Medsono;
