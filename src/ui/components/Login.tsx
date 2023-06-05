"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "./Button";
import ProfileHeader from "./ProfileHeader";

const Login = () => {
  //   const { data: session } = useSession();
  const session = true;
  return (
    <>
      {session ? (
        <div>
          <ProfileHeader
            user={"Daniel Benson"}
            image={"https://avatars.githubusercontent.com/u/112098121?v=4"}
            signOut={() => signOut()}
          />
        </div>
      ) : (
        <Button
          content={"Sign In"}
          onClick={() => signIn()}
          contentStyles="font-medium text-xl"
        />
      )}
    </>
  );
};

export default Login;
// user={session.user?.name ?? ""}
// image={session.user?.image ?? ""}
