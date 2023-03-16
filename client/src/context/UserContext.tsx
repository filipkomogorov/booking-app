// import { createContext, useState } from "react";

// export const UserContext = createContext({});

// export const UserContextProvider({ children }: any) => {
//   const [user, setUser] = useState(undefined);
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

import React, { createContext, useState, ReactNode } from "react";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
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

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
