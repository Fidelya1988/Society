"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import googleLogo from "@/app/assets/google-logo.svg";
import Image from "next/image";

export default function Login() {
  return (
    <div>
      <Button
        variant="outline"
        className="text-primary"
        onClick={() => signIn("google")}
      >
        Sign in with Google{" "}
        <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      </Button>
    </div>
  );
}
