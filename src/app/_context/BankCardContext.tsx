"use client";
import { useParams, useRouter } from "next/navigation";
import { createContext, type ReactNode, useContext, useState } from "react";

type BankCardContextType = {
  completeBankCardData: (values: {
    country: string;
    firstName: string;
    lastName: string;
    cardNumber: string;
    month: string;
    year: string;
    cvc: string;
  }) => Promise<void>;
};

const bankCardContext = createContext<BankCardContextType>(
  {} as BankCardContextType
);
export const useBankCard = () => useContext(bankCardContext);

const BankCardProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const storedUserId = localStorage.getItem("userId");

  const completeBankCardData = async (values: {
    country: string;
    firstName: string;
    lastName: string;
    cardNumber: string;
    month: string;
    year: string;
    cvc: string;
  }) => {
    const response = await fetch(`/api/bankcard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: values.country,
        firstName: values.firstName,
        lastName: values.lastName,
        cardNumber: values.cardNumber,
        month: values.month,
        year: values.year,
        cvc: values.cvc,
        userId: storedUserId,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to complete bank card data");
    }

    const data = await response.json();
    console.log("User bank card data:", data);

    if (data.error) {
      console.error(data.error);
      router.replace("/completeprofile");
    } else {
      setLoading(false);
    }
  };

  return (
    <bankCardContext.Provider value={{ completeBankCardData }}>
      {children}
    </bankCardContext.Provider>
  );
};

export default BankCardProvider;
