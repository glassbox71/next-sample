import ProductList from "@/components/ProductList";

export default function KidsPage() {
  return (
    <div>
      <h1 className="text-2xl mb-4 font-bold">Kids</h1>
      <ProductList category="kids" />
    </div>
  );
}
