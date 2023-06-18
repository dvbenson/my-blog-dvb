"use client";

import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="grid grid-cols-1 place-items-center">
            {session && <h1>Welcome back, {session?.user?.name}</h1>}
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="grid grid-cols-1 place-items-center">
            <h1 className="text-center">HOME</h1>
            <p>You are not signed in!</p>
          </div>
        </main>
      </>
    );
  }
}
