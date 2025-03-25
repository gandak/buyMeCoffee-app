import { Button } from "@/components/ui/button";
import React from "react";

export const Header = () => {
  return (
    <div className="absolute top-6 flex justify-center w-full">
      <div className="flex justify-between w-[90%] items-center">
        <div>LOGO</div>
        <Button>BUTTON</Button>
      </div>
    </div>
  );
};
