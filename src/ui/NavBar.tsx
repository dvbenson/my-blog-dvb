import { v4 as uuidv4 } from "uuid";
import Logo from "./components/Logo";
import NavItem from "./components/NavItem";
// import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="fixed z-50 h-24 w-full">
      <div className="2x1:px-16 flex h-full w-full items-center justify-between px-4 ">
        <Logo />
        <div className="mr-4 hidden lg:flex">
          <ul className="hidden flex-row gap-5 lg:flex">
            <NavItem
              key={uuidv4()}
              href={"/"}
              label={"Home"}
              className="p-4 font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-xl"
            />
            <NavItem
              key={uuidv4()}
              href="/blog"
              label="Blog"
              className="p-4 font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-xl"
            />
            <NavItem
              key={uuidv4()}
              href={"https://www.danielvb.dev"}
              label="Portfolio"
              className="p-4 font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-xl"
            />
            <NavItem
              key={uuidv4()}
              href="/auth/signin"
              label="Sign In"
              className="p-4 font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-xl"
            />
            <li className="p-4 font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-xl">
              {"SOCIAL(S)?"}
            </li>
            <li className="p-4 font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-xl">
              THEME
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
