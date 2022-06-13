import React from "react";
import { PrimaryButton } from "../../components/button";
import { MailItem } from "../../components/item";
import Layout from "../../layout/layout";
import { mailList } from "../../utils/api";

function Dashboard() {
  return (
    <Layout page="dashboard">
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-sm lg:max-w-md w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl w-full p-8 flex flex-col gap-6">
          <div className="border-b border-app-gray-200 pb-5">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-app-gray-900 text-3xl">
                  Welcome, Olivia
                </p>
                <p className="text-app-gray-500">Track, manage your mail</p>
              </div>
              <PrimaryButton>
                <div className="flex gap-2 py-1">
                  <img src="/assets/icon/ico_new.svg" alt="plus" />
                  <p className="font-medium">New Message</p>
                </div>
              </PrimaryButton>
            </div>
            <p className="text-app-primary font-medium text-lg mt-8">
              Your identification code has been approved. you may send this
              inmate a message after the contact is no longer pending. to check
              the status of the contact, go to manage my inmates.
            </p>
            <p className="font-medium text-app-gray-900 text-3xl">
              You have 6 new messages.
            </p>
          </div>
          <div className="flex-1 overflow-auto rounded-3xl border shadow-md px-6 py-9">
            <ul className="divide-y">
              {mailList.map((mail, idx) => (
                <MailItem mail={mail} key={idx} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
