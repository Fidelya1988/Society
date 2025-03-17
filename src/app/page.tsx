'use client';
import Content from "@/components/MainPageContent";
import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";


export default function Home() {
  const {data: session} = useSession();
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-xl">Make your <b className="text-primary">Society</b></h1>
    
      <Content />
      {!session &&<LoginButton className="mt-4" />}
    </div>
  );
}
