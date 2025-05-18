import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = createNextIntlPlugin(
  "./app/features/localization/request.ts"
);

export default withNextIntl(nextConfig);
