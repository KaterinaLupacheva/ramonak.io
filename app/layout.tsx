import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ramonak.io"),
  title: {
    default: "ramonak.io",
    template: "%s | ramonak.io",
  },
  description: "Full-stack web and mobile developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex-auto min-w-0 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
