const isProd = process.env.NODE_ENV === "production";

module.exports = {
  compiler: {
    styledComponents: true,
  },
  output: "export",
  basePath: isProd ? "/cv" : "", // Ensures correct asset paths on GitHub Pages
  assetPrefix: isProd ? "/cv/" : "", // Needed for static assets like images and styles
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/cv" : "", // Expose basePath to the client
  },
};
