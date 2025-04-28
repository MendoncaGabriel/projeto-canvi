import { useBuyProduct } from "@/context/buyProductContex";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose, IoRemove, IoAdd } from "react-icons/io5";

export function ProductModal() {
  const { isOpen, closeModal, product } = useBuyProduct();
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product?.price || 0);

  useEffect(() => {
    if (product?.price) {
      const calculatedPrice = (amount * product.price);
      setTotalPrice(Number(calculatedPrice.toFixed(2)));
    }
  }, [product, amount]);

  const addMore = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };

  const removeMore = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-white sm:rounded-3xl rounded-xl p-8 shadow-2xl w-full max-w-4xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-all duration-300 shadow-lg"
        >
          <IoClose size={24} />
        </button>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          <div className="flex justify-center md:w-1/3 mb-4 md:mb-0">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-lg font-bold text-orange-400">
                <span className="line-through text-gray-500">{`R$ ${product.originalPrice.toFixed(2)}`}</span>
                <span className="ml-2 text-2xl">{`R$ ${totalPrice}`}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={removeMore}
                className="bg-orange-400 text-white p-2 rounded-md hover:bg-orange-500 flex items-center justify-center"
              >
                <IoRemove size={20} />
              </button>
              <span className="text-xl font-semibold text-gray-600">{amount}</span>
              <button
                onClick={addMore}
                className="bg-orange-400 text-white p-2 rounded-md hover:bg-orange-500 flex items-center justify-center"
              >
                <IoAdd size={20} />
              </button>
            </div>

            <button
              onClick={() => { }}
              className="w-full py-3 bg-orange-400 cursor-pointer hover:bg-orange-500 text-white font-bold rounded-lg transition-all duration-300 text-2xl"
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
