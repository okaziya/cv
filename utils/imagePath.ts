export const getImagePath = (src: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`;
};
