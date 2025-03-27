import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const DonorGenerator = () => {
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
            <p className="text-[12px]">instagram.com/welesley</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-1">
            <p>+</p>
            <h2 className="font-bold"> $10</h2>
          </div>
          <p className="text-[#71717A] text-[12px]">10 hours ago</p>
        </div>
      </div>
      <p>
        Thank you for being so awesome everyday! You always manage to brighten
        up my day when I’m feeling down. Although $1 isn’t that much money it’s
        all I can contribute at the moment{" "}
      </p>
    </div>
  );
};
