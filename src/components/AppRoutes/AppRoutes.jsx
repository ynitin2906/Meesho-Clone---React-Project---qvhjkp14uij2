import Home from "../Home/Home";
import Details from "../Details/Details";
import NotFound from "../NotFound/NotFound";
import Cart from "../Cart/Cart";
import React from "react";
import { Route, Routes } from "react-router";
import SignUp from "../SignUp/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
