import "@/app/awp.css";
import { manrope } from "@/app/awp/lib/fonts";
import Header from "./ui/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased bg-[#F0F2F4]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}