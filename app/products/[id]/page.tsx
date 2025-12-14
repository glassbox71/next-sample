import { products } from '@/data/products';
import ProductImage from '@/components/ProductImage';
import ProductInfo from '@/components/ProductInfo';


interface Props {
  params: { id: string };
}

export default async function ProductDetail({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);

  console.log("Server 파라", resolvedParams);

  const product = products.find(
    (p) => String(p.id) === resolvedParams.id
  );

  if (!product) return <div>상품 없음</div>;

  return (
    <div style={{ display: 'flex', gap: 40 }}>
      <ProductImage image={product.image} />
      <ProductInfo product={product} />
    </div>
  );
}

