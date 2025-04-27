import { createContext, useContext, useState, ReactNode } from "react";

interface DonationContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export function DonationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <DonationContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </DonationContext.Provider>
  );
}

export function useDonation() {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error("useDonation must be used inside a DonationProvider");
  }
  return context;
}
