import "./App.css";
import GreenPart from "./Components/Component1/GreenPart";
import Navbar from "./Components/Component1/Navbar";

import Medsono from "./Pages/Medsono";
import Products from "./Pages/Products";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <GreenPart />
        <Navbar />
        <Routes>
          <Route path="/" element={<Medsono />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
