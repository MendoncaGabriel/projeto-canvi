import { useDonation } from "@/context/donationContext";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import imgDonate from "../../public/donate.png";
import { getStaticPixDonate } from "@/api/staticPixServiceDonate";
import { useEffect, useState, useRef } from "react";

export function DonationModal() {
  const { isOpen, closeModal } = useDonation();
  const [qrCode, setQrCode] = useState("");
  const qrCodeCache = useRef<string>("");

  useEffect(() => {
    async function fetchQRCode() {
      if (isOpen && !qrCodeCache.current) {
        const staticPixDonate = await getStaticPixDonate();
        const newQrCode = staticPixDonate.data.qrcode;
        setQrCode(newQrCode);
        qrCodeCache.current = newQrCode;
      } else if (isOpen && qrCodeCache.current) {
        setQrCode(qrCodeCache.current);
      }
    }

    fetchQRCode();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-full h-full sm:h-auto sm:rounded-3xl sm:p-8 p-4 shadow-2xl sm:w-full sm:max-w-5xl relative animate-fadeIn sm:max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute cursor-pointer top-2 right-2 sm:top-4 sm:right-4 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-all duration-300 shadow-lg"
        >
          <AiOutlineClose size={24} />
        </button>

        <div className="flex flex-col md:flex-row items-stretch gap-6 sm:gap-12 mt-8">
          <div className="flex flex-col items-center justify-between md:items-start md:w-1/2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-400 mb-4 text-center md:text-left">
                Ajude a transformar vidas!
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed text-center md:text-left">
                Cada contribuição nos ajuda a resgatar, tratar e dar uma nova chance para animais em situação de risco.{" "}
                Doe qualquer valor via Pix escaneando o QR Code. 🧡
              </p>
            </div>


            <Image
              src={imgDonate.src}
              alt="Cãozinho resgatado"
              width={300}
              height={300}
              className="rounded-full object-cover mb-4 m-auto h-48 w-48 sm:h-60 sm:w-60"
            />



            <p className="text-sm text-gray-500 text-center md:text-left mt-auto">
              Sua ajuda faz toda a diferença. Obrigado por salvar vidas! 🐾
            </p>
          </div>

          <div className="flex items-center justify-center md:w-1/2 h-full">
            <div className="h-full flex items-center">
              {qrCode && (
                <Image
                  src={qrCode}
                  alt="QR Code para doação"
                  width={500}
                  height={500}
                  className=" w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
