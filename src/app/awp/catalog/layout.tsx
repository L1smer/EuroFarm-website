import "@/app/globals.css";
import Header from "../ui/Header";
import { manrope } from "@/app/awp/lib/fonts"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
