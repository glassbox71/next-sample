'use client';

import { Product } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';

export default function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button onClick={() => addToCart(product)}>
      장바구니 담기
    </button>
  );
}
