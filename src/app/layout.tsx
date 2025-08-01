import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "./ui/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header/>
      <body>{children}</body>
    </html>
  );
}
