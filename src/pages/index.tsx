import { Section } from "../components/Section";
import { useAppSelector } from "../redux/hooks";

export default function Home() {
  const allProducts = useAppSelector((state) => state.products.allProducts);
  return (
    <>
      {allProducts &&
        allProducts.map((product) => (
          <Section key={product.title} data={product} />
        ))}
    </>
  );
}
