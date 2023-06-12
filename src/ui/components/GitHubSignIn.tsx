"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "./Button";

interface GitButtonProps {
  className?: string;
  content?: string | React.ReactNode;
}

const GitHubSignInButton = ({ className, content }: GitButtonProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <Button
      className={className}
      content={content}
      onClick={() => signIn("github", { callbackUrl })}
    />
  );
};

export default GitHubSignInButton;
