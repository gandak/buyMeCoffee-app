"use client";
import { useParams, useRouter } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
  const [storedUserId, setStoredUserId] = useState<string | null>(null);

  useEffect(() => {
    setStoredUserId(localStorage.getItem("userId"));
  }, []);

  const completeProfileData = async (values: {
    name: string;
    about: string;
    avatarImage: string;
    socialMediaURL: string;
    backgroundImage: string;
  }) => {
    console.log("profile data ilgeehiin onoh values:", values);
    const response = await fetch(`/api/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        about: values.about,
        avatarImage: values.avatarImage,
        socialMediaURL: values.socialMediaURL,
        backgroundImage: values.backgroundImage,
        userId: storedUserId,
      }),
    });

    console.log("profile data ilgeesen response:", response);

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
