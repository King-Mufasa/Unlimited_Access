import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer/footer";
import NavBar from "./navbar/navbar";
import SideBar from "./sidebar/sidebar";

const Layout = ({ children, title, selectLang, openLang, page = "home" }) => {
  return (
    <div
      className={`flex flex-col items-center min-h-screen justify-between overflow-x-hidden text-app-black-100 relative ${
        page === "dashboard" ? "bg-app-gray-900" : ""
      }`}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {page !== "dashboard" ? <NavBar /> : <SideBar />}
      <main className="w-full flex-1">{children}</main>
      {page !== "dashboard" ? <Footer /> : <div></div>}
    </div>
  );
};

export default Layout;
