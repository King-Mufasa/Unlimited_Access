import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { MailButton } from "../../components/button";
import Layout from "../../layout/layout";

const EmailNewPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [placeholder, setPlaceholder] = useState("");



  return (
    <Layout page="draft" sidebar>
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-xs w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl flex flex-col border-b border-app-gray-200 w-full md:min-h-max min-h-screen">
          <div className=" w-full p-8 flex flex-col gap-6 overflow-auto">
            <div className="flex justify-between pb-5 flex-col md:flex-row gap-4">
              <p className="font-medium text-app-gray-900 text-3xl mt-2">
                New Message
              </p>
              <div className="flex gap-3 flex-col md:flex-row px-4">
                <MailButton icon="close">Cancel</MailButton>
                <MailButton icon="save">Save</MailButton>
                <MailButton icon="send">Send</MailButton>
              </div>
            </div>
            <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1} // tabIndex of textarea
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmailNewPage;
