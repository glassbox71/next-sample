import { Product } from '@/types/product';

export default function ProductInfo({ product }: { product: Product }) {
  return (
    <>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <strong>{product.price.toLocaleString()}원</strong>
    </>
  );
}
