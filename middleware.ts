import chain from "@nimpl/middleware-chain";

import { auth as authMiddleware } from "@/app/features/auth";
import { Middleware } from "@nimpl/middleware-chain/dist/lib/types";
import createMiddleware from "next-intl/middleware";
import { routing } from "./app/features/i18n/routing";

const nextIntlMiddleware = createMiddleware(routing);

export default chain([
  nextIntlMiddleware,
  [authMiddleware as unknown as Middleware, { include: /^\/private(\/.*)?$/ }],
]);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*.png|.*.jpeg$).*)",
  ],
};
