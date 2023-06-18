import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { UUID } from "uuid";

const myUuid: UUID = uuidv4();

interface NavItemProps {
  uuid?: UUID;
  href: string;
  label: string;
  className: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export default function NavItem({
  uuid,
  href,
  label,
  className,
  active,
  onClick,
}: NavItemProps): JSX.Element {
  const link = active ? (
    <Link href={href}>{label}</Link>
  ) : (
    <a href={href}>{label}</a>
  );

  return (
    <li key={uuid} onClick={onClick} className={className}>
      {link}
    </li>
  );
}
