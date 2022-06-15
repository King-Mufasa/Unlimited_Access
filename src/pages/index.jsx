import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import HomePage from "./home";
import SignupPage from "./signup";
import LoginPage from "./login";
import BlankPage from "./404/404";
import PendingContactPage from "./pending-contact";
import AccountPage from "./account";
import Dashboard from "./dashboard";
import BlockContactPage from "./block-contact";
import EmailDraftPage from "./mail/draft";
import EmailSentPage from "./mail/sent";
import EmailNewPage from "./mail/new";
import PremierPage from "./account/premier";
import RechargePage from "./recharge";
import SendMoneyPage from "./send-money";
import PictureServicePage from "./service/picture";
import TextServicePage from "./service/text";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pending-contact" element={<PendingContactPage />} />
          <Route path="/block-contact" element={<BlockContactPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mail/new" element={<EmailNewPage />} />
          <Route path="/mail/inbox" element={<Dashboard />} />
          <Route path="/mail/sent" element={<EmailSentPage />} />
          <Route path="/mail/draft" element={<EmailDraftPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/recharge" element={<RechargePage />} />
          <Route path="/send-money" element={<SendMoneyPage />} />
          <Route path="/picture-service" element={<PictureServicePage />} />
          <Route path="/text-service" element={<TextServicePage />} />
          <Route path="/premier" element={<PremierPage />} />
          <Route path="*" element={<BlankPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);