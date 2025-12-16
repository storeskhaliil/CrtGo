import localFont from "next/font/local";

export const mainFont = localFont({
  src: [
    {
      path: "../public/",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
});
