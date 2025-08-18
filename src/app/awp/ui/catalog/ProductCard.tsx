import type { ProductInfo } from "../../lib/types/productTypes";
import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
      <Link href={`/awp/catalog/product?productTitle=${product.logo}`} className="min-h-60 flex flex-col gap-10 bg-secondary">
        <h1>{product.logo}</h1>
        <div>{product.mainText}</div>
      </Link>
  );
}
