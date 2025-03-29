"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "./_context/UserContext";
import { EarningsProfile } from "./(home)/dashboard/user/[userId]/_components/EarningsProfile";
import { TransactionsProfile } from "./(home)/dashboard/user/[userId]/_components/TransactionsProfile";

const Home = () => {
  const { loggedUser } = useUser();

  const router = useRouter();

  if (!loggedUser) router.push("/signin");

  return (
    <div className="flex flex-col gap-6 pr-20">
      <EarningsProfile />
      <TransactionsProfile />
    </div>
  );
};

export default Home;
