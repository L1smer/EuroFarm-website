import type { ProductInfo } from "../../lib/types/productTypes";
import Link from "next/link";
import Image from "next/image";
import { sora } from "../../lib/fonts";
import clsx from "clsx";

export default function ProductCard({ product }: { product: ProductInfo }) {
  return (
    <Link
      href={`/awp/products/product?productTitle=${product.logo}`}
      className="min-h-[470px] m-2 md:w-[305px] group/card overflow-hidden flex flex-col items-center border border-[#777] rounded-3xl box-border"
    >
      <div className="relative w-full min-h-[150px] bg-[url('/awp/bg-list.png')] bg-cover bg-center group-hover/card:bg-right transition-all duration-500">
        <div
          className={`absolute inset-0`}
          style={{ backgroundColor: product.infoSection.bgColor }}
        />
      </div>
      <div className="flex flex-col pt-[50px] pb-10 px-[35px]">
        <div
          className={`h-15 w-[230px] bg-contain bg-left bg-no-repeat`}
          style={{
            backgroundImage: `url("/awp/product-titles/${product.logo}.${
              (product.logo === "WLF" || product.logo === "Dermosan") ? "png" : "svg"
            }")`,
          }}
        />

        <p
          className={`mt-[9px] ${sora.className} antialiased text-[15px] text-[#777]`}
        >
          {product.infoSection.mainText}
        </p>
      </div>
    </Link>
  );
}
