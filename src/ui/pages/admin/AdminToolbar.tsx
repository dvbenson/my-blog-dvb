import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AdminToolbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  if (
    session &&
    session?.user?.email?.endsWith("@danielvb.dev") &&
    pathname !== "/admin"
  ) {
    return (
      <>
        <nav className="fixed z-50 mt-24 h-12 w-full">
          <div className="mx-auto grid grid-cols-1 place-items-center border border-black py-2">
            <div className="flex flex-row gap-4">
              <h1 className="text-center">ADMIN TOOLBAR</h1>
              <Link className="text-blue-600 underline" href="/admin">
                ADMIN PAGE
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return <></>;
  }
}
