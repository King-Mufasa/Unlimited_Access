import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/button";
import { Input } from "../../components/input";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const loginHandler = () => {
    navigate("/pending-contact");
  };

  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-full flex flex-col">
        <div className="p-8">
          <Link to={"/"}>
            <img src="/assets/image/logo.svg" alt="Unlimited Access" />
          </Link>
        </div>
        <div className="grid grid-cols-5 xl:hidden aspect-5/1">
          <img
            src="/assets/image/shape_1.jpg"
            className="h-full"
            alt="shape_1"
          />
          <div className="bg-app-primary-300 h-full w-full rounded-bl-half"></div>
          <img
            src="/assets/image/shape_2.jpg"
            className="h-full"
            alt="shape_2"
          />
          <div className="bg-app-primary-200 h-full w-full rounded-half"></div>
          <div className="bg-app-primary-700 h-full w-full rounded-b-half"></div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-lg w-full px-4">
            <div className="sm:px-4 lg:px-20 flex flex-col justify-center h-full">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold text-app-gray-900">
                  Log in
                </h1>
                <p className="text-app-gray-500">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <div className="space-y-5 mt-8">
                <Input
                  value={email}
                  setValue={setEmail}
                  required
                  label="Name"
                  className="w-full"
                />
                <Input
                  value={password}
                  setValue={setPassword}
                  required
                  label="Email"
                  className="w-full"
                  type="password"
                />
              </div>

              <div className="flex justify-between my-6">
                <div className="flex gap-2 items-center">
                  <input
                    id="remember"
                    value={remember}
                    onChange={(e) => setRemember(!remember)}
                    type="checkbox"
                  />
                  <label
                    htmlFor="remember"
                    className="text-app-gray-700 text-sm"
                  >
                    Remember
                  </label>
                </div>
                <Link to={"/password-backup"}>
                  <p className="text-sm text-app-primary">Forgot password</p>
                </Link>
              </div>
              <PrimaryButton className="w-full" action={loginHandler}>
                Sing in
              </PrimaryButton>
              <div className="mt-8 flex items-center justify-center space-x-2 text-sm text-app-gray-500">
                Don't have account? &nbsp;
                <Link to={"/signup"}>
                  <span className="text-app-primary"> Sing up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-8 text-app-gray-500 text-sm flex-col sm:flex-row items-center">
          <Link to={"/"}>
            <p className="">© Unlimitedaccessnow 2022</p>
          </Link>
        </div>
      </div>
      <div className="xl:grid hidden grid-cols-3 grid-rows-4 aspect-3/4 h-screen p-8 flex-shrink-0">
        <img src="/assets/image/shape_1.jpg" className="h-full" alt="shape_1" />
        <div className="bg-app-primary-300 h-full w-full rounded-bl-half"></div>
        <img src="/assets/image/shape_2.jpg" className="h-full" alt="shape_2" />
        <div className="bg-app-primary-200 h-full w-full rounded-half"></div>
        <div className="bg-app-primary-400 h-full w-full rounded-l-half"></div>
        <div className="bg-app-primary-200 h-full w-full rounded-bl-half rounded-tr-half"></div>
        <div className="bg-app-primary-700 h-full w-full rounded-b-half"></div>
        <img
          src="/assets/image/shape_4.jpg"
          className="h-full col-span-2"
          alt="shape_4"
        />
        <img src="/assets/image/shape_3.jpg" className="h-full" alt="shape_3" />
        <div className="bg-app-primary-200 h-full w-full rounded-half"></div>
        <div className="bg-app-primary-300 h-full w-full rounded-tl-half rounded-br-half"></div>
      </div>
    </div>
  );
}

export default LoginPage;
