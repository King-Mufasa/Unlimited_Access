import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { PrimaryButton, StandardButton } from "../../components/button";
import { Input } from "../../components/input";
import { MailItem, SocialAppItem } from "../../components/item";
import TabList from "../../components/tab/tablist";
import Layout from "../../layout/layout";
import { invoiceDataList, mailList, socialAppList } from "../../utils/api";

function Dashboard() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabList = [
    {
      label: "Messages",
      tabId: 0,
      notif: 2,
    },
    {
      label: "Social media",
      tabId: 1,
      notif: 3,
    },
    {
      label: "Cash app",
      tabId: 2,
      notif: 4,
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
    <Layout page="dashboard" sidebar>
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-xs w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl flex flex-col border-b border-app-gray-200 w-full md:min-h-max min-h-screen">
          <div className=" w-full p-8 flex flex-col overflow-auto sm:body-container">
            <div className=" pb-5">
              <div className="flex justify-between flex-col sm:flex-row gap-2 sm:items-center items-start">
                <div>
                  <p className="font-medium text-app-gray-900 text-3xl">
                    Welcome, Olivia
                  </p>
                  {/* <p className="text-app-gray-500">Track, manage your mail</p> */}
                </div>
                <PrimaryButton>
                  <div className="flex gap-2">
                    <img src="/assets/icon/ico_new.svg" alt="plus" />
                    <p className="font-medium">New Mail</p>
                  </div>
                </PrimaryButton>
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
              <div className="flex flex-col flex-1 overflow-auto">
                <p className="text-app-primary font-medium text-lg">
                  Your identification code has been approved. you may send this
                  inmate a message after the contact is no longer pending. to
                  check the status of the contact, go to manage my inmates.
                </p>
                <p className="font-medium text-app-gray-900 text-3xl my-2">
                  You have 6 new messages.
                </p>
                <div className="flex-1 overflow-auto rounded-2xl md:rounded-l-3xl border shadow-md px-6 py-9 flex flex-col">
                  <ul className="divide-y">
                    {mailList.map((mail, idx) => (
                      <MailItem mail={mail} key={idx} />
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {currentTab === 1 && (
              <div className="flex flex-col flex-1 overflow-auto">
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="font-medium text-app-gray-900 text-3xl my-2">
                      Connected apps
                    </p>
                    <p className="text-app-gray-500">
                      Supercharge your workflow and connect the tool you use
                      every day.
                    </p>
                  </div>
                  <Input hint="Search" />
                </div>
                <div className="flex-1 overflow-auto shadow-md px-6 py-9 flex flex-col">
                  <ul className="divide-y">
                    {socialAppList.map((app, idx) => (
                      <SocialAppItem app={app} key={idx} />
                    ))}
                  </ul>
                </div>
                <div></div>
              </div>
            )}
            {currentTab === 2 && (
              <div className="flex flex-col flex-1 overflow-auto px-4 lg:px-12">
                <div className="border-b pb-6 border-app-gray-200">
                  <p className="font-medium text-app-gray-900 text-3xl my-2">
                    Billing
                  </p>
                  <p className="text-app-gray-500">
                    Manage your billing and payment details.
                  </p>
                </div>
                <div className="flex gap-6 py-8 xl:flex-row flex-col">
                  <div className="w-full rounded-xl shadow-lg border border-app-gray-200 flex flex-col divide-y divide-app-gray-200">
                    <div className="flex-1 p-6">
                      <div className="flex justify-between sm:flex-row flex-col gap-2">
                        <div>
                          <div className="flex space-x-2">
                            <p className="text-lg text-app-gray-900 font-medium">
                              Basic plan
                            </p>
                            <div className="py-1 px-2.5 bg-app-primary-50 rounded-full items-center justify-center">
                              <p className="text-app-primary font-medium text-sm">
                                Monthly
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-app-gray-500">
                            Our most popular plan for small teams.
                          </p>
                        </div>
                        <div className="flex items-end gap-1">
                          <p className="text-5xl text-app-gray-900 font-semibold">
                            $10{" "}
                          </p>
                          <p className="text-app-gray-500 font-medium">
                            per month
                          </p>
                        </div>
                      </div>
                      <p className="text-app-gray-900 font-medium text-sm mt-6">{`${proUser} of ${totalUser} users`}</p>
                      <div className="bg-app-primary-50 h-2 rounded-full w-full flex mt-3">
                        <div
                          className="bg-app-primary rounded-full h-2"
                          style={{ width: `${(proUser / totalUser) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-end px-6 py-4">
                      <Link to={"/premier"}>
                        <button className="text-app-primary flex space-x-3 items-center">
                          <p className="font-medium text-sm">Upgrade plan</p>
                          <img
                            src="/assets/icon/ico_arrow_rt.svg"
                            alt="rigth-top"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full rounded-xl shadow-lg border border-app-gray-200 flex flex-col divide-app-gray-200 p-6">
                    <p className="text-lg text-app-gray-900 font-medium">
                      Payment method
                    </p>
                    <p className="text-sm text-app-gray-500">
                      Change how you pay for your plan.
                    </p>
                    <div className="flex-1 flex items-center justify-center mt-5">
                      <div className="border rounded-xl border-app-gray-200 flex justify-between w-full items-start p-4">
                        <div className="flex items-start gap-4 sm:flex-row flex-col">
                          <img src="/assets/image/logo_visa.svg" alt="visa" />
                          <div className="text-app-gray-500">
                            <p className="text-app-gray-700 font-medium">
                              Visa ending in 1234
                            </p>
                            <p>Expiry 06/2024</p>
                            <div className="flex gap-2 items-center mt-2">
                              <img
                                src="/assets/icon/ico_mail.svg"
                                alt="email"
                              />
                              <p>billing@untitledui.com</p>
                            </div>
                          </div>
                        </div>
                        <StandardButton>Edit</StandardButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" rounded-2xl md:rounded-l-3xl border shadow-md px-6 py-9 flex flex-col">
                  {/* <ul>
                    {invoiceDataList.map((data, idx)=>(
                      <
                    ))}
                  </ul> */}
                  <Table data={invoiceDataList} className="w-full">
                    <Column width={300}>
                      <HeaderCell>
                        <div className="flex items-center">
                          <input type="checkbox" /><p className="ml-2">Invoice</p></div></HeaderCell>
                      <Cell className="flex items-center">
                        {(rowData, rowIndex) => {
                          return (
                            <div
                              key={rowIndex}
                              className="flex items-center gap-2"
                            >
                              <input type="checkbox" />
                              <img src="/assets/icon/ico_file.svg" alt="file" />
                              <p className="text-app-gray-900 font-medium">
                                {rowData.id}
                              </p>
                            </div>
                          );
                        }}
                      </Cell>
                    </Column>
                    <Column width={150} resizable>
                      <HeaderCell>Billing date</HeaderCell>
                      <Cell dataKey="date" />
                    </Column>
                    <Column width={100} resizable>
                      <HeaderCell>Status</HeaderCell>
                      <Cell className="flex items-center">
                        {(rowData, rowIndex) => {
                          return (
                            <div className="w-full flex items-center">
                              <div
                                className={`${
                                  rowData.status === "paid"
                                    ? "bg-app-green-100"
                                    : "bg-app-red-300"
                                } px-4 rounded-full flex items-center`}
                              >
                                <p
                                  className={`${
                                    rowData.status === "paid"
                                      ? "text-app-green-700"
                                      : "text-app-red-700"
                                  } capitalize`}
                                >
                                  {rowData.status}
                                </p>
                              </div>
                            </div>
                          );
                        }}
                      </Cell>
                    </Column>
                    <Column width={150} resizable>
                      <HeaderCell>Amount</HeaderCell>
                      <Cell dataKey="amount" />
                    </Column>
                    <Column width={100} resizable>
                      <HeaderCell>Plan</HeaderCell>
                      <Cell dataKey="plan" />
                    </Column>
                    <Column width={100} resizable>
                      <HeaderCell></HeaderCell>
                      <Cell className="flex items-center">
                        {(rowData, rowIndex) => {
                          return (
                            <a
                              className="text-app-primary font-medium text-sm"
                              href={rowData.download}
                            >
                              Download
                            </a>
                          );
                        }}
                      </Cell>
                    </Column>
                  </Table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
