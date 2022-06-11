import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NegativeButton, PrimaryButton } from "../../components/button";
import { Input } from "../../components/input";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [re_email, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
  const [idCode, setIdCode] = useState("");
  const [agreeTerm, setAgreeTerm] = useState(false)

  const [error, setError] = useState({});
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(
      name !== "" &&
        email !== "" &&
        email === re_email &&
        password.length > 8 &&
        password === re_password
    );
  }, [name, email, re_email, password, re_password, idCode]);

  const signupHandler = () => {};

  return (
    <div className="flex">
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="p-8">
          <Link to={"/"}>
            <img src="/assets/image/logo.svg" alt="Unlimited Access" />
          </Link>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="max-w-lg w-full px-4">
            <div className="space-y-5 sm:px-4 lg:px-20">
              <h1 className="text-3xl font-semibold pb-4">Sign up</h1>
              <Input
                value={name}
                setValue={setName}
                required
                label="Name"
                className="w-full"
              />
              <Input
                value={email}
                setValue={setEmail}
                required
                label="Email"
                className="w-full"
              />
              <Input
                value={re_email}
                setValue={setReEmail}
                required
                label="Re-type Email"
                className="w-full"
              />
              <Input
                value={password}
                setValue={setPassword}
                required
                label="Choose a Password"
                className="w-full"
              />
              <Input
                value={re_password}
                setValue={setRePassword}
                required
                label="Re-type your Password"
                className="w-full"
              />
              <Input
                value={idCode}
                setValue={setIdCode}
                required
                label="Identification Code"
                className="w-full"
              />
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
            <div className="flex gap-2 items-center text-sm mt-5">
              <input type="checkbox" value={agreeTerm} onChange={(e)=>setAgreeTerm(!agreeTerm)}/>
              <div className="">
                I am over 18 and i have read and agree to the
                <Link to={"/term"}>
                  <span className="text-app-primary underline">
                    {" "}
                    Terms and Conditions
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-8 text-app-gray-500 text-sm flex-col sm:flex-row items-center">
          <Link to={"/"}>
            <p className="">© Unlimitedaccessnow 2022</p>
          </Link>
          <a
            href="mailto:help@Unlimitedaccessnow.com"
            className="flex space-x-2"
          >
            <img src="/assets/icon/ico_mail.svg" alt="mail" />
            <p>help@Unlimitedaccessnow.com</p>
          </a>
        </div>
      </div>
      <img
        src="/assets/image/bg_signup.jpg"
        alt="signup"
        className="hidden lg:block lg:w-1/2 h-screen"
      />
    </div>
  );
}

export default SignupPage;
