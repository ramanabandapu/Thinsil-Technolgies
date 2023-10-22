import React from "react";
import {
 Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Homepage from "../Pages/Homepage";
const MainRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRoutes;
