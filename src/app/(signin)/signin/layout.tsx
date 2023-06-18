"use client";

import "../../../styles/globals.css";

import Footer from "../../../ui/Footer";
import Provider from "../../../ui/components/Provider";

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
