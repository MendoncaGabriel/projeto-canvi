import Image from "next/image";

interface ProductProps {
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
}

export function ProductCard({ image, name, description, price, oldPrice, discount }: ProductProps) {
  return (
    <div className="hover:cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-[300px]">
      <div className="relative">
        <Image 
          src={`/products/${image}`}
          alt={name} 
          className="w-full aspect-[3/4] object-cover"
          width={300}
          height={333}
        />
        {discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                R$ {oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-xl font-bold text-orange-500">
              R$ {price.toFixed(2)}
            </span>
          </div>
          
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full transition-colors duration-200">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}