export interface FormPaymentProps {
  setShowForm: (show: boolean) => void;
}

export interface User {
  name: string;
  email: string;
  cpf: string;
}

export interface DeliveryAddress {
  street: string;
  number: string;
  complement: string;
  cep: string;
  city: string;
  state: string;
}