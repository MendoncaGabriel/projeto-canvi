
import { useState } from 'react';
import { FormPaymentProps, User, DeliveryAddress } from '@/types';

export function FormPayment({ setShowForm }: FormPaymentProps) {
  const [showFormLocal, setShowFormLocal] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);

  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    cpf: '',
  });

  const [address, setAddress] = useState<DeliveryAddress>({
    street: '',
    number: '',
    complement: '',
    cep: '',
    city: '',
    state: '',
  });

  const handleSubmit = () => {
    const newErrors: string[] = [];

    if (!user.name) newErrors.push('Nome é obrigatório.');
    if (!user.email) newErrors.push('E-mail é obrigatório.');
    if (!user.cpf) newErrors.push('CPF é obrigatório.');
    if (!address.cep) newErrors.push('CEP é obrigatório.');
    if (!address.street) newErrors.push('Rua/Avenida é obrigatória.');

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setShowForm(false);
    setShowFormLocal(false);
  };

  const handleCepChange = async (cep: string) => {
    const cleanCep = cep.replace(/\D/g, '');
    setAddress((prev) => ({ ...prev, cep: cep }));

    if (cleanCep.length === 8) {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setAddress((prev) => ({
            ...prev,
            street: data.logradouro,
            city: data.localidade,
            state: data.uf,
          }));
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  return (
    <section className={`space-y-6 mb-8 ${!showFormLocal && 'hidden'}`}>
      <div>
        <h2 className="text-2xl font-bold text-amber-900 mb-4">Informações do usuário</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nome completo"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-amber-900 text-amber-900"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-amber-900 text-amber-900"
          />

          <input
            type="text"
            placeholder="CPF"
            value={user.cpf}
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
            onChange={(e) => setUser({ ...user, cpf: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-amber-900 text-amber-900"
          />

          <input
            type="text"
            placeholder="CEP"
            pattern="\d{5}-?\d{3}"
            value={address.cep}
            onChange={(e) => handleCepChange(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-amber-900 text-amber-900"
          />

          <input
            type="text"
            placeholder="Rua/Avenida"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-amber-900 text-amber-900"
          />

          <input
            type="text"
            placeholder="Número"
            value={address.number}
            onChange={(e) => setAddress({ ...address, number: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-amber-900 text-amber-900"
          />

          <input
            type="text"
            placeholder="Complemento (opcional)"
            value={address.complement}
            onChange={(e) => setAddress({ ...address, complement: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-amber-900 text-amber-900"
          />

          <input
            type="text"
            placeholder="Cidade"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-amber-900 text-amber-900"
          />

          <input
            type="text"
            placeholder="Estado"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-amber-900 text-amber-900"
          />
        </div>
      </div>

      {errors.length > 0 && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg">
          {errors.map((error, idx) => (
            <div key={idx}>{error}</div>
          ))}
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition-all duration-300"
      >
        Continuar para pagamento
      </button>
    </section>
  );
}
