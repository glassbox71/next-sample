'use client';

import { useCartStore } from '@/store/useCartStore';

export default function CartSummary() {
  const items = useCartStore((state) => state.items);

  return (
    <div>
      <h3>장바구니</h3>
      {items.map((item) => (
        <p key={item.id}>
          {item.title} x {item.quantity}
        </p>
      ))}
    </div>
  );
}
