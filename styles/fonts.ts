import localFont from "next/font/local";

export const montserratExtraBold = localFont({
  src: "../public/fonts/Montserrat-ExtraBold.ttf",
  weight: "800",
  style: "normal",
  display: "swap",
});


export const nunitoSans = localFont({
    src: [
      {
        path: "../public/fonts/NunitoSans-Regular.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../public/fonts/NunitoSans-Bold.ttf",
        weight: "700",
        style: "normal",
      },
    ],
    display: "swap",
  });