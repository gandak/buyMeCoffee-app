"use client";
import { useUser } from "@/app/_context/UserContext";
import { CircleCheck } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const donationCompleted = () => {
  const { user } = useUser();

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      <div className="flex flex-col gap-4 items-center">
        <div className="bg-[#18BA51] rounded-full w-[64px] h-[64px] flex justify-center items-center p-4">
          <CircleCheck color="white" size={36} />
        </div>
        <p className="font-bold text-4">Donation complete!</p>
      </div>
      <div className="border-1 w-[510px] flex flex-col gap-2 p-4 rounded-md">
        <div className="flex gap-4 items-center">
          <Image
            alt=""
            src={user?.profile.avatarImage || "/guest.png"}
            width={40}
            height={40}
            className="rounded-full"
          />
          <h2 className="font-bold text-[14px]">{user?.username}:</h2>
        </div>
        <div>
          <p>{user?.profile.successMessage}</p>
        </div>
      </div>
      <Link href={"/explore"}>
        <Button className="font-light">Return to explore</Button>
      </Link>
    </div>
  );
};

export default donationCompleted;
