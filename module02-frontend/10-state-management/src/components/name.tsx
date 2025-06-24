import { UserContext, User } from "@/contexts/user.context";
import { useContext } from "react";

export default function Name() {
  const { user } = useContext(UserContext);
  return <h1 className="font-bold text-center">{user.name}</h1>;
}
