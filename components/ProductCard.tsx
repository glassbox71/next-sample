'use client';

import Link from 'next/link';
import { Product } from '@/types/product';
import Image from 'next/image';


export default function ProductCard({ product }: { product: Product }) {

    return (
    <div>
      {/* <Image src={product.image} width={150} height={200}/> */}
      <img src={product.image} width={150} />
      <h3>{product.title}</h3>
      <p>{product.price.toLocaleString()}원</p>

      <Link href={`/products/${product.id}`}>
        상세 보기
      </Link>
     
    </div>
  );
}
