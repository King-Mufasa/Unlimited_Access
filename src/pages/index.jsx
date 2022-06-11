import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import HomePage from "./home";
import SignupPage from "./signup";
import LoginPage from "./login";
import BlankPage from "./404/404";
import PendingContactPage from "./pending-contact";
import AccountPage from "./account";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pending-contact" element={<PendingContactPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<BlankPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);