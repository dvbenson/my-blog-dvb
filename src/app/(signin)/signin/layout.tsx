"use client";

import Footer from "#/src/ui/components/navigation/footer/Footer";
import Provider from "../../../ui/components/auth/Provider";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
//import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
