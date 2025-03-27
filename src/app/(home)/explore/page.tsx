"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const explorePage = () => {
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
          className="pl-10" // Add left padding so text doesn't overlap icon
        />
      </div>
      <div className="flex flex-col gap-6 p-6 border-1 rounded-md border-[#E4E4E7]">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default explorePage;
