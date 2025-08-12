import "../globals.css";
import { cuprum } from "../lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cuprum.className} antialiased`}>{children}</body>
    </html>
  );
}
