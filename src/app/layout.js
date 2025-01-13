import "../styles/globals.css";
import "bulma/css/bulma.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata = {
  title: "Dominik Lewczyński",
  description: "Welcome to my personal portfolio website, built using Next.js, generated with the Create Next App tool. It showcases my skills, projects, and achievements in web development.",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="mainpadding">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
