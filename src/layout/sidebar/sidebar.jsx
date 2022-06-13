import { useState } from "react";
import { Link } from "react-router-dom";
import Expand from "react-expand-animated";
import { SideBarItem } from "../../components/item";

const SideBar = () => {
  const [keyword, setKeyword] = useState("");
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={`flex flex-col md:min-h-screen relative md:absolute left-0 w-full md:max-w-sm lg:max-w-md`}
    >
      <div className="flex justify-between md:hidden w-full h-18 bg-white px-6">
        <div className=" md:hidden h-full items-center flex">
          <Link to={"/"}>
            <img src="/assets/image/logo.svg" alt="Unlimited Access" />
          </Link>
        </div>
        <button className="hover:scale-125 active:scale-100 duration-75" onClick={() => setExpand(!expand)}>
          <img src="/assets/icon/ico_menu.svg" alt="hamburger" />
        </button>
      </div>
      <div
        className={`md:relative fixed min-h-screen flex flex-col right-0 bg-app-gray-900 z-20 duration-100 md:translate-x-0 ${
          expand ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="w-full flex justify-end px-4 mb-8 h-18">
          <button
            className="transform rotate-45 text-5xl text-app-gray-100 hover:scale-125 active:scale-100 duration-75"
            onClick={() => setExpand(false)}
          >
            +
          </button>
        </div>
        <div className="p-8 hidden md:block">
          <Link to={"/"}>
            <img src="/assets/image/logo.svg" alt="Unlimited Access" />
          </Link>
        </div>
        <div className="px-6 pb-6">
          <div className="flex gap-2 px-4 py-3.5 bg-app-gray-700 rounded-lg">
            <img src="/assets/icon/ico_search.svg" alt="search" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              className="bg-transparent w-full outline-none text-white xl:text-xl"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 px-4">
          <ul className="space-y-2">
            <SideBarItem path="/dashboard" label="Dashboard" icon="dashboard" />
            <SideBarItem path="/mailbox" label="Mailbox" icon="mailbox" />
            <SideBarItem
              path="/account"
              label="Premier Account"
              icon="account"
            />
          </ul>
        </div>
        <div className="py-6">
          <ul>
            <SideBarItem path="/support" label="Support" icon="support" />
            <SideBarItem
              path="/account-manage"
              label="Account Management"
              icon="setting"
            />
          </ul>
        </div>
        <div className="flex justify-between p-6 items-center border-t border-app-gray-600">
          <div className="flex gap-3 cursor-pointer">
            <img src="/assets/image/avatar.png" alt="Olivia" />
            <div className="flex flex-col justify-around">
              <p className="font-medium text-white">Olivia Rhye</p>
              <p className="text-app-gray-100 text-xs">
                olivia@unlimitedaccessnow.com
              </p>
            </div>
          </div>
          <img src="/assets/icon/ico_logout.svg" alt="logout" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
