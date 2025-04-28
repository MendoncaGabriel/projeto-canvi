import { createContext, useContext, useState, ReactNode } from "react";

interface BuyProductContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BuyProductContext = createContext<BuyProductContextType | undefined>(undefined);

export function BuyProductProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <BuyProductContext.Provider value={{ isOpen, openModal, closeModal }}>
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
