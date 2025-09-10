import { getProducts } from "../lib/getProducts";
import IntroSection from "../ui/IntroSection";
import ProductList from "../ui/products/ProductList";

export default async function Catalog() {
  const products = await getProducts();

  return (
    <>
      <IntroSection
        heading="Продукти для всіх сільськогосподарських тварин"
        background="/awp/awp-animals-catalog.jpg"
        text="Євро-Фарм — надійний постачальник високоякісної європейської продукції для тваринництва, який забезпечує фермерів по всій Україні сучасними рішеннями для догляду та годівлі сільськогосподарських тварин."
      />
      <ProductList products={products} />
    </>
  );
}
