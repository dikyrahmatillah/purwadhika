"use client";
import Card from "@/components/card";
import CustomInput from "@/components/custom-input";
import Header from "@/components/header";
import { UserProvider } from "@/contexts/user.context";

export default function Home() {
  return (
    <>
      <UserProvider>
        <Header />
        <main className="max-w-[900px] mx-auto">
          <Card />
          <CustomInput />
        </main>
      </UserProvider>
    </>
  );
}
