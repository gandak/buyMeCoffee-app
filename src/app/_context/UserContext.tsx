"use client";
import { UserType } from "@/utils/types";
import { useParams, useRouter } from "next/navigation";
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
  loggedUser: UserType | null;
  logoutHandler: () => void;
  user: UserType | null;
};

const userContext = createContext<UserContextType>({} as UserContextType);
export const useUser = () => useContext(userContext);

const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [user, setUser] = useState<UserType | null>(null);
  const [loggedUser, setLoggedUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams<{ userId: string }>();

  useEffect(() => {
    const storedUser = localStorage.getItem("userId");

    const fetchLoggedUser = async () => {
      if (storedUser) {
        try {
          const response = await fetch(`/api/users?userId=${storedUser}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }

          const data = await response.json();

          console.log("Fetch use data by ID: ", data);

          if (data.error) {
            console.error(data.message);
            localStorage.removeItem("userId");
            router.replace("/signin");
          } else {
            setLoggedUser(data.data);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
          localStorage.removeItem("userId");
          router.replace("/signin");
        }
      }
    };

    fetchLoggedUser();

    const fetchAllUsers = async () => {
      try {
        const response = await fetch("/api/users", {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          setUsers(data.data || []);
        }
      } catch (error) {
        console.error("Error fetching all users:", error);
      }
    };

    fetchAllUsers();

    setLoading(false);
  }, [router]);

  useEffect(() => {
    const fetchUserById = async () => {
      if (!params?.userId) return;

      try {
        const response = await fetch(`/api/users?userId=${params.userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();

        if (data.error) {
          console.error(data.message);
          setUser(null);
        } else {
          setUser(data.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      }
    };

    fetchUserById();
  }, [params.userId]);

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
        setLoggedUser(data.foundUser);
        router.push("/dashboard/user/" + data.foundUser._id);
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
      value={{ loginUser, users, user, loggedUser, logoutHandler }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UsersProvider;
