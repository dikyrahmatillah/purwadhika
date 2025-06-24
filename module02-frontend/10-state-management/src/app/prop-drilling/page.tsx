"use client";
import Card from "@/components/prop-drilling/card";
import Header from "@/components/prop-drilling/header";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState({
    id: 1,
    name: "Mona",
    age: 25,
    address: "Jalan Braga, Bandung, Jawa Barat",
  });
  return (
    <>
      <Header user={user} />
      <main className="max-w-[900px] mx-auto">
        <Card user={user} />
      </main>
    </>
  );
}
