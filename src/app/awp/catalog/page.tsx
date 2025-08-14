import { getProducts } from "../lib/getProducts";
import MainSection from "../ui/catalog/MainSection";
import ProductList from "../ui/catalog/ProductList";

export default async function Catalog() {
  const products = await getProducts();

  return (
    <>
      <MainSection />
      <ProductList products={products} />
    </>
  );
}
