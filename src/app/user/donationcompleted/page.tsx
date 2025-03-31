import { CircleCheck } from "lucide-react";
import React from "react";

const donationCompleted = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      <div className="flex flex-col gap-4 items-center">
        <div className="bg-[#18BA51] rounded-full w-[64px] h-[64px] flex justify-center items-center p-4">
          <CircleCheck color="white" size={36} />
        </div>
        <p className="font-bold text-4">Donation complete!</p>
      </div>
      <div></div>
    </div>
  );
};

export default donationCompleted;
