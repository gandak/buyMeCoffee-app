"use client";
import React, { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { Stepcompleted } from "./StepCompleted";

type userType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Page = () => {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const getStep = parseInt(searchParams.get("step") || "0", 10);
    setStep(getStep);
  }, [searchParams]);

  const [userInfo, setUserInfo] = useState<userType>();

  const FormSteps = [StepOne, StepTwo, Stepcompleted][step];

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
    console.log(e.target.value);
    // userInfo?[e.target.name] = e.target.value;
    // setUserInfo({ ...userInfo });
  };

  return (
    <div className="flex gap-4 items-center justify-center w-[50%]">
      <FormSteps
        currentStep={step}

        // value={userInfo}
        // error={errorMessage}
      />
    </div>
  );
};

export default Page;
