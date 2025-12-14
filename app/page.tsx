'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div>
      <h2>여기는 메인 페이지입니다</h2>
      
      <h1>상품 목록</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
