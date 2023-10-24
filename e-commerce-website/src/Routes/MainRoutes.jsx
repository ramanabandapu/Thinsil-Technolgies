import React from "react";
import {
 Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Homepage from "../Pages/Homepage";
import Productpage from "../Pages/Productpage";
import CartPage from "../Pages/CartPage";
const MainRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Homepage/>} />
          <Route path="products" element={<Productpage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<h1>Page 404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRoutes;
