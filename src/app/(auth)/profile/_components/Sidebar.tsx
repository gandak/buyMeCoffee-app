import Link from "next/link";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const Sidebar = () => {
  return (
    <div className=" h-[100vh] w-[20%] text-white flex flex-col items-center ">
      <ToggleGroup
        type="single"
        className="bg-white text-black flex flex-col items-start gap-2"
      >
        <Link href={"/profile"}>
          <ToggleGroupItem
            value="home"
            className="w-[250px] h-[36px] flex justify-start"
          >
            Home
          </ToggleGroupItem>
        </Link>
        <Link href={"/profile/explore"}>
          <ToggleGroupItem
            value="explore"
            className="w-[250px] h-[36px] flex justify-start"
          >
            Explore
          </ToggleGroupItem>
        </Link>
        <Link href={"/profile/viewpage"}>
          <ToggleGroupItem
            value="view"
            className="w-[250px] h-[36px] flex justify-start"
          >
            View page
          </ToggleGroupItem>
        </Link>
        <Link href={"/profile/settings"}>
          <ToggleGroupItem
            value="settings"
            className="w-[250px] h-[36px] flex justify-start"
          >
            Account settings
          </ToggleGroupItem>
        </Link>
      </ToggleGroup>
    </div>
  );
};
