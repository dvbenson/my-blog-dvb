import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-24">
      <div className="container mx-auto flex h-full flex-col justify-end px-4">
        <ul className="grid-col-1 grid place-items-center gap-1 p-2 text-center">
          <li>
            <div>
              <p>LinkedIn, GitHub, Twitter</p>
            </div>
          </li>
          <li>
            <div className="flex flex-row gap-2">
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/about"}>About</Link>
            </div>
          </li>
          <li>
            <div className="flex flex-row gap-2">
              <Link href={"/terms"}>Terms of Service</Link>
              <Link href={"/privacy"}>Privacy Policy</Link>
            </div>
          </li>
          <li className="">© 2023 Daniel VB</li>
        </ul>
      </div>
    </footer>
  );
}
