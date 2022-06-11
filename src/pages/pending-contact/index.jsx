import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NegativeButton, PrimaryButton } from "../../components/button";
import { Input } from "../../components/input";
import { IDCode } from "../../components/item";

function PendingContactPage() {
  const [enableAlert, setEnableAlert] = useState(false)
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
              Pending Contacts
            </p>
            <p className="text-xm text-app-gray-500 mt-3">
              You have 1 new contact request
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-app-gray-700 text-sm">Identification Code</p>
            <div className="grid-cols-7 grid gap-2">
              <IDCode>M</IDCode>
              <IDCode>3</IDCode>
              <IDCode>w</IDCode>
              <IDCode>4</IDCode>
              <IDCode>d</IDCode>
              <IDCode>v</IDCode>
              <IDCode>d</IDCode>
            </div>
          </div>
          <Input label="Institut" hint="BOP Inst" />
          <Input label="Inmate Number" hint="41 38 20 50" />
          <Input label="Name" hint="Johnes Robin" />
          <div className="flex gap-2 items-center text-sm mt-5">
            <input
              type="checkbox"
              value={enableAlert}
              onChange={(e) => setEnableAlert(!enableAlert)}
            />
            <div className="">
            Enable E-mail alerts  
              <Link to={"/term"}>
                <span className="text-app-primary underline">
                  {" "}
                  What is this?
                </span>
              </Link>
            </div>
          </div>
          <PrimaryButton className="w-full">
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

export default PendingContactPage;
