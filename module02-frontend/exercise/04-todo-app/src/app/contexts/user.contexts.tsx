"use client";
import React, { createContext, useEffect, useState } from "react";
import data from "../../data/todo.json";

export interface User {
  user: string;
  id: number;
  text: string;
  completed: boolean;
}

export const UserContext = createContext(null);
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(data);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
