
import getConfig from "next/config";

const { basePath } = getConfig();

export const getImagePath = (src: string) => {
    return `${basePath}${src}`;
};
