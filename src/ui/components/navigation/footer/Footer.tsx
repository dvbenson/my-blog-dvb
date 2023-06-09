import Link from "next/link";
import Icon from "#/src/ui/components/Icon";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="h-24">
      <div className="container mx-auto flex h-full flex-col justify-end px-4">
        <ul className="grid-col-1 grid place-items-center gap-1 p-2 text-center">
          <li>
            <div className="flex flex-row gap-3">
              <Icon icon={faTwitter} className="text-2xl" />
              <Icon icon={faGithub} className="text-2xl" />
              <Icon icon={faLinkedin} className="text-2xl" />
            </div>
          </li>
          <li>
            <div className="flex flex-row gap-2 text-sm">
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/about"}>About</Link>
            </div>
          </li>
          <li>
            <div className="flex flex-row gap-2 text-sm">
              <Link href={"/terms"}>Terms of Service</Link>
              <Link href={"/privacy"}>Privacy Policy</Link>
            </div>
          </li>
          <li className="text-xs">© 2023 Daniel VB</li>
        </ul>
      </div>
    </footer>
  );
}
