import "@/app/awp.css";
import { manrope } from "@/app/awp/lib/fonts";
import Header from "./ui/Header";
import BackToTopButton from "../(homepage)/ui/BackToTopButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased bg-white relative`}>
        <div className="lg:pt-5 pb-5 bg-secondary">
          <Header />
        </div>
        <div className="mx-auto">{children}</div>
        <BackToTopButton className="bg-accent"/>
      </body>
    </html>
  );
}
