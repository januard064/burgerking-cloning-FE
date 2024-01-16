import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CartPreview from "./pages/cart/preview";
import CartDelivery from "./pages/cart/delivery";
import CartPayment from "./pages/cart/payment";
import Menus from "./pages/menus";
import LargeOrder from "./pages/large-order";

import Navbar from "./componnts/global/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/large-orders/create" element={<LargeOrder />} />
          <Route path="/cart/preview" element={<CartPreview />} />
          <Route path="/cart/delivery" element={<CartDelivery />} />
          <Route path="/cart/payment" element={<CartPayment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
