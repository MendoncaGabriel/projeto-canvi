import { ProductCard } from "./product-card";

export function Store() {
  const mockProducts = [
    {
      id: 1,
      image: "01.png",
      name: "Ração Golden Fórmula Mini Bits",
      description: "Ração premium para cães adultos de raças pequenas, com frango e arroz.",
      price: 99.99,
      oldPrice: 129.99,
      discount: 20
    },
    {
      id: 2,
      image: "02.png",
      name: "Ração Premium Plus",
      description: "Ração super premium para cães adultos, rica em proteínas e nutrientes essenciais.",
      price: 159.99,
      oldPrice: 189.99,
      discount: 15
    },
    {
      id: 3,
      image: "03.png",
      name: "Ração Special Dog",
      description: "Ração balanceada para cães de todas as raças, com vitaminas e minerais.",
      price: 79.99,
      oldPrice: 99.99,
      discount: 25
    },
    {
      id: 4,
      image: "04.png",
      name: "Ração Premium Selection",
      description: "Ração premium com pedaços macios e crocantes, ideal para cães exigentes.",
      price: 119.99,
      oldPrice: 149.99,
      discount: 20
    }
  ];

  return (
    <div className="p-5 m-auto max-w-screen-xl">
      <h1 className="text-amber-900 text-2xl font-bold">Nossa lojinha</h1>
      <p className="text-amber-900 mb-6">
        Em cada compra realizada em nossa loja, 30% do valor é destinado diretamente aos abrigos parceiros. 
        Seu apoio ajuda a fornecer alimentos, medicamentos e cuidados veterinários para centenas de animais resgatados. 
        Compre com propósito, faça a diferença!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 ld:grid-cols-5 gap-5">
        {mockProducts.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
}