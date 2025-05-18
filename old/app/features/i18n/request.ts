import { routing } from "./routing";
import { Locale } from "./types";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`@/app/features/i18n/messages/${locale}.json`))
      .default,
  };
});
