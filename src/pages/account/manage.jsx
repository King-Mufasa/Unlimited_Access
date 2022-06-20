import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import Select from "react-select";
import {
  NegativeButton,
  PrimaryButton,
  StandardButton,
} from "../../components/button";
import { Input } from "../../components/input";
import { CardItem, MailItem, SocialAppItem } from "../../components/item";
import { BaseLabel, HintLabel } from "../../components/label";
import TabList from "../../components/tab/tablist";
import Layout from "../../layout/layout";
import {
  cardList,
  countryList,
  invoiceDataList,
  mailList,
  socialAppList,
  timezoneList,
} from "../../utils/api";

function AccountManagePage() {
  const [currentTab, setCurrentTab] = useState(0);
  const [timezone, setTimezone] = useState({
    value: "Dateline Standard Time",
    label: "(UTC-12:00) International Date Line West",
  });
  const [country, setCountry] = useState({ label: "United States", value: "us" });
  const [cardId, setCardId] = useState(0);
  const tabList = [
    {
      label: "My details",
      tabId: 0,
    },
    {
      label: "Password",
      tabId: 1,
    },
    {
      label: "Inmate settings",
      tabId: 2,
    },
  ];
  const totalUser = 20;
  const proUser = 14;

  const ImageCell = ({ rowData, dataKey, ...rest }) => (
    <Cell {...rest}>
      <img src="/assets/icon/ico_file.svg" alt="file" />
    </Cell>
  );

  return (
    <Layout page="AccountManagePage" sidebar>
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-xs w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl flex flex-col border-b border-app-gray-200 w-full md:min-h-max min-h-screen">
          <div className=" w-full p-4 sm:p-8 flex flex-col overflow-auto sm:body-container">
            <div className=" pb-5">
              <div className="flex justify-between flex-col sm:flex-row gap-2 sm:items-center items-start">
                <div>
                  <p className="font-medium text-app-gray-900 text-3xl">
                    Welcome, Olivia
                  </p>
                  {/* <p className="text-app-gray-500">Track, manage your mail</p> */}
                </div>
              </div>
              <div className="flex items-center mt-4 flex-col sm:flex-row w-full sm:w-auto">
                {tabList.map((tab, idx) => (
                  <TabList
                    tabId={tab.tabId}
                    setTab={setCurrentTab}
                    currentTab={currentTab}
                    key={idx}
                    autoHeight
                  >
                    <div className="flex items-center gap-3 font-medium">
                      <p>{tab.label}</p>
                      {tab.notif && (
                        <div
                          className={`flex items-center justify-center w-5 h-5 rounded-full ${
                            currentTab === tab.tabId
                              ? "bg-app-primary-200"
                              : "bg-app-gray-100 text-app-gray-700"
                          }`}
                        >
                          <p>{tab.notif}</p>
                        </div>
                      )}
                    </div>
                  </TabList>
                ))}
              </div>
            </div>
            {currentTab === 0 && (
              <div>
                <div className="flex flex-col flex-1 overflow-auto">
                  <img src="/assets/image/bg_profile.jpg" alt="profile back" />
                  <div className="flex justify-between items-center transform -translate-y-12">
                    <div className="flex gap-6 flex-col sm:flex-row">
                      <img
                        src="/assets/image/profile_avatar.png"
                        alt="william Json"
                      />
                      <div className="flex-col flex justify-center">
                        <p className="text-3xl text-app-gray-900 font-medium">
                          Olivia Rhye
                        </p>
                        <p className="text-app-gray-500">
                          olivia@Unlimitedaccessnow.com
                        </p>
                      </div>
                    </div>
                    <PrimaryButton>Edit</PrimaryButton>
                  </div>
                  <div className="flex flex-col xl:flex-row gap-3 py-5">
                    <div className="w-full max-w-xs">
                      <BaseLabel>Personal info</BaseLabel>
                      <HintLabel>
                        Update your photo and personal details.
                      </HintLabel>
                    </div>
                    <div className="w-full border rounded-md border-app-gray-200">
                      <div className="p-6 ">
                        <div className="flex gap-6 flex-col sm:flex-row">
                          <Input
                            hint="Oliva"
                            label="First name"
                            className="w-full"
                          />
                          <Input
                            hint="Rhye"
                            label="Last name"
                            className="w-full"
                          />
                        </div>
                        <Input
                          hint="olivia@Unlimitedaccessnow.com"
                          label="Email"
                        />
                        <div className="flex mt-6 sm:flex-row flex-col items-center">
                          <img
                            src="/assets/image/profile_avatar.png"
                            alt="profile"
                            className="w-20 h-20"
                          />
                          <div className="rounded-md w-full border border-app-gray-200 flex flex-col items-center text-app-gray-500 py-4 px-2">
                            <img
                              src="/assets/icon/ico_featured.svg"
                              alt="featured"
                            />
                            <p className="text-center">
                              <button>
                                <span className="text-app-primary font-medium">
                                  Click to upload
                                </span>
                              </button>{" "}
                              or drag and drop
                            </p>
                            <p className="text-center">
                              SVG, PNG, JPG or GIF (max. 800x400px)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:justify-end items-center gap-3 flex-col sm:flex-row p-4 border-t border-app-gray-200">
                        <NegativeButton className="w-full sm:w-max">
                          Cancel
                        </NegativeButton>
                        <PrimaryButton className="w-full sm:w-max">
                          Save changes
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row gap-3 py-5 border-t border-app-gray-200">
                    <div className="w-full max-w-xs">
                      <BaseLabel>Profile</BaseLabel>
                      <HintLabel>Update your portfolio and bio.</HintLabel>
                    </div>
                    <div className="w-full border rounded-md border-app-gray-200">
                      <div className="p-6 space-y-6">
                        <Input
                          hint="olivia"
                          label="Username"
                          className="w-full"
                        />
                        <Input
                          hint="olivia@Unlimitedaccessnow.com"
                          label="Website"
                          className="w-full"
                        />
                        <Input
                          hint="olivia@Unlimitedaccessnow.com"
                          label="Email"
                        />
                        <div className="space-y-2">
                          <p className="text-app-gray-700">Country</p>
                          <Select
                            value={country}
                            isSearchable
                            name="country"
                            options={countryList}
                            onChange={(e) => setCountry(e)}
                          />
                        </div>
                        <div className="space-y-2">
                          <p className="text-app-gray-700">Timezone</p>
                          <Select
                            value={timezone}
                            isSearchable
                            name="timezone"
                            options={timezoneList}
                            onChange={(e) => setTimezone(e)}
                          />
                        </div>
                      </div>
                      <div className="flex sm:justify-end items-center gap-3 flex-col sm:flex-row p-4 border-t border-app-gray-200">
                        <NegativeButton className="w-full sm:w-max">
                          Cancel
                        </NegativeButton>
                        <PrimaryButton className="w-full sm:w-max">
                          Save changes
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentTab === 1 && (
              <div className="flex flex-col flex-1 overflow-auto px-2">
                <div className="flex justify-between mb-2 flex-col gap-5">
                  <div className="pb-5 border-b border-app-gray-200 ">
                    <BaseLabel className="text-3xl my-2">Password</BaseLabel>
                    <HintLabel>
                      Please enter your current password to change your
                      password.
                    </HintLabel>
                  </div>
                  <Input label="Current password" type="password" />
                  <div>
                    <Input label="New password" type="password" />
                    <HintLabel className="mt-2">
                      Your new password must be more than 8 characters.
                    </HintLabel>
                  </div>
                  <Input
                    label="Confirm new password"
                    type="password"
                    className="mt-5"
                  />
                  <div className="flex sm:justify-end items-center gap-3 flex-col sm:flex-row">
                    <NegativeButton className="w-full sm:w-max">
                      Cancel
                    </NegativeButton>
                    <PrimaryButton className="w-full sm:w-max">
                      Update Password
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            )}
            {currentTab === 2 && (
              <div className="flex flex-col flex-1 overflow-auto px-4 lg:px-12 divide-y divide-app-gray-200">
                <div className=" pb-6 ">
                  <p className="font-medium text-app-gray-900 text-3xl my-2">
                    IRS tax Payment method
                  </p>
                  <p className="text-app-gray-500">
                    Update your IRS tax billing details and address.
                  </p>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>Card details</BaseLabel>
                      <HintLabel>Select default payment method.</HintLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:p-6 space-y-3">
                        {cardList.map((card, idx) => (
                          <CardItem
                            card={card}
                            key={idx}
                            selected={cardId}
                            select={setCardId}
                          />
                        ))}
                        <button className="flex gap-2 text-app-gray-500 items-center">
                          <img src="/assets/icon/ico_plus.svg" alt="plus" />
                          <p>Add new payment method</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>Documents Upload and remplacement</BaseLabel>
                      <HintLabel>Upload your documents.</HintLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:p-6 space-y-3">
                        <div className="rounded-md w-full border border-app-gray-200 flex flex-col items-center text-app-gray-500 py-4 px-2">
                          <img
                            src="/assets/icon/ico_featured.svg"
                            alt="featured"
                          />
                          <p className="text-center">
                            <button>
                              <span className="text-app-primary font-medium">
                                Click to upload
                              </span>
                            </button>{" "}
                            or drag and drop
                          </p>
                          <p className="text-center">
                            SVG, PNG, JPG or GIF (max. 800x400px)
                          </p>
                        </div>
                        <div className="border rounded-lg p-3.5 border-app-primary flex justify-between">
                          <div className="flex w-full items-start gap-3.5">
                            <img
                              src="/assets/icon/ico_featured_on.svg"
                              alt="featured"
                            />
                            <div className="w-full">
                              <BaseLabel>Drivers license</BaseLabel>
                              <HintLabel>200 KB</HintLabel>
                              <div className="flex gap-3 w-full mt-2.5">
                                <div className="rounded-full h-2 bg-app-primary w-full"></div>
                                <p>100%</p>
                              </div>
                              <div className="text-app-primary font-medium flex justify-between">
                                <button>Upload new</button>
                                <button>Preview</button>
                              </div>
                            </div>
                          </div>
                          <img
                            src="/assets/icon/ico_check_on.svg"
                            alt="check"
                            className="w-6 h-6 rounded-full"
                          />
                        </div>
                        <div className="border rounded-lg p-3.5 border-app-gray-200 flex justify-between">
                          <div className="flex w-full items-start gap-3.5">
                            <img
                              src="/assets/icon/ico_featured_on.svg"
                              alt="featured"
                            />
                            <div className="w-full">
                              <BaseLabel>Social security cards </BaseLabel>
                              <HintLabel>16 MB</HintLabel>
                              <div className="flex gap-3 w-full mt-2.5">
                                <div className="rounded-full h-2 bg-app-primary-50 w-full">
                                  <div
                                    className="rounded-full h-2 bg-app-primary"
                                    style={{ width: "40%" }}
                                  ></div>
                                </div>
                                <p>40%</p>
                              </div>
                            </div>
                          </div>
                          <img
                            src="/assets/icon/ico_check_off.svg"
                            alt="check"
                            className="w-6 h-6 rounded-full"
                          />
                        </div>
                        <div className="border rounded-lg p-3.5 border-app-gray-200 flex justify-between">
                          <div className="flex w-full items-start gap-3.5">
                            <img
                              src="/assets/icon/ico_featured_on.svg"
                              alt="featured"
                            />
                            <div className="w-full">
                              <BaseLabel>Birth certificates</BaseLabel>
                              <HintLabel>4.2 MB</HintLabel>
                              <div className="flex gap-3 w-full mt-2.5">
                                <div className="rounded-full h-2 bg-app-primary-50 w-full">
                                  <div
                                    className="rounded-full h-2 bg-app-primary"
                                    style={{ width: "80%" }}
                                  ></div>
                                </div>
                                <p>80%</p>
                              </div>
                            </div>
                          </div>
                          <img
                            src="/assets/icon/ico_check_off.svg"
                            alt="check"
                            className="w-6 h-6 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>
                        Return of property from agencies if confiscated
                      </BaseLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:px-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Reports</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Emails</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>Inmate Authorization</BaseLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:px-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Google search</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            Mail Routing services (3 way)
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">People Finder</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            Inmate search nationally
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            VOIP phone service
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            Inmate voice mail w/ conferencing
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            Assistance with college and other educational
                            references
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            Attorney and legal referals
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>Assistance with Court cases</BaseLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:px-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Criminal court</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Family court</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>
                        Family support on our website and inmate blog and blog
                        management
                      </BaseLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:px-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            Medical resources and assistance with our expert
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            BOP legal resources and assistance
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            Daily newsletter your choice of category
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Stamp exchange</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>
                        Wedding band assistance (must be legally married)
                      </BaseLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:px-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Legal marriage</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Family court</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>
                        On line gaming service (sports betting)
                      </BaseLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:px-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Bet</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            Online Video Games
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Steam access</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Epic Game access</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>Book and magazine ordered</BaseLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:px-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Planners</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Journals</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Devotionals</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Special orders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="flex flex-col xl:flex-row gap-3 py-5 w-full">
                    <div className="w-full max-w-xs">
                      <BaseLabel>Elite pen pal site</BaseLabel>
                    </div>
                    <div className="w-full rounded-md">
                      <div className="sm:px-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">Sponsors</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type={"checkbox"}
                            checked
                            onChange={() => {}}
                          />
                          <p className="text-app-gray-700">
                            Craft sales (sell craft items for inmates)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:justify-end items-center gap-3 flex-col sm:flex-row p-4 border-t border-app-gray-200">
                  <NegativeButton className="w-full sm:w-max">
                    Cancel
                  </NegativeButton>
                  <PrimaryButton className="w-full sm:w-max">
                    Save changes
                  </PrimaryButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AccountManagePage;
