import { createContext, useContext, useState, ReactNode } from "react";

interface BuyProductContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setProduct: (product: Product | null) => void;
  product: Product | null;
}
interface Product {
  image: string;
  title: string
  description: string
  originalPrice: number
  price: number
}

const BuyProductContext = createContext<BuyProductContextType | undefined>(undefined);

export function BuyProductProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <BuyProductContext.Provider value={{ isOpen, openModal, closeModal, product, setProduct }}>
      {children}
    </BuyProductContext.Provider>
  );
}

export function useBuyProduct() {
  const context = useContext(BuyProductContext);
  if (!context) {
    throw new Error("useBuyProduct must be used inside a BuyProductProvider");
  }
  return context;
}
