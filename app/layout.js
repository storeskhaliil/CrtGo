import "@/styles/globals.css";
import Header from "@/components/Header";
import Starfield from "@/components/Starfield";
import Providers from "./providers";
import { mainFont } from "./fonts";

export const metadata = {
  title: {
    default: "CRTGO",
    template: "%s",
  },
  description:
    "",

  openGraph: {
    type: "website",
    siteName: "CRTGO",
    url: "https://crtgo.com",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@khaliil",
    images: [
      "",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainFont.className}>
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        <Providers>


          <main style={{ position: "relative", zIndex: 0 }}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
