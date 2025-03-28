"use client";
import React from "react";

import { DonorGenerator } from "./DonorGenerator";
import { useUser } from "@/app/_context/UserContext";
import { Divide } from "lucide-react";
import { DonationType } from "@/utils/types";

export const DonorSection = ({
  selectedAmounts,
}: {
  selectedAmounts: string[];
}) => {
  const { loggedUser } = useUser();

  console.log("Donor section deh selectedAmounts:", selectedAmounts);

  return (
    <div>
      {selectedAmounts.length > 0 &&
        loggedUser?.receivedDonations
          .filter((donor) =>
            selectedAmounts.includes(JSON.stringify(donor.amount))
          )
          .map((donor: DonationType) => <DonorGenerator donor={donor} />)}
      {selectedAmounts.length == 0 &&
        loggedUser?.receivedDonations.map((donor: DonationType) => (
          <DonorGenerator donor={donor} />
        ))}
    </div>
  );
};
