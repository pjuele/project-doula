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
    "/api/deliverable",
    "/api/project/1",
    "/api/project/2",
    "/api/project/3",
    "/api/project/4",
    "/api/project/5",
    "/api/project/6",
    "/api/project/7",
    "/api/project/8",
    "/api/project/9",
    "/api/project/10",
    "/api/project/11",
    "/api/project/12",
    "/api/project/13",
    "/api/project/14",
    "/api/project/15",
    "/api/project/16",
    "/api/project/17",
    "/api/project/18",
    "/api/project/19",
    "/api/project/20",
    "/api/deliverable/1",
    "/api/deliverable/2",
    "/api/deliverable/3",
    "/api/deliverable/4",
    "/api/deliverable/5",
    "/api/deliverable/6",
    "/api/deliverable/7",
    "/api/deliverable/8",
    "/api/deliverable/9",
    "/api/deliverable/10",
    "/api/deliverable/11",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
