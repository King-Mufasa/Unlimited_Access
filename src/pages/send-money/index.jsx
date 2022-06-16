import { useState } from "react";
import { NegativeButton, PrimaryButton } from "../../components/button";
import { Input } from "../../components/input";
import Layout from "../../layout/layout";

const SendMoneyPage = () => {
  const [step, setStep] = useState(0);

  return (
    <Layout page="recharge" sidebar>
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-xs w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl flex flex-col border-b border-app-gray-200 w-full md:min-h-max min-h-screen">
          <div className=" w-full p-4 sm:p-8 flex flex-col gap-6 overflow-auto">
            <div className=" pb-5">
              <p className="font-medium text-app-gray-900 text-3xl mt-2">
                Send money to inmate
              </p>
              <p className="text-app-gray-500 mt-1">
                Recharge inmate account balance for sending money to inmates.
              </p>
            </div>
            {step === 0 && (
              <div>
                <div className="space-y-5 sm:px-8">
                  <Input label="First Name: " required hint="Bruce" />
                  <Input label="Last Name: " required hint="Wayne" />
                  <Input
                    label="Address1: "
                    required
                    hint="1007 Mountain Drive"
                  />
                  <Input label="Address2: " hint="" />
                  <Input label="City: " required hint="Gotham" />
                  <Input label="Country: " required hint="United States" />
                  <Input label="State: " required hint="New Jersey" />
                  <Input label="Zip Code " required hint="07474" />
                  <Input label="Account Balance: " hint="$10.00" />
                  <Input label="Amount:" required hint="$10.00" />
                  <Input label="Transaction Fee: " hint="$0.00" />
                  <Input label="Total Sales Tax: " hint="$0.00" />
                  <Input label="Total Charge:" hint="$10.00" />
                  <Input label="Balance after Recharge: " hint="$10.00" />
                </div>
                <div className="flex items-center gap-5 w-full justify-center mt-14 flex-col sm:flex-row">
                  <PrimaryButton
                    className="max-w-xs w-full"
                    action={() => setStep(1)}
                  >
                    Next
                  </PrimaryButton>
                  <NegativeButton className="max-w-xs w-full">
                    Cancel
                  </NegativeButton>
                </div>
              </div>
            )}
            {step === 1 && (
              <div>
                <div className="space-y-5 sm:px-8">
                  <Input label="Transaction Amount: " required hint="$10.00" />
                  <Input label="First Name: " required hint="Bruce" />
                  <Input label="Last Name: " required hint="Wayne" />
                  <Input
                    label="Address1: "
                    required
                    hint="1007 Mountain Drive"
                  />
                  <Input label="State: " required hint="New Jersey" />
                  <Input label="Zip Code " required hint="07474" />
                  <Input label="Credit Card: " hint="1243 6547 9875 6984" />
                  <Input label="Expiration / CVV:" required hint="12/23 358" />
                  <p className="text-app-gray-500">
                    Please Note: The charge will appear on your credit card as
                    UnlimitedAccessNow
                  </p>
                </div>
                <div className="flex items-center gap-5 w-full justify-center mt-14">
                  <PrimaryButton
                    className="max-w-xs w-full"
                    action={() => setStep(2)}
                  >
                    Add funds
                  </PrimaryButton>
                  <NegativeButton className="max-w-xs w-full">
                    Cancel
                  </NegativeButton>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="items-center gap-12 flex flex-col flex-1 justify-center">
                <p className="text-2xl text-app-gray-500">
                  Transaction Result: Your inmates account has been successfully
                  recharged. Your inmates received $10.00 available in his
                  account.
                </p>
                <PrimaryButton action={() => setStep(0)}>
                  Return to the Main Page
                </PrimaryButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SendMoneyPage;
