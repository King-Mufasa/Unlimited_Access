import { PrimaryButton } from "../../components/button";
import Layout from "../../layout/layout";

const PictureServicePage = () => {
  return (
    <Layout page="draft" sidebar>
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-xs w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl flex flex-col border-b border-app-gray-200 w-full">
          <div className=" w-full p-8 flex flex-col gap-6 overflow-auto">
            <div className=" pb-5">
              <p className="font-medium text-app-gray-900 text-3xl mt-2">
                Pictures Services
              </p>
            </div>
          </div>
          <div className="px-8">
            <div className="p-8">
              <p className="text-app-gray-700 font-medium">
                Upload your pictures
              </p>
              <p className="text-app-gray-500">
                This will be displayed on your profile.
              </p>
            </div>
            <div className="border border-app-gray-200 flex flex-col items-center text-app-gray-500 py-4">
              <img src="/assets/icon/ico_featured.svg" alt="featured" />
              <p className="">
                <button>
                  <span className="text-app-primary font-medium">
                    Click to upload
                  </span>
                </button>{" "}
                or drag and drop
              </p>
              <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
            <div className="flex justify-end w-full py-8">
              <PrimaryButton>Upload</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PictureServicePage;
