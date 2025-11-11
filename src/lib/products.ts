export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'tops' | 'bottoms' | 'dresses' | 'accessories' | 'shoes';
  gender: 'men' | 'women' | 'unisex';
  brand: string;
  image: string;
  images: string[];
  description: string;
  trending?: boolean;
  newDrop?: boolean;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Oversized Pink Hoodie',
    price: 49.99,
    originalPrice: 79.99,
    category: 'tops',
    gender: 'unisex',
    brand: 'StreetVibe',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80',
      'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&q=80'
    ],
    description: 'Ultra-comfy oversized hoodie with soft fleece interior. Perfect for layering and all-day comfort.',
    trending: true,
    newDrop: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Lavender', 'White'],
    rating: 4.8,
    reviews: 342
  },
  {
    id: '2',
    name: 'High-Waisted Cargo Jeans',
    price: 69.99,
    category: 'bottoms',
    gender: 'women',
    brand: 'DenimDreams',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80'
    ],
    description: 'Trendy cargo jeans with multiple pockets. High-waisted fit for ultimate comfort and style.',
    trending: true,
    sizes: ['24', '26', '28', '30', '32'],
    colors: ['Blue', 'Black', 'Grey'],
    rating: 4.6,
    reviews: 189
  },
  {
    id: '3',
    name: 'Mesh Crop Top',
    price: 29.99,
    originalPrice: 44.99,
    category: 'tops',
    gender: 'women',
    brand: 'VibeCo',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80'
    ],
    description: 'Edgy mesh crop top with layered design. Perfect for festivals and parties.',
    newDrop: true,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Teal'],
    rating: 4.7,
    reviews: 276
  },
  {
    id: '4',
    name: 'Mini Satin Dress',
    price: 89.99,
    category: 'dresses',
    gender: 'women',
    brand: 'LuxeVibe',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80'
    ],
    description: 'Elegant satin mini dress with a flattering silhouette. Perfect for date nights.',
    trending: true,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Lavender', 'Pink', 'Black'],
    rating: 4.9,
    reviews: 421
  },
  {
    id: '5',
    name: 'Chunky Platform Sneakers',
    price: 79.99,
    originalPrice: 99.99,
    category: 'shoes',
    gender: 'unisex',
    brand: 'StepUp',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80'
    ],
    description: 'Bold chunky platform sneakers with maximum comfort. Make a statement with every step.',
    trending: true,
    newDrop: true,
    sizes: ['6', '7', '8', '9', '10', '11'],
    colors: ['White', 'Pink', 'Lavender'],
    rating: 4.8,
    reviews: 512
  },
  {
    id: '6',
    name: 'Y2K Butterfly Necklace',
    price: 19.99,
    category: 'accessories',
    gender: 'unisex',
    brand: 'AccessVibe',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80'
    ],
    description: 'Nostalgic Y2K-style butterfly pendant necklace. Add a touch of 2000s vibes to any outfit.',
    newDrop: true,
    sizes: ['One Size'],
    colors: ['Silver', 'Gold', 'Pink'],
    rating: 4.5,
    reviews: 198
  },
  {
    id: '7',
    name: 'Graphic Tee Collection',
    price: 34.99,
    category: 'tops',
    gender: 'unisex',
    brand: 'StreetVibe',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80'
    ],
    description: 'Bold graphic tees with unique designs. Express yourself with statement prints.',
    trending: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Vintage'],
    rating: 4.6,
    reviews: 389
  },
  {
    id: '8',
    name: 'Pleated Mini Skirt',
    price: 39.99,
    category: 'bottoms',
    gender: 'women',
    brand: 'VibeCo',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80'
    ],
    description: 'Classic pleated mini skirt with a modern twist. Versatile and effortlessly chic.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Pink', 'Plaid'],
    rating: 4.7,
    reviews: 267
  }
];
