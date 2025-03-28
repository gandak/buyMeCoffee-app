import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CopyButton } from "./CopyButton";
import { useUser } from "@/app/_context/UserContext";
import { UserType } from "@/utils/types";

export const EarningsProfile = () => {
  const { loggedUser } = useUser() as {
    loggedUser: UserType | null;
  };

  console.log(loggedUser);

  return (
    <div className="flex flex-col p-6 border-1 rounded-md border-[#E4E4E7] ">
      <div className="w-full h-auto flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={loggedUser?.profile.avatarImage}
                alt="@shadcn"
              />
              <AvatarFallback>MN</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold ">{loggedUser?.username}</h2>
              <p className="text-[14px]">
                {loggedUser?.profile.socialMediaURL}
              </p>
            </div>
          </div>
          <CopyButton value={loggedUser?._id} />
        </div>
        <div className="border-1 opacity-30"></div>
        <div>
          <div className="flex gap-4 items-center">
            <h2 className="font-bold">Earnings</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Last 30 days" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="alltime">All time</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <h2 className="font-bold text-[36px]">$450</h2>
        </div>
      </div>
    </div>
  );
};
