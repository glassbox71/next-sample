import ProductList from "@/components/ProductList";

export default function WomenPage() {
  return (
    <div>
      <h1 className="text-2xl mb-4 font-bold">Women</h1>
      <ProductList category="women" />
    </div>
  );
}
