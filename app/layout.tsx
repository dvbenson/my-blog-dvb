import "#/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Placeholder",
    template: "%s | Placeholder",
  },
  description: "Placeholder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
