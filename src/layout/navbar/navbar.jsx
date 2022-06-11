import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, StandardButton } from "../../components/button";

function NavBar() {


  return (
    <nav className="w-full shadow backdrop-blur-lg">
      <div className="container mx-auto justify-between flex py-4.5 px-4">
        <div>
          <Link to={"/"}>
            <img src="/assets/image/logo.svg" alt="Unlimited Access" />
          </Link>
          {/* <div>
            Services
          </div>
          <div>
            Team
          </div> */}
        </div>
        <div className="flex gap-4">
          <div className="items-center hidden lg:flex ">
            <a
              href="mailto:help@Unlimitedaccessnow.com"
              className="flex space-x-2"
            >
              <img src="/assets/icon/ico_mail.svg" alt="mail" />
              <p>help@Unlimitedaccessnow.com</p>
            </a>
          </div>
          <Link to={"/signup"}>
            <StandardButton>Register</StandardButton>
          </Link>
          <Link to={"/login"}>
            <PrimaryButton>Login</PrimaryButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
