import { createContext, useContext, useState, ReactNode } from "react";

interface PaymentContextContextType {
  product: Product | null;
  setProduct: (product: Product | null) => void;
}

interface Product {
  image: string;
  title: string;
  description: string;
  originalPrice: number;
  price: number;
  amount: number;
}

const PaymentContext = createContext<PaymentContextContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <PaymentContext.Provider value={{ product, setProduct }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used inside a PaymentProvider");
  }
  return context;
}
