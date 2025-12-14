import ProductList from "@/components/ProductList";

export default function ManPage() {
  return (
    <div>
      <h1 className="text-2xl mb-4 font-bold">Man</h1>
      <ProductList category="man" />
    </div>
  );
}
