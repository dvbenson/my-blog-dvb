"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "./Button";

const GitHubSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  // setup interface for this component

  return (
    <Button
      className="w-full"
      onClick={() => signIn("github", { callbackUrl })}
    >
      {/* Replace with own icons */}
      Continue with GitHub
    </Button>
  );
};

export default GitHubSignInButton;
