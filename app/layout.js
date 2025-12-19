import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.css";
import { mainFont } from "./fonts";
import { Providers } from "./providers";

export const metadata = {
  title: "My App",
  description: "My Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainFont.className}>
      <body>
        <Providers><Analytics/>{children}</Providers>
      </body>
    </html>
  );
}


