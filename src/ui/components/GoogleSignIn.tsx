"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "./Button";

const GoogleSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  // setup interface for this component

  return (
    <Button
      className="w-full"
      onClick={() => signIn("google", { callbackUrl })}
    >
      {/* Replace with own icons */}
      Continue with Google
    </Button>
  );
};

export default GoogleSignInButton;
