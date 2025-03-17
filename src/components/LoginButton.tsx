"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import googleLogo from "@/app/assets/google-logo.svg";
import Image from "next/image";

 export interface LoginButtonProps {
    className?: string;
    buttonProps?: React.ComponentProps<typeof Button>;
}

export default function LoginButton ({className, buttonProps}: LoginButtonProps) {
  return (
    <div className={className}>
      <Button
        variant="outline"
        onClick={() => signIn("google")}
        {...buttonProps}
      >
        Sign in with Google{" "}
        <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      </Button>
    </div>
  );
}
