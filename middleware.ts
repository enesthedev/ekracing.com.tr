import chain from "@nimpl/middleware-chain";

export default chain([]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
