import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DonationType } from "@/utils/types";

export const DonorGenerator = ({ donor }: { donor: DonationType }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-[14px]">Guest</h3>
            <p className="text-[12px]">{donor.socialURLOrByMeCoffee}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-1">
            <p>+</p>
            <h2 className="font-bold">{donor.amount}</h2>
          </div>
          <p className="text-[#71717A] text-[12px]">10 hours ago</p>
        </div>
      </div>
      <p>{donor.specialMessage}</p>
    </div>
  );
};
