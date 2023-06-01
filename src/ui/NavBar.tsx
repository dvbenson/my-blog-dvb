import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-100vh fixed flex h-24 shadow-lg">
      <ul className="flex justify-between">
        <div>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
        </div>
        <div>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
