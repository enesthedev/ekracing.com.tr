import { PropsWithChildren } from "react";
import { Locale } from "../features/i18n/types";
import { routing } from "../features/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";

import { Geist, Poppins } from "next/font/google";

import "../globals.css";

const geist = Geist({
  weight: ["300", "400"],
  subsets: ["latin-ext"],
  display: "auto",
  variable: "--font-geist",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  display: "auto",
  variable: "--font-poppins",
});

export type LocalizedRootLayoutProps = {
  params: {
    locale: string;
  };
};

export default async function LocalizedRootLayout(
  props: PropsWithChildren<Readonly<LocalizedRootLayoutProps>>
) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`font-sans dark ${poppins.variable} ${geist.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
