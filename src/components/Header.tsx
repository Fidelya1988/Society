'use client';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import defaultAvatar from "@/app/assets/default-avatar.png";
import Image from "next/image";
import { Avatar } from "./ui/avatar";
import logo from "@/app/assets/logo.svg";


export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();
 const imageLink = session?.user?.image || defaultAvatar

 console.log(session)
  return (

    <div className="flex items-center w-full bg-secondary p-4  h-[4rem]">
     <Button variant="ghost" onClick={()=> router.push('/')}>
       <span className="mr-4 flex flex-col items-center ">
      <Image src={logo} alt="Logo" width={30} height={30} />
      <h1 className="text-xl" >Society</h1>
      </span>
      </Button>
      {session ? (
        <div className="flex items-center justify-between w-full p-4">
            <div className="flex items-center">
          <p className="mr-2">Hi, {session.user?.name}!</p>
          <Avatar className="mr-2">
            <Image src={imageLink} alt="User avatar" width={40} height={40} />
          </Avatar>
          <div>
             <Button variant="link"
             onClick={()=>router.push(`/dashboard/${session.user?.id}`)}
             > Dashboard</Button>
          </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => signOut()}
            >
                Logout
            </Button>
        
          

        </div>
      ) : (
       <div>
       Hi, Guest!
       </div>
      )}
    </div>
  );
}