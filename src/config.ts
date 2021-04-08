type PLATFORM_TYPE = "local" | "dev" | "staging" | "production";

export const config = {
  apiUrl: process.env.REACT_APP_API_URL || "/api",
  cloudFrontUrl: process.env.REACT_APP_CLOUDFRONT_URL || "/",
  pageTitle: "FontBundles Converter",
  platform: (process.env.REACT_APP_PLATFORM || "dev") as PLATFORM_TYPE,
};

export function isNonProdNonStagingPlatform(): boolean {
  return (
    !!config.platform &&
    config.platform !== "production" &&
    config.platform !== "staging"
  );
}
