import "../styles/globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";
import Provider from "../ui/components/Provider";

interface RootProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "",
    template: "",
  },
  description: "",
};

{
  /* <Provider>{children}</Provider> */
}
export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
