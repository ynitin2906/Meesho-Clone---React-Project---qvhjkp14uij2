import Home from "../Home/Home";
import Details from "../Details/Details";
import NotFound from "../NotFound/NotFound";
import Cart from "../Cart/Cart";
import React, { useContext } from "react";
// import { useState } from "react";
import { Route, Routes } from "react-router";
import SignUp from "../SignUp/SignUp";
import { Navigate } from "react-router";
import { MyContext } from "../../App";
import Checkout from "../Checkout/Checkout";
import LogIn from "../LogIn/LogIn";
import UserProfile from "../UserProfile/UserProfile";

const AppRoutes = () => {
  const mycontext = useContext(MyContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={mycontext.isLoggedIn ? <Cart /> : <Navigate to="/login" />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route
        path="/userprofile"
        element={
          localStorage.getItem("LoggedIn") ? (
            <UserProfile />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
