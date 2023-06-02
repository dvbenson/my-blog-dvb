import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed h-24 w-full shadow-lg">
      <div className="flex h-full w-full items-center justify-center px-4">
        <ul className="flex list-none flex-row items-center justify-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>

          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
