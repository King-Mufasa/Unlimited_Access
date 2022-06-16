import { NegativeButton, PrimaryButton } from "../../components/button";
import { Input } from "../../components/input";
import Layout from "../../layout/layout";

const PremierPage = () => {
  return (
    <Layout page="draft" sidebar>
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-xs w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl flex flex-col border-b border-app-gray-200 w-full md:min-h-max min-h-screen">
          <div className=" w-full p-8 flex flex-col gap-6 overflow-auto">
            <div className=" pb-5">
              <p className="font-medium text-app-gray-900 text-3xl mt-2">
                Upgrade to premiere account
              </p>
            </div>
            <div>
              <div className="sm:px-8 text-app-gray-500">
                <p className="leading-7 text-sm">
                  * Stay in contact with your loved ones with real time alerts.
                  Receive immediate push notifications to your device every time
                  you receive anew message! <br />
                  * Eliminates login on a mobile device! <br />
                  * Messages to your inbox download automatically and available
                  on your local device for faster access! <br />
                  * Messages previously read are in your inbox and don't need to
                  be downloaded again! <br />
                  * Retain your messages for 60 days, instead of 30! <br />
                  * Own multiple mobile devices? Attach up to 3 of your mobile
                  devices (phone, tablet etc.) to your account! <br />
                  * Eliminates Captcha on the mobile app — that hard to read
                  verification process! <br />
                  * Native iPhone ™/iPad™ and Android™ applications available
                  for a richer user experience. <br />
                  * APremier Account only costs $6.00 per YEAR. That's just
                  $0.50 a month! Take advantage of this offer today. <br />
                  * iPhone and iPad are trademarks of Apple Inc. <br />* Android
                  application requires Android 2.3 and up. Android is a
                  trademark of Google Inc.
                </p>
                <p className="text-sm text-right mt-6">
                  Try it free for 14 days
                </p>
                <div className="w-full justify-end flex">
                  <PrimaryButton className="mt-4">
                    <p className="text-sm">Free Trial</p>
                  </PrimaryButton>
                </div>
              </div>
              <div className="space-y-5 sm:px-8">
                <Input label="First Name: " required hint="Bruce" />
                <Input label="Last Name: " required hint="Wayne" />
                <Input label="Address1: " required hint="1007 Mountain Drive" />
                <Input label="Address2: " hint="" />
                <Input label="City: " required hint="Gotham" />
                <Input label="Country: " required hint="United States" />
                <Input label="State: " required hint="New Jersey" />
                <Input label="Zip Code " required hint="07474" />
                <Input label="Upgrade Amount:" hint="$6.00" />
                <Input label="Transaction Fee: " hint="$0.00" />
                <Input label="Total Sales Tax: " hint="$0.00" />
                <Input label="Total Charge:" hint="$6.00" />
              </div>
              <div className="flex items-center gap-5 w-full justify-center mt-14">
                <PrimaryButton className="max-w-xs w-full">Next</PrimaryButton>
                <NegativeButton className="max-w-xs w-full">
                  Cancel
                </NegativeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PremierPage;
