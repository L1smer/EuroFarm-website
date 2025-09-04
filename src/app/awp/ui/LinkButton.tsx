import Link from "next/link";
import { sora } from "../lib/fonts";
import { ChevronRight } from "lucide-react";
import { after } from "node:test";

interface LinkButtonProps {
  href: string;
  className: string;
  background: string;
  title: string;
  paragraph?: string;
}

export default function LinkButton({
  href,
  className,
  background,
  title,
  paragraph,
}: LinkButtonProps) {
  return (
    <div
      className={`relative rounded-3xl ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="px-10 py-15 flex flex-col items-start gap-5 justify-start h-full w-full">
        <h5 className={`${sora.className} antialiased text-2xl font-semibold`}>
          {title}
        </h5>
        {paragraph && <p className="text-[16px]/7 font-semibold max-w-[900px]">{paragraph}</p>}
      </div>
      <div className="absolute bottom-0 right-0 z-10 w-[80px] h-[70px] flex">
        <div 
          className="bg-secondary flex-1 flex justify-center items-center rounded-tl-4xl"
        >
          <Link href={href} className="w-[50px] h-[50px] rounded-full bg-[#BEE190] hover:bg-accent flex justify-center items-center">
            <ChevronRight size={20} color="black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
