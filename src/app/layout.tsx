import "../styles/globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";
// import { SessionProvider } from "next-auth/react";

interface RootProps {
  children: ReactNode;
  session: any;
}

export const metadata: Metadata = {
  title: {
    default: "",
    template: "",
  },
  description: "",
};

{
  /* <SessionProvider session={session}>{children}</SessionProvider> */
}
export default function RootLayout({ children, session }: RootProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
