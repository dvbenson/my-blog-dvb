"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Button from "./Button";
import ProfileHeader from "./ProfileHeader";

const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div>
          <ProfileHeader
            user={session?.user?.name ?? ""}
            image={session?.user?.image ?? ""}
            signOut={() => signOut()}
          />
        </div>
      ) : (
        <Button
          type="button"
          content={"Sign In"}
          onClick={() => signIn()}
          contentStyles="font-medium text-xl"
        />
      )}
    </>
  );
};

export default Login;
