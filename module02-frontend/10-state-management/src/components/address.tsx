import { UserContext } from "@/contexts/user.context";
import { useContext } from "react";

export default function Address() {
  // const { address } = useContext(UserContext) as { address: string };
  const { user } = useContext(UserContext);
  return <p>{user.address}</p>;
}
