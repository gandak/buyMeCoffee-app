"use client";
import { useUser } from "@/app/_context/UserContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserType } from "@/utils/types";
import { ExternalLink, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const explorePage = () => {
  const { users } = useUser() as {
    users: UserType[] | null;
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6 p-6 border-1 rounded-md border-[#E4E4E7]">
      <h2>Explore creators</h2>
      <div className="relative w-full max-w-sm">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          type="text"
          placeholder="Search name"
          onChange={inputHandler}
          className="pl-10"
        />
      </div>
      <div className="flex flex-col gap-6 ">
        <div className="flex justify-between">
          <div className="w-full flex flex-col gap-4">
            {users?.map((user, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-6 border-1 rounded-md border-[#E4E4E7]"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="w-full flex items-center  gap-4">
                      <Image
                        alt=""
                        src={user.profile.avatarImage}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <h2 className="font-bold text-[20px]">{user.username}</h2>
                    </div>
                    <Link href={`/user/${user.id}`}>
                      <Button variant={"secondary"}>
                        <p>View profile</p>
                        <ExternalLink />
                      </Button>
                    </Link>
                  </div>
                  <div className=" flex justify-between">
                    <div className="w-[50%] flex flex-col gap-2">
                      <h3 className="font-bold text-[16px]">
                        About {user.username}
                      </h3>
                      <p className="text-[14px]">{user.profile.about}</p>
                    </div>
                    <div className="w-[50%]">
                      <h3 className="font-bold text-[16px]">
                        Social media URL
                      </h3>
                      <p className="text-[14px]">
                        {user.profile.socialMediaURL}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default explorePage;
