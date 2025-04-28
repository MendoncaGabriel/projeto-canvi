import { BuyProductProvider } from "@/context/buyProductContex";
import { DonationProvider } from "@/context/donationContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BuyProductProvider>
      <DonationProvider>
        <Component {...pageProps} />
      </DonationProvider>
    </BuyProductProvider>

  );
}
