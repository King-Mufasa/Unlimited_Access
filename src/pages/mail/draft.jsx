import Layout from "../../layout/layout";

const EmailDraftPage = () => {
  return (
    <Layout page="draft" sidebar>
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-xs w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl flex flex-col border-b border-app-gray-200 w-full">
          <div className=" w-full p-8 flex flex-col gap-6 overflow-auto">
            <div className=" pb-5">
              <p className="font-medium text-app-gray-900 text-3xl mt-2">
                You have 1 draft email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmailDraftPage;
