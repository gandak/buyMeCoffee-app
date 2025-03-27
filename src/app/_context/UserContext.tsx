"use client";
import { UserType } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type UserContextType = {
  loginUser: (email: string, password: string) => void;
  users: UserType[];
  loggedUser: string | null;
  logoutHandler: () => void;
};

const userContext = createContext<UserContextType>({} as UserContextType);
export const useUser = () => useContext(userContext);

const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("userId");

    if (storedUser) {
      setLoggedUser(storedUser);
      router.replace("/");
    } else {
      router.replace("/signin");
    }
    setLoading(false);
  }, []);

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.foundUser.error) {
        alert(data.foundUser.message);
      } else {
        localStorage.setItem("userId", data.foundUser._id);
        setLoggedUser(data.foundUser._id);
        router.push("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("userId");
    setLoggedUser(null);
    router.push("/signin");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <userContext.Provider
      value={{ loginUser, users, loggedUser, logoutHandler }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UsersProvider;
