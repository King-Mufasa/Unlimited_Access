import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NegativeButton, PrimaryButton } from "../../components/button";
import { Input } from "../../components/input";

function BlockContactPage() {
  const navigate = useNavigate();
  const [enableAlert, setEnableAlert] = useState(false);

  const submitHandler = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="p-8">
        <Link to={"/"}>
          <img src="/assets/image/logo.svg" alt="Unlimited Access" />
        </Link>
      </div>
      <div className="flex flex-1 flex-col container mx-auto items-center justify-center sm:pb-24 px-4">
        <div className="max-w-3xl w-full space-y-8">
          <div>
            <p className="text-3xl font-semibold text-app-gray-900">
              Block Contacts
            </p>
            <p className="text-xm text-app-gray-500 mt-3 sm:leading-6 md:leading-10">
              To block inmate communication, <br />
              enter your email address and the
              identification code from your email. <br />
              Select the applicable block
              option and click the Confirm button.
            </p>
          </div>
          <Input label="E-mail adress" hint="me@unlimitedaccessnow.com" required/>
          <Input label="Identification Code" hint="--" required/>
          <div className="flex gap-2 items-center text-sm mt-5">
            <input
              id="block-inmate"
              type="checkbox"
              value={enableAlert}
              onChange={(e) => setEnableAlert(!enableAlert)}
            />
            <label className="" htmlFor="block-inmate">Block contact from this inmate</label>
          </div>
          <div className="flex gap-2 items-center text-sm mt-5">
            <input
              id="block-agency"
              type="checkbox"
              value={enableAlert}
              onChange={(e) => setEnableAlert(!enableAlert)}
            />
            <label className="" htmlFor="block-agency">
              Block contact from all inmates from this agency
            </label>
          </div>
          <PrimaryButton className="w-full" action={submitHandler}>
            <div className="flex w-full items-center justify-center">
              Next
              <img src="/assets/icon/ico_next.svg" alt="right" />
            </div>
          </PrimaryButton>
          <Link to={"/"} className="">
            <NegativeButton className="w-full mt-5">Cancel</NegativeButton>
          </Link>
        </div>
      </div>
      <div className="flex justify-between p-8 text-app-gray-500 text-sm flex-col sm:flex-row items-center">
        <Link to={"/"}>
          <p className="">© Unlimitedaccessnow 2022</p>
        </Link>
        <a href="mailto:help@Unlimitedaccessnow.com" className="flex space-x-2">
          <img src="/assets/icon/ico_mail.svg" alt="mail" />
          <p>help@Unlimitedaccessnow.com</p>
        </a>
      </div>
    </div>
  );
}

export default BlockContactPage;
