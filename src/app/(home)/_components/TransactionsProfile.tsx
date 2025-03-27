"use client";

import React from "react";
import { AmountEarnings } from "./AmountEarnings";
import { DonorSection } from "./DonorSection";

export const TransactionsProfile = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="font-bold">Recent transactions</h2>
        <AmountEarnings />
      </div>
      <div className="flex flex-col p-6 border-1 rounded-md border-[#E4E4E7] ">
        <DonorSection />
      </div>
    </div>
  );
};
