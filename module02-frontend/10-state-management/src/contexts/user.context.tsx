"use client";

import { createContext, useEffect, useState } from "react";

export interface User {
  id: number;
  name: string;
  age: number;
  address: string;
}

export const UserContext = createContext(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    id: 1,
    name: "Mona Lisa",
    age: 25,
    address: "Jalan Braga, Bandung, Jawa Barat",
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(JSON.parse(userData) {id:});
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
