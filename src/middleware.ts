import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
// export default authMiddleware({});

// FIXME: How do I accept the /[id] route? (instead of hardcoded /4)
export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/api/project",
    "/api/project/:id",
    "/api/deliverable",
    "/api/deliverable/:id",
    "/api/element",
    "/api/element/:id",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
