import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { MailButton } from "../../components/button";
import Layout from "../../layout/layout";

const EmailNewPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <Layout page="draft" sidebar>
      <div className="flex md:py-3 md:h-screen overflow-auto">
        <div className="md:max-w-xs w-full md:block hidden flex-shrink-0"></div>
        <div className="bg-white md:rounded-l-4xl flex flex-col border-b border-app-gray-200 w-full">
          <div className=" w-full p-8 flex flex-col gap-6 overflow-auto">
            <div className="flex justify-between pb-5">
              <p className="font-medium text-app-gray-900 text-3xl mt-2">
                New Message
              </p>
              <div className="flex gap-3">
                <MailButton icon="close">Cancel</MailButton>
                <MailButton icon="save">Save</MailButton>
                <MailButton icon="send">Send</MailButton>
              </div>
            </div>
            <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmailNewPage;
