import "@/app/petstars.css";
import { montserrat } from "./lib/fonts";
import Header from "./ui/Header";
import { Metadata } from "next";
import BackToTopButton from "../(homepage)/ui/BackToTopButton";

export const metadata: Metadata = {
  title: "Pet Stars",
  description: "Pet Stars website",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "var(--page-bg)" }}
        className={`relative ${montserrat.className} antialiased overflow-x-hidden`}
      >
        <Header />
        <div className="mx-auto">{children}</div>
        <BackToTopButton className={"bg-text"}/>
      </body>
    </html>
  );
}
