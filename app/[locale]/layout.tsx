import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { routing } from "../features/localization/routing";
import { Locale } from "../features/localization/types";

import { NextIntlClientProvider } from "next-intl";

import { Geist, Oxanium, Poppins, Sarabun } from "next/font/google";

import "../globals.css";

export type LocalizedRootLayoutParams = Promise<{
  locale: string;
}>;

/** oxanium - ekstra, sarabun - normal */

const sarabun = Sarabun({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
  display: "auto",
  variable: "--font-sarabun",
});

const oxanium = Oxanium({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
  display: "auto",
  variable: "--font-oxanium",
});

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
  params: LocalizedRootLayoutParams;
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
      <body
        className={`font-sans antialiased dark ${geist.variable} ${poppins.variable} ${sarabun.variable} ${oxanium.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
