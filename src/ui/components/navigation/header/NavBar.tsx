import { v4 as uuidv4 } from "uuid";
import Logo from "../Logo";
import NavItem from "./NavItem";
import Login from "../Login";

export default function Navbar() {
  return (
    <nav className="fixed z-50 h-24 w-full">
      <div className="flex h-full w-full items-center justify-between px-4">
        <Logo />
        <div className="mr-4 flex">
          <ul className="justify-content flex flex-row items-center gap-4">
            <NavItem
              key={uuidv4()}
              href={"/"}
              label={"Home"}
              className=" font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-xl"
            />
            <NavItem
              key={uuidv4()}
              href="/blog"
              label="Blog"
              className=" font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-xl"
            />
            <NavItem
              key={uuidv4()}
              href={"https://www.danielvb.dev"}
              label="Portfolio"
              className=" font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-xl"
            />
            <li className="">
              <Login />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
