import { useDonation } from '@/context/donationContext';
import bannerImage from '../../public/banner.png';
import Image from 'next/image';

export function Banner() {

  const { openModal } = useDonation();

  return (
    <div
      className="bg-black relative min-h-[400px]   overflow-hidden"
      style={{ height: 'calc(100vh - 200px)' }}
    >
      <Image
        src={bannerImage}
        alt="Banner"
        className="w-full h-full object-cover absolute"
        style={{ height: 'calc(100vh - 200px)' }}
      />
      <div className="absolute p-4 md:p-8 lg:p-10 ">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-200 mb-4 leading-tight">
          Transforme Vidas com Amor!
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-4 leading-tight">
          Doe quanto quiser ou compre produtos <br className="hidden md:block" />
          e ajude animais que precisam de um lar.
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-200 leading-tight">
          Cada compra é um gesto de amor!
        </p>
      </div>
      <button
        className="text-orange-100 font-bold text-lg md:text-xl lg:text-2xl 
        flex items-center justify-center 
        bg-orange-400 hover:bg-orange-500
        shadow-md hover:shadow-lg
        transform hover:-translate-y-1
        transition-all duration-200
        rounded-full px-6 py-3 
        absolute bottom-8 left-1/2 -translate-x-1/2 
        w-[90%] md:w-auto md:min-w-[300px]
        cursor-pointer"
        onClick={openModal}
      >
        Doe agora e mude uma vida
      </button>
    </div>
  );
}