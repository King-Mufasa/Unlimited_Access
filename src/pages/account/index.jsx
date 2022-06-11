import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select, { components, ControlProps, Props } from "react-select";
import { NegativeButton, PrimaryButton } from "../../components/button";
import { Input } from "../../components/input";
import { IDCode } from "../../components/item";
import { countryList } from "../../utils/api";

function AccountPage() {
  const [enableAlert, setEnableAlert] = useState(false);
  const [country, setCountry] = useState({ label: "Hong Kong", value: "hk" });

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
              Account details
            </p>
            <p className="text-xm text-app-gray-500 mt-3">
              PLEASE PROVIDE CORRECT AND ACCURATE INFORMATION AS IT WILL BE USED
              FOR BILLING, CUSTOMER SERVICE AND PASSWORD RECOVERY SERVICES.
            </p>
          </div>

          <Input label="E-mail adress" hint="me@unlimitedaccessnow.com" required/>
          <Input label="Name" hint="John Doe" required/>
          <Input label="Adress Line 1" hint="California" required />
          <Input label="Adress Line 2" hint="California"  />
          <Input label="Name" hint="Johnes Robin" />
          <Input label="City" hint="California" required />
          <Select
            value={country}
            isSearchable
            name="emoji"
            options={countryList}
            onChange={(e) => setCountry(e)}
          />
          <Input label="Zip Code" hint="--" required />
          <Input label="Phone" hint="(+1) (446) --- --- ---" required />
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

export default AccountPage;
