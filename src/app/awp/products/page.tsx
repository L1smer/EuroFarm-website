import { getProducts } from "../lib/getProducts";
import MainSection from "../ui/products/MainSection";
import ProductList from "../ui/products/ProductList";

export default async function Catalog() {
  const products = await getProducts();

  return (
    <>
      <MainSection />
      <ProductList products={products} />
    </>
  );
}
