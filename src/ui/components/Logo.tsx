import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <p className="font-heading ml-4 text-4xl">
          danielvb.dev <span className="font-bold">BLOG</span>
        </p>
      </Link>
    </div>
  );
}
