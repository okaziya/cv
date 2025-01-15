module.exports = {
  compiler: {
    styledComponents: true,
  },
  output: "export",
  basePath: "/cv",
  assetPrefix: "/cv",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/cv",
  },
};
