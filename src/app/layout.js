import "../styles/globals.css";
import "bulma/css/bulma.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';


export async function generateMetadata() {
  const t = await getTranslations('layout');

  return {
    title: t('title'),
    description: t('description'),
  };
}


export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="mainpadding">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}