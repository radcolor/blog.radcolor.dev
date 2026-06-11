export const siteName = "radcolor blog";
export const siteTitle = "radcolor blog";
export const siteDescription =
  "Technical notes on Linux, Android kernels, tooling, and software projects by radcolor.";
export const portfolioUrl = "https://radcolor.dev";

export function getSiteUrl(): string {
  const fromEnv = import.meta.env.PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  return "https://blog.radcolor.dev";
}

export const siteUrl = getSiteUrl();
