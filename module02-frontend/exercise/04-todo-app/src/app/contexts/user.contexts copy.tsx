import { createContext, useEffect, useState, ReactNode } from "react";
import data from "../../data/todo.json";

// Define types for better TypeScript support
type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

type UserContextType = {
  user: TodoItem[];
  setUser: (user: TodoItem[]) => void;
} | null;

export const UserContext = createContext<UserContextType>(null);

type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<TodoItem[]>(data);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setUser(data); // fallback to default data
      }
    }
  }, []);

  // Save to localStorage whenever user data changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
