export function Footer() {
  return (
    <footer className="bg-orange-200 text-amber-900">
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Sobre Nós</h3>
            <p className="text-sm">
              Amor em Patas é uma iniciativa que conecta pessoas e pets, 
              transformando vidas através de doações e vendas de produtos 
              para animais.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Contato</h3>
            <ul className="text-sm space-y-2">
              <li>Email: contato@amorempatas.org</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Amor em Patas. Todos os direitos reservados.</p>
          <p className="mt-2">
            Ajudando a construir um mundo melhor para nossos amigos de quatro patas.
          </p>
        </div>
      </div>
    </footer>
  );
}