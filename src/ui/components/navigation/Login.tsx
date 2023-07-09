"use client";

import { useSession, signIn } from "next-auth/react";
import Button from "../Button";
import CurrentUser from "./CurrentUser";

const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div>
          <CurrentUser
            user={session?.user?.name ?? ""}
            image={session?.user?.image ?? ""}
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
