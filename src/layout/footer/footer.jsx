import React from "react";

function Footer() {
  return (
    <footer className="bg-app-gray-800 w-full">
      <div className="container mx-auto items-center flex flex-col px-4">
        <div className="py-16 flex sm:items-center items-start flex-col gap-8">
          <img src="/assets/image/logo.svg" alt="Unlimited Access" />
          <ul className="flex text-app-gray-200 gap-8 font-medium flex-wrap">
            <li>Overview</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Careers</li>
            <li>Help</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="flex justify-between text-app-gray-400 w-full py-8 border-app-gray-400 border-t sm:flex-row-reverse flex-col gap-4">
          <div>
            <ul className="flex gap-4">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <p>© 2022 Unlimitedaccessnow . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
