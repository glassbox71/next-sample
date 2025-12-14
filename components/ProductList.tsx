import {products} from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductList({ category }: { category: string }) {
  const filtered = products.filter((p) => p.category === category);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {filtered.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
