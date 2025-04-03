"use client";
import { useParams, useRouter } from "next/navigation";
import { createContext, type ReactNode, useContext, useState } from "react";

type profileContextType = {};

const profileContext = createContext<profileContextType>(
  {} as profileContextType
);
export const useUser = () => useContext(profileContext);

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams<{ userId: string }>();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <profileContext.Provider value={{}}>{children}</profileContext.Provider>
  );
};

export default ProfileProvider;
