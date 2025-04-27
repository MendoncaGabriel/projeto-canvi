import Head from 'next/head';
import { Navbar } from '@/components/navbar';
import { Banner } from '@/components/banner';
import { CardDonateResume } from '@/components/cardDonateResume';
import { Store } from '@/components/store';
import { PartnerNGOs } from '@/components/partnerNGOs';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amor em Patas</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="bg-gray-100">
        <Navbar />
        <Banner />

        <div className="flex items-center justify-around m-auto p-5 max-w-screen-xl">
          <CardDonateResume title="DOAÇÕES" value="5,852" />
          <CardDonateResume title="META DA CAMPANHA" value="12,356" />
          <CardDonateResume title="TOTAL ARRECADADO" value="20,252" />
        </div>

        <Store />
        <PartnerNGOs />
        <Footer />
      </main>
    </>
  );
}
