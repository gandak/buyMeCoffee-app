"use client";
import { EarningsProfile } from "@/app/(home)/_components/EarningsProfile";
import { TransactionsProfile } from "@/app/(home)/_components/TransactionsProfile";
import { useParams } from "next/navigation";
import React from "react";

const userProfile = () => {
  const params = useParams<{ userId: string }>();
  console.log(params);
  return (
    <div className="flex flex-col gap-6 pr-20">
      <EarningsProfile />
      <TransactionsProfile />
    </div>
  );
};

export default userProfile;
