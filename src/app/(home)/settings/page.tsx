import React from "react";
import { ChangePersonalInfo } from "./_components/ChangePersonalInfo";
import { ChangePassword } from "./_components/ChangePassword";
import { ChangePaymentInfo } from "./_components/ChangePaymentInfo";
import { ChangeSuccessMessage } from "./_components/ChangeSuccessMessage";

const settingsPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1>My account</h1>
      <ChangePersonalInfo />
      <ChangePassword />
      <ChangePaymentInfo />
      <ChangeSuccessMessage />
    </div>
  );
};
export default settingsPage;
