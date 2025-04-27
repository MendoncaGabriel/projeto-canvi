export function Footer() {
  return (
    <footer className="bg-orange-200 text-amber-900">
      <div className="max-w-screen-xl mx-auto py-6 md:py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="space-y-3">
            <h3 className="font-bold text-lg md:text-xl">Sobre Nós</h3>
            <p className="text-sm md:text-base">
              Amor em Patas é uma iniciativa que conecta pessoas e pets, transformando vidas através de doações.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-lg md:text-xl">Contato</h3>
            <div className="text-sm md:text-base space-y-1">
              <p>contato@amorempatas.org</p>
              <p>(11) 99999-9999</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-lg md:text-xl">Redes Sociais</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="#" className="text-sm md:text-base hover:text-orange-500 transition-colors">Instagram</a>
              <a href="#" className="text-sm md:text-base hover:text-orange-500 transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-amber-900/10 text-sm md:text-base">
          <p>© {new Date().getFullYear()} Amor em Patas</p>
        </div>
      </div>
    </footer>
  );
}