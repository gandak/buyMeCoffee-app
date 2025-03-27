"use client";
import React from "react";
import { EarningsProfile } from "./_components/EarningsProfile";
import { TransactionsProfile } from "./_components/TransactionsProfile";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 pr-20">
      <EarningsProfile />
      <TransactionsProfile />
    </div>
  );
};

export default Home;
