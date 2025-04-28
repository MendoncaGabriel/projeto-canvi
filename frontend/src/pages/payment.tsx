import { getDynamicPixbuy } from "@/api/dynamicPixBuyService";
import { FormPayment } from "@/components/FormPayment";
import { usePayment } from "@/context/paymentContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function PaymentPage() {
  const { product } = usePayment();
  const router = useRouter();
  const [showForm, setShowForm] = useState(true);
  const [qrCode, setQrCode] = useState("")

  useEffect(() => {

    async function fetchQRCode() {
      if (product) {
        const totalAmount = product.price * product.amount;
        const result = await getDynamicPixbuy({
          userName: "jhon due",
          cpf: "000.000.000-00",
          email: "jhondue@email.com",
          value: totalAmount
        })
        const newQrCode = result.data.qrcode;
        setQrCode(newQrCode)
      }
    }
    fetchQRCode()

  }, [product]);

  useEffect(() => {
    if (!product) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [product, router]);

  if (!product) {
    return (
      <div className="bg-gradient-to-br from-orange-100 to-orange-200 min-h-screen flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-amber-900 text-center">
            Erro ao carregar o produto.
          </h2>
          <p className="text-amber-900">Redirecionando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-100 to-orange-200 min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-2xl w-full p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-amber-900 text-center mb-8">
          Finalizar Compra
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-amber-900">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>

            <div className="bg-orange-100 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 line-through">
                  R$ {(product.originalPrice * product.amount).toFixed(2)}
                </span>
                <span className="text-2xl font-bold text-orange-500">
                  R$ {(product.price * product.amount).toFixed(2)}
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Quantidade: {product.amount}
              </div>
            </div>
          </div>
        </div>


        <FormPayment setShowForm={setShowForm} />

        {!showForm && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-amber-900">
              Escaneie o QR Code para pagar
            </h2>
            <p className="text-gray-600 mb-6">
              Use seu aplicativo de banco favorito para escanear e realizar o pagamento
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-md inline-block">
              {qrCode ? (
              <Image
                src={qrCode}
                alt="QR Code Pagamento"
                width={250}
                height={250}
                className="mx-auto"
              />
              ) : (
                <div className="flex flex-col items-center justify-center text-orange-400">
                  <AiOutlineLoading3Quarters className="animate-spin text-6xl mb-4" />
                  <p className="text-lg font-medium animate-pulse">
                    Carregando QR Code...
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
