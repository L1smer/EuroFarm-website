import "@/app/petstars.css";
import { montserrat } from "./lib/fonts";
import Header from "./ui/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Stars",
  description: "Pet Stars website",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
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
        className={`${montserrat.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
