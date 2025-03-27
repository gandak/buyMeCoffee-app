import Link from "next/link";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SquareArrowOutUpRight } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className=" h-[100vh] w-[20%] text-white flex flex-col pl-20 ">
      <ToggleGroup
        type="single"
        className="bg-white text-black flex flex-col items-start gap-2"
      >
        <Link href={"/"}>
          <ToggleGroupItem
            value="home"
            className="w-[250px] h-[36px] flex justify-start"
          >
            Home
          </ToggleGroupItem>
        </Link>
        <Link href={"/explore"}>
          <ToggleGroupItem
            value="explore"
            className="w-[250px] h-[36px] flex justify-start"
          >
            Explore
          </ToggleGroupItem>
        </Link>
        <Link href={"/viewpage"}>
          <ToggleGroupItem
            value="view"
            className="w-[250px] h-[36px] flex justify-start"
          >
            View page <SquareArrowOutUpRight />
          </ToggleGroupItem>
        </Link>
        <Link href={"/settings"}>
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
