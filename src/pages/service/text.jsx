import { NegativeButton, PrimaryButton } from "../../components/button";
import { Input } from "../../components/input";
import Layout from "../../layout/layout";

const TextServicePage = () => {
  return (
    <Layout page="draft" sidebar>
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-xs w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl flex flex-col border-b border-app-gray-200 w-full">
          <div className=" w-full p-8 flex flex-col gap-6 overflow-auto">
            <div className=" pb-5">
              <p className="font-medium text-app-gray-900 text-3xl mt-2">
              Manage SMS Account - Verify
              </p>
            </div>
            <div>
              <div className="px-8 text-app-gray-500">
                <p className="leading-7 text-sm">
                  * Stay in contact with your loved ones without logging into
                  your CorrLinks account. <br />
                  * Receive immediate text messages to your device every time
                  your account <br />
                  receives a new message! <br />
                  * Receive up to 1000 characters of your message. <br />
                  * Costs range from $6/month up to $36/year. <br />
                  * Please note: If you have already signed up for the Premier
                  Account <br />
                  and use the free CorrLinks smartphone app (i0S and Android),
                  then you already have a better solution.
                  <br />
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
              <div className="space-y-5 px-8">
                <Input label="Carrier Name: " required hint="AT&T" />
                <Input label="Phone number: " required hint="(+1)  456 - 789 - 7894" />
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

export default TextServicePage;
