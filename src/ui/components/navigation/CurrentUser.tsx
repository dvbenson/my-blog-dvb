"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Button from "../Button";

interface CurrentUserProps {
  user: string;
  image: string;
}

export default function CurrentUser({ user, image }: CurrentUserProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <Image
        src={image}
        alt={user}
        width={40}
        height={40}
        className="rounded-full ring-1 ring-gray-900/5"
      />
      <div className="">
        <p className="text-gray-500">{user}</p>
        <Button
          content={"Sign Out"}
          contentStyles={"font-semibold hover:underline text-gray-600"}
          className={""}
          onClick={() => signOut()}
        />
      </div>
    </div>
  );
}
