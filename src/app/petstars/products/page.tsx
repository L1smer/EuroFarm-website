import IntroSection from "../ui/products/IntroSection";
import Product from "../ui/products/Product";
import ProductList from "../ui/products/ProductList";
import products from "./petstarsProducts.json";

export default function CatalogPage() {
  return (
    <div className="flex flex-wrap mt-20">
      <ProductList />
    </div>
  );
}
