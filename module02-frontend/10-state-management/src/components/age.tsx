import { UserContext, User } from "@/contexts/user.context";
import { useContext } from "react";
export default function Age() {
  const { user } = useContext(UserContext);
  return <p>{user.age}</p>;
}
