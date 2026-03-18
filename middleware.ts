// Admin route protection is handled at the page level (app/admin/page.tsx).
// API route protection is handled by requireAdmin() in each route.
// Middleware is intentionally minimal to stay within Vercel edge size limits.
export { } from "next/server";
