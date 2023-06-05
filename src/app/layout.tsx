import type { ReactNode } from "react";
import { Metadata } from "next";
import DefaultLayout from "../ui/DefaultLayout";
import Provider from "../ui/components/Provider";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import "../styles/globals.css";

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

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <DefaultLayout>{children}</DefaultLayout>
        </Provider>
      </body>
    </html>
  );
}
