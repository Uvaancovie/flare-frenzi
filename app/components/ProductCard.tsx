// components/ProductCard.tsx
"use client";

import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

import Image from 'next/image';

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative bg-black text-yellow-500 rounded-lg shadow-lg overflow-hidden"
    >
      <Image src={image} alt={title} width={500} height={240} className="w-full h-60 object-cover" />

      <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-red-500 text-sm">{description}</p>
        <p className="mt-4 font-semibold text-lg">{price}</p>

        {/* Call-to-Action Button */}
        <button className="mt-6 w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-red-500 transition duration-300">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
