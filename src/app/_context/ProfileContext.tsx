"use client";
import { useParams, useRouter } from "next/navigation";
import { createContext, type ReactNode, useContext, useState } from "react";

type profileContextType = {
  completeProfileData: (values: {
    name: string;
    about: string;
    avatarImage: string;
    socialMediaURL: string;
    backgroundImage: string;
  }) => Promise<void>;
};

const profileContext = createContext<profileContextType>(
  {} as profileContextType
);
export const useProfile = () => useContext(profileContext);

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams<{ userId: string }>();

  const storedUserId = localStorage.getItem("userId");

  const completeProfileData = async (values: {
    name: string;
    about: string;
    avatarImage: string;
    socialMediaURL: string;
    backgroundImage: string;
  }) => {
    const response = await fetch(`/api/profile/${storedUserId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        about: values.about,
        avatarimage: values.avatarImage,
        socialmediaurl: values.socialMediaURL,
        backgroundimage: values.backgroundImage,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to complete profile data");
    }

    const data = await response.json();
    console.log("User profile data:", data);

    if (data.error) {
      console.error(data.error);
      router.replace("/completeprofile");
    } else {
      setLoading(false);
    }
  };

  return (
    <profileContext.Provider value={{ completeProfileData }}>
      {children}
    </profileContext.Provider>
  );
};

export default ProfileProvider;
