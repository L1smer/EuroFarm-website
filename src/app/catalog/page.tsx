import { getProducts } from "../lib/getProducts";
import ProductList from "../ui/catalog/ProductList";

export default async function Catalog() {
  const products = await getProducts();

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
