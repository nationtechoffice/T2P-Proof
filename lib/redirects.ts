/**
 * Canonical host is apex (non-www), no trailing slash (except `/`).
 * All aliases collapse in a single 301 hop via middleware.
 */
export const CANONICAL_HOST = "handymanprosflorida.com";

/** Legacy / shorthand paths Google or users may still request. */
export const PATH_ALIASES: Record<string, string> = {
  "/home": "/",
  "/index.html": "/",
  "/index.php": "/",
  "/handyman": "/services/handyman",
  "/handyman-tampa": "/",
  "/handyman-tampa-fl": "/",
  "/tampa-handyman": "/",
  "/tampa-handyman-fl": "/",
  "/westchase": "/handyman-westchase-fl",
  "/handyman-westchase": "/handyman-westchase-fl",
  "/carrollwood": "/handyman-carrollwood-fl",
  "/handyman-carrollwood": "/handyman-carrollwood-fl",
  "/citrus-park": "/service-areas",
  "/drywall": "/services/drywall-repair-tampa",
  "/drywall-repair": "/services/drywall-repair-tampa",
  "/painting": "/services/painting",
  "/fence": "/services/fence",
  "/fencing": "/services/fence",
  "/emergency": "/services/handyman/general-repairs",
  "/emergency-repairs": "/services/handyman/general-repairs",
};

export function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}
