import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: boolean;
};

type UserContextValue = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const UserContext = createContext<UserContextValue>({} as UserContextValue);

type UserContextProviderProps = {
  children: ReactNode;
};

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const getUserProfile = async () =>{
    const response = await axios.get("/profile", { withCredentials: true });
    const { data } = response;
    setUser(data)
  }

  useEffect(() => {

    if(!user){
      getUserProfile()
    }

  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
