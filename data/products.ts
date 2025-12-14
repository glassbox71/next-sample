import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    title: 'Men Jacket',
    price: 120000,
    description: '남성용 겨울 자켓',
    image: '/images/men.jpg',
    category: 'men',
  },
  {
    id: 2,
    title: 'Women Dress',
    price: 98000,
    description: '여성 원피스',
    image: '/images/women.jpg',
    category: 'women',
  },
   {
    id: 3,
    title: 'kids Dress',
    price: 98000,
    description: '어린이 원피스',
    image: '/images/kids.jpg',
    category: 'kids',
  },
  {
    id: 4,
    title: 'kids ',
    price: 58000,
    description: '어린이 ',
    image: '/images/kids2.jpg',
    category: 'kids',
  },
];

