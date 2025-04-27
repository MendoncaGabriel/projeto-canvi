import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-200 px-4 md:px-8 py-2 text-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Link href="/">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Image 
              src="/logo.png" 
              alt="logo site" 
              width={64}
              height={64}
              className="w-16 md:w-25"
            />
            <div>
              <h1 className="text-2xl md:text-4xl text-amber-900 font-bold">Amor em Patas</h1>
              <p className="text-sm md:text-base text-orange-400 font-semibold">
                Doar é um gesto pequeno para você, mas imenso para eles!
              </p>
            </div>
          </div>
        </Link>

        <button 
          className="md:hidden absolute right-4 top-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:items-center`}>
          <li>
            <Link href="/" className="text-amber-900 hover:text-orange-500 transition-colors">
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="text-amber-900 hover:text-orange-500 transition-colors">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" className="text-amber-900 hover:text-orange-500 transition-colors">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}