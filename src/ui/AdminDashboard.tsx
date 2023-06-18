import { useSession } from "next-auth/react";

export default function AdminDashBoard() {
  const { data: session } = useSession();

  if (session && session?.user?.email?.endsWith("@danielvb.dev")) {
    return (
      <>
        <nav className="fixed z-50 mt-24 h-12 w-full">
          <div className="mx-auto grid grid-cols-1 place-items-center border border-black py-2">
            <h1 className="text-center">ADMIN DASHBOARD</h1>
          </div>
        </nav>
      </>
    );
  } else {
    return <></>;
  }
}
