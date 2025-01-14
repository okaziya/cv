export const getImagePath = (src: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return `${basePath}${src}`;
  };