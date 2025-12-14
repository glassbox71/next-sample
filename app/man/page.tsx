import ProductList from "@/components/ProductList";

export default function ManPage() {
  return (
    <div>
      <h1 className="text-2xl mb-4 font-bold">Men</h1>
      <ProductList category="men" />
    </div>
  );
}
