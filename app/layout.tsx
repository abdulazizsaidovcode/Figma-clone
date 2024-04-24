import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./room";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font--sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "Uzb Figma Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-gray-800`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
