import "../globals.css";
import { Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300",'400', "700", "800"],
});

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
