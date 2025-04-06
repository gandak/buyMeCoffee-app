"use client";
import React from "react";

import { DonorGenerator } from "./DonorGenerator";
import { useUser } from "@/app/_context/UserContext";
import { DonationType } from "@/utils/types";

export const DonorSection = ({
  selectedAmounts,
}: {
  selectedAmounts: string[];
}) => {
  const { loggedUser } = useUser();

  return (
    <div>
      {loggedUser?.donations == null ? (
        <div className="flex flex-col items-center">
          <h2 className="font-bold">You don't have any supporters yet</h2>
          <p>Share your page with your aidence to get started</p>
        </div>
      ) : (
        selectedAmounts.length > 0 &&
        loggedUser?.donations
          .filter((donor: DonationType) =>
            selectedAmounts.includes(JSON.stringify(donor.amount))
          )
          .map((donor: DonationType, index: number) => (
            <DonorGenerator donor={donor} index={index} />
          ))
      )}
      {selectedAmounts.length == 0 &&
        loggedUser?.donations?.map((donor: DonationType, index: number) => (
          <DonorGenerator donor={donor} index={index} />
        ))}
    </div>
  );
};
