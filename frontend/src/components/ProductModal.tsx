import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface ProductModalProps {
  isOpen: boolean;
  closeModal: () => void;
  product: {
    image: string;
    title: string;
    description: string;
    price: number;
    originalPrice: number;
  };
}

export function ProductModal({ isOpen, closeModal, product }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    // Handle buy now logic (could be adding to cart, etc.)
    alert(`Você está comprando ${quantity} de ${product.title}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-4xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-rose-500 hover:bg-rose-600 text-white p-2 rounded-full transition-all duration-300 shadow-lg"
        >
          <IoClose size={24} />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          {/* Product Image */}
          <div className="flex justify-center md:w-1/3 mb-4 md:mb-0">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-lg font-bold text-rose-500">
                <span className="line-through text-gray-500">{`R$ ${product.originalPrice.toFixed(2)}`}</span>
                <span className="ml-2">{`R$ ${product.price.toFixed(2)}`}</span>
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleDecrease}
                className="bg-rose-500 text-white p-2 rounded-md hover:bg-rose-600"
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="bg-rose-500 text-white p-2 rounded-md hover:bg-rose-600"
              >
                +
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all duration-300"
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
