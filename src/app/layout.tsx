import "../styles/globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

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

export default function RootLayout({ children, session }: RootProps) {
  return (
    <html lang="en">
      <body>
        {/* <SessionProvider session={session}>{children}</SessionProvider> */}
        {children}
      </body>
    </html>
  );
}
