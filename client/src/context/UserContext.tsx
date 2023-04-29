import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { User } from "../models/User.enum";

type Profile = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  role: User;
};

type UserContextValue = {
  user: Profile | undefined;
  setUser: React.Dispatch<React.SetStateAction<Profile | undefined>>;
  isReady: Boolean;
};

const UserContext = createContext<UserContextValue>({} as UserContextValue);

type UserContextProviderProps = {
  children: ReactNode;
};

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<Profile | undefined>(undefined);
  const [isReady, setIsReady] = useState<boolean>(false);

  const getUserProfile = async () => {
    try {
      const response = await axios.get("/profile", { withCredentials: true });
      const { data } = response;
      setUser(data);
      setIsReady(true);
    } catch (err) {
      setIsReady(true);
    }
  };

  useEffect(() => {
    if (!user) {
      getUserProfile();
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, isReady }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
