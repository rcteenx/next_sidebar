import "./globals.css";

import { Montserrat, Palanquin } from "next/font/google";

import smd from "@/content/data/siteMetaData";

const base = Palanquin({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-base",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: {
    default: smd.title,
    template: "%s | " + smd.title,
  },
  description: smd.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang={smd.language}
      className={`${base.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
