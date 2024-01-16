import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CartPreview from "./pages/cart/preview";
import CartDelivery from "./pages/cart/delivery";
import CartPayment from "./pages/cart/payment";
import Menus from "./pages/menus";
import LargeOrder from "./pages/large-order";
import Promotions from "./pages/promotions";
import { Box } from "@mui/material";

import Navbar from "./componnts/global/navbar";
import Footer from "./componnts/global/footer";

function App() {
  return (
    <div>
  
      <Box sx={{ mt: "76px" }}>
        <Router>
        <Navbar />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/menus/:menuId" element={<Menus />} />
            <Route path="/news-v1" element={<Promotions />} />
            <Route path="/large-orders/create" element={<LargeOrder />} />
            <Route path="/cart/preview" element={<CartPreview />} />
            <Route path="/cart/delivery" element={<CartDelivery />} />
            <Route path="/cart/payment" element={<CartPayment />} />
          </Routes>
        </Router>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
