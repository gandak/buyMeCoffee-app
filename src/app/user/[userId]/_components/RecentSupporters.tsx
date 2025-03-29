"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { DonationType } from "@/utils/types";

interface RecentSupportersProps {
  latestDonors: DonationType[];
}

export default function RecentSupporters({
  latestDonors,
}: RecentSupportersProps) {
  const [showMore, setShowMore] = useState(false);

  // Determine how many donors to show
  const hasMoreDonors = latestDonors.length > 1;
  const donorsToShow = showMore ? Math.min(3, latestDonors.length) : 1;

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Always show the first donor */}
      {latestDonors.slice(0, donorsToShow).map((donor, index) => (
        <div key={index} className="flex gap-3">
          <Image
            alt=""
            src={donor.donorImage || "/guest.png"}
            width={40}
            height={40}
            className="rounded-full border-1"
          />
          <div>
            <div className="flex items-center gap-1">
              <h2 className="font-bold text-[14px]">{donor.name}</h2>
              <p className="text-[14px]">bought</p>
              <h2 className="font-bold text-[14px]">${donor.amount}</h2>
              <p className="text-[14px]">coffee</p>
            </div>
            <p className="text-[14px]">{donor.specialMessage}</p>
          </div>
        </div>
      ))}

      {/* Show "See more" button only if there are more donors to show */}
      {hasMoreDonors && !showMore && (
        <Button
          variant="ghost"
          className="flex items-center gap-2 w-full justify-center border-1"
          onClick={() => setShowMore(true)}
        >
          See more <ChevronDown className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
