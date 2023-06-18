"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "./Button";

interface GoogleButtonProps {
  className?: string;
  content?: string | React.ReactNode;
}
const GoogleSignInButton = ({ className, content }: GoogleButtonProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <Button
      className={className}
      content={content}
      onClick={() => signIn("google", { callbackUrl: "/" })}
    />
  );
};

export default GoogleSignInButton;
