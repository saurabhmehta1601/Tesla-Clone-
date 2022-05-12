import { Section } from "../components/Section";
import { Sidebar } from "../components/Sidebar";
import { useAppSelector } from "../redux/hooks";

export default function Home() {
  const allProducts = useAppSelector((state) => state.products.allProducts);
  return (
    <>
      <Sidebar />
      {allProducts &&
        allProducts.map((product) => (
          <Section key={product.title} data={product} />
        ))}
    </>
  );
}
