import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  image: string;
  title: string;
  description: string;
  originalPrice: number;
  price: number;
}

const product: Product = {
  image: "product-image.jpg", // Substitua com o caminho da imagem do produto
  title: "Produto Exemplo",
  description: "Este é um produto de exemplo. Ele tem excelentes características e oferece um valor muito bom!",
  originalPrice: 150.0,
  price: 120.0,
};
export default function PaymentPage() {
  const [paymentLink, setPaymentLink] = useState<string>("");

  useEffect(() => {
    const generatePaymentLink = () => {
      const paymentURL = `https://pagamentoexemplo.com/checkout?amount=${product.price}`;
      setPaymentLink(paymentURL);
    };
    
    generatePaymentLink();
  }, []);

  return (
    <div className="bg-gradient-to-br from-orange-100 to-orange-200 min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-2xl w-full p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-amber-900 text-center mb-8">
          Finalizar Compra
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <Image
              src={`https://images.tcdn.com.br/img/img_prod/1069966/kit_pet_para_banho_em_casa_dr_dog_caes_e_gatos_51_1_a46d5fc2152f984d6b6097ba191131a5.jpg`}
              alt={product.title}
              width={400}
              height={400}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-amber-900">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>

            <div className="bg-orange-100 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2)}
                </span>
                <span className="text-2xl font-bold text-orange-500">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {paymentLink && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-amber-900">
              Escaneie o QR Code para pagar
            </h2>
            <p className="text-gray-600 mb-6">
              Use seu aplicativo de banco favorito para escanear e realizar o pagamento
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-md inline-block">
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=pix1234567890"
                alt="QR Code Pagamento"
                width={250}
                height={250}
                className="mx-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
