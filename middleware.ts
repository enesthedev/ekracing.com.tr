import chain from "@nimpl/middleware-chain";

import { auth as authMiddleware } from "@/app/features/auth";
import { Middleware } from "@nimpl/middleware-chain/dist/lib/types";

export default chain([
  [authMiddleware as unknown as Middleware, { include: /^\/private(\/.*)?$/ }],
]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
